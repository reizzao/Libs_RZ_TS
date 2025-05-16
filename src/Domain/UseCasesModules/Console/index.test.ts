// deno-lint-ignore-file no-explicit-any no-unused-vars
// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "@deps";

import { Console } from "./index.ts";

const sut = Console;

Deno.test({
  name: "deve retornar o tipo undefined",
  only: false,
  fn() {
    // todo
    const tested = sut
    const fakeInput = "foo"

    expect(tested(fakeInput)).toEqual(undefined);
  },
});



export default 1;
