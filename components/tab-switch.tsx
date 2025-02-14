"use client";
import React, { useState } from "react";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";

import Bar from "./bar";
import Restaurante from "./restaurante";

export default function TabSwitcher() {
  const [selected, setSelected] = useState<string>("drinks");

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
                <Bar />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="cervejas" title="Cervejas">
            <Card>
              <CardBody>
                <Restaurante />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="salgados" title="Salgados">
            <Card>
              <CardBody>
                <Restaurante />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="sobremesas" title="Sobremesas">
            <Card>
              <CardBody>
                <Restaurante />
              </CardBody>
            </Card>
          </Tab>
          {/* <Tab key="test3" title="Restaurante">
            <Card>
              <CardBody>
                <Restaurante />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="test4" title="Restaurante">
            <Card>
              <CardBody>
                <Restaurante />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="test5" title="Restaurante">
            <Card>
              <CardBody>
                <Restaurante />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="test6" title="Restaurante">
            <Card>
              <CardBody>
                <Restaurante />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="test7" title="Restaurante">
            <Card>
              <CardBody>
                <Restaurante />
              </CardBody>
            </Card>
          </Tab> */}
        </Tabs>
      </div>
    </div>
  );
}
