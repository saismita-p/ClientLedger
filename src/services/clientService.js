const BASE_URL = "https://dev-fn-trisupport.azurewebsites.net/api";

export const fetchAllClients = async () => {
  const response = await fetch(`${BASE_URL}/client/count`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch client data");
  }
  return response.json();
};
