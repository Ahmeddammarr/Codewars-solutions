export function isIsogram(str: string) {
  if (str === " " || str === "") return true;
  const string = str.toLowerCase();
  const set = new Set(string);
  if (set.size !== string.length) return false;
  return true;
}
