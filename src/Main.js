
import './Main.css';
import { Routes, Route } from "react-router-dom";
import Blog from './pages/Blog/Blog';
import Cenik from './pages/Cenik/Cenik';
import Kontakt from './pages/Kontakt/Kontakt';
import NaseSluzby from './pages/Sluzby/NaseSluzby';
import Reference from './pages/Reference/Reference';
import Realizace from './pages/Realizace/Realizace';
import Vizualizace from './pages/Vizualizace/Vizualizace';
import Home from './pages/Home/Home';
import Homestaging from './pages/Homestaging'
import BytInterier from './pages/BytInterier'
import KomercniInterier from './pages/KomercniInterier'
import Konzultace from './pages/Konzultace'
import Poukaz from './pages/Poukaz'

function Main() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blog' element={<Blog />} />
        <Route path='/cenik' element={<Cenik />}/>
        <Route path='/kontakt' element={<Kontakt />}/>
        <Route path='/nase-sluzby' element={<NaseSluzby />} />
        <Route path='/reference' element={<Reference />}/>
        <Route path='/realizace' element={<Realizace />}/>
        <Route path='/vizualizace' element={<Vizualizace />}/>
        <Route path='/navrhy-bytovych-interieru' element={<BytInterier />}/>
        <Route path='/homestaging' element={<Homestaging />}/>
        <Route path='/navrhy-komercnich-inetrieru' element={<KomercniInterier />}/>
        <Route path='/konzultace' element={<Konzultace />}/>
        <Route path='/darkovy-poukaz' element={<Poukaz />}/>
      </Routes>
    </div>
  );
}

export default Main;
