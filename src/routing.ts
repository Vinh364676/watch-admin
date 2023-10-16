import { ROUTE_PATHS } from "./constants/url-config";
import { PERMISSION } from "./guards/role-guard";
import BrandPage from "./pages/brand/BrandPage";
import CreateBrand from "./pages/brand/create/CreateBrand";
import EditBrand from "./pages/brand/edit/EditBrand";
import HomePage from './pages/home/home';
import OrderPage from "./pages/order/Order";
import CreateOrder from "./pages/order/create/CreateOrder";
import CreateProduct from "./pages/product/create/CreateProduct";
import EditProduct from "./pages/product/edit/EditProduct";
import ProductPage from "./pages/product/productPage";
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
        loginRequired: true,

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
    {
        href: ROUTE_PATHS.Product,
        exact: true,
        component: ProductPage,
        title: "Product",
        permissions: [],
        loginRequired: false,
    },
    {
        href: ROUTE_PATHS.CreateProduct,
        exact: true,
        component: CreateProduct,
        title: "CreateProduct",
        permissions: [],
        loginRequired: false,
    },
    {
        href: ROUTE_PATHS.EditProduct,
        exact: true,
        component: EditProduct,
        title: "EditProduct",
        permissions: [],
        loginRequired: false,
    },
    {
        href: ROUTE_PATHS.Brand,
        exact: true,
        component: BrandPage,
        title: "Brand",
        permissions: [],
        loginRequired: false,
    },
    {
        href: ROUTE_PATHS.CreateBrand,
        exact: true,
        component: CreateBrand,
        title: "CreateBrand",
        permissions: [],
        loginRequired: false,
    },
    {
        href: ROUTE_PATHS.EditBrand,
        exact: true,
        component: EditBrand,
        title: "CreateBrand",
        permissions: [],
        loginRequired: false,
    },
]

export const routes: Route[] = [...anonymousPage, ...authorizedPage]