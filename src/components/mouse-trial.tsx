"use client";
import React, { useEffect, useRef } from "react";

interface TrailCircle extends HTMLDivElement {
  x: number;
  y: number;
}

const colors = Array.from({ length: 20 }, (_, i) => {
  const alpha = ((i + 1) * 0.05).toFixed(2);
  return `hsl(var(--primary)/${alpha})`;
});

const MouseTrail: React.FC = () => {
  const coords = useRef({ x: 0, y: 0 });
  const circlesRef = useRef<TrailCircle[]>([]);

  useEffect(() => {
    const coordsRef = coords.current;

    const handleInitialPointerMove = (e: PointerEvent) => {
      coordsRef.x = e.clientX;
      coordsRef.y = e.clientY;

      circlesRef.current.forEach((circle, index) => {
        if (circle) {
          circle.x = coordsRef.x;
          circle.y = coordsRef.y;
          circle.style.left = `${coordsRef.x - 12}px`;
          circle.style.top = `${coordsRef.y - 12}px`;
          circle.style.backgroundColor = colors[index % colors.length];
          circle.style.opacity = "1";
        }
      });

      window.removeEventListener("pointermove", handleInitialPointerMove);
    };

    const handleMouseMove = (e: MouseEvent) => {
      coordsRef.x = e.clientX;
      coordsRef.y = e.clientY;
    };

    const handleMouseLeave = () => {
      circlesRef.current.forEach((circle) => {
        if (circle) {
          circle.style.opacity = "0";
        }
      });
    };

    const handleMouseEnter = () => {
      circlesRef.current.forEach((circle) => {
        if (circle) {
          circle.style.opacity = "1";
        }
      });
    };

    window.addEventListener("pointermove", handleInitialPointerMove);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);
    window.addEventListener("mouseover", handleMouseEnter);

    const animateCircles = () => {
      let x = coordsRef.x;
      let y = coordsRef.y;

      circlesRef.current.forEach((circle, index) => {
        if (!circle) return;

        console.log("Running")

        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.scale = `${
          (circlesRef.current.length - index) / circlesRef.current.length
        }`;

        circle.x = x;
        circle.y = y;

        const nextCircle =
          circlesRef.current[index + 1] || circlesRef.current[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("pointermove", handleInitialPointerMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <>
      {colors.map((_, index) => (
        <div
          key={index}
          className="pointer-events-none fixed left-0 top-0 z-[9999] hidden size-6 rounded-full xs:block"
          ref={(el) => {
            if (el) circlesRef.current[index] = el as TrailCircle;
          }}
        />
      ))}
    </>
  );
};

export default MouseTrail;
