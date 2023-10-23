import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  customer_number: yup.number().integer().required(),
  registration_date: yup.date().required(),
  user_id: yup.string().nullable().required(),
});
