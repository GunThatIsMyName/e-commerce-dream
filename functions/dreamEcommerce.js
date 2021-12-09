require("dotenv").config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIR_APIKYE })
  .base(process.env.AIR_BASE)
  .table("products");

exports.handler = async (event, context) => {

};
