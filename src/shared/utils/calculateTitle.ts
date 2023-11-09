export function calculateTitle(articlePostedTimestamp: number) {
  const postedDate = new Date(articlePostedTimestamp * 1000);
  const currentDate = new Date();

  if (currentDate.getDay() - postedDate.getDay() === 1) {
    return "Вчера";
  }
  return "Сегодня";
}
