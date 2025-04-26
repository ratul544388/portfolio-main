"use client";

import { CountUp } from "./count-up";

const TestPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex items-center gap-3">
        This is Counter
        <CountUp value={578} whileInView whileInViewOnce />
      </div>
    </div>
  );
};

export default TestPage;
