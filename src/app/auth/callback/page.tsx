"use client";

import React, { useEffect } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { checkAuthStatus } from "./actions";
import { useUser } from "@clerk/nextjs";

export default function CallbackPage() {
  const router = useRouter();
  const { user, isLoaded: isClerkLoaded, isSignedIn } = useUser();
  const { data, isLoading: isAuthStatusLoading } = useQuery({
    queryKey: ["auth-status"],
    queryFn: async () => await checkAuthStatus(),
  });

  // redirects to stripe payment page if link available & auth status is loaded
  useEffect(() => {
    if (!isClerkLoaded || !isSignedIn || isAuthStatusLoading) {
      return;
    }

    const userEmail = user?.emailAddresses?.[0]?.emailAddress;
    const stripePaymentLink = localStorage.getItem("stripePaymentLink");

    if (data?.success && stripePaymentLink && userEmail) {
      const uriEncodedEmail = encodeURIComponent(userEmail);
      localStorage.removeItem("stripePaymentLink");
      router.push(`${stripePaymentLink}?prefilled_email=${uriEncodedEmail}`);
    } else {
      router.push("/");
    }
  }, [data, user, router, isClerkLoaded, isSignedIn, isAuthStatusLoading]);

  return (
    <div className="flex h-screen flex-col items-center justify-center text-white">
      <Loader2 className="h-10 w-10 animate-spin" />
      <p className="pt-4 text-lg">Please wait...</p>
    </div>
  );
}
