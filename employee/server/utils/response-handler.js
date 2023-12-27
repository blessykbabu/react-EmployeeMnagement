 function successFunction(apiParameter) {
  let response = {
    success: true,
    statusCode:apiParameter.statusCode,
    data: apiParameter.data ? apiParameter.data : null,
    message: apiParameter.message ? apiParameter.message : null,

  };
  return response
}
 function errorFunction(apiParameter) {
  let response = {
    success: false,
    statusCode: apiParameter.statusCode,
    data: apiParameter.data ? apiParameter.data : null,
    message: apiParameter.message ? apiParameter.message : null
  };
  return response
}
module.exports={
  successFunction,
  errorFunction
}
