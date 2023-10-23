import * as yup from 'yup';

export const ownerValidationSchema = yup.object().shape({
  owner_number: yup.number().integer().required(),
  start_date: yup.date().required(),
  end_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
