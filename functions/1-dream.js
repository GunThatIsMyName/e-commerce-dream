require("dotenv").config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIR_APIKYE })
  .base(process.env.AIR_BASE)
  .table("products");

exports.handler = async (event, context) => {
  const { id:paramsId } = event.queryStringParameters;
  if (paramsId) {
    try {
      const singleProduct = await airtable.retrieve(paramsId);
      if (singleProduct.error) {
        return {
          statusCode: 404,
          body: `Can't get a Data with ${paramsId} . please try again `,
        };
      }
      const {
        id,
        fields: { Notes, Name, Status, Attachments },
      } = singleProduct;
      const imgData = Attachments.map((item) => {
        const { url: image, id: imageId } = item;
        return { image, imageId };
      });
      const singleItem = { id, Notes, Name, Status, imgData };
      console.log(singleItem, "@");
      return {
        statusCode: 200,
        body: JSON.stringify(singleItem),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "single pageSERVER ERROR",
      };
    }
  }
  try {
    const { records } = await airtable.list();
    const product = records.map((item) => {
      const {
        id,
        fields: { Notes, Name, Status, Attachments },
      } = item;
      const imgData = Attachments.map((item) => {
        const { url: image, id: imageId } = item;
        return { image, imageId };
      });
      return { id, Notes, Name, Status, imgData };
    });
    return {
      statusCode: 200,
      body: JSON.stringify(product),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "SERVER ERROR",
    };
  }
};
