import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Title from '../component/Title';
import CycleVie from '../component/01-cycle-vie/Cycle';
import Params from '../component/04-react-router/Params';
import GoBack from '../component/04-react-router/GoBack';
import NotFound from '../component/04-react-router/NotFoun';
import Login from '../component/04-react-router/Login'
import Admin from '../component/04-react-router/Admin'
import Protected from '../component/04-react-router/Protected.route'
import ReduxCompteur from '../component/04-redux/ReduxCompteur';
function Routes(props) {
    return (
        // Switch: S'arrete au premier path qui match
        // exact: pour afficher le composant, il faut que l'url soit strictement egale
        //          par defaut, si / est dans /lifecyle, on affiche les deux.
        <Switch>
            <Route exact path="/" component={Title}/>
            <Route path="/life-cycle" component={CycleVie} />
            <Route path="/params/:titre" component={Params}/>
            <Route path="/back" component={GoBack}/>
            <Route path="/login" component={Login}/>
            <Protected path="/admin" component={Admin} />
            <Protected path="/redux" component={ReduxCompteur} />
            <Route path="*" component={NotFound}/>
        </Switch>
    );
}
export default Routes;