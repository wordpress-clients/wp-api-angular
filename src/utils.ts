export function stripTrailingSlash(value: string): string {
  // Is the last char a /
  if (value.substring(value.length - 1, value.length) === '/') {
    return value.substring(0, value.length - 1);
  } else {
    return value;
  }
}
