exports.handler = async (event) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda new version 15 oct 16:35!'),
    };
    return response;
  };