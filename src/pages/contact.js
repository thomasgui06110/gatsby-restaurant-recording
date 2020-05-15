import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import contactImg from "../images/bcg/contactBcg.jpeg";
import { PageHeader, Banner } from "../utils";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <PageHeader img={contactImg}>
      <Banner title="contact us" subtitle="let's get in touch"></Banner>
    </PageHeader>
  </Layout>
);

export default ContactPage;
