import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import menuImg from "../images/bcg/menuBcg.jpeg";
import { PageHeader, Banner } from "../utils";

const MenuPage = () => (
  <Layout>
    <SEO title="MenuP  age" />
    <PageHeader img={menuImg}>
      <Banner title="Menus" subtitle={`let's dig in `}></Banner>
    </PageHeader>
  </Layout>
);

export default MenuPage;
