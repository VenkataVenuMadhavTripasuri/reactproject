import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Categories from './components/Categories';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ArticlesList from './components/articles/ArticlesList';
import ArticlePost from './components/articles/ArticlePost';
import Subscribe from './components/Subscribe';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About/>}> </Route>
        <Route path="/categories" element={<Categories/>}> </Route>
        <Route path="/articleslist" element={<ArticlesList/>}> </Route>
        <Route path="/articlespost" element={<ArticlePost/>}> </Route>
        <Route path="/subscribe" element={<Subscribe/>}> </Route>




      </Routes>
    </BrowserRouter>

  );
}

export default App;
