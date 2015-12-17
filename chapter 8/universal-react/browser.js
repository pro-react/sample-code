import React from 'react';
import { render } from 'react-dom';
import ContactsApp from './components/ContactsApp';

render(<ContactsApp contacts={[{
  "name": "Dan Abramov",
  "email": "gaearon@somewhere.com"
}]} />, document.getElementById('root'));
