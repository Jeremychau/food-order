import dbConnect from "../../../utill/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const {method, cookies} = req;

    dbConnect()

    const token = cookies.token

    switch (method) {
        case 'GET':
            const products = await Product.find();
            res.status(200).json(products)
            break;
        case 'POST':
            if(!token || token !== process.env.token){
                return res.status(401).json("Not Admin")
            }
            try {
                const product = await Product.create(req.body);
                res.status(201).json(product)
            } catch (err) {
                res.status(500).json(err)
            }
            break;

    }
}
