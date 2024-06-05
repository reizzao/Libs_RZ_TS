export class MinTextError extends Error {
  constructor(msg: string) {
    super(`${msg}`);
    this.name = `MinTextError`;
  }
}