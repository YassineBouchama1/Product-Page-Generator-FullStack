function StatusOrder(value: string) {
  let bgColor: string, text: string;

  switch (value) {
    case "Delivered":
      bgColor = "green";
      text = `تم إستلام `;
      break;
    case "Shipped":
      bgColor = "green";
      text = `تم شحن `;
      break;
    case "Confirmed":
      bgColor = "yellow";
      text = `تم تأكيد الطلب `;
      break;
    case "Cancelled":
      bgColor = "red";
      text = "ملغى";
      break;
    default:
      bgColor = "blue";
      text = `في انتظار تأكيد `;
  }

  return (
    <span style={{ backgroundColor: bgColor }} className={`text-white rounded-xl px-2 py-1 `}>{text}</span>
  );
}
export default StatusOrder;
