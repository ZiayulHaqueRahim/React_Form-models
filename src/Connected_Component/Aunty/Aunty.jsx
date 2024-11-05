import Cousin from "../Cousin/Cousin";


const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Rafin'} />
                <Cousin name={'mamshad'}/>
            </section>
        </div>
    );
};

export default Aunty;