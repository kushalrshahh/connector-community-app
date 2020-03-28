 //Dependencies
 import React from "react"
 import { useStaticQuery, graphql } from "gatsby"

 //Components
 import Header from "./header"
 import Footer from "./footer"

 //Stylesheets
 import "../styles/utilities/bootstrap-grid.scss"
 import "../styles/components/layout.scss"
 import "../styles/components/forms/forms.scss"
 
 export default (props) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `)
   return (
     <article className={props.pageClass}>
       <Header siteTitle={data.site.siteMetadata.title} />
       <main>{props.children}</main>
       <Footer />  
     </article>
   )
 }
 