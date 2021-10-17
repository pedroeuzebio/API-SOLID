/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    let user = new User();
   user = {...user,...{
      name,
      admin: false,
      email,
      created_at: new Date(),
      updated_at: new Date()
    }}
 
    this.users.push(user);
    return user
  }

  findById(id: string): User | undefined {
    const userFounded = this.users.find((user) => user.id === id);
    return userFounded;
  }

  findByEmail(email: string): User | undefined {
    const userFounded = this.users.find((user) => user.email === email);
    return userFounded;
  }

  turnAdmin(receivedUser: User): User {
  // eslint-disable-next-line array-callback-return
  const usersFound =this.users.filter(function (user) {
      if (user.id == receivedUser.id) {
        // eslint-disable-next-line no-param-reassign
        user.admin = true;
        // eslint-disable-next-line no-param-reassign
        user.updated_at = new Date();
        return user;
      }
      else{
        return 0
      }
    })
   return usersFound [0]
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
