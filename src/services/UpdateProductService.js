import productsModel from '../models/productsModel.js'

export default async (data) => {
    const result = await productsModel.insert(data)
    const dataNotInserted = !result.insertedId;

    if (dataNotInserted) throw new TypeError('Produto não inserido')

    const [inserted] = await productsModel.findAll({
        "_id": result.insertedId
    }) 
    return inserted;
}