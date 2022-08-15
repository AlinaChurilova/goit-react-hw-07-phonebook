import { useState } from 'react';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';
import { useAddContactMutation, useGetContactsQuery } from '../../redux/contactsSlice';

const ContactForm = () => {

     const { data } = useGetContactsQuery();
    const [name, setName] = useState('');
    const [phone, setNumber] = useState('');
    const [addContact] = useAddContactMutation();

    const id = nanoid();

    const handleChange = (e) => {

    switch (e.target.name) {
      case 'name':
        setName(e.target.value); 
        break;
      
       case 'number':
        setNumber(e.target.value ); 
        break;
      
      default:
        return;
    }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const values = { name, phone, id }
        setName('');
        setNumber('');
        
        const savedName = data && data.find(Cont => Cont.name === values.name);
        if (savedName !== undefined) {
            alert(`${values.name} is already in contacts!`);
            return data;
        } else {
            return addContact(values);
        }
    }


    return (
        <form className={s.Form} onSubmit = {(e) => handleSubmit(e)}>
            <label className={s.Label} htmlFor={id}>
            Name 
                <input className={s.Input}
          type="text"
          value={name}
          onChange = {handleChange}

          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer,
           Charles de Batz de Castelmore d'Artagnan"
          required
                />
            </label>
                
            <label className={s.Label}>
            Number 
                <input className={s.Input}
            type="tel"
            value={phone}
            onChange={handleChange}
                        
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
                />
            </label>
  
          <button className={s.Button} type='submit'>Add contact</button>
        </form> 

    )
}


export default ContactForm;