import { v4 as uuidV4 } from "uuid";

class User {
  name: string;
  email: string;
  admin: Boolean;
  id?: string;
  created_at: Date;
  updated_at: Date;
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
