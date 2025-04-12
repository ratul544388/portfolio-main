import Image from "next/image";
import { WhileInView } from "../../../../components/while-in-view";
import { cn } from "@/lib/utils";

interface Image3DProps {
  type?: "bottom-left" | "top-left";
  src: string;
  className?: string;
}

export const _3dImage = ({
  type = "bottom-left",
  src,
  className,
}: Image3DProps) => {
  const x = type === "bottom-left" ? 100 : -100;
  return (
    <WhileInView x={x} scale={0.5}>
      <div className={cn("group w-fit [perspective:1000px]", className)}>
        <div
          className={cn(
            "relative size-[150px] rounded-lg border-[6px] border-neutral-700 transition-all duration-1000 ease-in-out [perspective:1000px] [transform-style:preserve-3d] group-hover:border-primary sm:size-[250px] lg:size-[300px]",
            type === "bottom-left" &&
              "[transform:rotateY(-25deg)_rotateX(-25deg)]",
            type === "top-left" && "[transform:rotateY(-25deg)_rotateX(25deg)]",
          )}
        >
          <Image
            src={src}
            fill
            alt="coading"
            className="object-cover"
            sizes="(max-width: 640px) 150px, (max-width: 1024px) 250px, 300px"
          />
        </div>
      </div>
    </WhileInView>
  );
};
