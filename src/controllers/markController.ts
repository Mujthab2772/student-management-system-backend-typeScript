import { Request, Response } from "express";

import { MarkService } from "../services/markService";

export class MarkController {

    constructor(
        private markService: MarkService
    ) {}

    addMark = async (
        req: Request,
        res: Response
    ) => {

        try {

            const mark =
                await this.markService
                    .addMark(req.body);

            res.status(201).json(mark);

        } catch (error) {

            res.status(400).json({
                message: (error as Error).message
            });
        }
    };

    getMarks = async (
        req: Request,
        res: Response
    ) => {

        const marks =
            await this.markService
                .getMarks();

        res.json(marks);
    };

    getMark = async (
        req: Request,
        res: Response
    ) => {

        const id = Number(req.params.id);

        const mark =
            await this.markService
                .getMark(id);

        if (!mark) {

            res.status(404).json({
                message: "Mark not found"
            });

            return;
        }

        res.json(mark);
    };
}