import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
    return (
        <div className="holder">
            <Header />
            <div className="d-flex">
                <Navbar />
                <Main />
            </div>
        </div>
    );
}

export default App;
