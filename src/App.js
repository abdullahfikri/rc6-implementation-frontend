import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Container from './components/Container';
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Container />
        </BrowserRouter>
    );
}

export default App;
