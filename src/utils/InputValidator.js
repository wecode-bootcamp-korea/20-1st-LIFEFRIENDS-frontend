import { idRegx, pwRegx, nameRegx } from './constant/Regex';

const validator = {
  email: input => idRegx.test(input),
  password: input => pwRegx.test(input),
  name: input => nameRegx.test(input),
};

export default validator;
