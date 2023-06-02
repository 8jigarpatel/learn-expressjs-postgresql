import Container, { Service } from 'typedi';

import CustomerRepository from '../../data/repositories/customer.repository';
import CustomerModal from '../../types/customer.modal';
import ApplicationError from '../../utils/application-error';

@Service()
export default class CustomerService {
  repository = Container.get(CustomerRepository);

  async getAll() {
    return this.repository.getAll();
  }

  async get(id: string) {
    return this.repository.get(id);
  }

  async create(modal: CustomerModal) {
    if (modal.Email) {
      const user = this.repository.getByEmail(modal.Email);
      if (user != null) {
        throw new ApplicationError('User with this email already exists.');
      }
    }
    return this.repository.create(modal);
  }

  async update(modal: CustomerModal) {
    return this.repository.update(modal);
  }

  async patch(modal: CustomerModal) {
    return this.repository.patch(modal);
  }

  async deleteCustomer(id: string) {
    return this.repository.delete(id);
  }
}
