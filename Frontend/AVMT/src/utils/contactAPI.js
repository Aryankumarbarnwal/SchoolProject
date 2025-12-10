export const submitContactQuery = async (formData) => {
  const res = await fetch("http://localhost:5000/api/contact", {
    method: "POST",
    body: formData,
  });
  return await res.json();
};
