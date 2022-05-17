import { useAsync } from "./use-async";
import type { ReactNode } from "react";

type Props<T> = {
  fn?: () => Promise<T>;
  error?: (err: Error) => ReactNode;
  loading?: () => ReactNode;
  children?: (data: T | undefined) => ReactNode;
};

export const Async = <T extends unknown>(props: Props<T>) => {
  const [result, error, loading] = useAsync(props.fn);

  if (error) {
    if (props.error) {
      return <>{props.error(error)}</>;
    }
    return <span className="error">{error.message}</span>;
  }

  if (loading) {
    if (props.loading) {
      return <>{props.loading()}</>;
    }
    return <span className="loading">(loading…)</span>;
  }

  if (!props.children) return <>{result}</>;

  return <>{props.children(result)}</>;
};
