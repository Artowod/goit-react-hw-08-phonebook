import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <Card.Body className={s.parentWrapperBody}>
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
  );
};

export default ContactsPage;
