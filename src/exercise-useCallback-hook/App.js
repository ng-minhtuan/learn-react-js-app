import React from "react";
import ContentUseCallback from "./Content";

const styleDiv = {
	margin: '0 2%',
	marginBottom: '16px',
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
	width: '50%',
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


/**
 *
 *	UseCallback Hook :
 *		- Reference types
 *		- React Memo()
 */
export default function ExerciseUseCallbackHook() {
	const [mounted, setMounted] = React.useState(false)
	return (
		<React.Fragment>
			<div style={styleDiv}>
				<h2> useCallBack Hook </h2>
				<button
					style={styleButton}
					onClick={() => setMounted(!mounted)}
				>
					Show Content Exercise
				</button>
				<div
					style={
						{
							display: 'flex',
						}
					}
				>
				</div>
				{
					mounted && <ContentUseCallback/>
				}
			</div>
		</React.Fragment>
	)
}