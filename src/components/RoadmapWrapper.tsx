"use client";
import dynamic from "next/dynamic";

const Roadmap = dynamic(() => import("@/components/Roadmap"), { ssr: false });

export default function RoadmapWrapper() {
  return <Roadmap />;
}