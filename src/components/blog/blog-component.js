import React from 'react'
import {Link} from 'gatsby'


// Outside component
const MAX_LENGTH = 250;


const BlogComponent = (props) =>{

	return(
		<>
	          <section className="grid-parent-blog">
	            <div className="grid-child blog-body">

	            	<span className="published-on">Published On </span>

	                <span className="blog-date">
	                	{props.date}
	               	</span>

	                <h1>{props.title}</h1>

	            
					<div 
                         dangerouslySetInnerHTML={{__html: `${props.content.substring(0, MAX_LENGTH)}...`}}
                    />

	                <div className="blog-link">
	                    <Link to={props.slugPost}>
	                        Read More
	                    </Link>
	                </div>
	            </div>
	        </section>
		</>
	)
}

export default BlogComponent