import React from "react";
import { Card, CardFooter, Image, Button, CardHeader } from "@heroui/react";
import { ShoppingCart } from "lucide-react";

import restauranteData from "@/data/restaurante.json"; // Supondo que você tenha um arquivo JSON para restaurante

type ProjectTypes = {
  caption: string;
  category: string;
  id: string;
  image: string;
  link: string;
  price: string;
  title: string;
};

// Definindo as props esperadas pelo componente Restaurante
type RestauranteProps = {
  cart: ProjectTypes[];
  addToCart: (project: ProjectTypes) => void;
};

export default function Restaurante({ cart, addToCart }: RestauranteProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
      {restauranteData.map((project) => (
        <Card
          key={project.id}
          isFooterBlurred
          className="border-none"
          radius="lg"
        >
          <div className="relative">
            <Image
              alt={project.title}
              className="object-cover object-center"
              height={400}
              src={project.image}
              width={600}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50 z-10" />
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-xl font-bold text-white z-50">{project.title}</p>
          </CardHeader>
          <CardFooter className="justify-between border-white/20 border-1 overflow-hidden py-1 absolute bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-50">
            <div className="text-white">
              <p className="text-sm py-2 px-1">{project.caption}</p>
            </div>
            <div className="flex gap-2">
              <Button
                as="a"
                className="text-tiny text-white bg-black/20"
                color="default"
                href={project.link}
                radius="lg"
                size="sm"
                variant="flat"
              >
                {`R$ ${project.price}`}
              </Button>
              <Button
                className="text-tiny text-white bg-green-500"
                radius="lg"
                size="sm"
                onPress={() => addToCart(project)}
              >
                <ShoppingCart size={15} />
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
