import NavBar from "@/components/Shared/NavBar";
import SideBar from "@/components/Shared/SideBar";
import Cookies from "js-cookie";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const cookieStore = cookies()
  const token = cookieStore.get('token')

  if (!token) return redirect('/login');
  return (
    <main className="flex">
      <NavBar />
      <SideBar />
      <div className=" md:mr-64 bg-gray-100  w-full h-full min-h-screen pt-20 p-5">
        {children}
      </div>
    </main>
  );
}
