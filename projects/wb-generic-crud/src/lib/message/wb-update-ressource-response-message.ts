import { WbBaseResponseMessage } from './wb-base-response-message';

export class WbUpdateRessourceResponseMessage<TModel> extends WbBaseResponseMessage
{
  public ressource: TModel;
}
