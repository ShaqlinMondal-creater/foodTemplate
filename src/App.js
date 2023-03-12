import './Components/MainStyle.css';
// import Food_Template from './Components/Food_Template';
// import Navbar from './Components/Header/Navbar'
import Header from './Components/Header/Header';

// import Home from './Components/Home/Home'
// import About from './Components/About/About'
// import Menu from './Components/Body/Menu/Menu'
// import Review from './Components/Review/Review'
// import Contact from './Components/Contact/Contact'
// import Blog from './Components/Blog/Blog'
// import Product from './Components/Body/Products/Product'

// import { BrowserRouter,Routes,Route, NavLink } from 'react-router-dom'

function App() {
  return (
    <div>
        {/* <Food_Template /> */}

        <Header />

        {/* <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar />} >
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/products" element={<Product />} />
                <Route path="/review" element={<Review />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} /> 
            </Route>
        </Routes>
        </BrowserRouter> */}

    </div>
  );
}

export default App;
