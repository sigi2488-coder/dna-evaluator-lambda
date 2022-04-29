const index = require("../src/index");
const constants = require("../src/utils/constants");
const DnaEvaluatorProxy = require("../src/proxy/DnaEvaluatorProxy");

const dna = ["TTGCGA", "CAGTGC", "TTATAT", "AGAAGG", "ACCCTA", "TCACTG"];
const dnaExistDiag = [
  "TTGCGA",
  "CTGTAC",
  "ATTAGT",
  "AGATGG",
  "ACCCTA",
  "ACCCCG",
];

describe("index", () => {
  beforeEach(() => {
    jest
      .spyOn(DnaEvaluatorProxy.prototype, "registerApplicant")
      .mockImplementation(() => Promise.resolve({}));
  });
  describe("index handler ", () => {
    it("index handler. fail", async () => {
      const result = await index.handler({ dna: dna });
      expect(result.statusCode).toBe(constants.HTTP_BUSSINES_CODE);
    });
    it("index handler. Success", async () => {
      const result = await index.handler({ dna: dnaExistDiag });
      expect(result.statusCode).toBe(constants.HTTP_SUCCESS_CODE);
    });
    it("index handler. Error", async () => {
      try {
        await index.handler({});
      } catch (error) {
        expect(error.message).toBe(
          "Cannot read property 'forEach' of undefined"
        );
      }
    });
  });
});
