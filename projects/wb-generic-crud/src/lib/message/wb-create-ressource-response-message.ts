import { WbBaseResponseMessage } from './wb-base-response-message';

export class WbCreateRessourceResponseMessage<TModel> extends WbBaseResponseMessage
{
  public ressource: TModel;
}
