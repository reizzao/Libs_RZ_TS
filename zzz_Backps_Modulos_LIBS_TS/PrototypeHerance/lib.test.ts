import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { herancePrototypeOfObject } from "./lib.ts";

const sut = herancePrototypeOfObject

class MinhaClasse {
  constructor(public c1: string, public c2: string) { }
  metodo1() {
    return `Ola metodo 1 : minhas props c1= ${this.c1} e c2 = ${this.c2}`;
  }

  acessoOutro() {
    const heranca = sut(outro);
    return heranca.metodoOutroObj();
  }
}

const objeto1 = new MinhaClasse("vcum", "vcdois");
const objeto2 = new MinhaClasse("222", "20000");

class OutroObj {
  constructor(public c1: string, public c2: string) { }
  metodoOutroObj() {
    return `Ola metodo OutroObj : minhas props c1= ${this.c1} e c2 = ${this.c2}`;
  }
}

const outro = new OutroObj("888", "999");


Deno.test({
  name: "[ OK ] deve retornar o acesso a metodo do outro objeto.",
  only: false,
  async fn() {
    const result = objeto1

    expect(result.acessoOutro()).toEqual("Ola metodo OutroObj : minhas props c1= 888 e c2 = 999");
  },

});

Deno.test("[ OK ] deve retornar .", () => {

  expect(true).toEqual(true);
});

/* -- TESTER_CONSOLE -- */

async function tester_() { }
// tester_ ();

export default 1;