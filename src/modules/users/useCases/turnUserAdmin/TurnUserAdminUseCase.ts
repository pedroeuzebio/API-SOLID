import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const foundedUser = this.usersRepository.findById(user_id);
    if (foundedUser) {
      const user = this.usersRepository.turnAdmin(foundedUser);

    
    return user;
    }
    throw new Error("User don´t exists");
  }
}

export { TurnUserAdminUseCase };
