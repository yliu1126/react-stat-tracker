import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title, onShow, showStat }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showStat ? 'red' : 'green'} text={showStat ? 'hide' : 'show'} onClick={onShow}></Button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Stat Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header