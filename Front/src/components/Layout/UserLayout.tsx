import { cookies } from "next/headers";
import UserFooter from "../Shared/UserFooter";
import UserNavBar from "../Shared/UserNavBar";


const UserLayout = async ({ children }: any) => {

  const cookieStore = cookies()
  const token = cookieStore.get('token')
  return (
    <div className=" container mx-auto">
      <UserNavBar token={token || null} />
      <div> {children}</div>
      <UserFooter />
    </div>
  );
};
export default UserLayout;
