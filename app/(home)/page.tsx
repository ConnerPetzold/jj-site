"use client";

import dynamic from "next/dynamic";

const CliDemo = dynamic(() => import("@/components/CliDemo"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center"></main>
  );
}
