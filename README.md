# React SSR Boilerplate
React Boilerplate with Server Side rendering enabled.

## Project Structure
```
.
├── README.md
├── config
│   ├── jest
│   │   ├── fileMock.js
│   │   └── fileTransform.js
│   ├── webpack.config.dev.js
│   └── webpack.config.prod.js
├── development.js
├── package.json
├── production.js
├── public
├── src
│   ├── client.js
│   ├── components
│   │   ├── App.js
│   │   ├── App.scss
│   │   └── App.test.js
│   ├── server.js
│   ├── server_dev.js
│   ├── template.js
│   └── template_dev.js
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
- `config/webpack.config.dev.js`  
Webpack development configuration  
- `config/webpack.config.prod.js`  
Webpack production configuration 


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
