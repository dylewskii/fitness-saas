import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex h-screen items-start justify-center py-24">
      <SignIn />
    </div>
  );
}
