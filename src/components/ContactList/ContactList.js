import { useSelector, useDispatch } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import style from "./ContactList.module.css";

function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);
  const contacts = useSelector(contactsSelectors.getContacts);

  return (
    <>
      {contacts.length > 0 && (
        <ul className={style.list}>
          {visibleContacts.map(({ id, name, number }) => (
            <li className={style.item} key={id}>
              <p className={style.info}>
                <b>{name}</b>
                <em>{number}</em>
              </p>
              <IconButton
                aria-label="delete"
                color="secondary"
                type="button"
                onClick={() => dispatch(contactsOperations.deleteContact(id))}
              >
                <DeleteIcon />
              </IconButton>
            </li>
          ))}
        </ul>
      )}

      {!contacts.length && <p>Your phonebook is empty. Please add contact.</p>}
    </>
  );
}

export default ContactList;
