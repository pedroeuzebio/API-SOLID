import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    const user = this.turnUserAdminUseCase.execute({ user_id });
    if(user){
    return response.status(201).send(user);
    }
    return response.status(400);
  }
}

export { TurnUserAdminController };
