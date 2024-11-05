import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";


const Dad = () => {
    return (
        <div>
            <h3>Dad</h3>
            <section className="flex">
                <Myself />
                <Brother />
                <Sister />
            </section>
        </div>
    );
};

export default Dad;