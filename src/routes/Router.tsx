import { APP_ROUTES } from './routes.ts'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/Home/Home.tsx'
import Login from '../pages/Login/Login.tsx'
import Register from '../pages/Register/Register.tsx'
import ValidateAccount from '../pages/ValidateAccount/ValidateAccount.tsx'
import ForgetPassword from '../pages/ForgetPassword/ForgetPassword.tsx'
import Properties from '../pages/Properties/Properties.tsx'
import Gestion from '../pages/Gestion/Gestion.tsx'
import MyAccount from '../pages/MyAccount/MyAccount.tsx'
import Blog from '../pages/Blog/Blog.tsx'
import BlogDetail from '../pages/BlogDetail/BlogDetail.tsx'
import Footer from '../components/organisms/Footer.tsx'
import Why from '../pages/Why/Why.tsx'
import Target from '../pages/Target/Target.tsx'
import { useMemo } from 'react'
import PropertyDetails from '../pages/PropertyDetails/PropertyDetails.tsx'

export default function RouterElement(): JSX.Element {
  const location = useLocation()

  const showFooter = useMemo(
    () =>
      location.pathname === APP_ROUTES.REGISTER ||
      location.pathname === APP_ROUTES.VALIDATE_ACCOUNT ||
      location.pathname === APP_ROUTES.FORGOT_PASSWORD ||
      location.pathname === APP_ROUTES.LOGIN ||
      location.pathname === APP_ROUTES.ACCOUNT ||
      location.pathname === APP_ROUTES.VALIDATE_ACCOUNT,
    [location.pathname],
  )

  return (
    <>
      <Routes>
        <Route path={APP_ROUTES.HOME} element={<Home />} />
        <Route path={APP_ROUTES.LOGIN} element={<Login />} />
        <Route path={APP_ROUTES.REGISTER} element={<Register />} />
        <Route
          path={APP_ROUTES.VALIDATE_ACCOUNT}
          element={<ValidateAccount />}
        />
        <Route path={APP_ROUTES.FORGOT_PASSWORD} element={<ForgetPassword />} />
        <Route path={APP_ROUTES.PROPERTIES} element={<Properties />} />
        <Route
          path={`${APP_ROUTES.PROPERTIES_DETAILS}/:property_name/:property_id`}
          element={<PropertyDetails />}
        />
        <Route path={APP_ROUTES.GESTION} element={<Gestion />} />
        <Route path={APP_ROUTES.ACCOUNT} element={<MyAccount />} />
        <Route path={APP_ROUTES.BLOG} element={<Blog />} />
        <Route
          path={`${APP_ROUTES.BLOG_DETAIL}/:id/:title`}
          element={<BlogDetail />}
        />
        <Route path={APP_ROUTES.WHYRENTLY} element={<Why />} />
        <Route path={APP_ROUTES.OBJECTIF} element={<Target />} />
      </Routes>
      {!showFooter && <Footer />}
    </>
  )
}
