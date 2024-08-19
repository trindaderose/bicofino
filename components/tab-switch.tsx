"use client";
import React, { useState } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

import Bar from "./bar";
import Restaurante from "./restaurante";

export default function TabSwitcher() {
  const [selected, setSelected] = useState<string>("bar");

  return (
    <div className="flex w-full flex-col items-center">
      <Tabs
        aria-label="Menu"
        className="mb-5"
        selectedKey={selected}
        onSelectionChange={(key) => setSelected(key as string)}
      >
        <Tab key="bar" title="Bar">
          <Card>
            <CardBody>
              <Bar />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="restaurante" title="Restaurante">
          <Card>
            <CardBody>
              <Restaurante />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
