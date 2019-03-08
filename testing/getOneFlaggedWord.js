const axios = require("axios");
const url = "http://localhost:3002/api/flaggedWords/Abbott";
const getOneFlaggedWord = async url => {
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

getOneFlaggedWord(url);
module.exports = { getOneFlaggedWord }