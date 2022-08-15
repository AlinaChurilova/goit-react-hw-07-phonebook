import React from "react";
import s from './ContactList.module.css';
import { useState, useMemo } from 'react';
import { useGetContactsQuery, useDeleteContactMutation } from '../../redux/contactsSlice';
import Filter from '../Filter';

const ContactList = () => {
    const { data} = useGetContactsQuery();
    const [filter, setFilter] = useState('');
    const [deleteContact] = useDeleteContactMutation();

    const filteredContacts = useMemo(() => {
        return data?.filter(contact =>
            contact.name.toLocaleLowerCase().includes(filter.toLowerCase())) ?? [];
    }, [filter, data]);
    
    const contactList = filter.length ? filteredContacts : data;
    
    return (<>
        <Filter value={ filter} onFilter={setFilter} />
        <ul className={s.List} >
            {contactList && contactList?.map(({ id, name, phone }) => (
                <li key={id} className={s.ListItem} >
                    {name}: {phone}
                    <button className={s.BtnDelate} onClick={() => deleteContact(id)} >Delete</button>
                </li>
            ))}
    </ul></>
    )
}
export default ContactList;