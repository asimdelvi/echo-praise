import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    console.log("no session", session);
    return redirect("/auth/signin");
  } else {
    console.log("session", session);
  }
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
