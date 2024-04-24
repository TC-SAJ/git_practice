import { useConnect } from "redux-bundler-hook";
import { getNavHelper } from "internal-nav-helper";
import { SiteWrapper, Container } from "@usace/groundwork";
import "@usace/groundwork/dist/style.css";

function App() {
  const { route: Route, doUpdateUrlWithBase } = useConnect(
    "selectRoute",
    "doUpdateUrlWithBase"
  );
  return (
    <div
      onClick={getNavHelper((url) => {
        doUpdateUrlWithBase(url);
      })}
    >
      <SiteWrapper>
        <Container>
          <Route />
        </Container>
      </SiteWrapper>
    </div>
  );
}

export default App;