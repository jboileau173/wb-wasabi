import { WbBaseResponseMessage } from './wb-base-response-message';

export class WbGetAllRessourcesResponseMessage<TModel> extends WbBaseResponseMessage
{
  public ressources: TModel[] = [];
}
