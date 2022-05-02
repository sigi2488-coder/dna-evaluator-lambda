const DnaEvaluatorProxy = require("./proxy/DnaEvaluatorProxy");
const constants = require("./utils/constants");

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    console.log("event:", body);
    const dnaEvalProxy = new DnaEvaluatorProxy();
    const applicantType = dnaEvalProxy.isMutant(body.dna);
    const logResult = await dnaEvalProxy.registerApplicant(
      body.dna,
      applicantType
    );
    console.log("logResult:", logResult);
    return {
      statusCode: applicantType
        ? constants.HTTP_SUCCESS_CODE
        : constants.HTTP_BUSSINES_CODE,
      headers: constants.HEADER,
      body: JSON.stringify({
        isMutant: applicantType,
      }),
    };
  } catch (error) {
    throw error;
  }
};
