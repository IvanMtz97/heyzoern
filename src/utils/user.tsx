export function getNameInitials(name: string): string {
  const nameParts = name.split(' ');
  const initials = nameParts.map((part) => part[0]).filter((p, i) => i < 2);
  return initials.join('');
}
