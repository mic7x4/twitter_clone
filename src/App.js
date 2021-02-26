import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar/>
      {/* Feeds */}
      <Feed/>
      {/* Widgets */}
      <Widgets/>
    </div>
  );
}
 
export default App;
