
import { Routes, Route } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Layout } from "./components/Layout"
import { About } from "./components/About"
import { FormPost } from "./components/FormPost"
function App() {

  return (
    <section className="main-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<FormPost />} />

        </Route>


      </Routes>
    </section>
  )
}

export default App
