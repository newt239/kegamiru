/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SearchImport } from './routes/search'
import { Route as OtherInjureImport } from './routes/other-injure'
import { Route as ListImport } from './routes/list'
import { Route as InjureImport } from './routes/injure'
import { Route as AddImport } from './routes/add'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const SearchRoute = SearchImport.update({
  path: '/search',
  getParentRoute: () => rootRoute,
} as any)

const OtherInjureRoute = OtherInjureImport.update({
  path: '/other-injure',
  getParentRoute: () => rootRoute,
} as any)

const ListRoute = ListImport.update({
  path: '/list',
  getParentRoute: () => rootRoute,
} as any)

const InjureRoute = InjureImport.update({
  path: '/injure',
  getParentRoute: () => rootRoute,
} as any)

const AddRoute = AddImport.update({
  path: '/add',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/add': {
      id: '/add'
      path: '/add'
      fullPath: '/add'
      preLoaderRoute: typeof AddImport
      parentRoute: typeof rootRoute
    }
    '/injure': {
      id: '/injure'
      path: '/injure'
      fullPath: '/injure'
      preLoaderRoute: typeof InjureImport
      parentRoute: typeof rootRoute
    }
    '/list': {
      id: '/list'
      path: '/list'
      fullPath: '/list'
      preLoaderRoute: typeof ListImport
      parentRoute: typeof rootRoute
    }
    '/other-injure': {
      id: '/other-injure'
      path: '/other-injure'
      fullPath: '/other-injure'
      preLoaderRoute: typeof OtherInjureImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      id: '/search'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof SearchImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AddRoute,
  InjureRoute,
  ListRoute,
  OtherInjureRoute,
  SearchRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/add",
        "/injure",
        "/list",
        "/other-injure",
        "/search"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/add": {
      "filePath": "add.tsx"
    },
    "/injure": {
      "filePath": "injure.tsx"
    },
    "/list": {
      "filePath": "list.tsx"
    },
    "/other-injure": {
      "filePath": "other-injure.tsx"
    },
    "/search": {
      "filePath": "search.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
