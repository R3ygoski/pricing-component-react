import { useContext } from "react"
import { PriceCycleContext } from "../context/PriceCylceContext"

export default function Card({ cardInfo }) {

    const { priceCycle } = useContext(PriceCycleContext)

    return (
        <section className={cardInfo.title==="Professional"?"card card-alternative":"card"}>
            <h2 className="card__title">{cardInfo.title}</h2>
            <p className="card__price">
                <span className="card__price__dollar">$</span>
                {priceCycle?cardInfo.price+'.99':cardInfo.price+'9.99'}
                </p>
            <ul className="card__features">
                {cardInfo.features.map((feature, idx) => (
                    <li className="card__features__feature" key={idx}>{feature}</li>
                ))}
            </ul>
            <button className="card__button">Learn More</button>
        </section>
    )
}