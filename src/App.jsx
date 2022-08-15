import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './index.css';

export default function App() {

  return ( 
    <div className='Container'>
        <h1>Phonebook</h1>
        <ContactForm />
         <h2>Contacts</h2>
         <ContactList  />
       </div>
    )
}