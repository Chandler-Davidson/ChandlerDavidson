import React from "react";
import Layout from "../components/layout";
import Links from "../components/links";
import { RotatingCube } from "../components/activityStatus";

const activities = [
  'Skating',
  'Coding',
  'Climbing',
  'with 👪'
];

const Home = () => (
  <Layout>
    <h1 className="title">Chandler Davidson</h1>
    <div style={{
      display: "flex"
    }}>

      <h2>I'm probably</h2>
      <RotatingCube texts={activities} />
      
      
    </div>
    <Links />
  </Layout>
);

export default Home;
