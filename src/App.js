import React, { Fragment, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import { getServicesRequest, getServiceRequest } from './actions/creators';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Services />
          </Route>
          <Route exact path='/:id/details'>
            <Service />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const Services = () => {
  const { services, loading, error } = useSelector(state => state.services)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getServicesRequest())
  }, [dispatch])

  return (
    <Fragment>
      {loading && <div>loading...</div>}
      {(error) ? <div>Error</div> : <ul>{services.map(o =>
        <li key={o.id}><Link to={`/${o.id}/details`} >{o.name}</Link></li>)}</ul>
      }
    </Fragment>
  )
}

const Service = () => {
  const {id} = useParams()
  const { service, loading, error } = useSelector(state => state.service)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getServiceRequest(id))
  }, [dispatch, id])

  if (loading) {
    return <div>loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  return (
    <div>
      <div>{service.id}</div>
      <div>{service.name}</div>
      <div>{service.price}</div>
      <div>{service.content}</div>
    </div>
  )
}

export default App;
