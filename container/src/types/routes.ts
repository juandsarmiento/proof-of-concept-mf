interface Route {
  key: string
  title: string
  icon: string
  path: string
}

export const ROUTES: Route[] = [
  {
    key: 'ads',
    title: 'Advertisement',
    icon: 'sb-admin-icon-budge',
    path: '/ads',
  },
  {
    key: 'references',
    title: 'References',
    icon: 'sb-admin-icon-calendar-time',
    path: '/references',
  },
]
