import './App.css';
import HomePage from './pages/Homepage';
import LoadingScreen from './pages/Loadingscreen';
import React from 'react';


function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // This will switch to the home page
    }, 5000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App cursor">
        {loading ? <LoadingScreen /> : <HomePage />}
    </div>
  );
}



export default App;
