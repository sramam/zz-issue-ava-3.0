
import test from "ava";
import { main } from "..";

test(`main`, async (t) => {
  await main();
  t.pass();
});

test(`snapshot-test`, async (t) => {
  t.snapshot("modified");
});
