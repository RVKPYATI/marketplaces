import { useEffect } from "react";
import { useRouter } from "next/navigation";
import nookies from "nookies";

const withAuth = (WrappedComponent) => {
  return (props) => {
    // Используйте useRouter для доступа к функционалу роутинга
    const router = useRouter();

    useEffect(() => {
      // Проверьте статус авторизации (например, из cookies)
      const cookies = nookies.get();

      const isAuth = cookies.accessToken ? true : false;

      if (!isAuth) {
        // Если пользователь не авторизован, перенаправьте его на страницу /login
        router.push("/login");
      }
      if (isAuth) {
        // Если пользователь не авторизован, перенаправьте его на страницу /login
        router.push("/wildberries");
      }
    }, [router]);

    // Если пользователь авторизован, отрендерите компонент
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
