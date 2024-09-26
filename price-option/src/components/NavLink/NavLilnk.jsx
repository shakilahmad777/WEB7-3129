import PropTypes from 'prop-types';

const NavLilnk = ({route}) => {
    return (
        <li className="mr-3 text-slate-900 hover:bg-slate-900 hover:text-white py-3 px-6 font-bold rounded">
            <a className='' href={route.path}>{route.name}</a>
        </li>
    );
};
NavLilnk.propTypes = {
    route: PropTypes.object
}

export default NavLilnk;