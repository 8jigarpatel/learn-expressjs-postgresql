import { Service } from 'typedi';
import dataSource from '../data-source';
import AppSetting from '../entity/AppSetting';
import AppSettingModal from '../../types/AppSetting.modal';

@Service()
export default class AppSettingRepository {
  async getAll() {
    const repo = dataSource.getRepository(AppSetting);
    const entities = await repo.find();
    return entities;
  }

  async get(Key: string) {
    try {
      const repo = dataSource.getRepository(AppSetting);
      const entity = await repo.findOneBy({ Key });
      return entity;
    } catch (ex) {
      // JP > TODO: log ex
      return null;
    }
  }

  async update(modal: AppSettingModal) {
    try {
      const repo = dataSource.getRepository(AppSetting);
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
