import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import DashboardScreen from "./dashboard/page";
import LogInScreen from "./login/page";

export default async function Home() {
  const session = await getServerSession(options);
  return session ? <DashboardScreen /> : <LogInScreen />;
}
