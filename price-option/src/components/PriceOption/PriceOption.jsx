import PropTypes from "prop-types";

const PriceOption = ({option}) => {
const {id, name, price, features} = option;
    return (
        <div>
            <h2>
                <span>{name}</span>
                <span>{price}</span>
            </h2>
        </div>
    );
};

PriceOption.PropTypes = {
    option : PropTypes.object
}

export default PriceOption;