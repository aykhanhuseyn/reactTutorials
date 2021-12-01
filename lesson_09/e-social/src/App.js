import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Layout } from "antd";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { EServices } from "./pages/EServices";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Idea } from "./pages/IdeaBank";
import { Password } from "./components/Password";
import { Username } from "./components/Username";
import { PhoneNumber } from "./components/PhoneNumber";

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/forgot/password" exact component={Password} />
        <Route path="/forgot/username" exact component={Username} />
        <Route path="/newPhoneNumber" exact component={PhoneNumber} />

        <Route
          path="*"
          render={() => (
            <Layout>
              <Header />
              <Content>
                <Switch>
                  <Route path="/cabinet" exact />
                  <Route path="/idea-bank" exact component={Idea} />
                  <Route path="/e-services" exact component={EServices} />
                  <Route path="/about" exact component={About} />
                  <Route path="/faq" exact />
                  <Route path="/help" exact />
                  <Route path="/" exact component={Home} />
                  <Route path="/404" exact />
                  <Redirect from="*" to="/404" />
                </Switch>
              </Content>
              <Footer />
            </Layout>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
