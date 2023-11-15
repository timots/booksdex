import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Popular from './Pages/Popular';
import Hello from './Pages/Hello';
import './index.css';
import Books from './Pages/Books';
import News from './Pages/News';

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Hello />}
        />
        <Route
          path='/Home'
          element={<Home />}
        />
        <Route
          path='/popular'
          element={<Popular />}
        />
        <Route
          path='/books'
          element={<Books />}
        />
        <Route
          path='/News'
          element={<News />}
        />
      </Routes>
    </Router>
  );
};

export default App;
