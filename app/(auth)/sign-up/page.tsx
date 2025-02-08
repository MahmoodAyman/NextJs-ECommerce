import { auth } from "@/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import CredentialsSignUpForm from "./signup-form";

const SignUp = async (props: {
  searchParams: Promise<{ callbackUrl: string }>;
}) => {
  const searchParams = await props.searchParams;
  const { callbackUrl } = searchParams;
  const session = await auth();
  if (session) {
    return redirect(callbackUrl || "/");
  }
  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="space-y-4">
          <Link href="/" className="flex-center">
            <Image
              src="/images/logo.svg"
              width={100}
              height={100}
              alt={`${APP_NAME} Logo`}
              priority={true}
            />
            <CardTitle className="text-center">Sign Up</CardTitle>
          </Link>
        </CardHeader>
        <CardContent className="space-y-4">
          <CredentialsSignUpForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
