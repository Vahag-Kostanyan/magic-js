import { ValidateDataType, ValidationData, ValidationErrors } from "./types/types";
import ValidationFunctions from "./validationFunctions";

abstract class Validation {
    private data: ValidationData;
    private errors: ValidationErrors = {};

    constructor(data: ValidationData) {
        this.data = data;
    }

    /** Hook that runs before validation starts */
    protected beforeValidate(): void { }

    /** Hook that runs after validation finishes */
    protected afterValidate(): void { }

    /** Child classes must define their validation rules */
    protected abstract rules(): ValidateDataType;

    /** Get validation errors */
    public getErrors(): ValidationErrors {
        return this.errors;
    }

    /** Check if validation passed */
    public passes(): boolean {
        return Object.keys(this.errors).length === 0;
    }

    /** Perform validation */
    public validate(): boolean {
        this.beforeValidate();

        const rules = this.rules();

        for (const field in rules) {
            const fieldRules = rules[field];
            const value = this.data[field];
            for (const rule of fieldRules) {
                const [ruleName, ruleParam] = rule.split(':');
                const isValid = this.applyRule(ruleName, ruleParam, value);

                if (!isValid) {
                    this.addError(field, this.getErrorMessage(field, ruleName, ruleParam));
                }
            }
        }

        this.afterValidate();
        return this.passes();
    }

    /** Internal: apply single rule */
    private applyRule(ruleName: string, ruleParam: string | undefined, value: any): boolean {
        switch (ruleName) {
            case 'required': return ValidationFunctions.required(value);
            case 'string': return ValidationFunctions.string(value);
            case 'number': return ValidationFunctions.number(value);
            case 'boolean': return ValidationFunctions.boolean(value);
            case 'email': return ValidationFunctions.email(value);
            case 'max': return ValidationFunctions.max(value, Number(ruleParam));
            case 'min': return ValidationFunctions.min(value, Number(ruleParam));
            case 'length': return ValidationFunctions.exactLength(value, Number(ruleParam));
            case 'regex': return ValidationFunctions.regex(value, ruleParam || '');
            case 'in': return ValidationFunctions.in(value, (ruleParam || '').split(','));
            case 'startsWith': return ValidationFunctions.startsWith(value, ruleParam || '');
            case 'endsWith': return ValidationFunctions.endsWith(value, ruleParam || '');
            default: return true;
        }
    }

    /** Internal: store error message */
    private addError(field: string, message: string): void {
        if (!this.errors[field]) this.errors[field] = [];
        this.errors[field].push(message);
    }

    /** Internal: build error message */
    private getErrorMessage(field: string, rule: string, param?: string): string {
        switch (rule) {
            case 'required': return `${field} is required.`;
            case 'string': return `${field} must be a string.`;
            case 'number': return `${field} must be a number.`;
            case 'boolean': return `${field} must be true or false.`;
            case 'email': return `${field} must be a valid email.`;
            case 'max': return `${field} must not exceed ${param} characters.`;
            case 'min': return `${field} must be at least ${param} characters.`;
            case 'length': return `${field} must be exactly ${param} characters.`;
            case 'regex': return `${field} format is invalid.`;
            case 'in': return `${field} must be one of: ${param}.`;
            case 'startsWith': return `${field} must start with ${param}.`;
            case 'endsWith': return `${field} must end with ${param}.`;
            default: return `${field} is invalid.`;
        }
    }
}

export default Validation;