import express, { Application } from "express";
import userRouter from '../routes/users';
import cors from 'cors';
import db from "../db/connection";

class Server {

	private app:Application
	private port:string
	private apiPath = {
		users: '/api/users'
	}

	constructor() {
		this.app = express();
		this.port = process.env.PORT || '8000';
		
		// Init methods
		this.dbConnection();
		this.middelwares();
		this.routes();
	}

	async dbConnection() {
		try {
			await db.authenticate();
			console.log("Database Online");
		} catch (error) {
			throw new Error( error )
		}
	}

	middelwares() {

		//CORS
		this.app.use( cors() )

		//read body
		this.app.use( express.json() )

		//Public folder
		this.app.use( express.static('public'))
	}

	routes() {
		this.app.use(this.apiPath.users, userRouter)
	}

	listen(){
		this.app.listen( this.port, () => {
			console.log('Servidor funcionando en puerto: ' + this.port);
		})
	}
}



export default Server;