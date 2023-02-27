import {Form} from 'react-router-dom'

export default function Contact() {
  const contact = {
    first: 'Your',
    last: 'Name',
    avatar: 'https://placekitten.com/g/200/200',
    twitter: 'your_handle',
    notes: 'Some notes',
    favorite: true
  };

  return (
    <div id="contact">
      <div>
        {/* 头像 */}
        <img
          key={contact.avatar}
          src={contact.avatar || null}
          alt="avatar" />
      </div>
      <div>
        {/* 名字，没有则显示No Name */}
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
              <i>No Name</i>
          )}{' '}
          {/* 被点赞的星数 */}
          <Favorite contact={contact} />
        </h1>
        {/* 如果有Twitter，则显示 */}
        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
              </a>
          </p>
        )}
        {/* 如果有notes，则显示 */}
        {contact.notes && <p>{contact.notes}</p>}

        <div>
          {/* 编辑 */}
          <Form action='edit'>
            <button type='submit'>Edit</button>
          </Form>
          {/* 删除 */}
          <Form
            method="post"
            action='destroy'
            onSubmit={(event) => {
              if (!confirm(
                "Please confirm you want to delete this record."
              )) {
                event.preventDefault();
              }
            }}
          >
            <button type='submit'>Delete</button>
          </Form>
        </div>
      </div>
    </div>
  )

}

function Favorite({ contact }) {
  let favorite = contact.favorite;
  return (
    <Form method='post'>
      <button
        name='favorite'
        value={favorite ? 'false' : 'true'}
        aria-label={
          favorite 
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ?  "★" : "☆"}
      </button>
    </Form>
  )
}