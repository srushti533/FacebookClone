import {
  CalendarIcon,
  ChevronDownIcon,
  ClockIcon,
  DesktopComputerIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { useSession } from "next-auth/client";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  const [session, loading] = useSession();
  return (
    <div className="p-2 lt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={UserIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
}

export default Sidebar;
