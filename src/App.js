import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import './App.css';

function App() {
  return (
    <div className='flex flex-col h-screen w-screen'>
      <Header></Header>
      <div className="flex-auto mx-auto container py-5">
        <Content></Content>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
