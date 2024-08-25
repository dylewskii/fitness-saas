import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex h-screen items-start justify-center py-24">
      <SignUp />
    </div>
  );
}
