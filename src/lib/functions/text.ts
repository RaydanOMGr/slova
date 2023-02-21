import type { Param } from "../types";
import { Text } from "../classes";

export function text(params: Param.Text): () => string[] {
  const instance = new Text(params);

  return () => instance.generate();
}
