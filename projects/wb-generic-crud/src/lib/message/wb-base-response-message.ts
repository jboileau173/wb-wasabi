/**
 * Le message de retour de base lors d'un appel à l'api
 *
 * @export
 * @class WbBaseResponseMessage
 */
export class WbBaseResponseMessage
{
  /**
   * Contient le message de succès, d'erreur ou d'information
   *
   * @type {string}
   * @memberof WbBaseResponseMessage
   */
  public message: string;


  /**
   * Permet d'indiquer si une erreur est survenue sur l'api
   *
   * @type {boolean}
   * @memberof WbBaseResponseMessage
   */
  public onError: boolean;
}

