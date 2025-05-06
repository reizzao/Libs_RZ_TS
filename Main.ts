// import { Console } from "@libs"
import { Console } from "./src/Entitys/Console/index.ts"

interface LibTS {
  Log: (...a: any) => void
}

const Lib_RzTS: LibTS = {
  Log: Console.log,
}



export { Lib_RzTS }

