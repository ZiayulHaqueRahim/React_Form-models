import Cousin from "../Cousin/Cousin";


const Uncle = () => {
    return (
        <div>
            <h5>Uncle</h5>
        
            <section className="flex">
                <Cousin name={'Rafsan'}/>
                <Cousin name={'Sohana'}/>
            </section>
        </div>
    );
};

export default Uncle;