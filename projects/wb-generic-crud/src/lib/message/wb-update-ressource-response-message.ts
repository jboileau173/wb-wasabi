import { WbBaseResponseMessage } from './wb-base-response-message';

/**
 * Message de retour lors d'une mise à jour de ressource
 *
 * @export
 * @class WbUpdateRessourceResponseMessage
 * @extends {WbBaseResponseMessage}
 * @template TModel
 */
export class WbUpdateRessourceResponseMessage<TModel> extends WbBaseResponseMessage
{
  /**
   * La ressource mise à jour
   *
   * @type {TModel}
   * @memberof WbUpdateRessourceResponseMessage
   */
  public ressource: TModel;
}
