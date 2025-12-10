export const submitContactQuery = async (formData) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
    method: "POST",
    body: formData,
  });
  return await res.json();
};
