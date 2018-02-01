import React from 'react';
import {Well} from 'react-bootstrap';
class AboutMe extends React.Component{
render(){
return(
        <div className="Aboutmeclass">
          <Well style={{backgroundColor:'#EEE9E9', margin : '0px'}}>
              <h1 className="Aboutheading" style={{fontSize:"60px",textAlign:'center'}}>About Me</h1>
              </Well>
              <Well>
<img className="Aboutimage" src="https://static.toiimg.com/thumb/msid-52836319,width-640,resizemode-4/52836319.jpg" style={{marginLeft:'35.5%',width:'300px',height:'300px'}}/>
</Well>

<Well style={{backgroundColor:'#F8C5C5	'}}>
<p className="Aboutpara">
"About pages are hard. You have one page to summarize who you are, what you do, and how you’re different in a clear, concise, and confident way. No big deal! Just tell us why you matter in two to five paragraphs, without bragging.
Honestly, I don’t know anyone who enjoys this process. Even if you’re comfortable writing about yourself, it’s hard to know where to start or what to leave out. You know yourself better than anyone, but that only seems to make it worse.

Over the past 10 years, I’ve been fortunate enough to help all sorts of people get their websites into shape. I’ve taught workshops on honest marketing and developing portfolios, and I co-wrote a book about writing useful, friendly content. Whenever About pages come up, these are the tips I share:

Write to your dream audience.
Highlight the kind of work you want to be doing.
Tell the truth in your own voice.
Read it aloud to make sure it sounds like you.
Treat it as a draft. Share it early and update it regularly.
Think of your About page as a way to introduce yourself. It doesn’t need to be exhaustive, and you don’t have to say anything that makes you uncomfortable. Find a balance between being personal and professional, and try to have some fun. This is a great time to step away from the computer, put your self-critic aside, and do some exploratory writing to take the pressure off.

I ll walk you through the process that I share with my clients. This is focused on freelancers and solo practitioners, but you can use the same steps for your company or project.




"</p>
</Well>
</div>
);


}




}
export default AboutMe;
