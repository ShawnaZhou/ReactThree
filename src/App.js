import React,{Suspense} from "react";
import RouteFunc from './routes/Routes';
import Transition from './components/Transition.jsx';

function App() {
  return (
    <Suspense fallback={Transition}>
      <RouteFunc />
    </Suspense>
  );
}

export default App;
