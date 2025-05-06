import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { Generator } from "./lib.ts";

const sut = await Generator

Deno.test({
  name: "[ OK ] deve retornar um id unico no formato de string que nao seja nulo.",
  only: false,
  async fn() {
    const action = await sut.makeStringID()
    // console.log("SAIDA CONSOLE: ", await action)

    expect(await action).not.toBeNull();
  },

});

Deno.test("[ OK ] deve retornar .", () => {

  expect(true).toEqual(true);
});

export default 1;