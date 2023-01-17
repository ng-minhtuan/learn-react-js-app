import { useEffect, useState } from "react";

export default function UseEffectWithPreviewImage () {
  const [image, setImage] = useState()

  useEffect(()=>{
    return ()=>{
      image && URL.revokeObjectURL(image.imgPreview);
    }
  }, [image])
  const handlePreviewImg = (e) => {
    const file = e.target.files[0];
    // Get Url preview
    file.imgPreview = URL.createObjectURL(file);
    setImage(file)
    
  }


  return (
    <div
      style={{
        display: 'flex',
        width: '90%'
      }}
    >
      <input
        type="file"
        style={{marginTop: 16}}
        onClick={(e)=>e.target.value = null}
        onChange={handlePreviewImg}
      />
      <div 
        style=
        {{
          width: '250px',
          margin: '0 5%',
          borderRadius: '4px',
          border: '1px solid #c4c4c4',
          maxHeight: '500px',
          minHeight: '250px',
          height:'fit-content',
          marginTop: 16
        }}
      >
        {
          image &&
          <img src={image.imgPreview} width="100%" height="100%"/>
        }
      </div>
    </div>
  )
}