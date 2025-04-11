import express from 'express';

const router =express.Router();


//import controller
import * as blogController from '../controller/blog.controller.js';

router.post("/save",blogController.save);
router.get("/fetch",blogController.fetch);
//router.patch("/update",userController.update);
//router.delete("/delete",userController.deleteUser);

export default router;