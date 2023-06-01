import Container, { Service } from 'typedi';

import ProductTypeRepository from '../../data/repositories/ProductTypeRepository';
import ProductTypeModal from '../../types/ProductType.modal';

@Service()
export default class ProductTypeService {
  repository = Container.get(ProductTypeRepository);

  async getAll() {
    return this.repository.getAll();
  }

  async get(id: string) {
    return this.repository.get(id);
  }

  async create(modal: ProductTypeModal) {
    return this.repository.create(modal);
  }

  // async update(modal: ProductTypeModal) {
  //   return this.repository.update(modal);
  // }

  // async patch(modal: ProductTypeModal) {
  //   return this.repository.patch(modal);
  // }

  // async delete(id: string) {
  //   return this.repository.delete(id);
  // }
}
