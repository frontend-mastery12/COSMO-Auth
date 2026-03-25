import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { SiInfracost, SiReact, SiTailwindcss, SiFramer } from "react-icons/si";
import {
  HiOutlineLogout,
  HiOutlineUserCircle,
  HiOutlineViewGrid,
  HiOutlineChartBar,
} from "react-icons/hi";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  const navItems = [
    { id: "overview", label: "Overview", icon: <HiOutlineViewGrid /> },
    { id: "analytics", label: "Analytics", icon: <HiOutlineChartBar /> },
    { id: "profile", label: "Profile", icon: <HiOutlineUserCircle /> },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 flex font-sans selection:bg-[#ffe600] selection:text-black">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[#292929] bg-[#121212]/50 backdrop-blur-xl hidden md:flex flex-col p-6">
        <div className="flex items-center gap-3 mb-12">
          <SiInfracost className="text-[#ffe600] text-3xl" />
          <span className="font-bold tracking-widest text-xl">COSMO</span>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
                activeTab === item.id
                  ? "bg-[#ffe600] text-black font-bold shadow-[0_0_20px_rgba(255,230,0,0.2)]"
                  : "text-zinc-400 hover:bg-zinc-800/50 hover:text-white"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm tracking-wide">{item.label}</span>
            </button>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center gap-4 px-4 py-3 text-zinc-500 hover:text-red-400 transition-colors mt-auto border-t border-[#292929] pt-6"
        >
          <HiOutlineLogout className="text-xl" />
          <span className="text-sm font-medium">SIGN OUT</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-light tracking-tight">
              Welcome back,{" "}
              <span className="font-semibold text-[#ffe600]">
                {user?.username || "Commander"}
              </span>
            </h1>
            <p className="text-zinc-500 text-sm mt-1">
              System status: <span className="text-green-500">Online</span>
            </p>
          </div>

          <div className="w-12 h-12 rounded-full border-2 border-[#ffe600] p-1">
            <div className="w-full h-full bg-zinc-800 rounded-full flex items-center justify-center">
              <HiOutlineUserCircle className="text-2xl" />
            </div>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#181818] border border-[#292929] p-6 rounded-2xl hover:border-[#ffe6005a] transition-all">
            <div className="text-[#ffe600] text-2xl mb-4">
              <SiReact />
            </div>
            <h3 className="text-zinc-400 text-xs font-bold tracking-widest uppercase">
              Frontend Core
            </h3>
            <p className="text-2xl font-bold mt-2">React 19.0</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#181818] border border-[#292929] p-6 rounded-2xl hover:border-[#ffe6005a] transition-all">
            <div className="text-[#ffe600] text-2xl mb-4">
              <SiTailwindcss />
            </div>
            <h3 className="text-zinc-400 text-xs font-bold tracking-widest uppercase">
              Styling Engine
            </h3>
            <p className="text-2xl font-bold mt-2">Tailwind v4</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#181818] border border-[#292929] p-6 rounded-2xl hover:border-[#ffe6005a] transition-all">
            <div className="text-[#ffe600] text-2xl mb-4">
              <SiFramer />
            </div>
            <h3 className="text-zinc-400 text-xs font-bold tracking-widest uppercase">
              Motion System
            </h3>
            <p className="text-2xl font-bold mt-2">GSAP & Framer</p>
          </div>
        </div>

        {/* Large Visual Section */}
        <section className="mt-8 bg-gradient-to-br from-[#181818] to-[#0a0a0a] border border-[#292929] rounded-3xl p-10 relative overflow-hidden h-64 flex items-center">
          <div className="relative z-10">
            <h2 className="text-4xl font-extralight tracking-widest">
              COSMO OS
            </h2>
            <p className="text-zinc-400 mt-2 max-w-md">
              Your interface for building high-end, animated frontend
              experiences.
            </p>
          </div>
          {/* Decorative blur effect */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#ffe600]/5 blur-[100px] rounded-full"></div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
