
export function getAmountFormatted(value: number) {
  let formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  })
    .format(value)
    .replaceAll(",", ".");
  if (countChar(formatted, ".") > 1) return formatted.replace(".", "'");
  return formatted;
}

const countChar = (input: string, char: string): number => {
  return input.split(char).length - 1;
};