import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { WbCreateRessourceResponseMessage } from './message/wb-create-ressource-response-message';
import { WbDeleteRessourceByIdResponseMessage } from './message/wb-delete-ressource-by-id-response-message';
import { WbGetAllRessourcesResponseMessage } from './message/wb-get-all-ressources-response-message';
import { WbGetRessourceResponseMessage } from './message/wb-get-ressource-response-message';
import { WbUpdateRessourceResponseMessage } from './message/wb-update-ressource-response-message';

/**
 * Service pour effectuer les opérations basiques sur une API (CRUD).
 *
 * @export
 * @abstract
 * @class AWbGenericCrudService
 */
export abstract class AWbGenericCrudService
{
  /**
   * URL de l'api
   *
   * @protected
   * @type {string}
   * @memberof AWbGenericCrudService
   */
  protected _apiUrl: string;

  /**
   * Le nom du contrôleur à utiliser
   *
   * @protected
   * @type {string}
   * @memberof AWbGenericCrudService
   */
  protected _endpoint: string;

  protected constructor(
    protected _httpClient: HttpClient
  ) { }

  /**
   * Permet la récupération de toutes les ressources
   *
   * @template TModel
   * @returns {Observable<WbGetAllRessourcesResponseMessage<TModel>>}
   * @memberof AWbGenericCrudService
   */
  public getAll<TModel>(): Observable<WbGetAllRessourcesResponseMessage<TModel>>
  {
    return this._httpClient
      .get<WbGetAllRessourcesResponseMessage<TModel>>(`${this._apiUrl}/${this._endpoint}`);
  }

  /**
   * Permet la récupération d'une ressource via son identifiant unique
   *
   * @template TModel
   * @param {number} id
   * @returns {Observable<WbGetRessourceResponseMessage<TModel>>}
   * @memberof AWbGenericCrudService
   */
  public getById<TModel>(id: number): Observable<WbGetRessourceResponseMessage<TModel>>
  {
    return this._httpClient
      .get<WbGetRessourceResponseMessage<TModel>>(`${this._apiUrl}/${this._endpoint}/${id}`);
  }

  /**
   * Permet la suppresion d'une ressource via son identifiant unique
   *
   * @param {number} id
   * @returns {Observable<WbDeleteRessourceByIdResponseMessage>}
   * @memberof AWbGenericCrudService
   */
  public deleteById(id: number): Observable<WbDeleteRessourceByIdResponseMessage>
  {
    return this._httpClient
      .delete<WbDeleteRessourceByIdResponseMessage>(`${this._apiUrl}/${this._endpoint}/${id}`);
  }

  /**
   * Permet la mise à jour d'une ressource via son identifiant unique
   *
   * @template TModel
   * @template TUpdate
   * @param {number} id
   * @param {TUpdate} message
   * @returns {Observable<WbUpdateRessourceResponseMessage<TModel>>}
   * @memberof AWbGenericCrudService
   */
  public update<TModel, TUpdate>(id: number, message: TUpdate): Observable<WbUpdateRessourceResponseMessage<TModel>>
  {
    return this._httpClient
      .put<WbUpdateRessourceResponseMessage<TModel>>(`${this._apiUrl}/${this._endpoint}/${id}`, message);
  }

  /**
   * Permet la création d'une ressource
   *
   * @template TModel
   * @template TCreate
   * @param {number} id
   * @param {TCreate} message
   * @returns {Observable<WbCreateRessourceResponseMessage<TModel>>}
   * @memberof AWbGenericCrudService
   */
  public create<TModel, TCreate>(id: number, message: TCreate): Observable<WbCreateRessourceResponseMessage<TModel>>
  {
    return this._httpClient
      .post<WbCreateRessourceResponseMessage<TModel>>(`${this._apiUrl}/${this._endpoint}/${id}`, message);
  }
}
