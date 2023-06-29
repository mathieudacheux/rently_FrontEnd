const APP_ROUTES = {
  // Home
  HOME: '/',

  // Auth
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',

  // Navbar
  BUY: '/buy',
  SELL: '/sell',
  GESTION: '/gestion',
  AGENCY: '/agency',

  // Error pages
  NOT_FOUND: '/404',
  SERVER_ERROR: '/500',
  ACCESS_DENIED: '/403',
  UNAUTHORIZED: '/401',
}

const APP_TITLES = [
  {
    path: APP_ROUTES.HOME,
    title: 'title.home',
  },
  {
    path: APP_ROUTES.LOGIN,
    title: 'title.login',
  },
  {
    path: APP_ROUTES.REGISTER,
    title: 'title.register',
  },
  {
    path: APP_ROUTES.FORGOT_PASSWORD,
    title: 'title.forgot_password',
  },
  {
    path: APP_ROUTES.RESET_PASSWORD,
    title: 'title.reset_password',
  },
  {
    path: APP_ROUTES.BUY,
    title: 'title.buy',
  },
  {
    path: APP_ROUTES.SELL,
    title: 'title.sell',
  },
  {
    path: APP_ROUTES.GESTION,
    title: 'title.gestion',
  },
  {
    path: APP_ROUTES.AGENCY,
    title: 'title.agency',
  },
  {
    path: APP_ROUTES.NOT_FOUND,
    title: 'title.not_found',
  },
  {
    path: APP_ROUTES.SERVER_ERROR,
    title: 'title.server_error',
  },
  {
    path: APP_ROUTES.ACCESS_DENIED,
    title: 'title.access_denied',
  },
  {
    path: APP_ROUTES.UNAUTHORIZED,
    title: 'title.unauthorized',
  },
]

export { APP_ROUTES, APP_TITLES }
