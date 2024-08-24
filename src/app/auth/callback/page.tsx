"use client";

import React from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { checkAuthStatus } from "./actions";

export default function CallbackPage() {
  const router = useRouter();
  const { data, isLoading } = useQuery({
    queryKey: ["auth-status"],
    queryFn: async () => await checkAuthStatus(),
  });

  if (data?.success) {
    router.push("/");
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center text-white">
      <Loader2 className="h-10 w-10 animate-spin" />
      <p className="pt-4 text-lg">Please wait...</p>
    </div>
  );
}
