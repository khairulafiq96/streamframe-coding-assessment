import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateTask from './components/CreateTask';
import './App.css';

function App() {
  return (
    <div class='flex flex-col bg-slate-500 h-screen w-screen'>
      <Header></Header>
      <div class="flex-1 mx-auto container py-5">
        <CreateTask></CreateTask>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
