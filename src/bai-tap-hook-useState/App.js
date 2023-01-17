import { useState } from "react"

const arrayGift = [
  'CPU i9',
  'RAM 32GB RBG',
  'RGB Keyboard'
]

const styleDiv = {
  padding: 20
}

const styleButton={
  fontSize: '16px',
  color: '#fb7800',
  fontWeight:"600",
  height: '40px',
  width: '88%',
  margin: '0 6%',
  backgroundColor:"#fff",
  borderRadius:"4px",
  cursor:"pointer",
  display:'flex',
  alignItems: 'center',
  placeContent: 'center',
  padding:"8px",
  border:"1px solid #fb7800"
}

export default function BaiTapUseState() {
  const [gift, setGift] = useState()
  const randomNumber = () => {
    var numberRandom = Math.random() * arrayGift.length;
    numberRandom = Math.floor(numberRandom);
    return numberRandom;
  }

  const giftContent = () =>
  {
    setGift((prev) => prev = arrayGift[randomNumber()]);
  }
  
  return (
    <div
      style={styleDiv}
    >
      <h1
        style={{
          textAlign: 'center'
        }}
      >
        {gift ||'Chúc may mắn lần sau !'}
      </h1>
      <button
        onClick={giftContent}
        style={styleButton}
      >
        Lấy thưởng
      </button>
    </div>
  )
}