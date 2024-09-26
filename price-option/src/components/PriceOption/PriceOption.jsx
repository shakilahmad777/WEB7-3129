// import { MdOutlineShoppingCart } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faListUl } from '@fortawesome/free-solid-svg-icons'

import PropTypes from "prop-types";

const PriceOption = ({option}) => {
const {name, price, features} = option;
    return (
        <div className="bg-blue-500 text-white p-10 relative rounded">
            <h2 className="mb-6">
                <span className="md:text-5xl font-bold">${price}</span>
                <span>/mon</span>
            </h2>
            <h4 className="md:text-3xl my-2 xl:text-left">{name}</h4>
            <div className="text-left">
                {
                    features.map(feature => <li className='fa-regular fa-square'>{feature}</li>)
                }
            </div>
            <button className="bg-orange-500 w-full py-3 text-2xl rounded-b absolute bottom-0 left-0 hover:bg-slate-900">But Now <FontAwesomeIcon className="ml-4" icon={faShoppingCart} /></button>
        </div>
    );
};

PriceOption.PropTypes = {
    option : PropTypes.object
}

export default PriceOption;