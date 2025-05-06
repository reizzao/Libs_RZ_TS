import { assertThrows } from "https://deno.land/std@0.219.0/assert/mod.ts";
import { replayTryCatch } from "./lib.ts";

const sut = replayTryCatch
const msgError = "Ops..contem erro"

function throwNewError(d: any) {
  if (d < 2) {
    throw new Error(msgError)
  }
  return d
}

Deno.test({
  name: "[ FAIL ] deve checar se retorna a mensagem de erro.",
  only: false,
  async fn() {
    assertThrows(() => throwNewError(1), Error, msgError);
  },

});