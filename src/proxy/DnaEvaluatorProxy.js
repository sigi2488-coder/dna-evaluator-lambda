const DnaService = require("../services/DnaService");
const DnaEvaluator = require("./DnaEvaluator");

class DnaEvaluatorProxy extends DnaEvaluator {
  constructor() {
    super();
  }

  /**
   * @param {Array} dna
   * @return {boolean}
   * @name isMutant
   */
  isMutant(dna) {
    if (this.evaluateHorizontalDnaSequence(dna) < 2) {
      this.evaluateVerticalDnaSequence(dna);
      if (this.seqsCounter < 2) {
        this.evaluateObliqueDnaSequence(dna);
      }
    }
    return this.seqsCounter >= 2;
  }

  async registerApplicant(dna, isMutant) {
    const applicantData = {
      id: dna.join(""),
      isMutant: isMutant,
      createdAt: new Date().toISOString(),
    };
    return await new DnaService().registerDna(applicantData);
  }
}
module.exports = DnaEvaluatorProxy;
