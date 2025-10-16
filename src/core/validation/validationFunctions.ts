class ValidationFunctions {
    static required(value: any): boolean {
        return value !== undefined && value !== null && value !== '';
    }

    static string(value: any): boolean {
        return typeof value === 'string';
    }

    static number(value: any): boolean {
        return typeof value === 'number' && !isNaN(value);
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

    static exactLength(value: any, len: number): boolean {
        return typeof value === 'string' && value.length === len;
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

    static in(value: any, list: string[]): boolean {
        return list.includes(value);
    }

    static startsWith(value: any, prefix: string): boolean {
        return typeof value === 'string' && value.startsWith(prefix);
    }

    static endsWith(value: any, suffix: string): boolean {
        return typeof value === 'string' && value.endsWith(suffix);
    }
}

export default ValidationFunctions;
