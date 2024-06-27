import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:3000/movies/").then((res) => res.json()),
    retry: false,
  });

  if (isLoading) return "Loading...";

  if (error) return "have not any data";
  console.log();
  return (
    <div>
      <img className="h-full w-full" src={data[params.id].video} alt="" />
      <h1>{data[params.id].name}</h1>
      <h1>{data[params.id].id-1}</h1>
    </div>
  );
};

export default Detail;
