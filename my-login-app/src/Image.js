import './Image.css'

function Image(props) {
  return(
    <div>
      {props.imgUrl ? <img src={props.imgUrl}/> :  "Property for showing image was not found"}
    </div>
  )
}

export default Image