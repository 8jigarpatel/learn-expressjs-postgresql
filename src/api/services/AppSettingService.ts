import Container, { Service } from 'typedi';

import AppSettingRepository from '../../data/repositories/AppSettingRepository';

@Service()
export default class AppSettingService {
  appSettingRepository = Container.get(AppSettingRepository);

  async getAppSettings() {
    return this.appSettingRepository.getAppSettings();
  }

  async getAppSetting(key: string) {
    return this.appSettingRepository.getAppSetting(key);
  }

  async updateAppSetting(key: string, newValue: string) {
    return this.appSettingRepository.updateAppSetting(key, newValue);
  }
}
