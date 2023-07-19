export default function BuyNow() {
  return (
    <div className="w-full flex justify-center">
      <button className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
        اطلب الان
      </button>

      <div className="flex items-center gap-4 mx-5 border border-gray-200 rounded">
        <button className=" text-lg w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75">
          +
        </button>
        <p>1</p>
        <button className=" text-lg w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75">
          -
        </button>
      </div>
    </div>
  );
}
