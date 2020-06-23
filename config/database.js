module.exports = ({ env }) => {
  if (env('NODE_ENV') === 'production') {
    return {
      defaultConnection: 'default',
      connections: {
        default: {
          client: 'postgress',
          connector: 'bookshelf',
          settings: {
            client: 'postgress',
            host: env('DATABASE_HOST', '127.0.0.1'),
            port: env('DATABASE_PORT', 27017),
            name: env('DATABASE_NAME', 'strapi'),
            username: env('DATABASE_USERNAME', ''),
            password: env('DATABASE_PASSWORD', ''),
          },
          options: {
            ssl: false,
          },
        },
      },
    }
  } else {
    return {
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'postgress',
            filename: env('DATABASE_FILENAME', '.tmp/data.db'),
          },
          options: {
            useNullAsDefault: true,
          },
        },
      },
    }
  }
};
