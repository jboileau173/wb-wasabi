import { WbBaseResponseMessage } from './wb-base-response-message';

/**
 * Message de retour lors d'une mise à jour de ressource
 *
 * @export
 * @class WbUpdateResourceResponseMessage
 * @extends {WbBaseResponseMessage}
 * @template TModel
 */
export class WbUpdateResourceResponseMessage<TModel> extends WbBaseResponseMessage
{
  /**
   * La ressource mise à jour
   *
   * @type {TModel}
   * @memberof WbUpdateResourceResponseMessage
   */
  public ressource: TModel;
}
