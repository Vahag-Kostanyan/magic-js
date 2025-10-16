export type ValidationRule =
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

/**
 * Defines validation rules for each field.
 * Example:
 * {
 *   email: ['required', 'email'],
 *   name: ['string', 'min:3']
 * }
 */
export type ValidateDataType = Record<string, ValidationRule[]>;

/**
 * The actual data that needs to be validated.
 * Example:
 * {
 *   email: "user@example.com",
 *   name: "John"
 * }
 */
export type ValidationData = Record<string, any>;

/**
 * Stores validation errors per field.
 * Example:
 * {
 *   email: ["Email is invalid"],
 *   name: ["Name is required"]
 * }
 */
export type ValidationErrors = Record<string, string[]>;
