import { Request, Response, NextFunction } from "express";

// This middleware is used to log incoming requests and outgoing responses
// The only purpose is to monitor the server's activity
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
