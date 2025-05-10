import Special from "../Special/Special";

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
                {/* <Special asset={asset}></Special>  worng way */}
                { asset && <Special asset={asset}></Special>}
            </section>
        </div>
    );
};

export default Cousin;