const React = require('react')
const Navbar = require ('../components/Navbar')

class HomePage extends React.Component {
    render(){
        return(
        <div>

            <head>
            <link rel="stylesheet" href="/css/app.css"/>  
            </head>  

            <Navbar/>    
        
            

              <h1>Welcome to my Blog App</h1>

              <img src="/Images/BlogImg.png" />
        </div>
        );
    }
}

    




module.exports = HomePage