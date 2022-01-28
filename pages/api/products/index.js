import dbConnect from "../../../utill/mongo";
import Product from "../../../models/Product";

export default function handler(req, res) {
  const {mothod} = req;

    dbConnect()

    switch (req) {
        case 'GET':

            break;
        case 'POST':
            try {

            } catch (error) {
                res.status(500).json(err)
            }
            break;

    }
}
