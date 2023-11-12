import { ContactItem, ContactDelete, FormText } from './ContactListItem.styled';

export const ContactListItem = ({
  contact: { firstName, tel, id },
  onDeleteContact,
}) => {
  return (
    <>
      <ContactItem>
        <FormText>{firstName}:</FormText>
        <FormText>{tel}</FormText>

        <ContactDelete type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </ContactDelete>
      </ContactItem>
    </>
  );
};
