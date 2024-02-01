"use client";

import { useRouter } from "next/navigation";
export default function Blog() {
  const router = useRouter();
  return (
    <div>
      <h2>blog</h2>
      <button type="button" onClick={() => router.push("/dashboard")}>
        Dashboard
      </button>
    </div>
  );
}
