import React from "react"
import Layout from "../components/layout"
 
import Twitter from "../assets/brand-logo/twitter.png"
import Insta from "../assets/brand-logo/instagram.png"
import Linkedin from "../assets/brand-logo/linkedin.png"
import SM from "../components/social-media"
import AuthorImg from "../assets/img/author.jpg"
import ContactForm from "../components/form/contact"

const Contact = () => (
  <Layout>
  	<section className="page-wrapper">
		<h1> Contact </h1>
		<div className="section-grid">
			<div className="grid-child" id="book-wrapper">

				<div className="section-author-contact">
					<img src={AuthorImg} alt="img-book" />
				</div>

				<h1>David John Black</h1>
				<SM/>
			</div>

			<div className="grid-child" id="contact-form">
				<ContactForm />
			</div>
		</div>

  		<div className="wrapper-end"> 
  			<p>David John Black</p>
  		</div>

  	</section>
  </Layout> 
)

export default Contact
	