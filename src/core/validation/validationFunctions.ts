class ValidationFunctions {
    static validatePhoneNumber(phone: string): boolean {
        const regex = /^(\+?\d{1,3})?[-.\s()]?\d{3}[-.\s()]?\d{3,4}[-.\s()]?\d{4}$/;
        return regex.test(phone);
    }

    static validateURL(url: string): boolean {
        const regex = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/[\w.-]*)*\/?$/i;
        return regex.test(url);
    }

    static required(value: any): boolean {
        return value !== undefined && value !== null && value !== '';
    }

    static string(value: any): boolean {
        return typeof value === 'string';
    }

    static number(value: any): boolean {
        return typeof value === 'number';
    }

    static boolean(value: any): boolean {
        return typeof value === 'boolean';
    }

    static email(value: any): boolean {
        if (typeof value !== 'string') return false;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(value);
    }

    static max(value: any, maxLength: number): boolean {
        return typeof value === 'string' && value.length <= maxLength;
    }

    static min(value: any, minLength: number): boolean {
        return typeof value === 'string' && value.length >= minLength;
    }

    static regex(value: any, pattern: string): boolean {
        if (typeof value !== 'string') return false;
        try {
            const regex = new RegExp(pattern);
            return regex.test(value);
        } catch {
            return false;
        }
    }
}