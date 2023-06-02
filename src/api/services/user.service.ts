import Container, { Service } from 'typedi';

import UserRepository from '../../data/repositories/user.repository';
import UserModal from '../../types/user.modal';
import ApplicationError from '../../utils/application-error';

@Service()
export default class UserService {
  repository = Container.get(UserRepository);

  async getAll() {
    return this.repository.getAll();
  }

  async get(id: string) {
    return this.repository.get(id);
  }

  async create(modal: UserModal) {
    if (modal.Email) {
      const user = this.repository.getByEmail(modal.Email);
      if (user != null) {
        throw new ApplicationError('User with this email already exists.');
      }
    }
    return this.repository.create(modal);
  }

  async update(modal: UserModal) {
    return this.repository.update(modal);
  }

  async patch(modal: UserModal) {
    return this.repository.patch(modal);
  }

  async delete(id: string) {
    return this.repository.delete(id);
  }
}
