import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Исправлен путь импорта
import nookies from "nookies";

const withAuth = (WrappedComponent) => {
  const WithAuthComponent = (props) => {
    const router = useRouter();

    useEffect(() => {
      const cookies = nookies.get();
      const isAuth = cookies.accessToken ? true : false;

      if (!isAuth) {
        router.push("/login");
      } else {
        router.push("/wildberries");
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  // Задаем displayName для компонента для улучшения отладки
  WithAuthComponent.displayName = `WithAuth(${getDisplayName(
    WrappedComponent
  )})`;

  return WithAuthComponent;
};

// Вспомогательная функция для получения displayName компонента
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default withAuth;
