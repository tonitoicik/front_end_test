export function truncateText(text: string) {
  if (text.length > 139) {
    return text.substring(0, 139) + "...";
  }
  return text;
}
