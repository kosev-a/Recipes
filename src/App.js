import classes from './styles/App.module.scss';
// import cn from 'classnames';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { Category } from './pages/Category';

function App() {
    return (
        <>
            <Header />
            <main className={classes.main_content}>
                <BrowserRouter basename="/react-food">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/category/:categoryName"
                            element={<Category />}
                        />
                    </Routes>
                </BrowserRouter>
            </main>
            <Footer />
        </>
    );
}

export default App;
