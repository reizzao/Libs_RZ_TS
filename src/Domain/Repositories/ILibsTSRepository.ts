import { LibsTSModel } from "../Model/LibsTS.ts";
import { ILibsTSDTO } from "../UseCases/CreateLibsTS/dto.ts";

interface ILibsTSRepository {
  create(lib: ILibsTSDTO): Promise<LibsTSModel>
}

export type { ILibsTSRepository }