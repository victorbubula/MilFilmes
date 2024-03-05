

interface Props {
	label:string,
	placeholder:string, 
	onChange:(value: React.SetStateAction<string>) => void, 
	value:string
}

export default function Input({label,placeholder, onChange, value}:Props) {
	const onTyping = (event: { target: { value: React.SetStateAction<string>; }; })=> {
		onChange(event.target.value);
	};
	return <div>
		<label>{label}</label>
		<input value={value} onChange={onTyping} required={true} placeholder={placeholder} />
	</div>;
}