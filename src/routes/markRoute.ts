import { Router } from "express";

import { MarkRepository } from "../repositories/markRepository";

import { MarkService } from "../services/markService";

import { MarkController } from "../controllers/markController";

const router = Router();

const markRepository = new MarkRepository();

const markService = new MarkService(markRepository);

const markController = new MarkController(markService);

router.post(
    "/",
    markController.addMark
);

router.get(
    "/",
    markController.getMarks
);

router.get(
    "/:id",
    markController.getMark
);

export default router;