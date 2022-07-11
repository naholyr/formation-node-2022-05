## Alternative populaire : [Jest](https://jestjs.io/fr/docs/getting-started)

```sh
npm install jest ; jest --init
```

- Librairie d'[assertion](https://jestjs.io/docs/expect) et de [_mocking_](https://jestjs.io/docs/mock-function-api)
- [Snapshots](https://jestjs.io/docs/snapshot-testing) 😍
- [Support natif d'ESM](https://jestjs.io/fr/docs/ecmascript-modules)

```js
import fibo from "./fibo";

const mockFibo = jest.fn(() => 42);
jest.mock("./fibo", () => {
  return mockFibo;
});

describe("Some test", () => {
  it("should call fibo", () => {
    expect(fibo()).toEqual(42);
    expect(mockFibo).toHaveBeenCalled();
  });
});
```
