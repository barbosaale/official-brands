import Header from './components/Header';
import Banner from './components/Banner';
import TopProducts from './components/TopProducts';
import BlogPosts from './components/BlogPosts';
import Categories from './components/Categories';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-100 font-sans">
      <Header />
      <Banner />
      <TopProducts />
      <BlogPosts />
      <Categories />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
