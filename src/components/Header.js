import propTypes from "prop-types"
import Button from "./Button"
const Header = ({title, handleAdd, toggleAdd}) => {
  

  return (
    <div className="header">
      <h1> {title} </h1>
      <Button handleAdd= {handleAdd}
      text={toggleAdd ? 'Close' : 'Add'}
      color = {toggleAdd ? 'red' : 'green'}/>
    </div>
  )
}

Header.propTypes = {
text: propTypes.string,
}

Header.defaultProps = {
  text: 'Tasks tracker'
}

export default Header
