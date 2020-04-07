import { WbBaseResponseMessage } from './wb-base-response-message';

/**
 * Message de retour lors d'une création de ressource
 *
 * @export
 * @class WbCreateResourceResponseMessage
 * @extends {WbBaseResponseMessage}
 * @template TModel
 */
export class WbCreateResourceResponseMessage<TModel> extends WbBaseResponseMessage
{
  /**
   * La ressource créée
   *
   * @type {TModel}
   * @memberof WbCreateResourceResponseMessage
   */
  public ressource: TModel;
}
