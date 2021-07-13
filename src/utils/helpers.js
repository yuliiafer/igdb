export const Price = (number) => {
  return new Intl.NumberFormat("no-NO", {
    style: "currency",
    currency: "NOK",
  }).format(number / 100);
};

export const GetUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "category") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};
