import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./Routes";
import { getUserData } from "./Redux/Selectors/UserSelectors";

function App() {
  const { Auth, name } = useSelector(getUserData);

  return (
    <Switch>
      {routes.map(({ path, exact, comp, auth, title }, i) => {
        return (
          <Route key={i} exact={exact} path={path}>
            {({ match, ...props }) => {
              return Auth !== auth ||
                (match.params.account && match.params.account !== name) ? (
                <Redirect to={Auth ? `/${name}/dashboard` : "/signup"} />
              ) : (
                comp({ title, match, ...props })
              );
            }}
          </Route>
        );
      })}
      <Redirect to={Auth ? `/${name}/dashboard` : "/signup"} />
    </Switch>
  );
}

export default App;
