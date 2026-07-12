function pad(n: number) {
  return String(n).padStart(2, '0');
}

export function formatDateKo(date: Date) {
  return `${date.getUTCFullYear()}년 ${pad(date.getUTCMonth() + 1)}월 ${pad(date.getUTCDate())}일`;
}

export function formatDateDot(date: Date) {
  return `${date.getUTCFullYear()}.${pad(date.getUTCMonth() + 1)}.${pad(date.getUTCDate())}`;
}

export function formatDateShort(date: Date) {
  return `${pad(date.getUTCMonth() + 1)}.${pad(date.getUTCDate())}`;
}

export function yearKey(date: Date) {
  return `${date.getUTCFullYear()}년`;
}

export function monthKey(date: Date) {
  return `${pad(date.getUTCMonth() + 1)}월`;
}

export function isoDate(date: Date) {
  return date.toISOString().slice(0, 10);
}
