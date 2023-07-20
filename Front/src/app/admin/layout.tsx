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
      <div className="p-4 md:mr-64 bg-gray-100  w-full h-full pt-20 ">
        {children}
        <div className="w-full h-10 text-center rounded-lg">Footer</div>
      </div>
    </main>
  );
}
