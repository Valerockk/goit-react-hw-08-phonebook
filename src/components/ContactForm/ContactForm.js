import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import { toast } from "react-toastify";
import NumberFormat from "react-number-format";
import Button from "@material-ui/core/Button";
import LoaderComponent from "../LoaderComponent/LoaderComponent";
import style from "./ContactForm.module.css";
import TextField from "@material-ui/core/TextField";

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const isLoading = useSelector(contactsSelectors.getLoading);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const checkRepeatName = (name) => {
    return contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const checkRepeatNumber = (number) => {
    return contacts.find((contact) => contact.number === number);
  };

  const checkEmptyQuery = (name, number) => {
    return name.trim() === "" || number.trim() === "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkRepeatName(name)) {
      return toast(`🤔 ${name} is already in the phonebook.`);
    } else if (checkRepeatNumber(number)) {
      return toast(`🤔 ${number} is already in the phonebook.`);
    } else if (checkEmptyQuery(name, number)) {
      return toast.info("😱 Enter the contact's name and number phone!");
    } else {
      dispatch(contactsOperations.addContact(name, number));
    }
    resetInput();
  };

  const resetInput = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        color="secondary"
        type="text"
        name="text"
        value={name}
        onChange={handleChange}
        className={style.textField}
      />

      <NumberFormat
        placeholder="Enter phone number"
        format="(###) ###-##-##"
        mask="_"
        pattern="^[0-9\s\(\)\-]{15}"
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        className={style.input}
      />

      {!isLoading && (
        <Button
          variant="contained"
          color="secondary"
          size="large"
          type="submit"
        >
          Add contact
        </Button>
      )}

      {isLoading && <LoaderComponent />}
    </form>
  );
}

export default ContactForm;
