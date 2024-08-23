
"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  router.push("/");

  return <div>
    <h1>404</h1>
    <p>Page not found</p>
    <p>Redirecting to home page...</p>
  </div>;
}