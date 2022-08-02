import {HttpService} from '@nestjs/axios';
import {AxiosRequestHeaders, AxiosResponse} from 'axios';
import {ReadableDocument} from '@shared/models/database/readable-document.model';

export class ApiRepository<T extends ReadableDocument<string>> {
  protected static createHeaders(credential: string | null): AxiosRequestHeaders {
    return {
      authorization: credential || '',
    };
  }

  constructor(protected readonly httpService: HttpService) {}

  async create(credential: string | null, payload?: unknown, params?: unknown): Promise<AxiosResponse<T>> {
    return await this.httpService.axiosRef.post<T>(`/`, payload, {
      headers: ApiRepository.createHeaders(credential),
      params: params,
    });
  }

  async find(credential: string | null, params?: unknown): Promise<AxiosResponse<T[]>> {
    return await this.httpService.axiosRef.get<T[]>(`/`, {
      headers: ApiRepository.createHeaders(credential),
      params: params,
    });
  }

  async findOneById(credential: string | null, id: string, params?: unknown): Promise<AxiosResponse<T | null>> {
    return await this.httpService.axiosRef.get<T | null>(`/${id}`, {
      headers: ApiRepository.createHeaders(credential),
      params: params,
    });
  }

  async updateOnById(
    credential: string | null,
    id: string,
    payload?: unknown,
    params?: unknown,
  ): Promise<AxiosResponse<T | null>> {
    return await this.httpService.axiosRef.patch<T | null>(`/${id}`, payload, {
      headers: ApiRepository.createHeaders(credential),
      params: params,
    });
  }

  async removeOneById(credential: string | null, id: string, params?: unknown): Promise<AxiosResponse<T | null>> {
    return await this.httpService.axiosRef.delete<T | null>(`/${id}`, {
      headers: ApiRepository.createHeaders(credential),
      params: params,
    });
  }

  async removeByQuery(
    credential: string | null,
    params?: unknown,
    payload?: unknown,
  ): Promise<AxiosResponse<T | null>> {
    return await this.httpService.axiosRef.delete<T | null>(`/`, {
      headers: ApiRepository.createHeaders(credential),
      params: params,
      data: payload,
    });
  }
}
