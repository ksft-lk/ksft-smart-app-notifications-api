import {FilterQuery, Model, ProjectionType, QueryOptions, SaveOptions, UpdateQuery} from 'mongoose';
import {DocumentStatus} from '@shared/models/database/document-metadata.model';
import {UserDto} from '@shared/dto/database/user.dto';
import {ReadableDocument} from '@shared/models/database/readable-document.model';

export class DatabaseRepository<T, S extends T & ReadableDocument> {
  constructor(private readonly model: Model<S>) {}

  async create(data: T, options?: SaveOptions): Promise<S> {
    const result = await new this.model(data).save(options);

    return result as S;
  }

  async find(
    filterQuery: FilterQuery<S>,
    projection?: ProjectionType<S> | null | undefined,
    options?: QueryOptions<S> | null | undefined,
  ): Promise<S[]> {
    return await this.model.find(filterQuery, projection, options).exec();
  }

  async findAll(): Promise<S[]> {
    return await this.model.find().exec();
  }

  async findOneById(
    id: string,
    projection?: ProjectionType<S> | null | undefined,
    options?: QueryOptions<S> | null | undefined,
  ): Promise<S | null> {
    return await this.model.findById(id, projection, options).exec();
  }

  async findOneByQuery(
    filterQuery: FilterQuery<S>,
    projection?: ProjectionType<S> | null | undefined,
    options?: QueryOptions<S> | null | undefined,
  ): Promise<S | null> {
    return await this.model.findOne(filterQuery, projection, options).exec();
  }

  async updateOneById(id: string, query: UpdateQuery<T>, options?: QueryOptions<T>): Promise<S | null> {
    return await this.model.findByIdAndUpdate(id, query, options).exec();
  }

  async updateOneByQuery(
    filterQuery: FilterQuery<S>,
    updateQuery: UpdateQuery<T>,
    options?: QueryOptions<T>,
  ): Promise<S | null> {
    return await this.model.findOneAndUpdate(filterQuery, updateQuery, options).exec();
  }

  async archiveOneById(user: UserDto, id: string, options?: QueryOptions<T>): Promise<S | null> {
    return await this.model
      .findByIdAndUpdate(
        id,
        {
          $set: {
            status: DocumentStatus.ARCHIVED,
            updatedBy: user._id,
          },
        },
        options,
      )
      .exec();
  }

  async archiveOneByQuery(user: UserDto, filterQuery: FilterQuery<S>, options?: QueryOptions<T>): Promise<S | null> {
    return await this.model
      .findOneAndUpdate(
        filterQuery,
        {
          $set: {
            status: DocumentStatus.ARCHIVED,
            updatedBy: user._id,
          },
        },
        options,
      )
      .exec();
  }

  async removeOneById(id: string, options?: QueryOptions<T>): Promise<S | null> {
    return await this.model.findByIdAndDelete(id, options).exec();
  }

  async removeOneByQuery(filterQuery: FilterQuery<S>, options?: QueryOptions<T>): Promise<S | null> {
    return await this.model.findOneAndDelete(filterQuery, options).exec();
  }
}
