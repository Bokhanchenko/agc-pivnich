const addZero = num => (Number(num) < 10 ? `${0}${num}` : num);

export const getParsedDate = rawDate => {
  const date = new Date(rawDate);
  const year = date.getFullYear();
  const day = date.getDay();
  const month = date.getMonth();
  return `${addZero(day)}.${addZero(month)}.${year}`;
};
