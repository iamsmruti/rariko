import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './comps/Layout';
import Homepage from './pages/Homepage/index';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' exact element={<Homepage />}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
