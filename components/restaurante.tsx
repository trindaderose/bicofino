"use client";
import React, { useEffect, useState } from "react";
import { Card, CardFooter, Image, Button, CardHeader } from "@nextui-org/react";

import restauranteData from "@/data/restaurante.json";

type ProjectTypes = {
    caption: string;
    category: string;
    id: string;
    image: string;
    link: string;
    position: string;
    price: string;
    title: string;
    opcoes?: string;
    combina_com?: string;
};

export default function Restaurante() {
    const [projects, setProjects] = useState<ProjectTypes[]>([]);

    useEffect(() => {
        setProjects(restauranteData);
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {projects.map((project) => (
                <Card key={project.id} isFooterBlurred className="border-none" radius="lg">
                    <div className="relative">
                        <Image
                            className="object-cover object-center"
                            alt={project.title}
                            src={project.image}
                            width={600}
                            height={400}
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50 z-10"></div>
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-xl font-bold text-white z-50">{project.title}</p>
                    </CardHeader>
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-50">
                        <div className="text-white">
                            <p className="text-sm py-2">{project.caption}</p>
                        </div>
                        <Button
                            as="a"
                            href={project.link}
                            className="text-tiny px-1 text-white bg-black/20"
                            color="default"
                            radius="lg"
                            size="sm"
                            variant="flat"
                        >
                            {`R$ ${project.price}`}
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
