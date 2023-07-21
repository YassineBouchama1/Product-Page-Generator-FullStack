import AdminSideBAr from "@/components/AdminDashboard/AdminSideBar";
import NavBar from "@/components/AdminDashboard/NavBar";
import SideBar from "@/components/AdminDashboard/SideBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <NavBar />
      <SideBar />
      <div className=" md:mr-64 bg-gray-100  w-full h-full pt-20 p-5">
        {children}
      </div>
    </main>
  );
}
