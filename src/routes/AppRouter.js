import React from "react";
import { BrowserRouter, Route, Switch, NavLink, Link } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpenseListPage from "../components/EditExpenseListPage";
import EditExpenseItemPage from "../components/EditExpenseItemPage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} exact={true} />
        <Route path="/edit" component={EditExpenseListPage} exact={true} />
        <Route path="/edit/:id" component={EditExpenseItemPage} exact={true} />
        <Route path="/help" component={HelpPage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
