import ScenesManager from "./ScenesManager";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="h-[100vh] relative">
      <Header></Header>
      <div id="container max-h-[90vh]">
        <ScenesManager />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
