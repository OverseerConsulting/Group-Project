const axios = require("axios");
const url = "http://localhost:3002/api/report";
const getAllReportsFromExpress = async url => {
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

getAllReportsFromExpress(url);
module.exports = { getAllReportsFromExpress }