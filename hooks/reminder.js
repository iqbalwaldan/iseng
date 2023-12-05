import axios from "@/lib/axios";

export const useReminder = () => {
  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const setReminder = async ({ ...props }) => {
    await csrf();

    axios
      .post("/api/createReminder", props)
      .then((response) => setStatus(response.status))
      .catch((error) => {
        if (error.response.status !== 200) throw error;
        setErrors(error.response.data.errors);
      });
  };

  return {
    setReminder,
  };
};
