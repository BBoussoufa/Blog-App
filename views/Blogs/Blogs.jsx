const React = require('react')
const Navbar = require('../components/Navbar')

class Blogs extends React.Component {
  render() {
    const { blogs, loggedInUser } = this.props
    console.log(loggedInUser);
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/CSS/app.css" />
        </head>

        <Navbar/>
        
        <h1>Blogs</h1>

        <section style={styles.container}>
          {blogs.map((blog) => (
            <div>
              <a href={`/blog/${blog._id}`}>
                {" "}
                <h2>{blog.title}</h2>
              </a>
              <div>
                <p>{blog.body}</p>
              </div>
              <h6>Written by: {blog.author}</h6>

              {blog.author === loggedInUser ? (
                <div>
                  <a href={`/blog/${blog._id}/edit`}>Edit</a>
                </div>
              ) : null}
            </div>
          ))}
        </section>
      </div>
    );
  }
}
const styles = {
  container: {
    backgroundColor:'#CEE5D0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  }
module.exports = Blogs