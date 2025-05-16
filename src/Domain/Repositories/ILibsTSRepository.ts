import { LibsTSModel } from "../Model/LibsTS.ts";
import { ILibsTSDTO } from "../UseCases/CreateLibsTS/dto.ts";

interface ILibsTSRepository {
  // Console(...args: any[]): void
  create (lib: ILibsTSDTO): Promise<LibsTSModel>
}

export type { ILibsTSRepository }