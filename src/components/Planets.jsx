import useFetch from "../hooks/use-fetch";

const Planets = ({onElementSelect}) => {
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
      {data.map((el, i) =>
        <p
          style={{cursor: "pointer", color: "blue", textDecoration: "underline"}}
          key={el.name}
          onClick={() => onElementSelect(++i)}>
          {el.name}
        </p>
      )}
    </div>
  );
}
export default Planets;