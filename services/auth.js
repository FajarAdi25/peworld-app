export const login = async (form) => {
  try {
    const response = await fetch(`/v1/auth/login`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(form),
      credentials: "include",
    });
    // if (!response.ok) {
    //   throw "tidak oke";
    // }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export const registerWorker = async (form) => {
  try {
    const response = await fetch(`/v1/workers/register`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(form),
      credentials: "include",
    });
    // if (!response.ok) {
    //   throw "tidak oke";
    // }
    const data = await response.json();
    return data;
  } catch (error) {
    // console.log(error);
    return Promise.reject(error);
  }
};

export const registerRecruiters = async (form) => {
  try {
    const response = await fetch(`/v1/recruiters/register`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(form),
      credentials: "include",
    });
    // if (!response.ok) {
    //   throw "tidak oke";
    // }
    const data = await response.json();
    return data;
  } catch (error) {
    // console.log(error);
    return Promise.reject(error);
  }
};
