import { model, models, Schema } from "mongoose";

const userSchema = new Schema({
	name: {
		type: text,
		required: true,
		minLength: 1,
	},
	lastName: {
		type: text,
		required: true,
		minLength: 1,
	},
	email: {
		type: text,
		required: true,
		minLength: 1,
	},
	phone: String,
	address: String,
	products: {
		type: Array,
		default: [],
	},
	postalCode: Number,
	date: Date,
	createdAt: {
		type: Date,
		immutable: true,
		default: () => Date.now,
	},
	updatedAt: {
		type: Date,
		default: () => Date.now,
	},
});


const User = models.User || model("User",userSchema)

// import { Schema, model, models } from "mongoose";

// const userSchema = new Schema({
// 	name: {
// 		type: String,
// 		required: true,
// 		minLength: 1,
// 	},
// 	lastName: {
// 		type: String,
// 		required: true,
// 		minLength: 1,
// 	},
// 	email: {
// 		type: String,
// 		required: true,
// 		minLength: 1,
// 	},
// 	phone: String,
// 	address: String,
// 	postalCode: Number,
// 	date: Date,
// 	products: {
// 		type: Array,
// 		default: [],
// 	},
// 	createdAt: {
// 		type: Date,
// 		default: () => Date.now(),
// 		immutable: true,
// 	},
// 	updatedAt: { type: Date, default: () => Date.now() },
// });

// const User = models.User || model("User",userSchema)
