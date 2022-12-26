import propTypes from "prop-types"

const Button = ({text, color,handleAdd}) => {
  return (
   <button 
    onClick = {handleAdd} style = {{ backgroundColor: color }}  className="btn">
      {text}
    </button>
  )
}

Button.defautProps = {
  color: 'red',
}

Button.propTypes = {
  text: propTypes.string,
  color: propTypes.string,
  handleAdd: propTypes.func.isRequired,
}

export default Button
 