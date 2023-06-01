import InsertProductOperation from "../../operations/InsertProductOperation";

export default {
    insert: async (req, res) =>{
        const result = await InsertProductOperation(req.body).catch((err)=>{
            res.status(400).send(err);
        });
        res.status(201).send(result)

 
    }
    // list:
    // remove:
    // upudate:
}