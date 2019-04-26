# playground-koa-auth

Generated by [Node Project Generator](https://github.com/robertoachar/generator-node).

[![License][license-badge]][license-url]

> A playground for Koa with Authentication and Authorization.

## Development

- Clone the repo

```bash
$ git clone https://github.com/robertoachar/playground-koa-auth.git
```

- Install dependencies

```bash
$ npm install
```

- Run scripts

| Action                 | Usage          |
| ---------------------- | -------------- |
| Start development mode | `npm start`    |
| Lint code              | `npm run lint` |

## Environment

```yaml
# .env file
NODE_ENV = development
DATABASE = mongodb://localhost:27017/playground-koa-auth
PORT = 3000
JWT_SECRET = secret
```

## Endpoints

| Method | Endpoint        | Description                          |
| ------ | --------------- | ------------------------------------ |
| POST   | `/auth/signup`  | Create an account                    |
| POST   | `/auth/login`   | Log In                               |
| GET    | `/auth/profile` | User profile (must be authenticated) |

## Author

[Roberto Achar](https://twitter.com/robertoachar)

## License

[MIT](https://github.com/robertoachar/playground-koa-auth/blob/master/LICENSE)

[license-badge]: https://img.shields.io/github/license/robertoachar/playground-koa-auth.svg
[license-url]: https://opensource.org/licenses/MIT
