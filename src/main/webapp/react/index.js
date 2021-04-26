import TeamList from "./teams/teams-list";
import TeamFormEditor from "./teams/teams-form-editor";
import GameList from "./games/game-list";
import GameFormEditor from "./games/game-form-editor";
import PlayerList from "./players/player-list";
import PlayerFormEditor from "./players/player-form-editor";
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
                <Route path={["/players"]} exact={true}>
                    <PlayerList/>
                </Route>
                <Route path="/players/:id" exact={true}>
                    <PlayerFormEditor/>
                </Route>
                <Route path={["/games"]} exact={true}>
                    <GameList/>
                </Route>
                <Route path="/games/:id" exact={true}>
                    <GameFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
