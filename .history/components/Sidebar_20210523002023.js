import { useSession } from "next-auth/client";

function Sidebar() {
  const [session, loading] = useSession();
  return <div></div>;
}

export default Sidebar;
