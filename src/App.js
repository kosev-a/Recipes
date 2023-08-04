import classes from './styles/App.module.scss';
// import cn from 'classnames';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe/Recipe';

function App() {
    return (
        <>
            <BrowserRouter basename="/Recipes">
                <Header />
                <main className={classes.main_content}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/category/:categoryName"
                            element={<Category />}
                        />
                        <Route path="/meal/:id" element={<Recipe />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
