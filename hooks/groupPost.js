import axios from "@/lib/axios";

export const useGroupPost = () => {
  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const setGroupPost = async ({ ...props }) => {
    await csrf();

    axios
      .post("/api/facebook/post", props)
      .then((response) => setStatus(response.data.status))
      .catch((error) => {
        if (error.response.status !== 200) throw error;
        setErrors(error.response.data.errors);
      });
  };

  return {
    setGroupPost,
  };
};
