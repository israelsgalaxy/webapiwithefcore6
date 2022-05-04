import { onClick } from "./Interfaces"

const Button = ({ text, onClick }: {
	text: string,
	onClick: onClick
}) => {

	return (
		<button className="btn btn-light mr-1" onClick={onClick}>{text}</button>
	)
}

export default Button