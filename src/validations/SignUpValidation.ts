import { ValidateDataType, ValidationData } from "../core/validation/types/types";
import Validation from "../core/validation/validation";

class SignUpValidation extends Validation {
    constructor(data: ValidationData) {
        super(data);
    }

    /** Example: logic before validation */
    protected beforeValidate(): void {
        console.log("Starting SignUp validation...");
    }

    /** Example: logic after validation */
    protected afterValidate(): void {
        console.log("Finished SignUp validation.");
    }

    /** Define rules for SignUp form fields */
    protected rules(): ValidateDataType {
        return {
            name: ["required", "string", "min:3", "max:20"],
            email: ["required", "email"],
            password: ["required", "string", "min:6"],
            phone: ["string", "regex:^\\+?\\d{10,15}$"], // optional phone format validation
        };
    }
}

export default SignUpValidation;
