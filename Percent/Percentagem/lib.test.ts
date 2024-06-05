import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { Percentagem } from "../Percentagem/lib.ts";

const sut = Percentagem

Deno.test({
  name: "[ Ok ] deve { DESCONTAR } a porcentagem inserida do valorAlvo e retornar o quanto descontou.",
  only: false,
  async fn() {
    const return1 = await sut.discount(10, 1)
    const return10 = await sut.discount(100, 10)
    const confirmNOTReturn10 = return10 === 9.9
    const confirmReturn10 = return10 === 10
    const testONE = await sut.discount(1599, 19)
    const six = await sut.discount(20, 30)

    // console.log("RESULTADO >> ", return1)
    // console.log("RESULTADO >> ", return10)

    expect(await return1).toEqual(0.1);
    expect(await return1).not.toEqual(10);
    expect(await return10).toEqual(10);
    expect(await confirmNOTReturn10).not.toBeTruthy()
    expect(await confirmReturn10).toBeTruthy()
    expect(await testONE).toEqual(303.81)
    expect(await six).toEqual(6)
  },

});

// (calculadora de Porcentagem Online)[https://easycredito.com.br/calculadoras/porcentagem]

export default 1;