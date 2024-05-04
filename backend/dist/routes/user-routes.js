import { Router } from "express";
import { getAllUsers, userLogin, userSignup } from "../controllers/users-controller.js";
import { validate, signUpValidator, loginValidator } from "../utils/Validators.js";
const userRouter = Router();
userRouter.get("/", getAllUsers);
userRouter.post("/signup", validate(signUpValidator), userSignup);
userRouter.post("/login", validate(loginValidator), userLogin);
export default userRouter;
//# sourceMappingURL=user-routes.js.map