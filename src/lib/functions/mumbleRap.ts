import type { Param } from "../types";
import { MumbleRap } from "../classes";

export function mumbleRap(params: Param.MumbleRap): () => string[][] {
  const instance = new MumbleRap(params);
  
  return () => instance.generate();
}