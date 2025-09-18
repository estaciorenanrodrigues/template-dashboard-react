// Constantes das rotas da aplicação
export const ROUTES = {
  DASHBOARD: '/',
} as const

// Tipo para as rotas
export type RouteType = typeof ROUTES[keyof typeof ROUTES]
