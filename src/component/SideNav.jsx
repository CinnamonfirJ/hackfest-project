import {
  ChartColumnIcon,
  LayoutDashboardIcon,
  Settings,
  Users,
  Wallet,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const SideNav = ({ isSidebarOpen }) => {
  const links = [
    {
      name: "Dashboard",
      path: "/dashboard/home",
      icon: LayoutDashboardIcon,
    },
    {
      name: "Finances",
      path: "/dashboard/finances",
      icon: Wallet,
    },
    {
      name: "Analytics",
      path: "/dashboard/analytics",
      icon: ChartColumnIcon,
    },
    {
      name: "Customers",
      path: "/dashboard/customers",
      icon: Users,
    },
  ];

  return (
    <aside className='w-[300px] border-r border-gray-800 h-screen p-4'>
      <div>
        <div className='mb-8'>
          <Link to={"/"}>
            <span className='text-xl'>New Logo.</span>
          </Link>
        </div>
        <div className='flex flex-col gap-4'>
          {links.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-md w-[80%] ml-6 hover:text-white ${
                  isActive ? "bg-accent text-white" : "hover:bg-accentHover "
                }`
              }
            >
              <link.icon className='w-5 h-5' />
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>
        <div className='mt-80 ml-6'>
          <NavLink
            to='/settings'
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-md w-[80%] hover:text-white ${
                isActive ? "bg-accent text-white" : "hover:bg-accentHover "
              }`
            }
          >
            <Settings className='w-5 h-5' />
            <span>Settings</span>
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;