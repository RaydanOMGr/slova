import { Param } from "../types/parameters";

export function handle(params: Param.Word): void {
  if (params.length && isNaN(params.length)) throw 'Length must be a number!';
  if (params.amount && isNaN(params.amount)) throw 'Amount must be a number!';
  if (params.syllables && isNaN(params.syllables)) throw 'Syllables must be a number!';
  if (params.length && params.length < 0 || params.length === 0) throw 'Length cannot be negative or equal 0!';
  if (params.amount && params.amount < 0 || params.amount === 0) throw 'Amount cannot be negative or equal 0!';
  if (params.syllables && params.syllables < 0 || params.syllables === 0) throw 'Syllables cannot be negative or equal 0!';
}