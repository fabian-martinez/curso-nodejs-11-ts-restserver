import { Request, Response } from "express";
import User from "../models/user";


export const getUsers = async( req:Request, res:Response ) => {

	const users = await User.findAll()

	res.json({users})
}

export const getUser = async( req:Request, res:Response ) => {

	const { id } = req.params
	const user = await User.findByPk( id );
	if (user) {
		res.json({user})	
	} else {
		res.status(404).json({
			msg: `User with id ${id} not found`
		});
	}
	
}

export const postUser = ( req:Request, res:Response ) => {

	const { body } = req

	res.json({
		msg: 'post Usuario',
		body: body
	})
}

export const putUser = ( req:Request, res:Response ) => {

	const { id } = req.params
	const { body } = req

	res.json({
		msg: 'put Usuario',
		id: id,
		body: body
	})
}

export const deleteUser = ( req:Request, res:Response ) => {

	const { id } = req.params

	res.json({
		msg: 'delete Usuario',
		id: id
	})
}