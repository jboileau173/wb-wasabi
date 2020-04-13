import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IWbGenericCrudService } from './interface/i-wb-generic-crud-service';
import { WbCreateResourceResponseMessage } from './message/wb-create-resource-response-message';
import { WbDeleteResourceByIdResponseMessage } from './message/wb-delete-resource-by-id-response-message';
import { WbGetAllResourcesResponseMessage } from './message/wb-get-all-resources-response-message';
import { WbGetResourceResponseMessage } from './message/wb-get-resource-response-message';
import { WbUpdateResourceResponseMessage } from './message/wb-update-resource-response-message';

/**
 * Service pour effectuer les opérations basiques sur une API (CRUD).
 *
 * @export
 * @abstract
 * @class AWbGenericCrudService
 */
export abstract class AWbGenericCrudService implements IWbGenericCrudService
{
  /**
   * Url de l'api
   *
   * @protected
   * @abstract
   * @type {string}
   * @memberof AWbGenericCrudService
   */
  protected abstract _apiUrl: string;

  /**
   * Le nom du contrôleur à utiliser
   *
   * @protected
   * @abstract
   * @type {string}
   * @memberof AWbGenericCrudService
   */
  protected abstract _endpoint: string;

  protected constructor(
    private _httpClient: HttpClient
  ) { }

  /**
   * Permet la récupération de toutes les ressources
   *
   * @template TModel
   * @returns {Observable<WbGetAllResourcesResponseMessage<TModel>>}
   * @memberof AWbGenericCrudService
   */
  public getAll<TModel>(): Observable<WbGetAllResourcesResponseMessage<TModel>>
  {
    return this._httpClient
      .get<WbGetAllResourcesResponseMessage<TModel>>(`${this._apiUrl}/${this._endpoint}`);
  }

  /**
   * Permet la récupération d'une ressource via son identifiant unique
   *
   * @template TModel
   * @param {number} id
   * @returns {Observable<WbGetResourceResponseMessage<TModel>>}
   * @memberof AWbGenericCrudService
   */
  public getById<TModel>(id: number): Observable<WbGetResourceResponseMessage<TModel>>
  {
    return this._httpClient
      .get<WbGetResourceResponseMessage<TModel>>(`${this._apiUrl}/${this._endpoint}/${id}`);
  }

  /**
   * Permet la suppression d'une ressource via son identifiant unique
   *
   * @param {number} id
   * @returns {Observable<WbDeleteResourceByIdResponseMessage>}
   * @memberof AWbGenericCrudService
   */
  public deleteById(id: number): Observable<WbDeleteResourceByIdResponseMessage>
  {
    return this._httpClient
      .delete<WbDeleteResourceByIdResponseMessage>(`${this._apiUrl}/${this._endpoint}/${id}`);
  }

  /**
   * Permet la mise à jour d'une ressource via son identifiant unique
   *
   * @template TModel
   * @template TUpdate
   * @param {number} id
   * @param {TUpdate} message
   * @returns {Observable<WbUpdateResourceResponseMessage<TModel>>}
   * @memberof AWbGenericCrudService
   */
  public update<TModel, TUpdate>(id: number, message: TUpdate): Observable<WbUpdateResourceResponseMessage<TModel>>
  {
    return this._httpClient
      .put<WbUpdateResourceResponseMessage<TModel>>(`${this._apiUrl}/${this._endpoint}/${id}`, message);
  }

  /**
   * Permet la création d'une ressource
   *
   * @template TModel
   * @template TCreate
   * @param {number} id
   * @param {TCreate} message
   * @returns {Observable<WbCreateResourceResponseMessage<TModel>>}
   * @memberof AWbGenericCrudService
   */
  public create<TModel, TCreate>(id: number, message: TCreate): Observable<WbCreateResourceResponseMessage<TModel>>
  {
    return this._httpClient
      .post<WbCreateResourceResponseMessage<TModel>>(`${this._apiUrl}/${this._endpoint}/${id}`, message);
  }
}
