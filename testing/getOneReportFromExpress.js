const axios = require("axios");
const url = "http://localhost:3002/api/report/StonePages4-8.pdf";
const getOneReportFromExpress = async url => {
  try {
    axios.defaults.adapter = require('axios/lib/adapters/http')
    const response = await axios.get(url);
    const data = response.data;
    //console.log(data);
    return (data);
  } catch (error) {
    console.log(error);
  }
};

getOneReportFromExpress(url);
module.exports = { getOneReportFromExpress }