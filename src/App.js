import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useRoutes,
  BrowserRouter,
} from "react-router-dom";
import BarraNavegacion from "./components/navegacion/BarraNavegacion";
import ContenidoPrincipal from "./components/ContenidoPrincipal";
import Generalproyectosencurso from "./components/navegacion/menus/general/Generalproyectosencurso";
import Generalproyectosfinalizados from "./components/navegacion/menus/general/Generalproyectosfinalizados";
import Generalproyectospropuesta from "./components/navegacion/menus/general/Generalproyectospropuesta";
import Eventos from "./components/navegacion/menus/participaciones/Eventos";
import Generalparticipacioneseventos from "./components/navegacion/menus/general/Generalparticipacioneseventos";
import Generalparticipacionespublicaciones from "./components/navegacion/menus/general/Generalparticipacionespublicaciones";
import Generalequipocoordinacion from "./components/navegacion/menus/general/Generalequipocoordinacion";
import Generalequipointegrantes from "./components/navegacion/menus/general/Generalequipointegrantes";
import Generalsobrenosotrospresentacion from "./components/navegacion/menus/general/Generalsobrenosotrospresentacion";
import Generalsobrenosotroslineasinvestigacion from "./components/navegacion/menus/general/Generalsobrenosotroslineasinvestigacion";
import Generalsobrenosotrosreseñahistorica from "./components/navegacion/menus/general/Generalsobrenosotrosreseñahistorica";
import Generalproyectos from "./components/navegacion/menus/general/Generalproyectos";
import Generalparticipaciones from "./components/navegacion/menus/general/Generalparticipaciones";
import Generalequipo from "./components/navegacion/menus/general/Generalequipo";
import Generalsobrenosotros from "./components/navegacion/menus/general/Generalsobrenosotros";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BarraNavegacion />}>
          <Route index element={<ContenidoPrincipal />}></Route>
          <Route path="/proyectos" element={<Generalproyectos />}></Route>
          <Route
            path="/proyectos-propuesta"
            element={<Generalproyectospropuesta />}></Route>
          <Route
            path="/proyectos-encurso"
            element={<Generalproyectosencurso />}></Route>
          <Route
            path="/proyectos-finalizados"
            element={<Generalproyectosfinalizados />}></Route>
          <Route
            path="/participaciones"
            element={<Generalparticipaciones />}></Route>
          <Route
            path="/participaciones-eventos"
            element={<Generalparticipacioneseventos />}></Route>
          <Route
            path="/participaciones-publicaciones"
            element={<Generalparticipacionespublicaciones />}></Route>
          <Route path="/equipo" element={<Generalequipo />}></Route>
          <Route
            path="/equipo-coordinacion"
            element={<Generalequipocoordinacion />}></Route>
          <Route
            path="/equipo-integrantes"
            element={<Generalequipointegrantes />}></Route>
          <Route
            path="/sobrenosotros"
            element={<Generalsobrenosotros />}></Route>
          <Route
            path="/sobrenosotros-presentacion"
            element={<Generalsobrenosotrospresentacion />}></Route>
          <Route
            path="/sobrenosotros-reseñahistorica"
            element={<Generalsobrenosotrosreseñahistorica />}></Route>
          <Route
            path="/sobrenosotros-lineasdeinvestigacion"
            element={<Generalsobrenosotroslineasinvestigacion />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
