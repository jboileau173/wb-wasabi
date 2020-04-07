import { Observable } from 'rxjs';

import { WbCreateResourceResponseMessage } from '../message/wb-create-resource-response-message';
import { WbDeleteResourceByIdResponseMessage } from '../message/wb-delete-resource-by-id-response-message';
import { WbGetAllResourcesResponseMessage } from '../message/wb-get-all-resources-response-message';
import { WbGetResourceResponseMessage } from '../message/wb-get-resource-response-message';
import { WbUpdateResourceResponseMessage } from '../message/wb-update-resource-response-message';

/**
 * Permet de structurer les services pour effectuer les opérations basiques sur une API (CRUD).
 *
 * @export
 * @interface IWbGenericCrudService
 */
export interface IWbGenericCrudService
{
  /**
   * Permet la récupération de toutes les ressources
   *
   * @template TModel
   * @returns {Observable<WbGetAllResourcesResponseMessage<TModel>>}
   * @memberof IWbGenericCrudService
   */
  getAll<TModel>(): Observable<WbGetAllResourcesResponseMessage<TModel>>

  /**
   * Permet la récupération d'une ressource via son identifiant unique
   *
   * @template TModel
   * @param {number} id
   * @returns {Observable<WbGetResourceResponseMessage<TModel>>}
   * @memberof IWbGenericCrudService
   */
  getById<TModel>(id: number): Observable<WbGetResourceResponseMessage<TModel>>

  /**
   * Permet la suppresion d'une ressource via son identifiant unique
   *
   * @param {number} id
   * @returns {Observable<WbDeleteResourceByIdResponseMessage>}
   * @memberof IWbGenericCrudService
   */
  deleteById(id: number): Observable<WbDeleteResourceByIdResponseMessage>

  /**
   * Permet la mise à jour d'une ressource via son identifiant unique
   *
   * @template TModel
   * @template TUpdate
   * @param {number} id
   * @param {TUpdate} message
   * @returns {Observable<WbUpdateResourceResponseMessage<TModel>>}
   * @memberof IWbGenericCrudService
   */
  update<TModel, TUpdate>(id: number, message: TUpdate): Observable<WbUpdateResourceResponseMessage<TModel>>

  /**
   * Permet la création d'une ressource
   *
   * @template TModel
   * @template TCreate
   * @param {number} id
   * @param {TCreate} message
   * @returns {Observable<WbCreateResourceResponseMessage<TModel>>}
   * @memberof IWbGenericCrudService
   */
  create<TModel, TCreate>(id: number, message: TCreate): Observable<WbCreateResourceResponseMessage<TModel>>
}
