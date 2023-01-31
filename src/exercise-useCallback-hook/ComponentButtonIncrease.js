import { memo } from "react"

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
export default memo( function ComponentButtonIncrease({onIncrease}) {
  // Check Console.log : re-render
  console.log('re-render');

  return (
    <button
      style={styleButton}
      onClick={onIncrease}
    >
      Increase !
    </button>
  )
})