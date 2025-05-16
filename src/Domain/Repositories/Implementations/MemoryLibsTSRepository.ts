import { LibsTSModel } from "../../Model/LibsTS.ts";
import { ILibsTSDTO } from "../../UseCases/CreateLibsTS/dto.ts";
import { ILibsTSRepository } from "../ILibsTSRepository.ts";


class MemoryLibsTSRepository implements ILibsTSRepository {
  private collection: LibsTSModel[] = []

  async create (lib: ILibsTSDTO): Promise<LibsTSModel> {
    return await lib
  }

  //  Console(...args: any[]): void {
  //   for (const arg of args) {
  //     console.log(arg);
  //   }
  // }




}

export { MemoryLibsTSRepository }