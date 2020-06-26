export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Missy'
    },
    {
      id: 2,
      name: 'sese'
    },
    {
      id: 3,
      name: 'lop'
    }
  ];

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    const server = this.users.find(
      (s) => {
        return s.id === id;
      }
    );
    return server;
  }


}
