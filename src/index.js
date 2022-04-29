const DnaEvaluatorProxy = require("./proxy/DnaEvaluatorProxy");
const constants = require("./utils/constants");

exports.handler = async (event) => {
  try {
    const dnaEvalProxy = new DnaEvaluatorProxy();
    const applicantType = dnaEvalProxy.isMutant(event.dna);
    const logResult = await dnaEvalProxy.registerApplicant(
      event.dna,
      applicantType
    );
    console.log("logResult:", logResult);
    return {
      statusCode: applicantType
        ? constants.HTTP_SUCCESS_CODE
        : constants.HTTP_BUSSINES_CODE,
      body: JSON.stringify({
        isMutant: applicantType,
      }),
    };
  } catch (error) {
    throw error;
  }
};
