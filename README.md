# React SSR Boilerplate
React Boilerplate with Server Side rendering enabled.

## Project Structure
```
├── README.md
├── development.js
├── package.json
├── production.js
├── public
├── src
│   ├── __mocks__
│   │   └── fileMock.js
│   ├── client.js
│   ├── components
│   │   └── app.js
│   ├── server.jsx
│   ├── server_dev.jsx
│   ├── template.js
│   └── template_dev.js
├── webpack.config.development.js
├── webpack.config.production.js
└── yarn.lock
```

- `development.js`  
Server in dev environment  
- `production.js`  
Server in production environment  
- `src/client.js`  
Client side render
- `src/server_dev.js`  
Server side render in dev environment
- `src/server.js`  
Server side render in production environment  
- `src/template_dev.js`   
index.html equivalent template in dev environment  
- `src/template.js`  
index.html equivalent template in prod environment 


## Usage

> **First install all the dependencies for development**

```sh
yarn install && bower install
```

> **Launch application in development mode**

```sh
yarn dev
```

> **Testing Application**

```sh
yarn test
```

> **Build application**

```sh
yarn build
```

> **Run application**
```sh
yarn start
```

> **Customization**

 - `package.json`     
 Update package.json as per your requirement
 - README.md        
 Update this readMe as per your requirement
 - `Git`        
 run        
 `$ rm -rf .git`        
 followed by        
 `$ git init` to start your new git history         
 or run         
 `$ git remote set-url origin https://github.com/USERNAME/REPOSITORY.git` to continue with existing git history but on your own repo

> **Extras**
- Best fix of `yarn.lock` merge conflict
    ```
    $ git checkout <previous commit> -- yarn.lock
    $ yarn install
    ```
