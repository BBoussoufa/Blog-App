const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Create A New Blog</h1>

        <form action="/blog" method="Post">
          Title:
          <input type="text" name="title" />
          <br />
          Body:
          <input type="text" name="body" />
          <br />
          {/* Author:<input type='text' name='author'/><br/> */}
          <div>
            <label>sponsored?</label>
            <input type="checkbox" name="sponsored" />
            <br />
          </div>
          <input type="submit" value="Create new blog post" />
          <br />
        </form>
      </div>
    );
  }
}

module.exports = New;
