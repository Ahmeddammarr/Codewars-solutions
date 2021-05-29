export function findOutlier(integers: number[]): number {
  const even = integers.filter((el) => el % 2 === 0);
  const odd = integers.filter((el) => el % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}
