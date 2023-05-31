import { Service } from 'typedi';

import dataSource from '../data-source';
import ProductType from '../entity/ProductType';
import ProductTypeModal from '../../types/ProductType.modal';

@Service()
export default class ProductTypeRepository {
  async getAll() {
    const repo = dataSource.getRepository(ProductType);
    const entities = await repo.find();
    return entities;
  }

  async get(Id: string) {
    try {
      const repo = dataSource.getRepository(ProductType);
      const entity = await repo.findOneBy({ Id });
      return entity;
    } catch (ex) {
      // JP > TODO: log ex
      return null;
    }
  }

  // async create(modal: ProductTypeModal) {
  //   try {
  //     const entity = new ProductType();
  //     entity.Email = modal.Email;
  //     entity.Phone = modal.Phone;
  //     entity.FirstName = modal.FirstName;
  //     entity.LastName = modal.LastName;
  //     entity.IdExternal = modal.IdExternal;
  //     entity.CreatedBy ?????????????

  //     const repo = dataSource.getRepository(ProductType);
  //     await repo.save(entity);
  //     return entity;
  //   } catch (ex) {
  //     // JP > TODO: log ex
  //     return null;
  //   }
  // }
}
