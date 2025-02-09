"use client";

import { useEffect, useState } from "react";

export const Cursor = () => {
  const trailLength = 10; // Number of trailing elements
  const [trailPositions, setTrailPositions] = useState<{ x: number; y: number }[]>(
    new Array(trailLength).fill({ x: 0, y: 0 })
  );

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      const newTrail = [...trailPositions];
      newTrail.pop(); // Remove the last position
      newTrail.unshift({ x: e.clientX, y: e.clientY }); // Add new position at the start
      setTrailPositions(newTrail);
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, [trailPositions]); // Re-run effect when `trailPositions` updates

  return (
    <>
      {trailPositions.map((pos, i) => (
        <span
          key={i}
          style={{
            transform: `translate(calc(${pos.x}px - 50%), calc(${pos.y}px - 50%))`,
            opacity: (i + 1) / trailLength, // Fades out towards the end
            transition: "transform 0.1s ease-out", // Smooth delay effect
          }}
          className="fixed left-0 top-0 z-[1000] size-10 rounded-full bg-red-500"
        />
      ))}
    </>
  );
};
