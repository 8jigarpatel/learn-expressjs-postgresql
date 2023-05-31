import Container, { Service } from 'typedi';

import CustomerRepository from '../../data/repositories/CustomerRepository';
import CustomerModal from '../../types/Customer.modal';

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
