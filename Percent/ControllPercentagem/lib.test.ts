import { assertThrows } from "https://deno.land/std@0.219.0/assert/mod.ts";
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { ControllPercentage } from "./lib.ts";

const sut = ControllPercentage


Deno.test({
  name: "[ OK ] deve retornar a messagem de erro <.> .",
  only: false,
  async fn() {

    async function testLimitPercent100 () {
      try {
        return await sut.limitPercent100(101)
      } catch (e) {
        throw e.message
      }
    }

});

export default 1;