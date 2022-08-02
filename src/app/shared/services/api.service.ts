import {ReadableDocument} from '@shared/models/database/readable-document.model';
import {ApiRepository} from '@shared/repositories/api.repository';

export class ApiService<T extends ReadableDocument<string>> {
  constructor(private readonly repository: ApiRepository<T>) {}

  async create(credential: string | null, payload?: unknown, params?: unknown): Promise<T> {
    const {data} = await this.repository.create(credential, payload, params);

    return data;
  }

  async find(credential: string | null, params?: unknown): Promise<T[]> {
    const {data} = await this.repository.find(credential, params);

    return data;
  }

  async findOneById(credential: string | null, id: string, params?: unknown): Promise<T | null> {
    const {data} = await this.repository.findOneById(credential, id, params);

    return data;
  }

  async updateOneById(credential: string | null, id: string, payload?: unknown, params?: unknown): Promise<T | null> {
    const {data} = await this.repository.updateOnById(credential, id, payload, params);

    return data;
  }

  async removeOneById(credential: string | null, id: string, params?: unknown): Promise<T | null> {
    const {data} = await this.repository.removeOneById(credential, id, params);

    return data;
  }

  async removeByQuery(credential: string | null, params?: unknown, payload?: unknown): Promise<T | null> {
    const {data} = await this.repository.removeByQuery(credential, params, payload);

    return data;
  }
}
