
const Phones = () => {
    const [phones, setPhones] = useState([])

    axios.get('products')
    .then(data => setPhones(data.data.data)
    )
    return (
        <div>
            <h2>Phones : {phones.length}</h2>
            <h1></h1>
        </div>
    );
};

export default Phones;