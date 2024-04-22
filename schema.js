const Joi = require('joi');

const resumeschema=Joi.object({
    data:Joi.object({
        name:Joi.string().required(),
        email:Joi.string().required(),
        phno:Joi.string().required(),
        linkedin:Joi.string().required(),
        github:Joi.string().required(),
        skills:Joi.string().required(),
        education:Joi.array().items(Joi.string()).required(),
        experience:Joi.array().items(Joi.string()),
        achievements:Joi.array().items(Joi.string()),
        hobbies:Joi.string().required(),


    }).required()

})

module.exports={resumeschema};