import { WbBaseResponseMessage } from './wb-base-response-message';

/**
 * Message de retour lors d'une création de ressource
 *
 * @export
 * @class WbCreateRessourceResponseMessage
 * @extends {WbBaseResponseMessage}
 * @template TModel
 */
export class WbCreateRessourceResponseMessage<TModel> extends WbBaseResponseMessage
{
  /**
   * La ressource créée
   *
   * @type {TModel}
   * @memberof WbCreateRessourceResponseMessage
   */
  public ressource: TModel;
}
