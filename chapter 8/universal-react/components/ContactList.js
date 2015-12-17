import React, {Component, PropTypes} from 'react';
import ContactItem from './ContactItem';

class ContactList extends React.Component {
  render(){
    var filteredContacts = this.props.contacts.filter(
      (contact) => contact.name.indexOf(this.props.filterText) !== -1
    );
    return(
      <ul>
        {filteredContacts.map(
          (contact) => <ContactItem key={contact.email}
                                    name={contact.name}
                                    email={contact.email} />
        )}
       </ul>
    )
  }
}
ContactList.propTypes = {
  contacts: React.PropTypes.arrayOf(React.PropTypes.object),
  filterText: React.PropTypes.string.isRequired
}


export default ContactList;
