
/* const errorMiddleware = (err, req, res, next) => {
    err.message || "Internal Server Error";
    err.statusCode || 500;
} */
const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
};

/* const TryCatch = (passedFunc) => async(req, res, next) => {
    try {
        await passedFunc(req, res, next)
    } catch (error) {
        next(error)
    }
} */

    const TryCatch = (passedFunc) => async (req, res, next) => {
    try {
        await passedFunc(req, res, next);
    } catch (error) {
        next(error);
    }
};

export { errorMiddleware, TryCatch };
