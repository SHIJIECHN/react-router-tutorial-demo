import { 
  Outlet,
  NavLink,
  useLoaderData,
  Form,
  redirect,
  useNavigation
} from 'react-router-dom'
import { getContacts, createContact } from '../contacts.js';
import { useEffect } from 'react';

/** 获取contact数据，在组件渲染之前调用 */
export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  const contacts = await getContacts(q);
  return { contacts, q };
}

/** 创建contact*/
export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`)
}

/** other code */

export default function Root() {
  const { contacts, q } = useLoaderData(); // 获取loader返回的数据
  const navigation = useNavigation();

  useEffect(() => {
    document.getElementById('q').value = q;
  }, [q])

  return (
    <>
      {/* 左侧边栏 */}
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              defaultValue={q}
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite" />
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        {/* other elements */}
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) => 
                    isActive ? 'active' : (isPending ? 'pending' : '')
                  }
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                        <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
              <p>
                <i>No Contacts</i>
              </p>
          )}
        </nav>
      </div>
      {/* 右边具体内容 */}
      <div
        id="detail"
        className={navigation.state === 'loading' ? 'loading' : ''}
      >
        <Outlet/>
      </div>
    </>
  );
}