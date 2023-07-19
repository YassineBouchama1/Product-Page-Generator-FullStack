import AdminSideBAr from "@/components/AdminDashboard/AdminSideBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <AdminSideBAr />
      {children}
    </main>
  );
}
