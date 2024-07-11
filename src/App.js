import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import Register from './pages/register';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Container fluid={true} className="App pl-0">
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Navigate to="/register" />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;
