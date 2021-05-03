import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import {Route, Switch} from 'react-router-dom';
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="app-body">
                <main className="main">
                    <Switch>
                        <Route path="/" component={Home}/>
                    </Switch>
                </main>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
