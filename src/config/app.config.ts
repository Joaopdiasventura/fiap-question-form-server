interface IAppConfig {
  port: number;
  client: { urls: string[] };
}

export const AppConfig = (): IAppConfig => ({
  port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  client: {
    urls: process.env.CLIENT_URLS
      ? process.env.CLIENT_URLS.split(';')
      : ['http://localhost:4200'],
  },
});
