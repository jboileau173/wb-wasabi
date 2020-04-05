import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { WbCreateRessourceResponseMessage } from './message/wb-create-ressource-response-message';
import { WbDeleteRessourceByIdResponseMessage } from './message/wb-delete-ressource-by-id-response-message';
import { WbGetAllRessourcesResponseMessage } from './message/wb-get-all-ressources-response-message';
import { WbGetRessourceResponseMessage } from './message/wb-get-ressource-response-message';
import { WbUpdateRessourceResponseMessage } from './message/wb-update-ressource-response-message';

export abstract class AWbGenericCrudService
{
  protected _baseUrl: string;

  protected _endpoint: string;

  protected constructor(
    protected _httpClient: HttpClient
  ) { }

  public getAll<TModel>(): Observable<WbGetAllRessourcesResponseMessage<TModel>>
  {
    return this._httpClient
      .get<WbGetAllRessourcesResponseMessage<TModel>>(`${this._baseUrl}/${this._endpoint}`);
  }

  public getById<TModel>(id: number): Observable<WbGetRessourceResponseMessage<TModel>>
  {
    return this._httpClient
      .get<WbGetRessourceResponseMessage<TModel>>(`${this._baseUrl}/${this._endpoint}/${id}`);
  }

  public deleteById(id: number): Observable<WbDeleteRessourceByIdResponseMessage>
  {
    return this._httpClient
      .delete<WbDeleteRessourceByIdResponseMessage>(`${this._baseUrl}/${this._endpoint}/${id}`);
  }

  public update<TModel, TUpdate>(id: number, message: TUpdate): Observable<WbUpdateRessourceResponseMessage<TModel>>
  {
    return this._httpClient
      .put<WbUpdateRessourceResponseMessage<TModel>>(`${this._baseUrl}/${this._endpoint}/${id}`, message);
  }

  public create<TModel, TCreate>(id: number, message: TCreate): Observable<WbCreateRessourceResponseMessage<TModel>>
  {
    return this._httpClient
      .post<WbCreateRessourceResponseMessage<TModel>>(`${this._baseUrl}/${this._endpoint}/${id}`, message);
  }
}
