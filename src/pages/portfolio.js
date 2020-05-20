import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
//import resume from "../rafayat-resume.pdf";

const PortfolioPage = () => {
  const myexamplePdf = useStaticQuery(graphql`
    {
      pdf: file(name: { eq: "Rafayat resume" }) {
        name
        extension
        publicURL
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Resume" />
      {/* <Document
        file={myexamplePdf.pdf.publicURL}
        onLoadError={error =>
          alert("Error while loading document! " + error.message)
        }
        onLoadSuccess={onDocumentLoadSuccess}
      /> */}
      <iframe
        src={myexamplePdf.pdf.publicURL}
        type="application/pdf"
        width="100%"
        height="800px"
      />
      <a href={myexamplePdf.pdf.publicURL} download>
        <p>Download here</p>
      </a>
    </Layout>
  );
};

const onDocumentLoadSuccess = pdf => {
  debugger;
  alert("number of pages is", pdf);
};

export default PortfolioPage;
