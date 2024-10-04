Create .env file inside the `content` directory and the following

```js
HOST=0.0.0.0
PORT=1337
APP_KEYS=
API_TOKEN_SALT=
ADMIN_JWT_SECRET=
TRANSFER_TOKEN_SALT=
# Database, I pushed the database so that someone can have data in it when testing it in development.
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=MyHoFs5lVZTqDw8WEnnMfA==
```



Create .env file inside the `frontend` directory and the following

```js
NEXT_PUBLIC_BACKEND_DOMAIN=0.0.0.0
NEXT_PUBLIC_BACKEND_SECURE=http
NEXT_PUBLIC_BACKEND_PORT=1337
NEXT_PUBLIC_BACKEND_URL=http://0.0.0.0:1337/graphql
NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000
```

Run `yarn dev` in both the content folder and in the frontend directory