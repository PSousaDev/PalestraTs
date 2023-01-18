interface User {
  name: string;
  age: number;
  email: string;
}

class UserService {
  create(user: User) {
      console.log  (user.age,user.name,user.email);
      
  }
}

