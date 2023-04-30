import FormInput from "./FormInput";
import { useState } from "react";

function Form() {
    const [name, setName] = useState("")
    const nameChangeHandler = e =>{setName(e.target.value)}
    console.log(name)

	const [lastName, setLastName] = useState("");
	const lastNameChangeHandler = e =>{setLastName(e.target.value)}

	return (
		<div>
			<FormInput label="Name" name="name" type="text" value={name} onChange={nameChangeHandler} />
			<FormInput label="Last Name" name="lastName" type="text" value={lastName} onChange={lastNameChangeHandler} />
			<FormInput label="Email" name="email" type="text"  />
		</div>
	);
}

export default Form;
