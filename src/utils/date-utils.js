export const getFormatedDate = (dateToFormat) => {
  const date = new Date(dateToFormat.current);
  const isoDate = date.toISOString();
  return `${isoDate.substring(8, 10)}/${isoDate.substring(
    5,
    7
  )}/${isoDate.substring(0, 4)}`;
};
