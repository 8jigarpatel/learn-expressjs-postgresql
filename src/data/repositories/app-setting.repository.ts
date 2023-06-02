import { Service } from 'typedi';

import AppSettingModal from '../../types/app-setting.modal';
import { dataSource } from '../data-source';
import AppSettingEntity from '../entity/app-setting.entity';

@Service()
export default class AppSettingRepository {
  async getAll() {
    const repo = dataSource.getRepository(AppSettingEntity);
    const entities = await repo.find();
    return entities;
  }

  async get(Key: string) {
    try {
      const repo = dataSource.getRepository(AppSettingEntity);
      const entity = await repo.findOneBy({ Key });
      return entity;
    } catch (ex) {
      // JP > TODO: log ex
      return null;
    }
  }

  async update(modal: AppSettingModal) {
    try {
      const repo = dataSource.getRepository(AppSettingEntity);
      const entity = await repo.findOneBy({ Key: modal.Key });
      if (entity) {
        entity.Value = modal.Value;
        await repo.save(entity);
      }
      return entity;
    } catch (ex) {
      // JP > TODO: log ex
      return null;
    }
  }
}
