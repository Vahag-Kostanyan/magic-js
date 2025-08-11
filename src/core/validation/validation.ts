abstract class Validation {
    private static validateData: Array<any>;

    public static validate(actions: ValidateDataType){
        for (const key in actions) {
           console.log(key);
        }
    }


    protected abstract rules(): ValidateDataType;
}

export default Validation;