import React from "react";
import OrderField from "./OrderField";

export default function Customer({ shipping }) {
  return (
    <>
      <div class="flex flex-col justify-start items-stretch h-full w-full px-5">
        <div class="flex flex-col justify-start items-start flex-shrink-0">
          <OrderField field="اسم العميل" value={shipping.name} />
          <OrderField field="رقم الهاتف" value={shipping.phone} />
          <OrderField field="مدينة" value={shipping.city} />
          <OrderField field="عنوان" value={shipping.address} />
        </div>
      </div>
    </>
  );
}
