import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    const user = this.showUserProfileUseCase.execute({ user_id });
    if(user){
    return response.status(201).send(user);
    }
    return response.status(400);
  }
}

export { ShowUserProfileController };
