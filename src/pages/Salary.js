import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/SalaryComponents/Home/Home";
import NotFound from "../components/SalaryComponents/NotFound/NotFound";
import Create from "../components/SalaryComponents/Create/Create";
import Read from "../components/SalaryComponents/Read/Read";
import Edit from "../components/SalaryComponents/Edit/Edit";
import Delete from "../components/SalaryComponents/Delete/Delete";
import { UserProvider } from "../components/SalaryComponents/UserContext/UserContext";

function Salary() {
  return (
    <UserProvider> 
      <div className="app">
        <Router>
          <Switch>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/read/:id">
              <Read />
            </Route>
            <Route path="/edit/:id">
              <Edit />
            </Route>
            <Route path="/delete/:id">
              <Delete />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserProvider>
  );
}

export default Salary;
