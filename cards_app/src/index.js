import React from 'react';
import ReactDom from 'react-dom';
import Cards from "./Cards"
ReactDom.render(
   
     <>
       <Cards imgsrc="/images1.jpeg" title="A Netflix original series"
        sname="Money heist" link="https://www.netflix.com/in/title/80192098"/> 
       <Cards imgsrc="/images1.jpeg" title="A Netflix original series"
        sname="Stranger Things" link="https://www.netflix.com/in/title/80192098"/> 
       <Cards imgsrc="/images1.jpeg" title="A Netflix original series"
        sname="Naruto" link="https://www.netflix.com/in/title/80192098"/>   
     </>,

/*
we can also fetch data in this way when using an API or some source file
<Cards imgsrc={sdata[0].img} title={sdata[0].title}
sname={sdata[0].sname} link={sname[0].link}/>  */


document.getElementById("root"));
   