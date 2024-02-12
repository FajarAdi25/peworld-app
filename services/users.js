import { url } from "@/helpers/url";
import { cookies } from "next/headers";
const getCookie = async (name) => {
  return cookies().get(name)?.value ?? "";
};

export const getUser = async () => {
  try {
    const token = await getCookie("token");
    const response = await fetch(`${url}/v1/users/`, {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Cookie: `token=${token};path=/;expires=Session` } : {}),
      },
      credentials: "include",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
