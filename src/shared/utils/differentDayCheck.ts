export function differentDayCheck(currentPosted: number, prevPosted: number) {
  const currentDate = new Date(currentPosted * 1000);
  const prevDate = new Date(prevPosted * 1000);

  const prevYear = prevDate.getFullYear();
  const prevMonth = prevDate.getMonth();
  const prevDay = prevDate.getDay();

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDay();

  const isSameDay = prevDay === currentDay;
  const isSameMonth = prevMonth === currentMonth;
  const isSameYear = prevYear === currentYear;

  if (isSameYear && isSameMonth && isSameDay) return false;
  if (isSameYear && isSameMonth) return true;
}
