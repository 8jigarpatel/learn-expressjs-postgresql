import { Service } from 'typedi';
import dataSource from '../data-source';
import AppSetting from '../entity/AppSetting';

@Service()
export default class AppSettingRepository {
  async getAppSettings() {
    const repo = dataSource.getRepository(AppSetting);
    const settings = await repo.find();
    return settings;
  }

  async getAppSetting(key: string) {
    const repo = dataSource.getRepository(AppSetting);
    const setting = await repo.findOneBy({ key });
    return setting;
  }

  async updateAppSetting(key: string, newValue: string) {
    const repo = dataSource.getRepository(AppSetting);
    const setting = await repo.findOneBy({ key });
    if (setting) {
      setting.value = newValue;
      await repo.save(setting);
    }
    return setting;
  }
}
