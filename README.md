# repo to demonstrate a bug

[ava issus #2357](https://github.com/avajs/ava/issues/2357)


## To compile

```
npm install
npm run compile
npx ava -u
```


[Ava config](https://github.com/sramam/zz-issue-ava-3.0/blob/master/package.json#L76)

[Per](https://github.com/avajs/ava/issues/2357#issuecomment-572955621), I tried inverting the globs in "ignoredByWatcher" to no avail.

[Test](https://github.com/sramam/zz-issue-ava-3.0/blob/master/src/test/index.ts#L10)

[Build failures](https://github.com/sramam/zz-issue-ava-3.0/commit/1b5a0df5f4d6b6a8a69ffecdb2402f3a21710aff/checks?check_suite_id=394005505)

