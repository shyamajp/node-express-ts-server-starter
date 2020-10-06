# Node.js + Express + TypeScrypt server
A basic Node.js + Express server using TypeScrypt.
[Default page](http://localhost:3000) will return "Hello, World!" with some basic API endpoints using MySQL.

## API endpoints
`GET     /` - returns "Hello World!"  
`GET     /items` - returns items  
`GET     /items/:id` - returns item  
`POST    /items` - creates new item  
`PUT     /items/:id` - modifies item   
`POST    /items/:id` - deletes item

*Before using any of the above, please make sure that you have table called "item".*  
*use `POST /items/create` to create table.*

# Getting started
1. clone [this repository](https://github.com/shyamajp/node-express-ts-server-starter) by using   
`git clone https://github.com/shyamajp/node-express-ts-server-starter.git`
2. run `npm install` in the root directory to install all the dependencies

### Enviroment variables(optional)
    1. create a file `.env` under the root directory  
2. copy and paste below into `/.env` file
```
NODE_ENV=development
PORT=3000
HOST=localhost
USER=root
PASSWORD=password
DATABASE=test
```
3. make sure that you have .env in your `/.gitignore` so that your credentials will not be exposed to the public

# Available scripts
## For development
- `npm run dev` or `npm start` - runs the server with nodemon
- `npm run test` - runs test (*currently unavailable*)
## For production
- `npm run build` - builds project into /build`  
- `npm run prod` - runs script from /build/index.js