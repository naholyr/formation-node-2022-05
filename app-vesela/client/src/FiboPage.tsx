import { useCallback, useMemo, useState } from "react";
import { Async } from "./Async";
import { fibo } from "./server-api";

export const FiboPage = () => {
  const [computation, setComputation] = useState<
    [number | undefined, undefined | (() => Promise<number>)]
  >([undefined, undefined]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const n = Number(e.target.value);
    setComputation([n, () => fibo(n)]);
  }, []);

  const [n, fn] = computation;

  const Input = useMemo(
    () =>
      ({ readOnly = false }) =>
        (
          <input
            type="number"
            onChange={handleChange}
            placeholder="x"
            autoFocus
            readOnly={readOnly}
          />
        ),
    [handleChange]
  );

  return (
    <div className="fibo">
      <Async
        fn={fn}
        loading={() => (
          <>
            <Input readOnly />
            {"Loading fibo("}
            {n}
            {")…"}
          </>
        )}
      >
        {(result) => (
          <>
            <Input />
            {result !== undefined && `fibo(${n}) = ${result}`}
          </>
        )}
      </Async>
    </div>
  );
};
