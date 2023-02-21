import { Param } from "../types/parameters";

export function handle(params: Param.Text): void {
  if (isNaN(params.length)) throw "Length must be a number!";
  if (params.paragraphs && isNaN(params.paragraphs)) throw "Paragraphs must be a number!";
  if (params.words && isNaN(params.words)) throw "Words must be a number!";
  if (params.length <= 0) throw "Length cannot be negative or equal 0!";
  if (params.words && params.words <= 0) throw "Words cannot be negative or equal 0!";
  if (params.paragraphs && params.paragraphs <= 0)
    throw "Paragraphs cannot be negative or equal 0!";
  if (params.words && params.words > params.length)
    throw "Words cannot be greater than the length of the text!";
  if (params.words && (params.length - params.words + 1) / params.words < 1)
    throw "The length of the text is too short for the amount of words!";
}