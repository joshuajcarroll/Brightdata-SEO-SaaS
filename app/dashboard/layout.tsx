import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function Layout({ children }: { children: React.ReactNode }) {
  const { has } = await auth();
  const hasStarterPlan = has({ plan: "starter" });
  const hasProPlan = has({ plan: "pro" });
  const isPaidMember = hasProPlan || hasStarterPlan;

  if (!isPaidMember) {
    redirect("/");
  }

  return <>{children}</>;
}

export default Layout;
