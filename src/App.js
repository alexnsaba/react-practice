import './App.css';
import ComponentDemo from './components/ComponentDemo';
import ComponentDemoTwo from './components/ComponentDemoTwo';
function App() {
  return (
    <div className="App">
      <ComponentDemo/>
      <ComponentDemoTwo day="monday"/>
    </div>
  );
}

export default App;
