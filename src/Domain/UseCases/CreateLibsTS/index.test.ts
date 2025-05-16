// deno-lint-ignore-file no-explicit-any no-unused-vars
// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "@deps";

import { createLibsTSUseCase } from "./index.ts";
import { ILibsTSDTO } from "./dto.ts";

const sut = createLibsTSUseCase;
const fake = "foo"

Deno.test({
  name: "deve retornar o tipo undefined",
  only: false,
  fn() {
    // todo
    // sut.create()
    // expect(sut.create("foo")).toEqual(undefined);
  },
});



export default 1;
