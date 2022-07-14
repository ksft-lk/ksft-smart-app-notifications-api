import {DatabaseRepository} from '@shared/repositories/database.repository';
import {Document, FilterQuery, ProjectionType, QueryOptions} from 'mongoose';
import {PersistableDocument} from '@shared/models/database/persistable-document';

export class DatabaseService<T, S extends T & Document & PersistableDocument> {
  constructor(private readonly repository: DatabaseRepository<T, S>) {}

  async findRaw(
    filterQuery: FilterQuery<S>,
    projection?: ProjectionType<S> | null | undefined,
    options?: QueryOptions<S> | null | undefined,
  ): Promise<S[]> {
    return await this.repository.find(filterQuery, projection, options);
  }

  async findAll(): Promise<S[]> {
    return await this.repository.findAll();
  }

  async findOneById(
    id: string,
    projection?: ProjectionType<S> | null | undefined,
    options?: QueryOptions<S> | null | undefined,
  ): Promise<S> {
    return await this.repository.findOneById(id, projection, options);
  }

  async archiveOneById(id: string): Promise<S> {
    return await this.repository.archiveOneById(id);
  }
}
