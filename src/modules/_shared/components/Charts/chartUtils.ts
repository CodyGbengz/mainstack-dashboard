export const getMonth = (val: Date) => {
  let dateString = val?.toString();
  return dateString?.substr(4, 3);
};

export const getMonthFromDate = (lineData = {}) =>
  Object.keys(lineData).map(
    (val) => `${new Date(val).getDate()} ${getMonth(new Date(val))}`
  );
