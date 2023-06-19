const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const formatCurrency = (amount: string | undefined) => {
  if (!amount) {
    return "-";
  }

  const value = parseFloat(amount);

  return value === 0 ? "-" : currencyFormatter.format(value).replace(/^\$/, "");
};

export default formatCurrency;
