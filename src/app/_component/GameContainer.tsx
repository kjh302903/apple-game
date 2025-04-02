import React from "react";

interface Props {
  children: React.ReactNode;
}
const GameContainer = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center mx-auto rounded-xl w-[850px] h-[560px] bg-green-500">
      <div className="w-[740px] h-[460px] bg-slate-50">{children}</div>
    </div>
  );
};

export default GameContainer;
