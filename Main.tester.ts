// tester

import { Lib_RzTS } from "./Main.ts"

const obj1000: any = { nome: "rei", numero: 10.05 }
const obj10001: any = () => "sou o resultado da funcao1 "

Lib_RzTS.Log(obj1000)
Lib_RzTS.Log(obj10001())
Lib_RzTS.Log("Hellow 1234 ")