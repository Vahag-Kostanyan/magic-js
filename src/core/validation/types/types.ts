type ValidationRule =
  | 'string'
  | 'number'
  | 'boolean'
  | 'required'
  | 'email'
  | `max:${number}`
  | `min:${number}`
  | `length:${number}`
  | `regex:${string}`
  | `in:${string}`
  | `startsWith:${string}`
  | `endsWith:${string}`;

type ValidateDataType = {
  [fieldName: string]: ValidationRule[];
};
