import { FactArray } from "./factArray";

const FactGen = function generateFact() {
  let factNumber = Math.floor(Math.random() * FactArray.length);
  return FactArray[factNumber];
};

export default FactGen;
