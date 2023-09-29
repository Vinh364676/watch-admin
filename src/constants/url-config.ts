const API_URL = process.env.REACT_APP_API_ENDPOINT

enum ROUTE_PATHS {
	"Home" = "/",
	"SignIn" = "/sign-in",
	"SignUp" = "/sign-up",
	"ForgotPassword" = "forgot-password",
	"Profile" = "/profile",
	"Order" = "/order",
	"CreateOrder" = "/order/create",
	"User" ="/user",
	"CreateUser" ="/user/create"
}

//this variable is using for params url
const ROUTE_DYNAMIC_VARIABLE_LIST = [":id"]

//this variable is using for replace params url with real data
enum ROUTE_DYNAMIC_VARIABLE {
	"id" = ":id",
}
export default API_URL

export { ROUTE_PATHS, ROUTE_DYNAMIC_VARIABLE_LIST, ROUTE_DYNAMIC_VARIABLE }
