
import Home from './components/Home/Home.jsx';
import './App.css';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div>
      <Home />
      <Analytics  />
    </div>
  );
}

export default App;
