import { celebrate, Joi, Segments } from "celebrate";

export default {
    insert: celebrate({
        [Segments.BODY]: {
            produto: Joi.string().required(),
            valor: Joi.number().required()    
        }
    }),
    list: celebrate({
        [Segments.QUERY]: {
            produtoId: Joi.string().uuid(),
            produto: Joi.string(),
        },
    }),
    remove: celebrate({
        [Segments.PARAMS]:{
            id: Joi.string().uuid()
        },
    }),
    update: celebrate({
        [Segments.BODY]:{
            produto: Joi.string().required(),
            valor: Joi.number().required(),
        },
        [Segments.PARAMS]: {
            produtoId: Joi.string().uuid().required(),
        }
    })
}