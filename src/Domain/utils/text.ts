export function wrapText(text: string, maxLength: number): string {
  return text
    .substring(0, maxLength)
    .concat(text.length > maxLength ? "..." : "");
}
