import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface IPayLoad {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization

  if(!authToken) {
    return response.status(401).end()
  }

  const [,token] = authToken.split(" ")

  try {
    const { sub } = verify(token, "6425ddbf9cd648e1e4d33c4340d3373d") as IPayLoad
    
    request.user_id = sub
    return next()
  } catch(err) {
    response.status(401).end()
  } 
}