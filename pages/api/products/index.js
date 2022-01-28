import dbConnect from "../../../utill/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const {mothod} = req;

    dbConnect()

    switch (req) {
        case 'GET':

            break;
        case 'POST':
            try {
                const product = await Product.create(req.body);
                res.status(201).json(product)
            } catch (error) {
                res.status(500).json(err)
            }
            break;

    }
}
