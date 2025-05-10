
const ReuseableForm = ({formTitle, handleSubmit, submitBtn ='Submit', children}) => {

    const handleLocalSubmit = (e) =>{
        e.preventDefault();
        const data = {
           name: e.target.name.value,
           email: e.target.email.value,
           password: e.target.password.value,
        }
        handleSubmit(data);
    }
    return (
        <div>
            <h2>{children}</h2>
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" id="" placeholder="type your name" /><br />
                <input type="email" name="email" id="" placeholder="type your email"/><br />
                <input type="password" name="password" placeholder="type your pass 6 char" id="" /><br />
                <button>{submitBtn}</button>
            </form>
        </div>
    );
};

export default ReuseableForm;