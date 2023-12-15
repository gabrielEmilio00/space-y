export function pixelToRem(...values: number[]) {
  return values
    .reduce((acc, current) => (acc += current / 16 + `rem `), '')
    .trim();
}

export function scrollTo(id: string): void {
  const element = document.getElementById(id);

  element?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  });
}
