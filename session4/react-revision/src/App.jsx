import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import Form from "./components/Form";
import People from "./components/People";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;