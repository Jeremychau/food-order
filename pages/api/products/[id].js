import dbConnect from "../../../utill/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
    const { method, query:{id} } = req;

    dbConnect()

    switch (method) {
        case 'GET':
            console.log(id);
            const product = await Product.findById(id);
            res.status(200).json(product)
            break;
        case 'PUT':
            const products = await Product.find();
            res.status(200).json(products)
            break;
        case 'DELETE':
            try {
                const product = await Product.create(req.body);
                res.status(201).json(product)
            } catch (err) {
                res.status(500).json(err)
            }
            break;

    }
}
