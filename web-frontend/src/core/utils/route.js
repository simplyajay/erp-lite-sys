const routeMap = [
  { path: "/", auth: false },
  { path: "/login", auth: false },
  { path: "/signup", auth: false },
  { path: "/account", auth: true },
  { path: "/dashboard", auth: true },
  { path: "/documents", auth: true },
  { path: "/purchase", auth: true },
  { path: "/stocks", auth: true },
  { path: "/suppleirs", auth: true },
];

export const getRoute = (pathname) => {
  return routeMap.find((route) => pathname.startsWith(route.path));
};
