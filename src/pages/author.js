import React from "react"
import Layout from "../components/layout"
import SM from "../components/social-media"
import AuthorImg from "../assets/img/author.jpg"

const Author = () => (
  <Layout>
  	<section className="page-wrapper">
		
		<div className="section-grid">
			<div className="grid-child" id="book-wrapper">

				<div className="section-author">
					<img src={AuthorImg} alt="img-book" />
				</div>

				<SM/>
			</div>

			<div className="grid-child" id="book-contents">

				<h1>Author</h1>
				<p>
					Born undet the Crux, also known as the Southern Cross, on the world's larges
					island and smallest content David John Black an author and inspirational speaker, 
					whose first name means 'the beloved', took his first breath on the 13th
					day of Spring - the number 13 being symbolic of Transformation and Spring, of course,
					being the season of Rebirth. his grandparents, who lived him, lived in house number 13.
					His mother remarried on the 13th day of the month. He turned 13th years of age on Black Friday.
					His first love lived in house number 13. His only relationship partner's birthday was the 13th of the month.
				</p>

				<p>
					In 1995, he had the life-changing experience of a 'Dark Night of The Soul' and
					began having experiences, so he asked: "Show me in a way that i can impart this
					to others". In a series of 'a--ha' moments,( also known as 'light-bulb' moments)
					the mathematical statement 1= ∞, expressing The Theory of Everything(TOE), which
					physicits had been searching for since the early 1900's, was revealed to him.
					Also, in 1997, he heard 'The Music of The Spheres', was awoken by the brightness
					of the Morning Star and met his essence twin (also known as twin flame).
				</p>
				<p>
					Whilst on The Mountain*, he quite literally, allowed the meaning of life - who we
					truly are, why we are here and what we are meant to be doing, to be revealed to 
					him - and now to us.
				</p>
				<p>Postscipt : In 2013, he turned 52 years of age (4x13), on Friday the 13th</p>

			</div>
		</div>

  		<div className="wrapper-end"> 
  			<p>David John Black</p>
  		</div>

  	</section>
  </Layout> 
)

export default Author
	