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
      const event = {
        body: JSON.stringify({
          dna: dna,
        }),
      };
      const result = await index.handler(event);
      expect(result.statusCode).toBe(constants.HTTP_BUSSINES_CODE);
    });
    it("index handler. Success", async () => {
      const event = {
        body: JSON.stringify({
          dna: dnaExistDiag,
        }),
      };
      const result = await index.handler(event);
      expect(result.statusCode).toBe(constants.HTTP_SUCCESS_CODE);
    });
    it("index handler. Error", async () => {
      try {
        const event = {
          body: JSON.stringify({}),
        };
        await index.handler(event);
      } catch (error) {
        expect(error.message).toBe(
          "Cannot read property 'forEach' of undefined"
        );
      }
    });
  });
});
