const Form = () => {
	return (
		<form>
			<label htmlFor="text">Text</label>
			<input type="text" name="text" title="text" placeholder="text" />

			<label htmlFor="email">Email</label>
			<input
				type="email"
				name="email"
				title="email"
				placeholder="email"
				id="email"
			/>

			<label htmlFor="password">Password</label>
			<input
				type="password"
				name="password"
				title="password"
				placeholder="password"
				id="password"
			/>

			<select name="select" title="select" id="select">
				<option selected disabled hidden value="">
					Select
				</option>
				<option value="option">Option</option>
			</select>

			<label htmlFor="textarea"></label>
			<textarea
				name="textarea"
				title="textarea"
				placeholder="textarea"
				id="textarea"
			></textarea>

			<label htmlFor="checkbox">Checkbox</label>
			<input type="checkbox" name="checkbox" title="checkbox" id="checkbox" />

			<button type="submit">Submit</button>
		</form>
	);
};

export default Form;
