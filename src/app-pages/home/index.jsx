import { UsaceBox } from "@usace/groundwork";

const office = "SAJ"
const locations = ["Okeechobee", "NAD", "SWD"];

export default function Home() {
  return (
    <UsaceBox className="mt-8" title="Tommy">
      <div>
        <p>Choose a location:</p>
        <ul>
          {locations.map((location) => (
            <li className="hover:underline" key={location}>
              <a href={`/office/${office}/location/${location}`}>{location}</a>
            </li>
          ))}
        </ul>
      </div>
    </UsaceBox>
  );
}