const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  SAVE_CARD_DETAIL_URL: "http://localhost:7777/card/add",
  FETCH_CARD_DETAIL_URL: "http://localhost:7777/card/fetch",
  port: process.env.PORT
};