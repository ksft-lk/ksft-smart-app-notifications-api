import {DatabaseRepository} from '@shared/repositories/database.repository';
import {Document, FilterQuery, ProjectionType, QueryOptions, UpdateQuery} from 'mongoose';
import {PersistableDocument} from '@shared/models/database/persistable-document.model';
import {UserDto} from '@shared/dto/database/user.dto';

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
  ): Promise<S | null> {
    return await this.repository.findOneById(id, projection, options);
  }

  async findOneByQuery(
    filterQuery: FilterQuery<S>,
    projection?: ProjectionType<S> | null | undefined,
    options?: QueryOptions<S> | null | undefined,
  ): Promise<S | null> {
    return await this.repository.findOneByQuery(filterQuery, projection, options);
  }

  async updateOneById(id: string, query: UpdateQuery<T>, options?: QueryOptions<T>): Promise<S | null> {
    return await this.repository.updateOneById(id, query, options);
  }

  async updateOneByQuery(
    filterQuery: FilterQuery<S>,
    updateQuery: UpdateQuery<T>,
    options?: QueryOptions<T>,
  ): Promise<S | null> {
    return await this.repository.updateOneByQuery(filterQuery, updateQuery, options);
  }

  async archiveOneById(user: UserDto, id: string): Promise<S | null> {
    return await this.repository.archiveOneById(user, id);
  }

  async archiveOneByQuery(user: UserDto, filterQuery: FilterQuery<S>, options?: QueryOptions<T>): Promise<S | null> {
    return await this.repository.archiveOneByQuery(user, filterQuery, options);
  }

  async removeOneById(id: string, options?: QueryOptions<T>): Promise<S | null> {
    return await this.repository.removeOneById(id, options);
  }

  async removeOneByQuery(filterQuery: FilterQuery<S>, options?: QueryOptions<T>): Promise<S | null> {
    return await this.repository.removeOneByQuery(filterQuery, options);
  }
}
