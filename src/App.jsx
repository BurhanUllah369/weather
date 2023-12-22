import Search from "./components/Search";
import Result from "./containers/Result";
import MyProvider from "./context/ContextProvider";

function App() {
  return (
    <MyProvider>
      <div className="container">
        <Search />
        <Result />
      </div>
    </MyProvider>
  );
}

export default App;
