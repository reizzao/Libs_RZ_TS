import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { IMyRulesIS, useRule } from "./lib.ts";
import { IMyRulesISFN } from "./lib.ts";
// import { assertThrows } from "https://deno.land/std@0.219.0/assert/mod.ts";

const sut = useRule

const rule1: IMyRulesISFN = async (target, myRule, msgError) => {
  if (target !== myRule?.text) {
    throw new Error(msgError)
  }
  return await target
}

const dataArg = "argFoo2"
const myMyRulesISOk: IMyRulesIS = { text: "argFoo" }
const myMsgError = "Ops"

Deno.test({
  name: "[ OK ] deve retornar o dado recebido.",
  only: false,
  async fn() {

    const res = await sut<string>(rule1, "argFoo", myMyRulesISOk, myMsgError)

    console.log("RESULTADO >> ", res)
    expect(res).toEqual(myMyRulesISOk.text);
  },

});


Deno.test({
  name: "[ FAIL ] deve retornar a messagem de erro .",
  only: false,
  async fn() {

    const tester = async () => {
      try {
        return await sut<string>(rule1, dataArg, myMyRulesISOk, myMsgError)
      } catch (e) {
        return e.message
      }
    }

    const res = await tester()

    expect(await res).toEqual(myMsgError)
  }

});

export default 1;

// });