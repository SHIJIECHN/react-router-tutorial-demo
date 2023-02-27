// Contact 和 EditContact不会使用相同的全局Layout
<Route path="/" element={<Layout />}>
  <Route path="contact/:id" element={ <Contact/>} />
  <Route path="contact/:id/edit" element={ <EditContact/>} />
</Route>

function EditContact() {
  // 当Contact组件不是EditContact组件的父级组件时，我们需要提升一个级别
  // 使用path，不是路由层次结构中的一个级别
  return (
    <Link to=".." relative="path">
      Cancel
    </Link>
  )
}