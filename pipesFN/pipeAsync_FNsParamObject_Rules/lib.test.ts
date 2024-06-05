import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { TypeParamRules, pipeParamRules } from "./lib.ts";

const sut = pipeParamRules


Deno.test({
  name: "[ OK ] deve modificar para 1000 o campo c1 do obj criado .",
  only: false,
  async fn() {
    interface TypeRequest { c1: number, c2: number }
    const paramRule: TypeParamRules = { numeric: 3000 }
    const requestMock: TypeRequest = { c1: 1, c2: 2 }
    const expected: TypeRequest = { c1: 3000, c2: 2 }

    function fnMultiplica(target: TypeRequest, objParamRule: TypeParamRules) {
      const multiplicado = Number(objParamRule?.numeric! * target.c1)
      return {
        c1: multiplicado,
        c2: target.c2
      }
    }

    const listFN = [fnMultiplica]

    const result = await sut<TypeRequest>(requestMock, listFN, paramRule)

    console.log("RESULTADO >>> ", result)

    expect(await result).toEqual(expected);
  },
});

Deno.test({
  name: "[ OK ] deve ",
  only: false,
  async fn() {
    interface TypeRequest { c1: string }
    const paramRule: TypeParamRules = { text: "VIP" }
    const requestMock: TypeRequest = { c1: "VIP" }
    const expected: TypeRequest = { c1: "VIP_SUPREMO" }

    function modificaParaVIP(target: TypeRequest, objParamRule: TypeParamRules) {
      if (target.c1 === objParamRule?.text!) {
        target.c1 = "VIP_SUPREMO"
      }
      return target
    }

    const listFN = [modificaParaVIP]
    const result = await sut<TypeRequest> (requestMock, listFN, paramRule)
    console.log("RESULTADO >>> ", result)

    expect(await result).toEqual(expected);
  },
});


export default 1;