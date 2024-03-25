"use server";
import { url } from "@/helpers/url";
import getCookie from "./geCookie";

export const getWorkers = async ({
  limit,
  page,
  sort,
  sortBy,
  search,
} = {}) => {
  try {
    // const token = await getCookie("token");
    // const response = await fetch(`${url}/v1/workers/`, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     ...(token ? { Cookie: `token=${token};path=/;expires=Session` } : {}),
    //   },
    //   method: "GET",
    //   credentials: "include",
    //   cache: "no-store",
    // });
    const response = await fetch(
      `${url}/v1/workers/?limit=${limit}&page=${page}&search=${search}&sort=${sort}&sortBy=${sortBy}`,
      {
        headers: {
          "content-type": "application/json",
        },
        method: "GET",
        credentials: "include",
      }
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
export const getProfile = async () => {
  // if (!token) return redirect("/auth/login");

  try {
    const token = await getCookie("token");
    const response = await fetch(`${url}/v1/workers/profile`, {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Cookie: `token=${token};path=/;expires=Session` } : {}),
      },
      method: "GET",
      credentials: "include",
      cache: "no-store",
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getDetailWorkers = async (id) => {
  // if (!token) return redirect("/login/worker");

  try {
    const token = await getCookie("token");
    const response = await fetch(`${url}/v1/workers/${id}`, {
      headers: {
        "Content-Type": "application/json",
        // ...(token ? { Cookie: `token=${token};path=/;expires=Session` } : {}),
        Cookie: `token=${token};path=/;expires=Session`,
      },
      method: "GET",
      credentials: "include",
      cache: "no-store",
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
