import { body, validationResult } from "express-validator";
export const validate = (validations) => {
    return async (req, res, next) => {
        try {
            for (let validation of validations) {
                const result = await validation.run(req);
                if (!result.isEmpty()) {
                    const errors = validationResult(req);
                    return res.status(422).json({ errors: errors.array() });
                }
            }
            next();
        }
        catch (error) {
            next(error);
        }
    };
};
export const loginValidator = [
    body("email").trim().isEmail().withMessage("Email is required"),
    body("password")
        .trim()
        .isLength({ min: 6 })
        .withMessage("Password must contain at least 6 characters"),
];
export const signUpValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    ...loginValidator,
];
//# sourceMappingURL=Validators.js.map