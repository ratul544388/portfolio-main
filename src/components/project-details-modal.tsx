"use client";

import { ProjectType } from "@/types";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog";

interface ProjectDetailsModalProps {
  onClose: (open: boolean) => void;
  project: ProjectType;
}

export const ProjectDetailsModal = ({
  onClose,
  project,
}: ProjectDetailsModalProps) => {
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>{project.name}</DialogTitle>
          <DialogDescription>{project.category}</DialogDescription>
        </DialogHeader>
        <p>{project.description}</p>
        <ul className="mt-3">
          {project.features.map((f, i) => (
            <li key={i} className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="block aspect-square min-w-1.5 rounded-full bg-foreground"
              />
              {f}
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
};
