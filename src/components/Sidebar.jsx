import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShieldCheck, 
  Sun, 
  Wind, 
  Search, 
  Settings,
  LogOut,
  ChevronRight
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
    { name: 'PPF Series', icon: <ShieldCheck size={20} />, path: '/ppf' },
    { name: 'Sunfilm', icon: <Sun size={20} />, path: '/sunfilm' },
    { name: 'Windshield', icon: <Wind size={20} />, path: '/windshield' },
    { name: 'Warranty Check', icon: <Search size={20} />, path: '/warranty' },
  ];

  return (
    <aside className="w-72 bg-white border-r border-gray-100 flex flex-col sticky top-0 h-screen">
      <div className="p-8 border-b border-gray-50">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <ShieldCheck className="text-white" size={24} />
          </div>
          <span className="text-xl font-black text-[#1b2559] tracking-tighter uppercase">
            ULTRA<span className="text-blue-600">GUARD</span>
          </span>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2 mt-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center justify-between p-4 rounded-2xl transition-all group ${
                isActive 
                ? 'bg-[#f4f7fe] text-blue-600 font-bold' 
                : 'text-gray-400 hover:bg-gray-50 hover:text-[#1b2559]'
              }`}
            >
              <div className="flex items-center gap-4">
                <span className={isActive ? 'text-blue-600' : 'group-hover:text-blue-600'}>
                  {item.icon}
                </span>
                <span className="text-sm tracking-tight">{item.name}</span>
              </div>
              {isActive && <div className="w-1.5 h-6 bg-blue-600 rounded-full" />}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-50">
        <button className="flex items-center gap-4 w-full p-4 text-gray-400 hover:text-red-500 transition-colors">
          <LogOut size={20} />
          <span className="text-sm font-medium">Log Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;