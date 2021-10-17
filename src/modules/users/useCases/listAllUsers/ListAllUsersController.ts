import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    let { user_id } = request.headers;
    user_id = user_id.toString();
    const allUsers = this.listAllUsersUseCase.execute({ user_id });
    if(allUsers){
    return response.status(201).send(allUsers);
    }
    return response.status(400);
  }
}

export { ListAllUsersController };
