class UserRepository {
  private users: User[] = [];

  add(user: User) {
      this.users.push(user);
  }

  findByEmail(email: string): User | undefined {
      return this.users.find(user => user.email === email);
  }
}
