import PropTypes from 'prop-types';

const NavLilnk = ({route}) => {
    return (
        <li className="mr-10 hover:backdrop-brightness-75">
            <a className='p-3' href={route.path}>{route.name}</a>
        </li>
    );
};
NavLilnk.propTypes = {
    route: PropTypes.object
}

export default NavLilnk;