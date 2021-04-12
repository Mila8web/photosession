import s from './App.module.scss';
import About from './components/blocks/about/About';
import Header from './components/blocks/header/Header';
import Main from './components/blocks/main/Main';

function App() {
  return (
    <div className={s.App}>
      <Header />
      <Main />
      <About />
    </div>
  );
}

export default App;
