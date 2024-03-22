export const addAsset = async (form) => {
  const response = await fetch("/v1/upload/", {
    method: "POST",
    body: form,
  });
  const data = await response.json();
  console.log("data", data);
  return data.data.file_url;
};
