import { Param } from "../types/parameters";

export function handle(params: Param.MumbleRap): void {
  if (params.length && isNaN(params.length)) throw new Error('Length must be a number!');
  if (params.length && params.length <= 0) throw new Error('Length cannot be negative or equal 0!');
  if (typeof params.scheme !== 'string') throw new Error('Scheme must be a string!');
  if (!params.scheme.match(/^([q|c])\1*(?:-([q|c]))*$/)) throw new Error('Scheme must only contain q and c!');
  if (params.scheme.length < 1) throw new Error('Scheme cannot be empty!');
}