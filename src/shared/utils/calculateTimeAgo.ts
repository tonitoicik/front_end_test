import { formatDateToCustomString } from "./formatDateToCustomString";

export function calculateTimeAgo(timestamp: number) {
  const postedDate = new Date(timestamp * 1000);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - postedDate.getTime();

  const postedYear = postedDate.getFullYear();
  const postedMonth = postedDate.getMonth();
  const postedDay = postedDate.getDay();
  const postedHours = postedDate.getHours();

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDay();
  const currentHours = currentDate.getHours();

  const isSameDay = postedDay === currentDay;
  const isSameMonth = postedMonth === currentMonth;
  const isSameYear = postedYear === currentYear;
  if (isSameDay && isSameMonth && isSameYear) {
    return timeDifference < 3600000
      ? formatMinutesAgo(Math.ceil(timeDifference / 60000))
      : formatHoursAgo(currentHours - postedHours);
  }

  if (isSameYear && postedMonth < currentMonth && currentDay === 1) {
    return "вчера";
  }

  if (isSameMonth && isSameYear) {
    if (currentDay - postedDay === 1) return "вчера";
    if (currentDay - postedDay === 2) return "2 дня назад";
    if (currentDay - postedDay === 3) return "3 дня назад";
    if (currentDay - postedDay === 4) return "4 дня назад";
    if (currentDay - postedDay === 5) return "5 дней назад";
  }

  return formatDateToCustomString(postedDate);
}

function formatHoursAgo(hours: number) {
  if (hours === 1) {
    return `${hours} час назад`;
  } else if (hours >= 2 && hours <= 4) {
    return `${hours} часа назад`;
  } else {
    return `${hours} часов назад`;
  }
}

function formatMinutesAgo(minutes: number) {
  if (minutes === 1) {
    return `${minutes} минуту назад`;
  } else if (minutes >= 2 && minutes <= 4) {
    return `${minutes} минуты назад`;
  } else {
    return `${minutes} минут назад`;
  }
}
