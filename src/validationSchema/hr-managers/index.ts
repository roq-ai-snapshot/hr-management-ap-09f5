import * as yup from 'yup';

export const hrManagerValidationSchema = yup.object().shape({
  hr_manager_number: yup.number().integer().required(),
  start_date: yup.date().required(),
  end_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
