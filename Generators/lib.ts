export class Generator {
  private constructor() { }

  static syncMakeStringID(): string {
    return Date.now().toString()
  }

  static async asyncMakeStringID(): Promise<string> {
    return await Date.now().toString()
  }
}