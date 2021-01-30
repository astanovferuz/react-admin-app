import * as React from "react";
import { Admin, Resource } from 'react-admin';
import UserList from "./components/userList";
import { PostList, PostEdit, PostCreate } from "./components/postList";
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from "./components/dashboard";
import authProvider from "./components/authProvider";

const dataProvider = jsonServerProvider(process.env.REACT_APP_DUMMY_API);
const App = () => (
  <Admin dashboard={ Dashboard } dataProvider={ dataProvider } authProvider={ authProvider }>
    <Resource icon={ PostIcon } name="posts" list={ PostList } edit={ PostEdit } create={ PostCreate } />
    <Resource icon={ UserIcon } name="users" list={ UserList } />
  </Admin>
);

export default App;