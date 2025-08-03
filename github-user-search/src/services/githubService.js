import axios from "axios";

export async function fetchUsers({ username, location, minRepos }) {
  let query = [];

  if (username) query.push(`${username} in:login`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>=${minRepos}`);

  const q = query.join(" ");
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(q)}&per_page=10`;

  const response = await axios.get(url);
  const userItems = response.data.items;

  // Fetch full user details for each result
  const detailedUsers = await Promise.all(
    userItems.map(async (user) => {
      const res = await axios.get(user.url);
      return res.data;
    })
  );

  return detailedUsers;
}
