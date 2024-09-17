import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  function onDelete(id) {
    dispatch(deleteContact(id));
  }

  return (
    <div className={css.contact}>
      <ul>
        <li className={css.item}>
          <IoPersonSharp />
          <p>{contact.name}</p>
        </li>
        <li className={css.item}>
          <FaPhone />
          <p> {contact.number}</p>
        </li>
      </ul>

      <button
        className={css.button}
        type="button"
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </button>
    </div>
  );
}
