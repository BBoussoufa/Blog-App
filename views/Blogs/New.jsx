const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Create A New Blog</h1>

        <form style={styles.container} action="/blog" method="Post">
          Title:
          <input type="text" name="title" placeholder="title" />
          <br />

          Body:
          <textarea  name="body" placeholder="body" rows="24" cols="50" required />
           <br/>
          
          {/* Author:<input type='text' name='author'/><br/> */}
          <div>
            <label>sponsored?</label>

            <input type="checkbox" name="sponsored" />
            <br />
          </div>
          <input type="submit" value="Create blog" />
          <br />
        </form>
      </div>
    );
  }
}

const styles= {
container: {

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'

}
}

module.exports = New;
