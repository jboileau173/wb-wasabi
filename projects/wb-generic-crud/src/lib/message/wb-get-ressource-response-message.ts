import { WbBaseResponseMessage } from './wb-base-response-message';

/**
 * Message de retour lors d'une demande de ressource unique
 *
 * @export
 * @class WbGetRessourceResponseMessage
 * @extends {WbBaseResponseMessage}
 * @template TEntity
 */
export class WbGetRessourceResponseMessage<TEntity> extends WbBaseResponseMessage
{
  /**
   * La ressource demandée
   *
   * @type {TEntity}
   * @memberof WbGetRessourceResponseMessage
   */
  public ressource: TEntity;
}
