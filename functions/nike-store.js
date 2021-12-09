require("dotenv").config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIR_APIKYE })
  .base(process.env.AIR_BASE)
  .table("products");
  
exports.handler = async (event, context) => {
    try{
      const {records} = await airtable.list({
        maxRecords: 200,
      });
      const products=records.map(product=>{
        const {id,fields:{item,description,price,brand,sizes,stocks,colors,image}}=product;
        const photo = image.map(item=>{
          return item.url
        })
        return{id,item,description,price,brand,sizes,stocks,colors,image:photo[0]}
      })
      return {
        statusCode:200,
        body: JSON.stringify(products)
      }
    }catch(error){
      return {
        statusCode:400,
        body:"can't get Nike-shoes data please try again"
      }
  }
};
