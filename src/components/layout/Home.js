import BlogList from '../Blog/BlogList';
import useFetch from '../fetch/useFetch';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {/* 첫 로딩시 blogs값은 Null이기 때문에 밑에 처럼 해줘야 fetch를 할 수 있음 */}
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs!" />}
    </div>
  );
};

export default Home;
