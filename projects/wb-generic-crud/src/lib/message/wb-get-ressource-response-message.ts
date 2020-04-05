import { WbBaseResponseMessage } from './wb-base-response-message';

export class WbGetRessourceResponseMessage<TEntity> extends WbBaseResponseMessage
{
  public ressource: TEntity;
}
