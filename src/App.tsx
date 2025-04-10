import Header from './components/Header';
import NasaImageGrid from './components/NasaImageGrid';

function App() {

  return (
    <>
      <Header />
      <main className="container">
        <NasaImageGrid />
      </main>
      <footer className='page-footer'>
        <div className="container">
          <hr />
          <p><strong>© NASA Gallery 2025</strong> | Raymundo Rabago - all rights reserved</p>
        </div>
      </footer>
    </>
  )
}

export default App
