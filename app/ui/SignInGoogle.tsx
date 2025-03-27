import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";

function SignInGoogle() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <Button type="submit">Signin with Google</Button>
    </form>
  );
}

export default SignInGoogle;
