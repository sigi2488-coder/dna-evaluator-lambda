const constants = require("../utils/constants");

class DnaEvaluator {
  constructor() {
    this.seqsCounter = 0;
  }

  /**
   * @name evaluateHorizontalDnaSequence
   * @param {Array} dna - Example: ["TTGCGA", "CAGTGC", "TTATGT", "AGAAGG", "ACCCTA", "TCACTG"]
   * @return {Number}
   *
   */
  evaluateHorizontalDnaSequence(dna) {
    let htzlCounter = 0;
    dna.forEach((base) => {
      htzlCounter += this.existSeqInBase(base) ? 1 : 0;
    });
    this.seqsCounter += htzlCounter;
    return htzlCounter;
  }

  /**
   * @name evaluateVerticalDnaSequence
   * @param {Array} dna - Example: ["TTGCGA", "CAGTGC", "TTATGT", "AGAAGG", "ACCCTA", "TCACTG"]
   * @return {Number}
   *
   */
  evaluateVerticalDnaSequence(dna) {
    let vrtlCounter = 0;
    for (let htzlLen = 0; htzlLen < dna.length; htzlLen++) {
      const base = dna.map((e) => e[htzlLen]).join("");
      vrtlCounter += this.existSeqInBase(base) ? 1 : 0;
    }
    this.seqsCounter += vrtlCounter;
    return vrtlCounter;
  }

  /**
   * @name evaluateObliqueDnaSequence
   * @param {Array} dna - Example: ["TTGCGA", "CAGTGC", "TTATGT", "AGAAGG", "ACCCTA", "TCACTG"]
   * @return {Number}
   *
   */
  evaluateObliqueDnaSequence(dna) {
    let oblqCounter = 0;
    const dnaInvert = [...dna];
    dnaInvert.reverse();
    let wide = dna.length;
    const matrix = [];
    for (let diagonals = 0; diagonals < dna.length; diagonals++) {
      const points = {
        DS: [],
        DII: [],
        DI: [],
        DIS: [],
      };
      if (wide >= 4) {
        for (let index = 0; index < wide; index++) {
          points["DS"].push(dna[diagonals + index][index]);
          points["DII"].push(dnaInvert[diagonals + index][index]);
          if (diagonals !== 0) {
            points["DI"].push(dna[index][diagonals + index]);
            points["DIS"].push(dnaInvert[index][diagonals + index]);
          }
        }
        matrix.push(points["DS"].join(""));
        matrix.push(points["DII"].join(""));
        matrix.push(points["DI"].join(""));
        matrix.push(points["DIS"].join(""));
      }
      wide--;
    }
    matrix.forEach((base) => {
      oblqCounter += this.existSeqInBase(base) ? 1 : 0;
    });
    this.seqsCounter += oblqCounter;
    return oblqCounter;
  }

  /**
   * @name existSeqInBase
   * @param {String} base - Example: "TTGCGA"
   * @return {Boolean}
   *
   */
  existSeqInBase(base) {
    return !!constants.SEQS.find((seq) => base.includes(seq));
  }
}

module.exports = DnaEvaluator;
