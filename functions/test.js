const axios = require("axios")

exports.handler = function(event, context, callback) {
  axios
    .get("https://api.fortnitetracker.com/v1/profile/pc/hagoona_matata", {
      headers: {
        "TRN-Api-Key": "c0143d30-ddc4-4a27-a3c8-df6ed00a6913",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: res.json(),
      })
    })
    .catch(err => {
      console.log(err)
      callback(new Error("Something went wrong"))
    })
}
