
export interface HttpErrorBody {
    code: number,
    message: string,
    name: string,
}

export class HttpError extends Error {
    code: number;
    name: string;
    constructor(name: string, code: number, message: string) {
        super(message);
        Object.setPrototypeOf(this, HttpError.prototype);

        this.name = name;
        this.code = code;
    }

    body(): HttpErrorBody {
        return {
            code: this.code,
            name: this.name,
            message: this.message
        }
    }
}