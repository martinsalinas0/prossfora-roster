import Image from "next/image";
import Link from "next/link";
import SideMenu from "../components/SideMenu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/*LEFT*/}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link href="/" className="">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">Prossfora - ROSTER</span>
        </Link>
        {/*MENU*/}
        <SideMenu />
      </div>

      {/*RIGHT*/}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-scroll flex flex-col">
        navbar
        {children}
      </div>
    </div>
  );
}
