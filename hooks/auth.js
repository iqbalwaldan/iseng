import useSWR from "swr";
import axios from "@/lib/axios";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
  const router = useRouter();

  const {
    data: user,
    error,
    mutate,
  } = useSWR("/api/users", () =>
    axios
      .get("/api/users")
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status === 401) throw error;
        router.push("/verify-email");
      })
  );

  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const register = async ({ setErrors, setStatus, ...props }) => {
    await csrf();
    setErrors([]);
    setStatus(null);
    axios
      .post("/api/register", props)
      .then(() => mutate() && router.push("/verify-email"))
      .catch((error) => {
        if (error.response.status !== 422) throw error;

        setErrors(error.response.data.errors);
      });
  };

  const login = async ({ setErrors, setStatus, email, password }) => {
    setErrors([]);
    setStatus(null);
    await csrf();
    try {
      const response = await axios.post("/api/login", {
        email,
        password,
      });

      const { message, user, token_type, access_token } = response.data;

      if (message === "Authenticated") {
        const expirationSeconds = 5;
        document.cookie = `token=${access_token};max-age=${expirationSeconds};`;
      } else {
        alert(message);
      }
    } catch (error) {
      if (error.response.status !== 422) throw error;
      setErrors(error.response.data.errors);
    }
  };

  const forgotPassword = async ({ setErrors, setStatus, email }) => {
    await csrf();

    setErrors([]);
    setStatus(null);

    try {
      await axios.post("/api/forgotPassword", {
        email,
      });

      const { message } = response.data;

      if (message === "Password reset link sent") {
        router.push("/forgot-password/verify");
      } else {
        alert(message);
      }
    } catch (error) {
      if (error.response.status !== 422) throw error;
      setErrors(error.response.data.errors);
    }
  };

  const resetPassword = async ({ setErrors, setStatus, ...props }) => {
    await csrf();

    setErrors([]);
    setStatus(null);

    axios
      .post("/api/resetPassword", { setErrors, setStatus, ...props })
      .then((response) =>
        router.push("/login?reset=" + btoa(response.data.status))
      )
      .catch((error) => {
        if (error.response.status !== 422) throw error;

        setErrors(error.response.data.errors);
      });
  };

  const resendEmailVerification = ({ setStatus }) => {
    axios
      .post("/email/verify")
      .then((response) => setStatus(response.data.status));
  };

  const logout = async () => {
    if (!error) {
      await axios.post("/api/logout").then(() => mutate());
    }

    window.location.pathname = "/login";
  };

  useEffect(() => {
    if (middleware === "guest" && redirectIfAuthenticated && user)
      router.push(redirectIfAuthenticated);
    if (window.location.pathname === "/verify-email" && user?.email_verified_at)
      router.push(redirectIfAuthenticated);
    if (middleware === "auth" && error) logout();
  }, [user, error]);

  return {
    user,
    csrf,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout,
  };
};
