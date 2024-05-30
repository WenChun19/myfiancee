import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  const isAuthenticated = session?.user;
  return (
    <div>{isAuthenticated && <div>Welcome {session.user?.name}</div>}</div>
  );
}
