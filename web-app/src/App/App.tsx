import { Routes, Route } from 'react-router-dom';
import Donation from '../pages/Donation/Donation';
import { DONATION_PATH } from '../pages/paths';

function App() {
  return (
    <div>
      <Routes>
        <Route path={DONATION_PATH} element={<Donation />} />
      </Routes>
    </div>
  );
}

export default App;
