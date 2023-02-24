function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* 
        当路径URL为 “/messages”，这里展示<DashboardMessages> 
        当URL为 “/tasks”，展示<DashboardTasks>
        当路径为 ‘/’，什么都没有
        */
      }
      <Outlet/>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Routes path="/" element={<Dashboard />} >
        <Routes path="messages" element={< DashboardMessages />} />
        <Routes path="tasks" element={<DashboardTasks />} />
      </Routes>
    </Routes>
  );
}