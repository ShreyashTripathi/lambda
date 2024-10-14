exports.handler = async (event) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda new version 14 oct 17:10!'),
    };
    return response;
  };