import React, { } from "react";
import { useAuth } from "../../provider/auth";
import { Button, CircularProgress } from "@mui/material";

const Dashboard = () => {
  const auth = useAuth();

  if (!auth.user) return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <CircularProgress />
  </div>
  return (
    <div className="container">
      <div>
        <h1>Welcome! {auth.user?.name}</h1>
        <h1 id="mai-xuan-y">Mai Xuan Y</h1>
<h2 id="_finance-management-mike_"><em>Finance Management, Mike</em></h2>
<p>The website provides tools for users to manage personal or group finances.</p>
<h3 id="stack-technology-mern-">Stack Technology (MERN)</h3>
<ul>
<li>Backend: NodeJS - ExpressJS</li>
<li>Frontend: ReactJS</li>
<li>Database: MongoDB</li>
</ul>
<h2 id="features">Features</h2>
<ul>
<li>Manage personal finance</li>
<li>Group financial management</li>
</ul>
<p>The source code is designed to serve both individuals and groups. You can create your own group and invite other members to your financial group, sharing personal financial income and expenses together in groups.</p>

        <Button
          onClick={() => auth.logOut()}
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >Logout</Button>
      </div>
    </div>
  );
};

export default Dashboard;
