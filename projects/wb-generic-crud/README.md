# WbGenericCrud

Permet de faciliter les appels à une API pour les opérations basiques (CRUD).

# Utilisation

Cas d'une utilisation pour les opérations simples (CRUD).

```javascript
export class MyCustomService extends AWbGenericCrudService
{
  protected _apiUrl: string = 'https://localhost:5000/api';
  
  protected _endpoint: string = 'contact';
}
```

Cas d'une utilisation en ajoutant du comportement.

```javascript
export class MyCustomService extends AWbGenericCrudService
{
  protected _apiUrl: string = 'https://localhost:5000/api';

  protected _endpoint: string = 'contact';

  public constructor(
    private _httpClient: HttpClient
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
