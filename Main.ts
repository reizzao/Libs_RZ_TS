import { log } from "./Entitys/LogConsole"

interface LibTS {
  Console: () => void
}

const Lib_RzTS: LibTS = {
  Console: log,
}

export { Lib_RzTS }

