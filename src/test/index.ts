import test from "ava";
import { main } from "..";

const delay = (d) => new Promise((r) => setTimeout(r, d));

test(`main`, async (t) => {
  await main();
  t.pass();
});

test(`snapshot-test`, async (t) => {
  t.snapshot("modified");
});

test(`timeout test`, async (t) => {
  t.timeout(15000);
  await delay(12 * 1000);
  t.pass();
});
