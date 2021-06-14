import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <h1>{props.age}</h1>
      <h1>{props.price}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
  age: 54,
  price: 300,
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
}

export default Header
