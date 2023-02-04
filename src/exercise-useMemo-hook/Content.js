import { useMemo, useRef, useState } from "react";

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

const styleButton = {
	fontSize: '16px',
	color: '#fb7800',
	fontWeight: "600",
	height: '40px',
	width: '30%',
	margin: '0 2%',
	marginTop: '16px',
	backgroundColor: "#fff",
	borderRadius: "4px",
	cursor: "pointer",
	display: 'flex',
	alignItems: 'center',
	placeContent: 'center',
	padding: "8px",
	border: "1px solid #fb7800"
}

const styleInput = {
	width: '50%',
	marginTop: '8px',
	height: '24px',
	borderRadius: '4px',
	border: '1px solid #c4c4c4',
	padding: '0 8px'
}

export default function ContentExercise() {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [products, setProducts] = useState([]);

	const nameRef = useRef()

	const handleSubmit = () => {
		setProducts([...products, {
			name,
			price: +price
		}]);
		setName('');
		setPrice('');
		nameRef.current.focus();
	}


	const total = useMemo(() => {
		const result = products.reduce((res, product) => res + product.price, 0)
		return result;
	}, [products]);

	return (
		<div style={styleDiv}>
			<input
				value={name}
				ref={nameRef}
				style={styleInput}
				placeholder="Enter name..."
				onChange={e => setName(e.target.value)}
			/>
			<input
				value={price}
				style={styleInput}
				placeholder="Enter price..."
				onChange={e=> setPrice(e.target.value)}
			/>
			<button
				style={styleButton}
				onClick={handleSubmit}
			>
				Add	
			</button>
			<div style={{...styleDiv, width:'50%', paddingTop: 8}}>
				<h4 style={{margin:'0', width: '100%', textAlign: 'center'}}>Total: {total}</h4>
				<hr style={{width: '100%'}}></hr>
				<ul>
					{
						products.map((product, index)=>(
							<li key={index}>{product.name} - {product.price}</li>
						))
					}
				</ul>
			</div>
    </div>
	)
}