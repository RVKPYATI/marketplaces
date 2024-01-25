"use client";
import { MainBlock } from "./components/MainBlock/MainBlock";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  router.push("/wildberries");
  return <MainBlock />;
}
