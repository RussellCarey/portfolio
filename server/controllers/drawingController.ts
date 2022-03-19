import { Request, Response, NextFunction, CookieOptions } from "express";
import pgPool from "../utils/pgdb";

exports.getCurrentDrawing = async (req: Request, res: Response, next: NextFunction) => {
  const drawings = await pgPool.query("SELECT * from drawings");
  res.json({
    status: "success",
    data: drawings,
  });
};

//
exports.uploadCurrentDrawing = async (req: Request, res: Response, next: NextFunction) => {
  const drawingString = req.body.drawing;
  const newDrawing = await pgPool.query("UPDATE drawings SET data=($1) WHERE id = 0", [drawingString]);

  res.json({
    status: "success",
    data: newDrawing,
  });
};
