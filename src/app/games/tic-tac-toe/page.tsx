"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const WIN_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

type PlayerType = "X" | "O";
type BoardType = {
  index: number;
  value?: PlayerType;
};

const Page = () => {
  const [currentTurn, setCurrentTurn] = useState<PlayerType>("X");
  const [result, setResult] = useState<PlayerType | "DRAW">();
  const initializeBoard = () =>
    Array.from({ length: 9 }).map((_, i) => ({
      index: i,
      value: undefined,
    }));
  const [boards, setBoards] = useState<BoardType[]>(initializeBoard);

  const handleClick = (index: number) => {
    if (boards[index].value || result) return;
    setBoards((prev) =>
      prev.map((board) => ({
        ...board,
        value: board.index === index ? currentTurn : board.value,
      })),
    );
    setCurrentTurn((prev) => (prev === "X" ? "O" : "X"));
  };

  useEffect(() => {
    const isXWins = WIN_CONDITIONS.some((condition) =>
      condition.every((c) => boards[c].value === "X"),
    );

    if (isXWins) {
      setResult("X");
      return;
    }

    const isOWins = WIN_CONDITIONS.some((condition) =>
      condition.every((c) => boards[c].value === "O"),
    );

    if (isOWins) {
      setResult("O");
      return;
    }

    const isDraw = boards.every((board) => board.value);

    if (isDraw) {
      setResult("DRAW");
    }
  }, [boards]);

  const handleReset = () => {
    setBoards(initializeBoard);
    setResult(undefined);
    setCurrentTurn("X");
  };

  return (
    <main className="flex h-[calc(100vh_-_80px)] flex-col items-center justify-center gap-10">
      <h1 className="text-4xl font-bold">
        {result
          ? result === "DRAW"
            ? "Draw"
            : `${result} Won`
          : `${currentTurn}'s Turn`}
      </h1>
      <ul className="grid grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => {
          const value = boards[i].value;
          return (
            <li key={i}>
              <button
                onClick={() => handleClick(i)}
                className={cn(
                  "relative flex size-20 items-center justify-center border-2",
                  (value || result) && "cursor-not-allowed",
                  i <= 2 && "border-t-0",
                  [0, 3, 6].includes(i) && "border-l-0",
                  [2, 5, 8].includes(i) && "border-r-0",
                  [6, 7, 8].includes(i) && "border-b-0",
                )}
              >
                {value && (value === "X" ? <X /> : <O />)}
              </button>
            </li>
          );
        })}
      </ul>
      {result && <Button onClick={handleReset}>Reset</Button>}
    </main>
  );
};

export default Page;

const X = () => {
  return (
    <>
      <span className="absolute top-1/2 block h-2 w-full -translate-y-1/2 rotate-45 rounded-full bg-foreground" />
      <span className="absolute top-1/2 block h-2 w-full -translate-y-1/2 -rotate-45 rounded-full bg-foreground" />
    </>
  );
};

const O = () => {
  return (
    <span className="block size-[calc(100%_-_10%)] rounded-full border-[8px] border-foreground" />
  );
};
