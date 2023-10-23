import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  employee_number: yup.number().integer().required(),
  hire_date: yup.date().required(),
  termination_date: yup.date().nullable(),
  position: yup.string().required(),
  department: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
