import { Validator } from 'vee-validate'

Validator.extend('phone', {
  validate: value => {
    return /^1[34578]\d{9}$/.test(value)
  }
});