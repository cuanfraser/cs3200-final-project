import TeamList from "./teams/teams-list";
import TeamFormEditor from "./teams/teams-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/teams", "/"]} exact={true}>
                    <TeamList/>
                </Route>
                <Route path="/teams/:id" exact={true}>
                    <TeamFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
