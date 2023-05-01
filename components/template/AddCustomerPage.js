import Form from "../module/Form";
import { useState } from "react";

function AddCustomerPage() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    date: "",
    products: [],
  });
	return (
		<div>
			<h4>add customer page</h4>
			<Form form={form} setForm={setForm} />
		</div>
	);
}

export default AddCustomerPage;
