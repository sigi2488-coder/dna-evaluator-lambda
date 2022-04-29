const constants = require("../utils/constants");
const aws = require("aws-sdk");

class DnaService {
  constructor() {
    this.dynamoDb = new aws.DynamoDB.DocumentClient({ region: "us-east-2" });
  }

  /**
   * @name evaluateHorizontalDnaSequence
   * @param {Array} applicantsData - Example: {id:'xxx',isMutant:false, createdAt:'2022-01-02'}
   * @return {Number}
   *
   */
  async registerDna(applicantsData) {
    const item = {
      TableName: constants.APPLICANTS_TABLE_NAME,
      Item: applicantsData,
    };
    return await this.dynamoDb.put(item).promise();
  }
}

module.exports = DnaService;
