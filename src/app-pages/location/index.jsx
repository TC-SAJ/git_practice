import { UsaceBox, useCdaLocation } from "@usace/groundwork";
import { useConnect } from "redux-bundler-hook";

export default function Location() {
  const { routeParams } = useConnect("selectRouteParams");
  const office = routeParams?.office.toUpperCase();
  const location = routeParams?.location.toUpperCase();
  const {data, isPending, isError} = useCdaLocation({cdaParams: { office: office, location: location }});

  if(isPending) return <span>Currently Loading....</span>;
  if(isError) return <span>There is an error....</span>;

  return (
    <UsaceBox className="mt-8" title={data["public-name"]}>
      <div>
        <ul>
          {Object.keys(data).map((key) => {
            return(
              <li key={key}>
                <strong>{key}</strong>-{data[key]}
              </li>
            )
          })}
        </ul>
        <p>This could be a detail page about {location}</p>
        <a className="hover:underline" href="/">
          Go back home
        </a>
      </div>
    </UsaceBox>
  );
}