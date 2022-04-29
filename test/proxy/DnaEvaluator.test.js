const DnaEvaluator = require("../../src/proxy/DnaEvaluator");

const dna = ["TTGCGA", "CAGTGC", "TTATAT", "AGAAGG", "ACCCTA", "TCACTG"];
const dnaExistDiag = [
  "TTGCGA",
  "CTGTAC",
  "ATTAGT",
  "AGATGG",
  "ACCCTA",
  "ACCCCG",
];
describe("DnaEvaluator", () => {
  beforeEach(() => {});
  describe("DnaEvaluator evaluateObliqueDnaSequence ", () => {
    it("createStepFunctionsFactoryMessage evaluateObliqueDnaSequence. Does not contain sequences", () => {
      const dnaEvaluator = new DnaEvaluator();
      const result = dnaEvaluator.evaluateObliqueDnaSequence(dna);
      expect(result).toBe(0);
    });
    it("createStepFunctionsFactoryMessage evaluateObliqueDnaSequence. Contains sequences", () => {
      const dnaEvaluator = new DnaEvaluator();
      const result = dnaEvaluator.evaluateObliqueDnaSequence(dnaExistDiag);
      expect(result).toBe(2);
    });
  });
  describe("DnaEvaluator evaluateVerticalDnaSequence ", () => {
    it("createStepFunctionsFactoryMessage evaluateVerticalDnaSequence. Does not contain sequences", () => {
      const dnaEvaluator = new DnaEvaluator();
      const result = dnaEvaluator.evaluateVerticalDnaSequence(dna);
      expect(result).toBe(0);
    });
    it("createStepFunctionsFactoryMessage evaluateVerticalDnaSequence. Contains sequences", () => {
      const dnaEvaluator = new DnaEvaluator();
      const result = dnaEvaluator.evaluateVerticalDnaSequence(dnaExistDiag);
      expect(result).toBe(1);
    });
  });
  describe("DnaEvaluator evaluateHorizontalDnaSequence ", () => {
    it("createStepFunctionsFactoryMessage evaluateHorizontalDnaSequence. Does not contain sequences", () => {
      const dnaEvaluator = new DnaEvaluator();
      const result = dnaEvaluator.evaluateHorizontalDnaSequence(dna);
      expect(result).toBe(0);
    });
    it("createStepFunctionsFactoryMessage evaluateHorizontalDnaSequence. Contains sequences", () => {
      const dnaEvaluator = new DnaEvaluator();
      const result = dnaEvaluator.evaluateHorizontalDnaSequence(dnaExistDiag);
      expect(result).toBe(1);
    });
  });
});
