import Kanban from './Components/Kanban';
import Header from './Components/Header';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
    const kanban = useSelector((state) => state.kanban);
    useEffect(() => {
        localStorage.setItem('kanban', JSON.stringify(kanban));
    }, [kanban]);
    return (
        <div className="container">
            <Header />
            <Kanban />
        </div>
    );
}

export default App;
