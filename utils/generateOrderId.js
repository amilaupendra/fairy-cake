export default function generateOrderId() {
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  return `ORDER${randomNumber}`;
}
