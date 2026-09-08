interface IDatabaseConfig {
  mongo: { uri: string };
}

export const DatabaseConfig = (): IDatabaseConfig => ({
  mongo: {
    uri:
      process.env.MONGO ||
      'mongodb://localhost:27017/fiap-question-form?replicaSet=rs0&directConnection=true',
  },
});
