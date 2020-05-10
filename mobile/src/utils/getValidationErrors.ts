import { ValidationError } from 'yup';

// interface modificada para receber qualquer valor que seja string
interface Errors {
  [key: string]: string;
}

// a função receberá um objeto de erros do yup onde os erros ficam localizados no campo inner
// path no objeto de erros representa o name do input
export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
