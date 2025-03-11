/* eslint-disable no-undef */
"use client";
import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

import Bar from "./bar";
import Restaurante from "./restaurante";
import Cervejas from "./cervejas";

type ProjectTypes = {
  caption: string;
  category: string;
  id: string;
  image: string;
  link: string;
  price: string;
  title: string;
};

type CartItem = ProjectTypes & { quantity: number }; // Adiciona a propriedade "quantity"

export default function TabSwitcher() {
  const [selected, setSelected] = useState<string>("drinks");
  const [cart, setCart] = useState<CartItem[]>([]); // Estado do carrinho
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado do modal

  // Função para adicionar itens ao carrinho
  const addToCart = (project: ProjectTypes) => {
    const existingItem = cart.find((item) => item.id === project.id);

    if (existingItem) {
      // Se o item já existe, aumenta a quantidade
      setCart(
        cart.map((item) =>
          item.id === project.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      // Se o item não existe, adiciona com quantidade 1
      setCart([...cart, { ...project, quantity: 1 }]);
    }
  };

  // Função para aumentar a quantidade de um item
  const increaseQuantity = (id: string) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  // Função para diminuir a quantidade de um item
  const decreaseQuantity = (id: string) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
      )
      .filter((item) => item.quantity > 0); // Remove o item se a quantidade for 0

    setCart(updatedCart);
  };

  // Função para remover completamente um item do carrinho
  const removeItem = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Função para abrir o modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Função para finalizar a compra (enviar para o WhatsApp)
  const finishPurchase = () => {
    if (typeof window !== "undefined") {
      const message = cart
        .map((item) => `${item.title} - ${item.quantity}x - R$ ${item.price}`)
        .join("%0A"); // %0A é o código para nova linha no WhatsApp

      const phoneNumber = "+5519981720301"; // Substitua pelo número de telefone
      const url = `https://wa.me/${phoneNumber}?text=${message}`;

      window.open(url, "_blank");
    }
  };

  // Calcular o total dos itens no carrinho
  const total = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(",", ".")); // Converte o preço para número

    return acc + price * item.quantity; // Multiplica pelo quantidade
  }, 0);

  return (
    <div className="flex w-full flex-col items-center">
      <div className="overflow-x-auto w-screen lg:w-4/5 md:w-4/5 px-4">
        <Tabs
          aria-label="Menu"
          className="mb-5 justify-center flex whitespace-nowrap w-full"
          selectedKey={selected}
          onSelectionChange={(key) => setSelected(key as string)}
        >
          <Tab key="drinks" title="Drinks">
            <Card>
              <CardBody>
                <Bar addToCart={addToCart} cart={cart} />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="cervejas" title="Cervejas">
            <Card>
              <CardBody>
                <Cervejas addToCart={addToCart} cart={cart} />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="salgados" title="Salgados">
            <Card>
              <CardBody>
                <Restaurante addToCart={addToCart} cart={cart} />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="sobremesas" title="Sobremesas">
            <Card>
              <CardBody>
                <Restaurante addToCart={addToCart} cart={cart} />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>

      {/* Botão de Finalizar Compra */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          className="text-tiny text-white bg-blue-500"
          radius="lg"
          size="lg"
          onPress={openModal}
        >
          Finalizar Compra ({cart.length} itens)
        </Button>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            Itens no Carrinho
          </ModalHeader>
          <ModalBody>
            {cart.length === 0 ? (
              <p>Nenhum item no carrinho.</p>
            ) : (
              <ul>
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center py-2"
                  >
                    <div className="flex flex-col">
                      <span className="text-sm">{item.title}</span>
                      <span className="text-sm text-gray-500">
                        R$ {item.price} cada
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        radius="sm"
                        size="sm"
                        onPress={() => decreaseQuantity(item.id)}
                      >
                        -
                      </Button>
                      <span>{item.quantity}</span>
                      <Button
                        radius="full"
                        size="sm"
                        onPress={() => increaseQuantity(item.id)}
                      >
                        +
                      </Button>
                      <Button
                        color="danger"
                        size="sm"
                        onPress={() => removeItem(item.id)}
                      >
                        Remover
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {/* Exibir o total */}
            {cart.length > 0 && (
              <div className="flex justify-between items-center py-2 border-t border-gray-200 mt-4">
                <span className="font-bold">Total:</span>
                <span className="font-bold">
                  R$ {total.toFixed(2).replace(".", ",")}
                </span>
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              className="text-tiny text-white bg-green-500"
              disabled={cart.length === 0}
              radius="lg"
              size="sm"
              onPress={finishPurchase}
            >
              Enviar para o WhatsApp
            </Button>
            <Button
              className="text-tiny text-white bg-gray-500"
              radius="lg"
              size="sm"
              onPress={closeModal}
            >
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
