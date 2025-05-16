import { MemoryLibsTSRepository } from "../../Repositories/Implementations/MemoryLibsTSRepository.ts";


const optionsRepoCreateLibsTSUseCase = {
  memory: new MemoryLibsTSRepository,
  json: new MemoryLibsTSRepository,
}

const createLibsTSUseCase = optionsRepoCreateLibsTSUseCase.memory

export { createLibsTSUseCase }