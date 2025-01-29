import { useRouter } from "next/navigation";
import { useIntersectionObserver } from "usehooks-ts";

export const useHashChangeOnScroll = ({
  hash,
  threshold = 0.3,
}: {
  hash: string;
  threshold?: number;
}) => {
  const router = useRouter();
  const { ref } = useIntersectionObserver({
    onChange(isIntersecting) {
      if (isIntersecting) {
        router.push(hash);
      }
    },
    threshold,
  });

  return ref;
};
