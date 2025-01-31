import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { filterData, apiUrl } from './FilterData';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './components/Loading';

function App() {
  const [course, setCourse] = useState("");
  const [loader, setLoader] = useState(true);
  const [initialTitle, setTitle] = useState(filterData[0].title);

  useEffect(() => {
    async function fetching() {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourse(output.data);
      setLoader(false);
    }
    fetching();
  }, []);

  return (
    <div className="App">
      {loader ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Filter filterData={filterData} initialTitle={initialTitle} setTitle={setTitle} />
          <Cards className="cards" course={course} Title={initialTitle} />
          <ToastContainer />
        </>
      )}
    </div>
  );
}

export default App;
