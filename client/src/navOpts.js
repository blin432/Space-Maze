export const navOpts = [
    {
        name : "Log In",
        isUserLoggedIn : false,
        route: "/showLogIn"

    },
    {
        name : "Sign Up",
        isUserLoggedIn : false,
        route: "/showSignUp"
    },
    {
        name : "Log out",
        isUserLoggedIn : true,
        route: "/logOut"
    },
    {
        name : "Play",
        isUserLoggedIn : true,
        route: "/play"
    }
]