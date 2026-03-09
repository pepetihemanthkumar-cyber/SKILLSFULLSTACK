import axios from "axios";
import { useEffect, useState } from "react";

function FakePostList() {

  const [posts, setPosts] = useState([]);
  const [userFilter, setUserFilter] = useState("");

  const fetchPosts = async () => {
    const res = await axios.get("https://dummyjson.com/posts");
    setPosts(res.data.posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts =
    userFilter === ""
      ? posts
      : posts.filter(post => post.userId === Number(userFilter));

  return (
    <div>

      <h2>Fake API Posts</h2>

      <button onClick={fetchPosts}>Refresh</button>

      <br /><br />

      <label>Filter by User ID: </label>

      <select onChange={(e) => setUserFilter(e.target.value)}>
        <option value="">All</option>
        <option value="1">User 1</option>

      </select>

      <ul>
        {filteredPosts.map(post => (
          <li key={post.id}>
            <b>{post.title}</b>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default FakePostList;