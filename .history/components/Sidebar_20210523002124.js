import { useSession } from "next-auth/client";

function Sidebar() {
  const [session, loading] = useSession();
  return <div className="p-2 lt-5 max-w-[600px] xl:min-w-[300px]"></div>;
}

export default Sidebar;
