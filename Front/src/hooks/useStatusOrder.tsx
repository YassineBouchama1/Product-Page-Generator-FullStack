function StatusOrder(value: string) {
  let bgColor: string, text: string;

  switch (value) {
    case "Delivered":
      bgColor = "bg-green-600";
      text = `تم إستلام `;
      break;
    case "bg-yellow-300":
      bgColor = "bg-green-400";
      text = `تم شحن `;
      break;
    case "Confirmed":
      bgColor = "bg-amber-400";
      text = `تم تأكيد الطلب `;
      break;
    case "Cancelled":
      bgColor = "bg-rose-600";
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
