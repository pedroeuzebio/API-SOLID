import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try{
    let { user_id } = request.headers;
    user_id = user_id.toString();
    const allUsers = this.listAllUsersUseCase.execute({ user_id });
 
      return response.status(201).send(allUsers);
    }
    catch(error){
    
      return response.status(400).json({
        error: error.message,
    });
  }
}
}


export { ListAllUsersController };
