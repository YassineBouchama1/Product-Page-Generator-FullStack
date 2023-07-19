import UserFooter from "../UserUi/UserFooter";
import UserNavBar from "../UserUi/UserNavBar";

const UserLayout = ({ children }: any) => {
  return (
    <div className=" container mx-auto">
      <UserNavBar />
      <div> {children}</div>
      <UserFooter />
    </div>
  );
};
export default UserLayout;
