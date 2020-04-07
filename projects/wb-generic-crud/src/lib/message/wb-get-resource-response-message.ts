import { WbBaseResponseMessage } from './wb-base-response-message';

/**
 * Message de retour lors d'une demande de ressource unique
 *
 * @export
 * @class WbGetResourceResponseMessage
 * @extends {WbBaseResponseMessage}
 * @template TEntity
 */
export class WbGetResourceResponseMessage<TEntity> extends WbBaseResponseMessage
{
  /**
   * La ressource demandée
   *
   * @type {TEntity}
   * @memberof WbGetResourceResponseMessage
   */
  public ressource: TEntity;
}
