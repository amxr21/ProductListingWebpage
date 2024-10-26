import "./index.css"
import { Navbar, Hero, WhoAreWe, Products, Footer } from "./assets/Sections/index"

// #5B69DE
// #72DEAA

function App() {

  return (
    <div className="overflow-hidden">
      <div className="mx-16 my-16">
        <Navbar />
        <Hero />
        <WhoAreWe />
        <Products />

      </div>
      <Footer />
    </div>
  )
}

export default App
