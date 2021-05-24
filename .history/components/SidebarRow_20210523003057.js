import Image from "next/image";

function SidebarRow({ src, Icon, title }) {
  return (
    <div>
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          layout="fixed"
        />
      )}
    </div>
  );
}

export default SidebarRow;
