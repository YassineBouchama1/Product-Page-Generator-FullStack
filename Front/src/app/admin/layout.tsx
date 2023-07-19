import AdminSideBAr from "@/components/AdminDashboard/AdminSideBar";
import NavBar from "@/components/AdminDashboard/NavBar";
import SideBar from "@/components/AdminDashboard/SideBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main>
        <SideBar />
        {children}
      </main>
    </>
  );
}
