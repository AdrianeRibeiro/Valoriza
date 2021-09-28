import { Request, Response } from "express"
import { CreateComplimentService } from "../services/CreateComplimentService"
import { CreateTagService } from "../services/CreateTagService"

class CreateComplimentController {

  async handle(request: Request, response: Response) {
    const { tag_id, user_receiver, message } = request.body
    const { user_id } = request

    const createComplimentService = new CreateComplimentService()

    const compliment = await createComplimentService.execute({ 
      tag_id, 
      user_sender: user_id, 
      user_receiver, 
      message 
    })

    return response.json(compliment)
  }
}

export { CreateComplimentController }