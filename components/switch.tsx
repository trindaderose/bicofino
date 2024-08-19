// src/components/switcher.tsx
'use client'
import React, { useState } from "react";
import { Switch } from "@nextui-org/react";
import { BiSolidDrink } from "react-icons/bi";
import { FaBowlFood } from "react-icons/fa6";
import Bar from "./bar";
import Restaurante from "./restaurante";

export default function Switcher() {
    const [isBar, setIsBar] = useState<boolean>(true);

    // Atualiza o estado corretamente quando o switch é alterado
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsBar(e.target.checked);
    };

    return (
        <div className="text-center justify-center mb-4">
            <Switch
                checked={isBar}
                onChange={handleChange}
                className="my-5"
                size="lg"
                color="success"
                startContent={<BiSolidDrink />}
                endContent={<FaBowlFood />}
            >
                {isBar ? "Bar" : "Restaurante"}
            </Switch>
            {isBar ? <Bar /> : <Restaurante />}
        </div>
    );
}
