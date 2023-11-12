import { GlobalStyle } from './GlogalStyle';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { Wrapper, Container, Title, TitleContact } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', firstName: 'Rosie Simpson', tel: '+38 (050) 459-12-56' },
      { id: 'id-2', firstName: 'Hermione Kline', tel: '+38 (050) 443-89-12' },
      { id: 'id-3', firstName: 'Eden Clements', tel: '+38 (050) 645-17-79' },
      { id: 'id-4', firstName: 'Annie Copeland', tel: '+38 (050) 227-91-26' },
    ],
    filter: '',
  };

  addContact = values => {
    const contactInput = { id: nanoid(), ...values };
    this.setState(prevState => {
      const existingContact = prevState.contacts.find(
        contact => contact.firstName === contactInput.firstName
      );
      if (existingContact) {
        toast.error(`${contactInput.firstName} is already in contacts.`);
      } else {
        return { contacts: [...prevState.contacts, contactInput] };
      }
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = value => {
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = contacts.filter(contact =>
      contact.firstName.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Wrapper>
        <Container>
          <Title>Phonebook</Title>
          <ContactForm onAddContact={this.addContact} />
          <TitleContact>Contacts</TitleContact>
          <Filter filter={filter} onChangeFilter={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
          <Toaster />
          <GlobalStyle />
        </Container>
      </Wrapper>
    );
  }
}

export default App;
