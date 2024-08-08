
import UserFooter from "../Shared/UserFooter";
import UserNavBar from "../Shared/UserNavBar";


const UserLayout = async ({ children }: any) => {

  return (
    <div className=" container mx-auto">
      <UserNavBar />
      <div> {children}</div>
      <UserFooter />
    </div>
  );
};
export default UserLayout;
