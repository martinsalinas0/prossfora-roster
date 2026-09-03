import {
  Home,
  LogOut,
  Settings,
  Toolbox,
  User,
  UserCircle,
} from "lucide-react";
import Link from "next/link";

// const martin = {
//   name: "martin",
//   email: "martin@email.com",
//   avatar: "/avatar/logo.png",
// };

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: Home,
        label: "Home",
        href: "/admin",
      },
      {
        icon: User,
        label: "Customers",
        href: "/admin/list/customers",
      },
      {
        icon: Toolbox,
        label: "Jobs",
        href: "/admin/list/jobs",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: UserCircle,
        label: "Profile",
        href: "/profile",
      },
      {
        icon: Settings,
        label: "Settings",
        href: "/settings",
      },
      {
        icon: LogOut,
        label: "Logout",
        href: "/logout",
      },
    ],
  },
];

const SideMenu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                href={item.href}
                key={item.label}
                className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-muted"
              >
                <Icon className="size-5 shrink-0" />
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default SideMenu;
