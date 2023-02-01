const joi = require('joi');
const {
  options, isCountOnly, populate, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  serverName: joi.string().regex(/[a-z]/).allow(null).allow(''),
  flag_url: joi.string().allow(null).allow(''),
  isActive: joi.boolean(),
  ovpnConfiguration: joi.string().allow(null).allow(''),
  vpnUserName: joi.string().allow(null).allow(''),
  vpnPassword: joi.string().allow(null).allow(''),
  free: joi.boolean(),
  isDeleted: joi.boolean()
}).unknown(true);

const updateSchema = joi.object({
  serverName: joi.string().regex(/[a-z]/).allow(null).allow(''),
  flag_url: joi.string().allow(null).allow(''),
  isActive: joi.boolean(),
  ovpnConfiguration: joi.string().allow(null).allow(''),
  vpnUserName: joi.string().allow(null).allow(''),
  vpnPassword: joi.string().allow(null).allow(''),
  free: joi.boolean(),
  isDeleted: joi.boolean(),
  _id: joi.string().regex(/^[0-9a-fA-F]{24}$/)
}
).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      serverName: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      flag_url: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      ovpnConfiguration: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      vpnUserName: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      vpnPassword: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      free: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any(),
      _id: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object())
    }
    ).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  populate: joi.array().items(populate),
  select: select

}).unknown(true);

module.exports = {
  createSchema,
  updateSchema,
  filterValidationSchema
};