import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div class='flex flex-col bg-slate-700 h-screen w-screen'>
      <Header></Header>
      <div class="flex-1 mx-auto container py-5">
        Hello world
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
