import { Service } from 'typedi';

import CustomerModal from '../../types/customer.modal';
import { dataSource } from '../data-source';
import Customer from '../entities/customer.entity';

@Service()
export default class CustomerRepository {
  async getAll() {
    const repo = dataSource.getRepository(Customer);
    const entities = await repo.find();
    return entities;
  }

  async get(Id: string) {
    const repo = dataSource.getRepository(Customer);
    const entity = await repo.findOneBy({ Id });
    return entity;
  }

  async getByEmail(Email: string) {
    const repo = dataSource.getRepository(Customer);
    const entity = await repo.findOneBy({ Email });
    return entity;
  }

  async create(modal: CustomerModal) {
    const entity = new Customer();
    entity.Email = modal.Email;
    entity.Phone = modal.Phone;
    entity.FirstName = modal.FirstName;
    entity.LastName = modal.LastName;
    entity.IdExternal = modal.IdExternal;

    const repo = dataSource.getRepository(Customer);
    await repo.save(entity);
    return entity;
  }

  async update(modal: CustomerModal) {
    const repo = dataSource.getRepository(Customer);
    const entity = await repo.findOneBy({ Id: modal.Id });
    if (entity) {
      entity.IdExternal = modal.IdExternal || '';
      entity.FirstName = modal.FirstName || '';
      entity.LastName = modal.LastName || '';
      entity.Email = modal.Email || '';
      entity.Phone = modal.Phone || '';
      await repo.save(entity);
    }
    return entity;
  }

  async patch(modal: CustomerModal) {
    const repo = dataSource.getRepository(Customer);
    const entity = await repo.findOneBy({ Id: modal.Id });
    if (entity) {
      if (modal.IdExternal) entity.IdExternal = modal.IdExternal;
      if (modal.FirstName) entity.FirstName = modal.FirstName;
      if (modal.LastName) entity.LastName = modal.LastName;
      if (modal.Email) entity.Email = modal.Email;
      if (modal.Phone) entity.Phone = modal.Phone;
      await repo.save(entity);
    }
    return entity;
  }

  async delete(Id: string) {
    const repo = dataSource.getRepository(Customer);
    const entity = await repo.findOneBy({ Id });
    if (entity) {
      await repo.remove(entity);
      return true;
    }
    return false;
  }
}
