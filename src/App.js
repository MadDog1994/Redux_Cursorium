import PostList from './components/PostList';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import "./index.css";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1 className="App-h1-center">CURSORIUM</h1>
                <PostList />
            </div>
        </Provider>
    );
}

export default App;