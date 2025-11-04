"use client";

import { useRouter } from "next/navigation"; // App Router
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center  text-black p-4">
      <h1 className="text-[8rem] font-extrabold mb-4 animate-bounce">404</h1>
      <h2 className="text-4xl md:text-5xl font-bold mb-2">Page Not Found</h2>
      <p className="text-lg md:text-xl mb-8 text-center max-w-xl">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      <div className="flex gap-4">
        <Button
          onClick={() => router.back()}
          type="fill"
          className=""
        >
          Go Back
        </Button>
        <Link
          href="/">
          <Button type="outline" className="text-black">Home</Button>
        </Link>
      </div>
    </div>
  );
}
