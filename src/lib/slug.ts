// Mirrors Hugo's urlize: lowercase + collapse whitespace to hyphens.
export function urlize(term: string): string {
  return term.trim().toLowerCase().replace(/\s+/g, '-');
}
