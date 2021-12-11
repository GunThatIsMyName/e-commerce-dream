require("dotenv").config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIR_APIKYE })
  .base(process.env.AIR_BASE)
  .table("products");
  
exports.handler = async (event, context) => {
  const itemId = event.queryStringParameters.id;
  if(itemId){
      try{
          const records = await airtable.retrieve(itemId);
          const {id,fields:{item,description,price,brand,sizes,stocks,colors,image}}=records;
          const singleImg = image.map(data=>data.url);
          const singleItem = {
            id,item,description,price,brand,sizes,stocks,colors,image:singleImg[0]
          }
          return {
            statusCode:200,
            body: JSON.stringify(singleItem)
          }
      }catch{
        return {
          statusCode:500,
          body: "can't get Nike-shoes single data please try again"
        }
      }
  }
    try{
      const {records} = await airtable.list({
        maxRecords: 50,
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
