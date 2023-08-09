function StatusOrder(value) {
  let bgColor, text;

  switch (value.status) {
    case "Delivered":
      bgColor = "bg-green-600";
      text = `تم إستلام `;
      break;
    case "Shipped":
      bgColor = "bg-green-600";
      text = `تم شحن `;
      break;
    case "Confirmed":
      bgColor = "bg-blue-500";
      text = `تم تأكيد الطلب `;
      break;
    case "Cancelled":
      bgColor = "bg-red-500";
      text = "ملغى";
      break;
    default:
      bgColor = "bg-blue-400";
      text = `في انتظار تأكيد `;
  }

  return (
    <span className={`text-white rounded-xl px-2 py-1 ${bgColor}`}>{text}</span>
  );
}
export default StatusOrder;
