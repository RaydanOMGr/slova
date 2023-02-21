import type { Param } from "../types/parameters";
import { Word } from "../classes";

export function word(params: Param.Word): () => string[] {
  const instance = new Word(params);

  return () => instance.generate();
}