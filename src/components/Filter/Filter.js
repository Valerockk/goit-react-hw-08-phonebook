import { useSelector, useDispatch } from "react-redux";
import { contactsActions, contactsSelectors } from "../../redux/contacts";
import style from "./Filter.module.css";

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);
  const contacts = useSelector(contactsSelectors.getContacts);

  return (
    <>
      {contacts.length > 0 && (
        <label className={style.label}>
          <input
            className={style.input}
            type="text"
            value={filter}
            placeholder="Enter a name to search..."
            onChange={(e) =>
              dispatch(contactsActions.filterContact(e.target.value))
            }
          />
        </label>
      )}
    </>
  );
}

export default Filter;
