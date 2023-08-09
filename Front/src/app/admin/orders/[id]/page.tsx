import OrderService from "@/lib/OrdersApi";
import Error from "@/components/Shared/Error";
import ProductService from "@/lib/ProductApi";
import { ToastContainer } from "react-toastify";
import Customer from "@/components/AdminDashboard/Order/OrderDetails/Customer";
import OrderField from "@/components/AdminDashboard/Order/OrderDetails/OrderField";
import OrderStatus from "@/components/AdminDashboard/Order/OrderDetails/OrderStatus";
import StatusOrder from "@/hooks/useStatusOrder";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const order = await OrderService.findById(id); // fetch data

  const product = await ProductService.findById(
    order.data.cartItems[0].productID.id
  ); // fetch data product or we can send url with order to less requests

  if (!order?.data) return <Error />;

  return (
    <main>
      <h2 className="font-extrabold py-4 overflow-hidden ">تفاصيل الطلب</h2>

      <div className="grid grid-rows-2 grid-cols-4 gap-4     ">
        {/* Product Details */}
        <section className="col-span-4 xl:col-span-3  w-full bg-white h-full min-h-[200px] rounded-md shadow p-4 justify-center items-center">
          <div className="flex justify-between border-b items-center py-2 ">
            <h3 className="font-bold">{order.data._id.slice(-4)}#</h3>
            {StatusOrder(order.data)}
          </div>

          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            <OrderField order={order.data} image={product.data.image} />
          </div>
        </section>

        {/* Order Status */}
        <section className="col-span-4 xl:col-span-1 w-full bg-white h-full  rounded-md shadow p-4 flex-col gap-4 flex item-start justify-start">
          <Customer shipping={order.data.shippingAddress} />
          <div className="border-t py-4 px-5">
            {" "}
            <h2 className="font-bold  mb-4">حالة الطلب</h2>
            <OrderStatus orderId={id} />
          </div>
        </section>
      </div>

      <ToastContainer />
    </main>
  );
}
