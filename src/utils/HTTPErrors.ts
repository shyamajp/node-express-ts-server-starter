class HTTPError extends Error {
    constructor(public code: number, message: string) {
        super(message);
        Object.setPrototypeOf(this, HTTPError.prototype);
        Error.captureStackTrace(this, this.constructor);
    }
}

class HTTP400Error extends HTTPError {
    constructor(message = "Bad Request") {
        super(400, message);
        Object.setPrototypeOf(this, HTTP400Error.prototype);
    }
}

class HTTP401Error extends HTTPError {
    constructor(message = "Unauthorized") {
        super(401, message);
        Object.setPrototypeOf(this, HTTP401Error.prototype);
    }
}

class HTTP403Error extends HTTPError {
    constructor(message = "Forbidden") {
        super(403, message);
        Object.setPrototypeOf(this, HTTP403Error.prototype);
    }
}

class HTTP404Error extends HTTPError {
    constructor(message = "Not found") {
        super(404, message);
        Object.setPrototypeOf(this, HTTP404Error.prototype);
    }
}

export {
    HTTP400Error,
    HTTP401Error,
    HTTP403Error,
    HTTP404Error,
    HTTPError,
};