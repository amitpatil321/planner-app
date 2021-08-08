const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export function getDateMonthYear(ipDate){
  const newDate = new Date(ipDate);
  const month = months[newDate.getMonth()];
  const date = newDate.getDate();
  const year = newDate.getFullYear();
  return `${date} ${month} ${year}`
}