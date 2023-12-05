"use client";
import axios from "@/lib/axios";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function CallbackGoogle() {
  const { get } = useSearchParams();
  const { push } = useRouter();
  const [googleParams, setGoogleParams] = useState({
    code: undefined,
    scope: undefined,
    authuser: undefined,
    prompt: undefined,
  });

  useEffect(() => {
    setGoogleParams({
      code: get("code"),
      scope: get("scope"),
      authuser: get("authuser"),
      prompt: get("prompt"),
    });
  }, []);

  useEffect(() => {
    const fetchUserAndToken = async () => {
      if (googleParams.code !== undefined) {
        await axios
          .get("/api/auth/google/call-back", { params: googleParams })
          .then((res) => {
            if (res.status === 200 && res.data.code === 200) {
              const token = res.data.token;
              // const expirationSeconds = 3600;
              // document.cookie = `token=${token}; max-age=${expirationSeconds}`;
              console.log(token);
            }
          })
          .catch((err) => {
            console.log("Error fetching token:", err);
          });
      }
    };
    fetchUserAndToken();
  }, [googleParams]);
  console.log(googleParams);

  return <div>{googleParams.code}</div>;
}
