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
      <div className="p-4 md:mr-64 bg-gray-50 w-full h-[100dvh] pt-20 ">
        {children}
      </div>
    </main>
  );
}
