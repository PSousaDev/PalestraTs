interface User {
  name: string;
  age: number;
  email: string;
}

class UserService {
  create(user: User) {
      // ...
  }
}

const user: User = { name: "John Doe", age: 30, email: "johndoe@example.com" };
const service = new UserService();

