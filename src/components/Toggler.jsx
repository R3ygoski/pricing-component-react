import { useContext } from "react";
import { PriceCycleContext } from "../context/PriceCylceContext";

export default function Toggler() {

    const { priceCycle, setPriceCycle } = useContext(PriceCycleContext)

    const toggleBilling = () => {
        setPriceCycle(!priceCycle)
    };

    return (
        <div className="toggler" >
            <p className="billing">Annually</p>
            <div className="toggler__switch" onClick={toggleBilling}>
                <div className={priceCycle?"toggler__switch__circle--monthly":"toggler__switch__circle--anually"}>

                </div>
            </div>
            <p className="billing">Monthly</p>
        </div>
    )
}