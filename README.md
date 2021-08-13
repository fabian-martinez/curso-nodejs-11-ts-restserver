# REST API CRUD whit nodejs + ts + postgres

1. Create ts project
2. Configure Express with ts
3. Connect nodejs server to SQL database (Postgres)
4. Create CRUD whit ORM (sequalize)

## Prepare environment

1. Install Type Script
	
		npm install -g typescript

2. Init nodejs proyect

		npm init -y

3. Initialize typescript proyect

		tsc --init

4. In `tsconfig.js` config file uncommented below parameters  

		"target": "es6"
		"module": "commonjs"
		"sourceMap": true
		"outDir": "./dist"
		"strict": true
		"moduleResolution": "node"
		"esModuleInterop": true
		"mapRoot": ""
		"skipLibCheck": true
		"forceConsistentCasingInFileNames": true

5. Configure tslint to checks TypeScript code for readability

		npm install tslint  --save-dev
		npm install typescript --save-dev
		./node_modules/.bin/tslint --init
	
## Create Express server

1. install dependencies

		npm install express cors dotenv
		npm install --save-dev @type/express

2. build server.ts and app.ts

3. deploy server

		tsc // Compile to ts
		nodemon dist/app.js // to watch changes and deploy
		tsc --watch // to watch changes and compile ts to js
# curso-nodejs-11-ts-restserver
