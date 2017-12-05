exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    headers: { 'x-custom-header': 'custom header' },
    body: `Hello ${event.body}`
  });
};
