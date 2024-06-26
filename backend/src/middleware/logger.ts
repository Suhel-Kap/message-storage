import { Request, Response, NextFunction } from "express";

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);

  const originalSend = res.send;

  res.send = function (body?: any) {
    console.log(`Outgoing response: ${res.statusCode}`);
    return originalSend.apply(this, [body]);
  };

  next();
};

export default logger;
