import { useField, ErrorMessage } from "formik";

export const TextInput = ({ label, ...props }) => {
	const [field] = useField(props);

	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input className="text-input" {...field} {...props} />
			<ErrorMessage name={props.name} component="span" />
		</>
	);
};
