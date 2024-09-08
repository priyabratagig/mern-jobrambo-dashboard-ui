import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux';
import Page404 from './pages/page404/Page404';
import Page500 from './pages/page500/Page500';
import Layout from './pages/layout/Layout';
import Home from './pages/home/Home';
import Payment from './pages/payment/Payment';
import { ANALYTICS, HOME, PAYMENT, RECRUITS } from './configs';
import './App.css';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' errorElement={<Page500 />}>
      <Route index element={<Navigate to={HOME} />} />
      <Route path={HOME} element={<Layout withNavBar withSideBar />}>
        <Route index element={<Home />} />
        <Route path={ANALYTICS} element={<Home />} />
        <Route path={RECRUITS} element={<Home />} />
      </Route>
      <Route path={PAYMENT} element={<Layout withNavBar />}>
        <Route index element={<Payment />} />
      </Route>
      <Route path='*' element={<Page404 />} />
    </Route>
  )
)

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  )
}

export default App
