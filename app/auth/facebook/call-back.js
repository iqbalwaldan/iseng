import axios from "@/lib/axios";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function CallbackFacebook() {
  const { get } = useSearchParams();
  const { push } = useRouter();
  const [facebookParams, setFacebookParams] = useState({
    code: undefined,
    scope: undefined,
    authuser: undefined,
    prompt: undefined,
  });

  useEffect(() => {
    setFacebookParams;
    ({
      code: get("code"),
      scope: get("scope"),
      authuser: get("authuser"),
      prompt: get("prompt"),
    });
  }, []);

  useEffect(() => {
    const fetchUserAndToken = async () => {
      if (facebookParams.code !== undefined) {
        await axios
          .get("api/auth/facebook/call-back", { params: facebookParams })
          .then((res) => {
            if (res.status === 200 && res.data.code === 200) {
              const token = res.data.token;
              const expirationSeconds = 3600;
              document.cookie = `token=${token}; max-age=${expirationSeconds}`;
            }
          })
          .catch((err) => {
            console.log("Error fetching token:", err);
          });
      }
    };
    fetchUserAndToken();
  }, [facebookParams]);

  return <div>CallbackFacebook</div>;
}
