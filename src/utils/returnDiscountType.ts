export default function returnDiscountType(code: number) {
  if (code === 1) return "De: / Por: ";
  if (code === 2) return "Percentual";
  if (code === 3) return "Leve + Pague -";
}
