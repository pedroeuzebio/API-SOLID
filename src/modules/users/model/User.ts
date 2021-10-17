import { v4 as uuidV4 } from "uuid";

class User {
  name: string;
  email: string;
  admin: boolean;
  id?: string;
  created_at: Date;
  updated_at: Date;
  constructor() {
    if (!this.id) {
      this.admin =false;
      this.id = uuidV4();
    }
  }
}

export { User };
