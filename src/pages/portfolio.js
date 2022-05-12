import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/SEO'

const PortfolioPage = () => {
  const myexamplePdf = useStaticQuery(graphql`
    {
      pdf: file(name: { eq: "Rafayat resume" }) {
        name
        extension
        publicURL
      }
    }
  `)

  return (
    <Layout>
      <Seo title="Resume" />
      <iframe
        title='Resume PDF'
        src={myexamplePdf.pdf.publicURL}
        type="application/pdf"
        width="100%"
        height="800px"
      />
      <a href={myexamplePdf.pdf.publicURL} download>
        <p>Download here</p>
      </a>
    </Layout>
  )
}

export default PortfolioPage
