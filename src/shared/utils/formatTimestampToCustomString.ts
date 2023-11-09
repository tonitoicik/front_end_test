export function formatTimestampToCustomString(timestamp: number) {
  const convertedDate = new Date(timestamp * 1000);
  return convertedDate.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
