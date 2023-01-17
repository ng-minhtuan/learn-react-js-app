export default function Button (
  {
    title,style, href, onClick, onMouseOver, onMouseOut
  }
) {

  let ComponentButton = 'button';
  let eventProps={};
  if(onClick){
    eventProps.onClick = onClick;
  }
  if(onMouseOver){
    eventProps.onMouseOver = onMouseOver;
  }
  if(onMouseOut){
    eventProps.onMouseOut = onMouseOut;
  }
  if(href){
    ComponentButton = 'a';
    eventProps.href = href;
  }

  return (
    <ComponentButton
      style={{...style, height:href ? 20 : ''}}
      {...eventProps}
    >
      {title}
    </ComponentButton>
  )
}