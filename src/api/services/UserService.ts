import Container, { Service } from 'typedi';

import UserRepository from '../../data/repositories/UserRepository';
import UserModal from '../../types/User.modal';

@Service()
export default class UserService {
  userRepository = Container.get(UserRepository);

  async getUsers() {
    return this.userRepository.getUsers();
  }

  async getUser(Id: string) {
    return this.userRepository.getUser(Id);
  }

  async createUser(User: UserModal) {
    return this.userRepository.createUser(User);
  }

  async updateUser(User: UserModal) {
    return this.userRepository.updateUser(User);
  }

  async patchUser(User: UserModal) {
    return this.userRepository.patchUser(User);
  }

  async deleteUser(Id: string) {
    return this.userRepository.deleteUser(Id);
  }
}
