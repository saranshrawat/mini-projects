import React from 'react';
import axios from 'axios';



class App extends React.Component {
    state={ randadvice: ""};
    
    componentDidMount(){
            this.fetchAdvice();
    }
    

      fetchAdvice=()=>{
        axios.get("https://api.adviceslip.com/advice")
        .then((response)=>{

            const {advice} =response.data.slip;
            
            this.setState({randadvice: advice});


        })
        .catch((error)=>{
            console.log(error)
        });
    
    
    }


    
    render(){
        const {randadvice}= this.state;
        return (
              <div className="app">
                            <div className="card">
                                       <h1 className="heading">{randadvice}</h1>
                                         <button className="button" onClick={this.fetchAdvice}><span> NEW ADVICE</span></button>                                       
                            </div>

              </div>

        );
    }




}


export default App;

