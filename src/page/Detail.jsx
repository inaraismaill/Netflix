// import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import data from "../data";

const Detail = () => {
  const params = useParams();

  const movie=data.movies[params.id]
  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: () =>
  //     fetch("http://localhost:3000/movies/").then((res) => res.json()),
  //   retry: false,
  // });

  // if (isLoading) return "Loading...";

  // if (error) return "have not any data";

  return (
    <div>
      <img className="h-full w-full" src={movie.video} alt="" />
      <h1>{movie.name}</h1>
      <h1>{movie.id}</h1>
    </div>
  );
};

export default Detail;
