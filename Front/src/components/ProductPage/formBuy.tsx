import BuyNow from "./BuyBtn";

export default function FormBuy() {
  return (
    <form className="mx-auto m-6 max-w-lg rounded-lg border">
      <div className="flex flex-col gap-4 p-4 md:p-8">
        <div className="flex gap-5">
          <div>
            <input
              name="name"
              placeholder="الاسم الكامل"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            ></input>
          </div>

          <div>
            <input
              placeholder="رقم الهاتف"
              name="phone"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            ></input>
          </div>
        </div>
        <div className="flex gap-5 w-full">
          <div className="w-full  px-3 py-2 flex justify-end items-center ">
            <input
              placeholder="العنوان والمدينة"
              name="address"
              className="w-full rounded border  bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            ></input>
          </div>
        </div>
        <BuyNow />
      </div>
    </form>
  );
}
