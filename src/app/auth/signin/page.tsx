import { signIn } from "@/auth";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/src/components/ui/button";
import { redirect } from "next/navigation";

export default function LogIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
        redirect("/dashboard");
      }}
    >
      <Button type="submit">
        <GitHubLogoIcon /> GitHub
      </Button>
    </form>
  );
}
