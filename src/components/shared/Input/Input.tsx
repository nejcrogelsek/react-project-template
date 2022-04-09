import { FC } from 'react'
import { Input as ReactstrapInput, InputProps } from 'reactstrap'

interface Props extends InputProps { }

const Input: FC<Props> = (props: Props) => {
	const { ...rest } = props
	return <ReactstrapInput {...rest} />
}

export default Input
