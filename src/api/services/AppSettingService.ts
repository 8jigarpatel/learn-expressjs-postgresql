import Container, { Service } from 'typedi';

import AppSettingRepository from '../../data/repositories/AppSettingRepository';
import AppSettingModal from '../../types/AppSetting.modal';

@Service()
export default class AppSettingService {
  repository = Container.get(AppSettingRepository);

  async getAll() {
    return this.repository.getAll();
  }

  async get(Key: string) {
    return this.repository.get(Key);
  }

  async update(modal: AppSettingModal) {
    return this.repository.update(modal);
  }
}
