import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  //let name = "mario";
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("https://json-server-psi-black.vercel.app:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading ...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
