import './App.css';
import Header from './pages/Header';
import Fiture from './pages/Fiture';
import Amazing from './pages/Amazing';
import Customer from './pages/Customer';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <div class="loader_bg">
         <div class="loader"><img src="images/loading.gif" alt="#" /></div>
      </div>
   {/* <!-- end loader --> */}
   <Header></Header>
   <Fiture></Fiture>
   {/* <!-- amezing --> */}
   <Amazing></Amazing>
   {/* <!-- customer --> */}
   <Customer></Customer>
   {/* <!-- request --> */}
   <Contact></Contact>
   {/* <!--  footer -->S */}
   <Footer></Footer>
    </div>
  );
}

export default App;
