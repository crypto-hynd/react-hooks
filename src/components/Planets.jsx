import useFetch from "../hooks/use-fetch";

const Planets = () => {
  const url = 'https://swapi.dev/api/planets';
  const {data, isLoading, error} = useFetch(url);

  if (isLoading) {
    return <p>loading ...</p>
  }
  if (error) {
    return <p>an error occurred</p>
  }
  return (
    <div>
      {data.map(el => <p key={el.name}>{el.name}</p>)}
    </div>
  );
}
export default Planets;