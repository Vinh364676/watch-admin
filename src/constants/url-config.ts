
const API_URL = process.env.REACT_APP_API_ENDPOINT
enum ROUTE_PATHS {
	"Home" = "/",
	"SignIn" = "/sign-in",
	"SignUp" = "/sign-up",
	"ForgotPassword" = "/forgot-password",
	"Profile" = "/profile",
	// order
	"Order" = "/order",
	"CreateOrder" = "/order/create",

	// user
	"User" ="/user",
	"CreateUser" ="/user/create",
	// product
	"Product" = "/product",
	"CreateProduct" ="/product/create",
	"EditProduct" ="/product/edit",
	//brand
	"Brand" = "/brand",
	"CreateBrand" = "/brand/create",
	"EditBrand" = `/brand/edit/:id`,
	// category
	"Category" = "/category",
	"CreateCategory" = "/category/create",
	"EditCategory" = "/category/edit/:id"

}

//this variable is using for params url
const ROUTE_DYNAMIC_VARIABLE_LIST = [":id"]

//this variable is using for replace params url with real data
enum ROUTE_DYNAMIC_VARIABLE {
	"id" = ":id",
}
export default API_URL

export { ROUTE_PATHS, ROUTE_DYNAMIC_VARIABLE_LIST, ROUTE_DYNAMIC_VARIABLE }
