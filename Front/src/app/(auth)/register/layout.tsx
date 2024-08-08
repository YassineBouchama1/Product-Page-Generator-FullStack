
import UserLayout from "@/components/Layout/UserLayout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function RegisterLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const cookieStore = cookies()
    const token = cookieStore.get('token')

    if (token) return redirect('/admin');
    return (

        <UserLayout>

            {children}
        </UserLayout>


    );
}
