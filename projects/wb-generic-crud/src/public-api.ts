// Les différents messages génériques
export * from './lib/message/wb-base-response-message';
export * from './lib/message/wb-create-resource-response-message';
export * from './lib/message/wb-delete-resource-by-id-response-message';
export * from './lib/message/wb-get-all-resources-response-message';
export * from './lib/message/wb-get-resource-response-message';
export * from './lib/message/wb-update-resource-response-message';

// Le service de CRUD générique
export * from './lib/interface/i-wb-generic-crud-service';
export * from './lib/a-wb-generic-crud.service';

// Le module principal de la librairie
export * from './lib/wb-generic-crud.module';
