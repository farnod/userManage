import FormInput from "./FormInput";
function ItemList() {
	return (
		<div className="item-list">
			<h4>Purchase   asDafProducts</h4>
			<div className="form-input__list">
				<FormInput label="Product Name" type="text" />
				<div>
					<FormInput label="Product Name" type="text" />
					<FormInput label="Product Name" type="text" />
				</div>
				<button>Add Item</button>
			</div>
		</div>
	);
}

export default ItemList;

