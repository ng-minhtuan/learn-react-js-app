import { useCallback, useState } from "react"
import ComponentButtonIncrease from "./ComponentButtonIncrease";

const styleDiv = {
	margin: '0 2%',
	marginBottom: '16px',
	marginTop: '8px',
	border: '1px solid #c4c4c4',
	paddingBottom: '16px',
	borderRadius: '4px',
	width: '96%',
	minHeight: '100px',
	boxSizing: 'border-box',
	display: 'flex',
	flexDirection: 'column',
	alignContent: 'center',
	alignItems: 'center',
	flexWrap: 'nowrap',
}

export default function ContentUseCallback() {
	const [count, setCount] = useState(0);

	const handleIncrease = useCallback(()=>{
		setCount(prev => prev + 1);
	}, []);

	return (
		<div style={styleDiv}>
			<h1>{count}</h1>
			<ComponentButtonIncrease onIncrease={handleIncrease} />
			<hr/>
			<div>
				<p>- Khi sử dụng useCallback Hook thì Component con bắt buộc phải dùng memo mới tối ưu được !</p>
				<p>- Giúp tránh tạo ra những hàm mới một cách không cần thiết trong function component</p>
			</div>
		</div>
	)
}