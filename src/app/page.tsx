"use client";

import dynamic from "next/dynamic";

const GameBoard = dynamic(() => import("./_component/GameBoard"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex items-center justify-center">
      <GameBoard />
    </main>
  );
}

/* <a href="https://www.flaticon.com/kr/free-icons/-" title="음식과 식당 아이콘">음식과 식당 아이콘 제작자: photo3idea_studio - Flaticon</a> */
