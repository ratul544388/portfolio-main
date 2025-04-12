"use client";

import { cn } from "@/lib/utils";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface StarsProps {
  rating: number;
}

export const Stars = ({ rating }: StarsProps) => {
  return (
    <div className="mb-4 mt-2 flex gap-2">
      {Array.from({ length: 5 }).map((_, i) => {
        const current = i + 1;

        let Icon = FaRegStar; // default: empty star (black)
        if (rating >= current) {
          Icon = FaStar; // full star
        } else if (rating >= current - 0.5) {
          Icon = FaStarHalfAlt; // half star
        }

        return (
          <Icon
            key={i}
            className={cn(
              "size-4",
              Icon !== FaRegStar ? "text-[#FFD700]" : "text-foreground"
            )}
          />
        );
      })}
    </div>
  );
};
