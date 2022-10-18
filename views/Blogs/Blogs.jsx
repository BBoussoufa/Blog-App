const React = require('react')
const Navbar = require('../components/Navbar')

class Blogs extends React.Component {
  render() {
    const { blogs } = this.props;
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/CSS/main.css" />
        </head>

        <Navbar />
        
        <h1>Blogs</h1>

        <section >
          {blogs.map((blog) => (
            <div>
              <a href={`/blog/${blog._id}`}>
                {" "}
                <h2>{blog.title}</h2>
              </a>
              <div>
                <p>{blog.body}</p>
              </div>
              <h6> By: {blog.author}</h6>

              <div>
                <a href={`/blog/${blog._id}/edit`}>Edit</a>
              </div>

            </div>
          ))}
        </section>
      </div>
    );
  }
}

module.exports = Blogs