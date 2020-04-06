import { WbBaseResponseMessage } from './wb-base-response-message';

/**
 * Message de retour lors d'une demande de toutes les ressources
 *
 * @export
 * @class WbGetAllRessourcesResponseMessage
 * @extends {WbBaseResponseMessage}
 * @template TModel
 */
export class WbGetAllRessourcesResponseMessage<TModel> extends WbBaseResponseMessage
{
  /**
   * La liste des ressources demandées
   *
   * @type {TModel[]}
   * @memberof WbGetAllRessourcesResponseMessage
   */
  public ressources: TModel[] = [];
}
