const env = process.env;

export const DATABASE_NAME = env.DATABASE || 'KSFT-Dev';

const PASSWORD =
  env.DATABASE_PASSWORD || 'Uj3YzIJSQnkPQ8og08q8ogLLdJ1QyWETNNCbfKTln6pgzUI8rQAEWUjxCGDfRomVfYcBQ0hNtsFC0uRfLt9xDA==';

export const DATABASE_URL = `mongodb://smart-app:${PASSWORD}@smart-app.mongo.cosmos.azure.com:10255/${DATABASE_NAME}?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@smart-app@`;

export const DATABASE_COLLECTIONS = {
  EMAIL_TEMPLATES: 'EmailTemplates',
  NOTIFICATIONS: 'Notifications',
  USERS: 'Users',
};
