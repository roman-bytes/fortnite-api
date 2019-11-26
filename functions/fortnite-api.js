const axios = require("axios");

exports.handler = function(event, context, callback) {
  const { player } = event.queryStringParameters;
  axios
    .get(`https://api.fortnitetracker.com/v1/profile/pc/${player}`, {
      headers: {
        "TRN-Api-Key": "c0143d30-ddc4-4a27-a3c8-df6ed00a6913",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then(res => {
      const playerId = res.data.accountId;

      axios
        .get(
          `https://api.fortnitetracker.com/v1/profile/account/${playerId}/matches`,
          {
            headers: {
              "TRN-Api-Key": "c0143d30-ddc4-4a27-a3c8-df6ed00a6913",
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then(res => {
          console.log("res", res);

          const data = JSON.stringify(res.data);
          callback(null, {
            statusCode: 200,
            body: data,
          });
        });
    })
    .catch(err => {
      console.log(err);
      callback(new Error("Something went wrong"));
    });
};
