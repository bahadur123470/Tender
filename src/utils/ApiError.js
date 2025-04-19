class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went Wrong",
        error = [],
        stack = ""
    )
    {
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode
        this.data = null;
        this.success = false;
        this.error = error

        if (stack) {
            this.stack = stack
        }
        else {
            Error.captureStackTrace(this.this.constructor)
        }
    }
}

export { ApiError }