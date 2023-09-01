const APP_ROUTES = {
  // Home
  HOME: '/',

  // Auth
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  ACCOUNT: '/account',
  VALIDATE_ACCOUNT: '/validate-account',

  // Navbar & Footer
  BUY: '/buy',
  SELL: '/sell',
  GESTION: '/gestion',
  AGENCY: '/agency',
  BLOG: '/blog',
  BLOG_DETAIL: '/blog-detail',
  WHYRENTLY: '/whyrently',
  CONTACT: '/contact',
  HIRING: '/hiring',
  HELP: '/help',
  OBJECTIF: '/objectif',
  REVIEW: 'https://trustpilot.com',
  FACEBOOK: 'https://www.facebook.com/',
  INSTAGRAM: 'https://www.instagram.com/',
  LINKEDIN: 'https://www.linkedin.com/',

  // Error pages
  NOT_FOUND: '/404',
  SERVER_ERROR: '/500',
  ACCESS_DENIED: '/403',
  UNAUTHORIZED: '/401',

  // Properties
  PROPERTIES: '/properties',
  PROPERTIES_DETAILS: '/property_details',
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
    path: APP_ROUTES.VALIDATE_ACCOUNT,
    title: 'title.accountValidation',
  },
  {
    path: APP_ROUTES.ACCOUNT,
    title: 'title.account',
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
  {
    path: APP_ROUTES.PROPERTIES,
    title: 'title.properties',
  },
  {
    path: APP_ROUTES.BLOG,
    title: 'title.blog',
  },
]

export { APP_ROUTES, APP_TITLES }
