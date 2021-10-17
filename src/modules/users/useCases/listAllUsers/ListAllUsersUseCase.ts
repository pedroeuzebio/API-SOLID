/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
   const user =this.usersRepository.findById(user_id)
    if(user.admin === true){
   return this.usersRepository.list();
  }
 
    throw new Error("User is not a admin");
    
}
}

export { ListAllUsersUseCase };
