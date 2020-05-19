import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Container } from "../components/container";
import { ProfileComponent } from "../pages/profile";
import { SignIn } from "../pages/login/sign-in";
import { SignUp } from "../pages/login/sign-up";
import NewsFeed from "../pages/feed/";
import { ViewProfileComponent } from "../pages/view-profile/";
import { ViewPost } from "./common/view-post";
// import { getDbRequest } from "../ducks/db/actions";

const IndexPage: React.FC = () => {
  // const state = useSelector((state: any) => state);
  const [user] = useState(localStorage.getItem("Auth"));

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log(state);
  //   // dispatch(getDbRequest());
  //   console.log("Rendering IndexPage");
  // }, []);

  return (
    <Router>
      <Container>
        <Switch>
          <Route
            path="/profile"
            render={() => {
              if (user !== null) return <ProfileComponent />;
              return <Redirect to="/sign-in" />;
            }}
          />
          <Route
            path="/home"
            render={() => {
              if (user !== null) return <NewsFeed />;
              return <Redirect to="/sign-in" />;
            }}
          />
          <Route
            path="/view-profile/:id"
            render={(props: any) => <ViewProfileComponent {...props} />}
          />
          <Route
            path="/view-post/:postId"
            render={(props: any) => <ViewPost {...props} />}
          />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" exact component={SignIn} />
          <Route path="/" exact component={SignIn} />
          <Redirect to="/" />
        </Switch>
      </Container>
    </Router>
  );
};

IndexPage.displayName = "AnimeFy IndexPage";
export default IndexPage;
