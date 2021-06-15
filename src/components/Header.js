import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />
      {/* <h1>{props.age}</h1>
      <h1>{props.price}</h1> */}
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
  // age: 54,
  // price: 300,
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  // age: PropTypes.number.isRequired,
  // price: PropTypes.number.isRequired,
}

export default Header
