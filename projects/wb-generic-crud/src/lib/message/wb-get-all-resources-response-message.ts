import { WbBaseResponseMessage } from './wb-base-response-message';

/**
 * Message de retour lors d'une demande de toutes les ressources
 *
 * @export
 * @class WbGetAllResourcesResponseMessage
 * @extends {WbBaseResponseMessage}
 * @template TModel
 */
export class WbGetAllResourcesResponseMessage<TModel> extends WbBaseResponseMessage
{
  /**
   * La liste des ressources demandées
   *
   * @type {TModel[]}
   * @memberof WbGetAllResourcesResponseMessage
   */
  public ressources: TModel[] = [];
}
