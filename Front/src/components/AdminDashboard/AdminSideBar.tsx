import Link from "next/link";

const AdminSideBAr = () => {
  return (
    <aside>
      <ul>
        <li className="flex gap-5">
          <Link href="/admin">Main</Link>
          <Link href="/admin/orders">Orders</Link>
          <Link href="/admin/products">Products</Link>
          <Link href="/admin/setting">Setting</Link>
        </li>
      </ul>
    </aside>
  );
};
export default AdminSideBAr;
