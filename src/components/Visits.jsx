import React,{Component} from "react";

class Visits extends Component{
    constructor(props) {
        super(props);
   
        this.state = {
            count: 0,
            DataisLoaded: false
        };
    }
    componentDidMount() {
        fetch('https://api.countapi.xyz/update/mgchristopher.netlify.app/christo_resume/?amount=1')
    .then(res => res.json())
    .then(res => {
        this.setState({
            count: res.value,
            DataisLoaded: true
        });
        
        
    });
    
    }
    render() {
        const { DataisLoaded, count } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "count center">
            <br /><br /><br /><br /><br /><br />
            <p style={{fontSize:20,margin:0}}>This page was viewed</p> 
            <p style={{fontSize:40,margin:0}}>{count}</p>
            <p style={{fontSize:20,margin:0}}>Times</p>
            
        </div>
    );
}
}


export default Visits;