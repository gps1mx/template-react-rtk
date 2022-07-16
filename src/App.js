import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRelacionBases } from './store/slices/general/thunks';
import { setLoading } from './store/slices/general/generalSlice';

import './App.css';

import { Navigation } from './routes/Navigation';
import { Button } from 'react-bootstrap';

function App() {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.general.loading);
  const relacionBases = useSelector(state => state.general.relacionBases);

  useEffect(() => {
    if (relacionBases.length === 0) {
      dispatch(getRelacionBases());
    }
  }, [dispatch, relacionBases]);

  return (
    <div className="App">

      {loading ? <div>Cargando...</div> : null}

      <Navigation />

      <Button variant="primary" onClick={() => dispatch(setLoading(!loading))}>Loading</Button>

    </div>
  );
}

export default App;
