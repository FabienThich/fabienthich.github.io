import React from 'react';
import './internship.css'

function Internship() {
    return(
        <body>
            <div>
                
                {/** Heading **/}
                <h2 className='introformatintern'>Internship Logs</h2>
                
                <br />
                <br />
                <br />

                {/** New Section **/}
                <img className='imgformat' src="First Repo.png"/>
                <h2 className='subheading'>Git and GitHub</h2>
                <p className='paragraph'>I completed half of the <a href="https://www.youtube.com/watch?v=RGOj5yH7evk&ab_channel=freeCodeCamp.org" target="_blank">"<u style={{"color":"blue"}}>Git and GitHub for Beginners - Crash Course.</u>"</a> From this, I learned the difference between Git and GitHub, along with Git commands such as "git push", "git add", "git commit" and "git clone." Additionally, I learned the basically terminologies used when working with Git and GitHub. As well, I learned about SSH keys and learned to generate my own for my GitHub account. The only thing I would do differently is to clone with HTTPS rather than SSH.</p>
                    <p className='date'>(September 26, 2022)</p>
                <p />

                <br />
                <br />
                <br />
                <br />

                {/** New Section **/}
                <img className='imgformat' src="Website pic2.png"/>
                <h2 className='subheading'>Hosting A Website</h2>
                <p className='paragraph'>I completed the other half of the <a href="https://www.youtube.com/watch?v=RGOj5yH7evk&ab_channel=freeCodeCamp.org" target="_blank"><u style={{"color" : "blue"}}>Crash Course.</u></a> This went smoother than yesterday as through research and trying out various cloning methods, HTTPS was easier to clone with as it caused less errors compared to SSH. Once I finished the crash course. I watched a <a href="https://www.youtube.com/watch?v=QyFcl_Fba-k&ab_channel=TheNetNinja" target="_blank"><u style={{"color" : "blue"}}>YouTube video</u></a> about GitHub pages and how to host my own. I was successfully able to host my own <a href="https://fabienthich.github.io"><u style={{"color" : "blue"}}>website</u></a> as seen on the left. I have made some improvements to the website and I am currently working on pushing it out and updating it.</p>
                    <p className='date'>(September 27, 2022)</p>
                <p />

                <br />
                <br />
                <br />
                <br />

                {/** New Section **/}
                <img className='imgformat' src="ToDoPic2.png"/>
                <h2 className='subheading'>Introduction To React</h2>
                <p className='paragraph'> I followed along a <a href="https://www.youtube.com/watch?v=hQAHSlTtcmY&ab_channel=WebDevSimplified" target="_blank"> <u style={{"color" : "blue"}}>React Tutorial.</u> </a>This tutorial does not cover the complex concepts of React but does cover the basics of React. I did not get to finish the tutorial, however, I did follow alongside. The tutorial demonstrated how to create a To-Do List using React as well as using npm and npx commands. The photo on the left shows a To-Do List that displays tasks in the console that the user typed into the textbox. As well, I successfully changed my default website page from my README.md file to <a href="/home"> <u style={{"color" : "blue"}}>Home.</u></a></p>
                    <p className='date'>(September 28, 2022)</p>     
                <p />

                <br />
                <br />
                <br />
                <br />
                
                {/** New Section **/}
                <img className='imgformat' src="First App.png" />
                <h2 className='subheading'>Click Counter</h2>
                <p className='paragraph'> I developed a clicking app, or a simpler version of Cookie Clicker through a <a href="https://www.youtube.com/watch?v=b9eMGE7QtTk&ab_channel=JavaScriptMastery" target="_blank"> <u style={{"color" : "blue"}}>Crash Course.</u></a> This tutorial involves the uses of "Props" and "Hooks" such as "useStates." This clicking app does not only let to add by one, but allows you to subtract by one as well. After finishing this tutorial, I gained a better understanding of React's format. To further familiarize myself with React, I started another tutorial, "<a href="https://www.youtube.com/watch?v=dGcsHMXbSOA&ab_channel=developedbyed" target="_blank"><u style={{"color" : "blue"}}>React Tutorial For Beginners</u></a>" which puts more emphasis on the concepts and structures.</p>
                    <p className='date'>(September 29, 2022)</p>
                <p />
                <br />
                <br />
                <br />
                <br />

                {/** New Section **/}
                <img className='imgformat' src="Converting to React.png"/>
                <h2 className='subheading'>Attempting To Rewrite My Website In React</h2>
                <p className='paragraph'> I began the process of rewriting my website using React. During this process, I created a <b><i>component</i></b> folder under my <b><i>src</i></b> folder which included Javascript contents for the header and body of the website. The React website to the left is identical to the website from September 27, 2022 (Hosting a Website). The only difference is that this websites navigation bar is still in the works and the "styles" for the Internship-Logs content needs to be converted into React format. I am working to solve these issues to create an exact replica.</p>
                    <p className='date'>(September 30, 2022)</p>     
                <p />

                <br />
                <br />
                <br />
                <br />

                {/** New Section **/}
                <a href='shortcuts.txt' target="_blank"><img className='imgformat' src="Shortcuts.png"/></a>
                <h2 className='subheading'>Learning About Windows Shortcuts</h2>
                <p className='paragraph'> I started off the day of picking it up from where I left off. I successfully converted all of my <i>Internship-Logs</i> content into React format. As well I spent some time trying to resolve issues relating to React Routers and Switches. Unfortunately, I had no success but I got a lead from my mentor. Soon after, I had a meeting with my mentor to which he taught me windows shortcuts, which are essential to becoming a great software engineer. From this, I was able to navigate around my computer more effectively and efficiently without a mouse. Click image for <a href="shortcuts.txt" target="_blank"><u style={{"color" : "blue"}}>Shortcuts Text File.</u></a></p>
                    <p className='date'>(October 3, 2022)</p>     
                <p />

                <br />
                <br />
                <br />
                <br />

                {/** New Section **/}
                <img className='imgformat' src="Switch Error Solution.png"/>
                <h2 className='subheading'>Switches and Routes</h2>
                <p className='paragraph'> I found a solution to the Switch error I had mentioned previously. Through research, I learned that <b>Routes</b> served the same purpose as <b>Switch</b>. After trial and error, I was successfully able to replace the use of Switches with Routes by importing <b>Routes</b> from <b>'react-router-dom'</b>. Additionally, I researched Route Paths through which I learned the concept of capitalizing the first letter when assigning the JavaScript file to an element; capitalizing the first letter would render the JavaScript file individually.</p>
                    <p className='date'>(October 4, 2022)</p>     
                <p />

                <br />
                <br />
                <br />
                <br />

                {/** New Section **/}
                <img src="Using CSS ClassName.png" style={{"paddingLeft" : "10px", "paddingRight" : "10px", "width" : "410px", "height" : "200px", "float" : "left"}}/>
                <h2 className='subheading'>Classes And Formatting</h2>
                <p className='paragraph'> My mentor advised me to take notice of processes I find myself constantly doing that take up time to-which I could have spent being more productive such as coding, debugging, researching etc… To my surprise, I found myself constantly using the same inline styling for my internship logs. This essentially led me to create CSS classes which I could reuse for future logs. As well, I figured out a solution to my text alignment and font size errors which originated from incorrect slash placements in tags when converting HTML to JSX.</p>
                    <p className='date'>(October 6, 2022)</p>     
                <p />

                <br />
                <br />
                <br />
                <br />

                {/** New Section **/}
                <img src="React Homepage.png" style={{"paddingLeft" : "10px", "paddingRight" : "10px", "width" : "410px", "height" : "200px", "float" : "left"}}/>
                <h2 className='subheading'>Working On My Home Page</h2>
                <p className='paragraph'> The main focus of today was to fix up on my internship formatting as well as adding the rest of my internship logs onto my react website. After doing so, I noticed that I have not touched my home page since I started my React journey. As such, I worked on my home page to hook the readers into the website. Additionally, I plan to work on my home page and give a proper introduction to the readers. My primary focus at the moment is to deploy my React website onto Github as soon as possible.</p>
                    <p className='date'>(October 11, 2022)</p>     
                <p />

                <br />
                <br />
                <br />
                <br />

                {/** New Section **/}
                <img src="Default Homepage.png" style={{"paddingLeft" : "10px", "paddingRight" : "10px", "width" : "410px", "height" : "200px", "float" : "left"}}/>
                <h2 className='subheading'>Launching My React Website</h2>
                <p className='paragraph'> Today was the day I officially launched my React website. As of right now, you are seeing two components on this website, a <b>Header</b> component and an <b>Internship</b> component. The <b>Header</b> component is the navigation bar which allows users to navigate between the linked pages on this website. The <b>Internship</b> component on the other hand is the content which varies on each linked page. My goal for the next little while is to publish my /home and /internship page rather than just my /<i>default</i> page. This means that if you refresh this page or the Home page, you will receive an error message but if you refresh the default page, it will work perfectly fine.</p>
                    <p className='date'>(October 12, 2022)</p>     
                <p />

                <br />
                <br />
                <br />
                <br />

                {/** New Section **/}
                <img src="favicon update.png" style={{"paddingLeft" : "10px", "paddingRight" : "10px", "width" : "410px", "height" : "200px", "float" : "left"}}/>
                <h2 className='subheading'>Adding Favicons</h2>
                <p className='paragraph'> I had a standup meeting with my mentor to discuss servers and how delays affect the updating process of a website. Hence, updates cannot be published onto a website instantly. To ensure website updates are successful, I can refresh without cache to display the HTTP response which would be a lot quicker than requesting from GitHub Page servers every time. Additionally, I added a favicon to this website. Originally, the favicon only appeared on the LocalHost but after carefully reviewing the code, I realized the path for the favicon was not set up correctly. After resolving this issue, the favicon successfully displayed onto this website.</p>
                    <p className='date'>(October 13, 2022)</p>     
                <p />

                <br />
                <br />
                <br />
                <br />

                {/** New Section **/}
                <img src="Typewriter.png" style={{"paddingLeft" : "10px", "paddingRight" : "10px", "width" : "410px", "height" : "200px", "float" : "left"}}/>
                <h2 className='subheading'>Typewriter Effects</h2>
                <p className='paragraph'>The typing animation on the Home page was created using the Typewriter package. This package enabled me to not only create a typing effect, but also enabled me to implement a pause effect, followed by a delete effect, and then a new typing effect. My goal for the upcoming day is to remove the blinking cursor from the typewriting effect as I believe it makes the effect more visually appealing. Additionally, I created a project section in which I will be uploading some of the projects I have done from tutorials as well as some of my side projects I am working on. Some of these projects include the Click Counter and To-Do List app I made through React tutorials.</p>
                    <p className='date'>(October 14, 2022)</p>     
                <p />

                <br />
                <br />
                <br />
                <br />

                {/** New Section **/}
                <img src="Contacts.png" style={{"paddingLeft" : "10px", "paddingRight" : "10px", "width" : "410px", "height" : "200px", "float" : "left"}}/>
                <h2 className='subheading'>Multiple Components and Contact Forms</h2>
                <p className='paragraph'>At the start of the day, I looked into page loaders. Unfortunately, most required the use of scss files which I am unfamiliar with. After that, I worked on creating a contact application that allows users to connect with me via my website. I completed the basic format of the application. I am aiming to complete the backend of the form by the end of this week. As well, I learned how to display multiple components. In other words, I linked my <b>About Me</b> component to my <b>Home</b> component. This means that when the <b>Home</b> component is loaded, the <b>About Me</b> component will load under the <b>Home</b> component. Additionally, I added my calculator project that I have been working on through React tutorials.</p>
                    <p className='date'>(October 17, 2022)</p>     
                <p />

                <br />
                <br />
                <br />
                <br />

                {/** New Section **/}
                <img src="Life and Interests.png" style={{"paddingLeft" : "10px", "paddingRight" : "10px", "width" : "410px", "height" : "200px", "float" : "left"}}/>
                <h2 className='subheading'>Professional Summary and Interests</h2>
                <p className='paragraph'>I changed the colour of the scrollbar to match the theme of this website. I used the element <b>::-webkit-scrollbar…</b> to change the width size, background and hover colour. As well, I worked on my Home page. I wrote a summary of my <b>Professional Life</b> and built a template for my <b>Personal Interest</b>. Before building the template, I spent some time learning how to write multiple text paragraphs in the same line. For example, “Stock Market”, “Track and Field”, and “Cooking” are different text paragraphs but are on the same lines. The dashes (-) prove that the different text paragraphs cannot overstep each other as they will automatically move onto the next line. My task for the next little while is to work on the contents and images for my <b>Personal Interest</b>.</p>
                    <p className='date'>(October 19, 2022)</p>     
                <p />

                <br />
                <br />
                <br />
                <br />
                {/** New Section **/}
                <img src="Bootstrap Code.png" style={{"paddingLeft" : "10px", "paddingRight" : "10px", "width" : "410px", "height" : "200px", "float" : "left"}}/>
                <h2 className='subheading'>Learning Bootstrap</h2>
                <p className='paragraph'>I attempted to fix the 404 error on this website that would not allow the user to refresh any page except the home page without receiving an error. I had multiple blockers which led me to start learning Bootstrap as most solutions to the problem involved code that I could not recognize. I started off with watching a <a href="https://www.youtube.com/watch?v=Jyvffr3aCp0&ab_channel=WebDevSimplified" target="_blank"><u style={{"color" : "blue"}}>Bootstrap 5 Crash Course</u></a> to get familiar with the framework. From this, I learned about containers, boxes, columns, and rows. As well, I messed around with resizing the rows and columns for small screens versus larger screens. Additionally, I temporarily added Bootstrap onto this website which led to a massive formatting issue resulting in text unalignment, image padding and and link colours. As a result, I decided to uninstall Bootstrap from this website and created a clone website for testing purposes.</p>
                    <p className='date'>(October 20, 2022)</p>     
                <p />

                <br />
                <br />
                <br />
                <br />

                {/** New Section **/}
                <img src="Bootstrap Testing.png" style={{"paddingLeft" : "10px", "paddingRight" : "10px", "width" : "410px", "height" : "200px", "float" : "left"}}/>
                <h2 className='subheading'>Learning Bootstrap Cont'd</h2>
                <p className='paragraph'>I attempted to rewrite my <b>Personal Interests</b> using Bootstrap. During this process, I read the <a href="https://getbootstrap.com/docs/5.2/layout/grid/" target="_blank"><u style={{"color" : "blue"}}>Grid System Documents</u></a> and revisited yesterday's video to obtain a better understanding of the framework. From this, I was able to style the column size for various screen sizes. As well I centered the images and texts as seen on the left. As of right now the code used to generate the image on the left can be seen at <b><i>/components/Home/about-me</i></b>, however, the code has been commented to prevent formatting errors on this current website. Additionally, I added row gaps between the images and texts. My task for the upcoming days is to rewrite my Professional Summary using Bootstrap. In my own time, I will write the contents for my Personal Interests so they are ready to add to the website once it has been successfully reformatted using Bootstrap.</p>
                    <p className='date'>(October 21, 2022)</p>     
                <p />

                <br />
                <br />
                <br />
                <br />
            </div>
        </body>
    )
}

export default Internship;