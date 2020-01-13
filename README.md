# repo to demonstrate a bug

[ava issus #2357](https://github.com/avajs/ava/issues/2357)


## Steps to reproduce

### Install & compile module

```
npm install
npm run compile
```

### Source of [long-running test](https://github.com/sramam/zz-issue-ava-3.0/blob/master/src/test/index.ts#L15)

```
test(`timeout test`, async (t) => {
  t.timeout(15000);
  await delay(12 * 1000);
  t.pass();
});

```

### Run with default timeout
```
npx ava --verbose
```

The long running test times-out:
```
$ npx ava --verbose

  ✔ snapshot-test
  ✔ main

  ✖ Timed out while running tests

  1 tests were pending in dist/test/index.js

  ◌ timeout test


  2 tests passed
```

### Run with cli based timeout setting

```
$ npx ava -T 12500 --verbose

  ✔ snapshot-test
  ✔ main
  ✔ timeout test (12s)

  3 tests passed
```
