const DnaEvaluatorProxy = require("../../src/proxy/DnaEvaluatorProxy");
const DnaService = require("../../src/services/DnaService");

const dna = ["TTGCGA", "CAGTGC", "TTATAT", "AGAAGG", "ACCCTA", "TCACTG"];
const dnaExistDiag = [
  "TTGCGA",
  "CTGTAC",
  "ATTAGT",
  "AGATGG",
  "ACCCTA",
  "ACCCCG",
];
const dnaExistHtzl = ["TTGC", "GGGG", "TTTT"];
describe("DnaEvaluatorProxy", () => {
  beforeEach(() => {});
  describe("DnaEvaluatorProxy isMutant ", () => {
    it("DnaEvaluatorProxy isMutant. Does not contain sequences", () => {
      const dnaEvaluatorProxy = new DnaEvaluatorProxy();
      const result = dnaEvaluatorProxy.isMutant(dna);
      expect(result).toBe(false);
    });
    it("DnaEvaluatorProxy isMutant. Contain sequences", () => {
      const dnaEvaluatorProxy = new DnaEvaluatorProxy();
      const result = dnaEvaluatorProxy.isMutant(dnaExistDiag);
      expect(result).toBe(true);
    });
    it("DnaEvaluatorProxy isMutant. Contain Horizontal sequences ", () => {
      const dnaEvaluatorProxy = new DnaEvaluatorProxy();
      const result = dnaEvaluatorProxy.isMutant(dnaExistHtzl);
      expect(result).toBe(true);
    });
  });
  describe("DnaEvaluatorProxy registerApplicant ", () => {
    it("DnaEvaluatorProxy registerApplicant. Success", async () => {
      jest
        .spyOn(DnaService.prototype, "registerDna")
        .mockImplementation(() => Promise.resolve({}));
      const dnaEvaluatorProxy = new DnaEvaluatorProxy();
      const result = await dnaEvaluatorProxy.registerApplicant(dna, false);
      expect(result).toBeDefined();
    });
  });
});
