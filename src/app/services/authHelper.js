import nookies from "nookies";

export function checkAuth(context) {
  const cookies = nookies.get(context);
  const isAuth = cookies.auth_token ? true : false;

  if (!isAuth) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return true;
}
