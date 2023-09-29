import { ROUTE_PATHS } from "./constants/url-config";
import { PERMISSION } from "./guards/role-guard";
import HomePage from './pages/home/home';
import OrderPage from "./pages/order/Order";
import CreateOrder from "./pages/order/create/CreateOrder";
import SignIn from './pages/sign-in/sign-in';
import UserPage from "./pages/user/User";
import CreateUser from "./pages/user/create/CreateUser";

export interface Route {
    groupIndex?: number
    href: string
    exact: boolean
    component: any
    title: string
    hidden?: boolean
    icon?: any
    forAdmin?: boolean
    loginRequired?: boolean
    permissions: PERMISSION[]
    subMenu?: SubMenu[]
}

interface SubMenu {
    href: string
    title: string
}

const anonymousPage: Route[] = [
    {
        href: ROUTE_PATHS.SignIn,
        title: "",
        exact: true,
        component: SignIn,
        hidden: true,
        permissions: [],
    },
]

const authorizedPage: Route[] = [
    {
        href: ROUTE_PATHS.Home,
        exact: true,
        component: HomePage,
        title: "Home",
        permissions: [],
        loginRequired: false,
    },
    {
        href: ROUTE_PATHS.Order,
        exact: true,
        component: OrderPage,
        title: "Order",
        permissions: [],
        loginRequired: false,
    },
    {
        href: ROUTE_PATHS.CreateOrder,
        exact: true,
        component: CreateOrder,
        title: "CreateOrder",
        permissions: [],
        loginRequired: false,
    },
    {
        href: ROUTE_PATHS.User,
        exact: true,
        component: UserPage,
        title: "User",
        permissions: [],
        loginRequired: false,
    },
    {
        href: ROUTE_PATHS.CreateUser,
        exact: true,
        component: CreateUser,
        title: "CreateUser",
        permissions: [],
        loginRequired: false,
    },
    
]

export const routes: Route[] = [...anonymousPage, ...authorizedPage]