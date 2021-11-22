import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import './App.css';
import Card from 'react-bootstrap/Card';
import s from './App.module.css';

const App = () => {
  return (
    <div className="App">
      <Card className={s.parentWrapper}>
        <Card.Header as="h1" className={s.mainHeader}>
          Phonebook
        </Card.Header>
        <Card.Body>
          <Card className={s.addContact}>
            <Card.Header as="h2">Add new contact</Card.Header>
            <Card.Body>
              <ContactForm />
            </Card.Body>
          </Card>
          <Card className={s.contacts}>
            <Card.Header as="h2">Contacts</Card.Header>
            <Card.Body>
              <Filter />
              <ContactList />
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </div>
  );
};

export default App;
