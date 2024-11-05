import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'
const Grandpa = () => {
    return (
        <div className="grandpa ">
            <h2>GrandPa...</h2>
            <section className="flex">
                <Dad />
                <Uncle />
                <Aunty />
            </section>
        </div>
    );
};

export default Grandpa;