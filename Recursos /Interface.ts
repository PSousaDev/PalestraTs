//Interfaces: O TypeScript permite criar interfaces que definem uma estrutura para classes e objetos.
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
