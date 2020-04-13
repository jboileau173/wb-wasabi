# WbGenericCrud

Permet de faciliter les appels à une API pour les opérations basiques (CRUD).

# Concept

Chaque appel à l'api de votre backend permet d'effectuer une action. Des messages génériques sont disponibles pour 
permettre de simplifier les échanges.

- **WbBaseResponseMessage** : Les données de bases lors du retour de l'api (Message + Statut d'erreur). Implémenté sur tous les autres messages
- **WbCreateResourceResponseMessage** : Retour lors d'une création de ressource
- **WbDeleteResourceByIdResponseMessage** : Retour lors d'une suppression de ressource via identifiant unique
- **WbGetAllResourcesResponseMessage** : Retour lors d'une demande de toutes les ressources
- **WbGetResourceResponseMessage** : Retour lors d'une demande de ressource
- **WbUpdateResourceResponseMessage** : Retour lors d'une mise à jour de ressource

# Installation

```shell
npm install wb-generic-crud
```

# Utilisation

## Cas d'une utilisation simple

Le service de CRUD générique doit être dérivé pour pouvoir fonctionné. Il vous suffit d'étendre votre service concerné pour 
lui donner toute la logique du CRUD générique.

```javascript
export class MyCustomService extends AWbGenericCrudService
{
  protected _apiUrl: string = 'https://localhost:5000/api';
  
  protected _endpoint: string = 'contact';

  public constructor(
    protected _httpClient: HttpClient
  )
  {
    super(_httpClient);
  }
}
```

Pour fonctionner, vous devrez implémenter deux propriétés.

- **_apiUrl** : Url de votre api
- **_endpoint** : Nom de votre contrôleur 

Vous pourrez ensuite utiliser les différentes méthodes du service.

## Cas d'une utilisation en ajoutant du comportement

Il vous est tout à fait possible d'ajouter du comportement au service de CRUD générique.

```javascript
export class MyCustomService extends AWbGenericCrudService
{
  protected _apiUrl: string = 'https://localhost:5000/api';

  protected _endpoint: string = 'contact';

  public constructor(
    protected _httpClient: HttpClient
  )
  {
    super(_httpClient);
  }

  public myCustomCallToApi(): void
  {
    // ...
  }
}
```
**Note:**
Le service de CRUD générique est basé sur une une interface **IWbGenericCrudService**. Vous pouvez implémenter cette 
interface sur votre propre service pour définir votre propre comportement.
