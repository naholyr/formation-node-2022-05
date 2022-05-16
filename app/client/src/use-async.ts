import { useEffect, useState } from "react";

export const useAsync = <T>(
  fn?: () => Promise<T>
): [T | undefined, Error | undefined, boolean] => {
  const [result, setResult] = useState<T | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!fn) return;
    setIsLoading(true);
    fn()
      .then((result: T) => {
        setResult(result);
        setIsLoading(false);
      })
      .catch((err: Error) => {
        setError(err);
        setIsLoading(false);
      });
  }, [fn]);

  return [result, error, isLoading];
};
