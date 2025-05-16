
export function Console(...args: any[]): void {
  for (const arg of args) {
    console.log(arg);
  }
}