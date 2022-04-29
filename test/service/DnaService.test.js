const DnaService = require("../../src/services/DnaService");
const aws = require("aws-sdk-mock");
describe("DnaService", () => {
  beforeEach(() => {});
  describe("DnaService registerDna ", () => {
    it("DnaService registerDna. Success", async () => {
      aws.mock("DynamoDB.DocumentClient", "put", function (params, callback) {
        callback(null, "successfully put item in database");
      });
      const dnaService = new DnaService();
      const result = await dnaService.registerDna({
        id: "ABC",
        isMutant: false,
        createdAt: "2022-01-02",
      });
      expect(result).toBe("successfully put item in database");
    });
  });
});
