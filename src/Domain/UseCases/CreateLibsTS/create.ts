import { LibsTSModel } from "../../Model/LibsTS.ts";
import { ILibsTSRepository } from "../../Repositories/ILibsTSRepository.ts";
import { ILibsTSDTO } from "./dto.ts";



class CreateLibsTSUseCase {
  constructor(private readonly libsTSRepository: ILibsTSRepository) {}

  async execute(lib: ILibsTSDTO): Promise<LibsTSModel> {
    // const newLib = new LibsTSModel(lib)
    const res = await this.libsTSRepository.create(lib)

    return await res
  }

}

export { CreateLibsTSUseCase }