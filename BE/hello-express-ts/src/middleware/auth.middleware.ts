import express from 'express';
import jwt from 'jsonwebtoken';

export const checkUserToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const token = req.headers["authorization"] as string;
  if (!token)
    res.status(401).send("Unauthorized: No token provided");

  try {
    jwt.verify(token, process.env.JWT_SECRET || 'default_secret');
    next();
  } catch (error) {
    res.status(403).send("Forbidden: Invalid token");
  }
}