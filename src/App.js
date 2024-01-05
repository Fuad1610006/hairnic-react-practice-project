import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import About from './components/About/about';
import Usage from './components/Usage/usage';
import Feature from './components/Feature/feature';
import Blog from './components/Blog/blog';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />   
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/usage" element={<Usage />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/blog" element={<Blog />} />
          {/* 
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} /> */}
         
          {/* <Route
            path="/checkout"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Checkout />
              </Protected>
            }
          />
           <Route
            path="/thankYou"
            element={
              <Protected isSignedIn={isSignedIn}>
                <ThankYou />
              </Protected>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path="/product"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Product />
              </Protected>
            }
          />
          <Route
            path="/coupon"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Coupon />
              </Protected>
            }
          />
           <Route
            path="/order"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Order />
              </Protected>
            }
          /> */}
        </Routes>
    </BrowserRouter>
  )
}

export default App;
