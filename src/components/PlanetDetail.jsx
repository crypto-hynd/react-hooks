import useFetch from "../hooks/use-fetch";

const PlanetDetail = ({postId}) => {
  const url = `https://swapi.dev/api/planets/${postId}`;
  const {data: planet, isLoading, error} = useFetch(url);

  if (isLoading) {
    return <p>loading ...</p>
  }
  else if (error) {
    return <p>an error occurred</p>
  } else {
    const {name, climate, gravity, population} = {...planet};
    return (
      <div>
        <h3>Name: {name}</h3>
        <p>{climate}</p>
        <p>{gravity}</p>
        <p>{population}</p>
      </div>
    );
  }
}
export default PlanetDetail;