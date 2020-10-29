import React from "react";
import Layout from "../components/layout";
import Links from "../components/links";
import { RotatingCube } from "../components/activityStatus";

const activities = [
  'Skating',
  'Coding',
  'Family',
  'Big 🐶',
  'Other Stuff',
  'Havin fun',
  'I',
  'Can',
  'Keep',
  'Going'
];

const Home = () => (
  <Layout>
    <h1 className="title">Chandler Davidson</h1>
    <RotatingCube texts={activities}/>
    <Links />
  </Layout>
);

export default Home;
