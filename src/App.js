import React, { Component } from "react";
import RepoList from "./components/repos/RepoList";
import { Container, Grid } from "semantic-ui-react";
import FrameworkGrid from "./components/framework/FrameworkGrid";
import TopMenu from "./components/navigation/TopMenu";
import ErrorMessage from "./components/message/ErrorMessage";
import FilterMenu from "./components/filtering/FilterMenu";
import favicon from './assets/favicon.ico'
import ReactGA from 'react-ga';

ReactGA.initialize('UA-125805120-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    return (
      <div>
        <TopMenu />
        <Grid className='main-grid'>
          <Grid.Column>
            <Container>
              <ErrorMessage />
              <FrameworkGrid />
              <FilterMenu />
              <RepoList />
            </Container>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
