import React from "react"
import Layout from "../components/layout"
import BookImage from "../assets/books/book_cover.png"

const Books = () => (
  <Layout>
  	<section className="page-wrapper">
		
		<div className="section-grid">
			<div className="grid-child" id="book-wrapper-content">
				<img src={BookImage} alt="book"/>

				 <div className="snipcart-button-container">
                    <button
                        className="snipcart-add-item"
                        data-item-id="all-that-is"
                        data-item-price="13.50"
                        data-item-url="/"
                        data-item-image={BookImage}
                        data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
                        data-item-name="All That Is">
                        Add to cart
                    </button>
                  </div>
			</div>		

			<div className="grid-child" id="book-contents">

				<h1>Books</h1>
				<p>
					in a world where we're drowninng in information yet starving for vision,
					now and then someone comes along who understands Life so well, that
					they're able to explain it simply.
				</p>

				<p>
					Bad things don't happen to us because we are bad -- it's not like we are
					being punished.
				</p>

				<p>
					Based on a series of 'light bulb' moments, this intriguing compilation of 101
					insightful one-liners explores the timeless truth of being human. Ponder one-liners
					contemplate these seemingly inttuitive wisdoms which most people don't
					even slow down enough to notice, much less reflect upon. Then bring them
					into your everyday to internalize the learnings.

					<span className="italice">'All that is '</span> is for anyone who's ever wondered who we
					truly are, why we're here and what we're meant to be doing.
				</p>

				<p>
					"You can  read <span className="italice">'All that is'</span> in two minutes, or meditate on each of its
					sentences for a whole lifetime." --Author, Pedro Barrento, 'The Prince and The Singularity -- A Circular Tale'
				</p>

				<p>
					After his Dark Night of the Soul, David asked to be shown the meaning of it along all.
					He then contemplated his experiences to reveal the mystery of Life. Since 1998, his students
					have called for a book of his sayings and he now travels the world as an inspirational speaker.
				</p>

			</div>
		</div>

  		<div className="wrapper-end"> 
  			<p>David John Black</p>
  		</div>

  	</section>
    <footer className="foot-note">
	    <p>
	        * Hint: all the really B-I-G expriences happen 
	        in either the Wilderness, the Forest, or on the Mountain
	    </p>
    </footer>
  </Layout> 
)

export default Books
	