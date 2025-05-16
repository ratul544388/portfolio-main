"use client";
import { WhileInView } from "@/components/while-in-view";
import { motion } from "framer-motion";
export const Developer = () => {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden p-1">
      <div className="relative z-10">
        <Code />
      </div>
      <motion.span
        animate={{
          rotate: [0, 360],
          transition: { repeat: Infinity, ease: "linear", duration: 8 },
        }}
        className="absolute size-[240%] [background-image:conic-gradient(transparent,transparent,transparent,transparent,transparent,hsl(262.1,83.3%,57.8%))]"
      />
    </div>
  );
};

const Code = () => {
  const skills = [
    '"HTML"',
    '"CSS"',
    '"Tailwind"',
    '"JavaScript"',
    '"TypeScript"',
    '"React"',
    '"Next.Js"',
    '"MongoDB"',
    '"PostgreSQL"',
    '"Framer Motion"',
    '"etc..."',
  ];

  return (
    <div className="size-full bg-background">
      <div className="flex items-center gap-2 bg-background px-4 py-3 dark:bg-accent/30">
        <WhileInView
          scale={0}
          elem="span"
          className="size-3 rounded-full bg-red-400"
        />
        <WhileInView
          scale={0}
          delay={0.2}
          elem="span"
          className="size-3 rounded-full bg-yellow-400"
        />
        <WhileInView
          scale={0}
          delay={0.4}
          elem="span"
          className="size-3 rounded-full bg-green-400"
        />
        <WhileInView
          delay={0.5}
          x={-20}
          elem="p"
          className="ml-3 text-sm text-muted-foreground"
        >
          developer.js
        </WhileInView>
      </div>
      <div className="relative h-full space-y-1 bg-accent/50 p-3 text-sm font-light dark:bg-blue-950/10">
        <WhileInView duration={0.5} x={-20}>
          <span className="text-purple-500 dark:text-purple-500/80">const</span>
          &nbsp;&nbsp;
          <span className="text-yellow-500 dark:text-yellow-200/80">
            profile
          </span>
          &nbsp;&nbsp;=&nbsp;&nbsp;
          <span className="text-purple-500 dark:text-purple-500/80">{"{"}</span>
        </WhileInView>
        <div className="ml-4 space-y-1">
          <WhileInView delay={0.3} duration={0.5} x={-20}>
            <span className="text-red-400 dark:text-red-300/80">name</span>
            :&nbsp;&nbsp;
            <span className="text-green-500 dark:text-green-300/80">
              {'"Ratul Hossain"'}
            </span>
            ,
          </WhileInView>
          <WhileInView delay={0.5} duration={0.5} x={-20}>
            <span className="text-red-400 dark:text-red-300/80">title</span>
            :&nbsp;&nbsp;
            <span className="text-green-500 dark:text-green-300/80">
              {'"Web Developer"'}
            </span>
            ,
          </WhileInView>
          <p>
            <WhileInView
              elem="span"
              delay={0.7}
              duration={0.5}
              x={-20}
              className="text-red-400 dark:text-red-300/80"
            >
              skills
            </WhileInView>
            <WhileInView elem="span" duration={0.5} x={-20} delay={0.75}>
              :&nbsp;&nbsp;
            </WhileInView>
            <WhileInView
              elem="span"
              delay={0.8}
              duration={0.5}
              x={-20}
              className="text-yellow-500 dark:text-yellow-200/80"
            >
              {"["}
            </WhileInView>
            <br />
            <span className="ml-4 mt-1 flex flex-wrap gap-2 text-green-500 dark:text-green-300/80">
              {skills.map((s, i) => (
                <WhileInView
                  elem="span"
                  delay={0.9 + i * 0.2}
                  className="whitespace-nowrap"
                  duration={0.5}
                  key={s}
                >
                  {s},
                </WhileInView>
              ))}
            </span>
            <WhileInView
              elem="span"
              duration={0.5}
              delay={3.2}
              x={-20}
              className="mt-1 block text-yellow-500 dark:text-yellow-200/80"
            >
              {"]"}
            </WhileInView>
          </p>
        </div>
        <WhileInView
          elem="span"
          duration={0.5}
          delay={3.5}
          x={-20}
          className="text-purple-500 dark:text-purple-500/80"
        >
          {"}"}
        </WhileInView>
      </div>
    </div>
  );
};
