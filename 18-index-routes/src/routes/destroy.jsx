import { redirect } from 'react-router-dom';
import { deleteContact } from '../../../15-global-pending-ui/src/contacts.js';

export async function action({ params }) {
  throw new Error('oh dang!');
  await deleteContact(params.contactId);
  return redirect('/');
}