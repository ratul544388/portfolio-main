"use client";

import { Container } from "@/components/container";
import { Stars } from "@/components/stars";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import { FaGithub, FaShare } from "react-icons/fa";

export const ProjectCard = () => {
  return (
    <Container className="mt-20 grid">
      <div className="flex gap-4 rounded-xl border">
        <div className="relative flex w-[40%] flex-col py-10">
          <div className="relative ml-auto mr-3 h-full w-[80%] rotate-[-3deg]">
            <Image
              src="/projects/portfolio-1.webp"
              alt="Project-1"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="w-[60%] p-5">
          <div className="flex items-end gap-3">
            <h1 className="text-lg font-bold">Gym Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground">Management</p>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">10 June 2024</p>
          <ul className="mt-4 flex flex-wrap gap-3">
            <li className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
              TypeScript
            </li>
            <li className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
              MongoDB
            </li>
            <li className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
              Prisma
            </li>
            <li className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
              Next auth
            </li>
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <Stars rating={4.5} iconSize={13} />
            <p className="mb-1 text-sm font-semibold">4.5</p>
          </div>
          <h2 className="mt-2 font-semibold">ABOUT</h2>
          <p className="mt-1 text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            esse debitis fugiat incidunt minus, nam aut amet nemo officiis odio!
            Deleniti pariatur ullam atque? Dicta, atque accusantium commodi
            explicabo error quibusdam laborum, quae nostrum numquam, nisi fugit
            quod omnis facere nobis. Beatae commodi deserunt eligendi blanditiis
            ipsa doloremque optio, voluptatibus possimus sapiente neque quis
            suscipit officiis esse placeat maiores. Illum.
          </p>
          <div className="mt-4 flex gap-3">
            <Button className="flex-1 font-bold [box-shadow:hsl(var(--primary)/0.4)_4px_4px]">
              <ArrowUp className="rotate-45" />
              LIVE
            </Button>
            <Button variant="outline" size="icon">
              <FaGithub />
            </Button>
            <Button variant="outline" size="icon">
              <FaShare />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};