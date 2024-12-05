import Home from './views/Home';
import AddContact from './views/AddContact';
import UpDateContact from './views/UpDateContact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContactProvider } from './store/appContext';

function App() {
  return (
    <ContactProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-contact" element={<AddContact />} />
          <Route path="/updatecontact/:idContact" element={<UpDateContact />} />
        </Routes>
      </BrowserRouter>
    </ContactProvider>
  );
}

export default App;