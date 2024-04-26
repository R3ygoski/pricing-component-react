import Card from './components/Card'
import Toggler from './components/Toggler'

// import bgTop from './assets/svg/bg-top.svg'
// import bgBottom from './assets/svg/bg-bottom.svg'

import { cardInfos } from './js/CardInfos'

export default function App() {
  return (
    <main className="app">
      <h1>Our Pricing</h1>
      <Toggler />
      <section className="app__cards">
        {cardInfos.map((cardInfo) => (
          <Card key={cardInfo.id} cardInfo={cardInfo} />
          ))
        }
      </section>
    </main>
  )
}