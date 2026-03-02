export function pluralize(count: number, forms: [string, string, string]): string {
  const abs = Math.abs(count) % 100;
  const lastDigit = abs % 10;
  if (abs > 10 && abs < 20) return forms[2];
  if (lastDigit > 1 && lastDigit < 5) return forms[1];
  if (lastDigit === 1) return forms[0];
  return forms[2];
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export const formInputClass =
  "w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-sm text-black placeholder:text-black/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors";
