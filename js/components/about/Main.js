import React from "react"
import { connect } from "react-redux"

import Navbar from '../Navbar.js'
import Newstats from '../Newstats/Newstats.js'
import Navfooter from '../Navfooter.js'
import Social from '../Social.js'

@connect((store) => {
  return {
   navbar:store.nav
  };
})

export default class Main extends React.Component {
  constructor(props) {
     super(props);
     this.state=({});
   }
  render(){
    return(
      <div className="container">
        <Navbar/>
        <div className="row" style={{marginTop:15, marginBottom:10}}>
          <div className="col-sm-6 about_first ">
            <h4 className="overwrite_h4">Introduction</h4>
            <p>
              My name is Eugen Sunic. I'm 26 years old (born on August 30th 1991) and I live in Croatia, city of Zagreb.
              I have a master’s degree in transport and traffic science.
              I pursued another master’s degree in computer science but I dropped out due to this project and work.
              I currently run this project all by myself (design, computer programming, database, posts collection, maintenance, and social networks).
              This web application was created after years and years of reading the Internet, doing research on this drugs, posting comments on various
              forums/online discussion groups etc.
            </p>
            <p>
              In August 2011, when I was still 19 years of age I’ve been diagnosed with hiatal hernia, GERD and Barrett’s
              esophagus. Today, In the past I've used d PPIs (proton pump inhibitors: omeprazole, esomeprazole, pantoprazole,
              lansoprazole, rabeprazole etc.). My GP gave me Pantoprazole which healed all of the above conditions.
            </p>
            <p>
              My first symptoms started in the beginning of October 2010. The main symptom was chronic belching/burping (caused by the hiatal hernia and indigestion)
              and heartburn. I do not suffer from any other disease currently although I had respiratory problems in my childhood.
            </p>
            <p>
              Proton pump inhibitors are one of the most prescribed drugs in the world. As you already may know, they are primarily used to treat upper abdominal problems, which involve
              the duodenum, stomach and esophagus. They are mostly prescribed for GERD (Gastroesophageal reflux disease).
            </p>
          </div>
          <div className="col-sm-6">
            <div className="center" style={{marginTop:50}}>
              <img src="../pics/profile3.png" className="about_image"/>
              <br/>
              <div>
                <span><b>Gender</b>:M <b>Age</b>:26</span>
                <br/>
                <span><b>Height</b>:190cm/6.2feet <b>Weight</b>:88kg/194lbs</span>
                <br/>
                <span><b>Condition</b>:hiatal hernia, Barrett's (healed) </span>
                <br/>
                <span><b>Therapy</b>:sometimes pantoprazole 20mg</span>
                <br/>
                <span><b>Exercise</b>:Sometims </span>
                <br/>
                <span><b>Ocupation</b>:programmer</span>
                <br/>
                <span><b>Languages</b>:English, French, Croatian</span>
              </div>

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 center" style={{marginTop:110}}>
            <a href="http://projectsgono.com/es38cnawc32ucb29c82i29cniencqkojwqecneifi3c3290/" target="_blank" className="center linking_app">Application used for collecting comments</a>
          </div>
          <div className="col-sm-6  about_second">
            <h4 className="overwrite_h4">About the project</h4>
            <p>
              As you could already see, the main purpose of this site is to collect Internet posts where people/patients express their thoughts about PPIs.
              <strong>The main Criteria</strong> where the decision is made whether to collect the post or not was the <strong>time spent on the drug (duration of treatment)</strong>.
              In other words, if the post did not specify the treatment duration, then the post was rejected and not collected. If the duration was specified, then the post was collected and displayed on this
              <span className="change_cursor" onClick={()=>{this.props.dispatch({type:"home_element", payload:"home"})}}> <strong>website</strong></span>.
            </p>
            <p>
              On the other hand, comments were extracted if people/patients talked about their doctors opinion on this drug, what doctors told them and how are
              they behaving when prescribing this drugs for a longer period of time. Also, comments from doctors who have posted on their behalf were also
              gathered and displayed. More info on this section can be found <span className="change_cursor" onClick={()=>{this.props.dispatch({type:"home_element", payload:"home"})}}> <strong>here</strong></span>.
            </p>
            <p>
              All of this stories can be filtered based on your wishes. For example, if you want to see stories from people who were on this drugs for 20+ years
              every day you can just click on a button which will filter those specific stories. If you want to display stories where patients are on high doses
              and see their side effects or maybe see posts of patients who are just on omeprazole, nexium, pantoprazole or some other PPI generic/brand you can
              also do that.  There are a lot of combinations, which will filter the posts based on your needs and interest.
            </p>
            <p>
              Not only are the posts across the Internet included. The statistics has been generated out of them to see how conditions, drugs, side effects,
              nutrient deficiency’s, brands rank from the most prevalent, worse, best etc. The statistic page and further explanation can be found <span className="change_cursor" onClick={()=>{this.props.dispatch({type:"stats_element", payload:"stats"})}}><strong> here</strong></span>.
            </p>
            <p>
              Apart from this, a unique question and answer pages were created in order for patients to inform themselves about this drug and their condition
              and to try and minimize the side effects, dosage and to improve their quality of life with or without drugs. The pages can be found <span className="change_cursor" onClick={()=>{this.props.dispatch({type:"starter_element", payload:"starter"})}}> <strong>here</strong></span> and <span className="change_cursor" onClick={()=>{this.props.dispatch({type:"home_element", payload:"home"})}}>
                <strong>here</strong></span>.
            </p>
            <p>
              There is also a valuable page for all patients where they can follow the ongoing research which is being done. Every research on the page is
              thoroughly explained so that everyone can understand it. The research section can be found <span className="change_cursor" onClick={()=>{this.props.dispatch({type:"research_element", payload:"research"})}}> <strong>here</strong></span>.
            </p>
            <p>
              The reason of collecting such posts is the huge media reporting about the PPIs side effects. If you search for PPIs dangers, side effects,
              long-term consequences etc. you won’t believe how much information has been posted recently about them. I can definitely say that they have
              become the most talked topic in the world in terms of pharmaceutical drugs.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 about_third">
            <h4 className="overwrite_h4">Research & Vision</h4>
            <p>Numerous researches have been done which point that PPIs could be the culprit for kidney, heart, brain problems. The ongoing researches are
              focused on kidneys which relate this drugs to nephritis, chronic kidney disease and kidney failure.
            </p>
            <p>
              There isn’t evidence for all the above mentioned disease, only correlation to them. Which doesn’t prove that PPIs really cause them. Remember,
              <strong> correlation&ne;causation</strong>. However, we should all be aware of those researches and check our vital organs from time to time to avoid any possible
              complications.
            </p>
            <p>
              The next vision of this application is to form a platform which will improve the usage of this drugs especially for patients who are on them for
              a long time. The input page is one of the best way to see if these drugs really cause some serious side effects. The input-page app was created
              after a year of collecting posts and thinking carefully what information does one need to give in order to get accurate results, so please <span className="change_cursor" onClick={()=>{this.props.dispatch({type:"input_element", payload:"input"})}}> <strong>fill the form here.</strong></span>
            </p>
            <p>
              I’m not a supporter of PPIs and I do not work for any drug related company. I have spent an entire year in order to make this work. No one wanted
              to participate, therefore I had to do it on my own. If there is a programmer, doctor, pharmacist or anyone else who thinks that
              he or she could help with this ongoing project then please contact me at <i className="mail_address">eugen.sunic@live.com</i>. I believe that this could be a very good PPI
              web platform in the near future.
            </p>
            <p>
              Future ideas and subprojects will be soon available.
            </p>
          </div>
          <div className="col-sm-6 center">
            <div style={{marginTop:50}}>
              <span style={{fontSize:20}}>Forums active on:</span>
              <p></p>
              <a href="" target="_blank" className="forums_active">Patient.info</a>
              <p></p>
              <a href="" target="_blank" className="forums_active">Quora</a>
              <p></p>
              <a href="https://health.stackexchange.com/users/3462/digestive?tab=profile" target="_blank" className="forums_active">Stack Exchange</a>
              <p></p>
              <a href="" target="_blank" className="forums_active">Reddit</a>

            </div>
          </div>
        </div>
        <div className="row">
          <div className="my_comments_section_starter">
            <strong>NOTE: </strong>
            <ul>
              <li> Every post collected from another site is referenced, the date as well as the post username are also present</li>
              <li> Most answers in the question section are also referenced. In this way accurate information is provided to the patient</li>
              <li> Posts have been minimally modified. Modification includes only: syntax and grammar correction. The meaning of the posts have not been modified (this can be checked on the URL reference)</li>
              <li> Statistics have been fetched from the collected post database and not a single number was modified in terms of percentage and value</li>
              <li> The input-form app does not collect any of your personal information (you can read more on the input-form app page) </li>
              <li> The website is adjusted for all screen resolutions</li>
            </ul>
          </div>
          <p>


            <strong>Technologies used for building this app:</strong>
            <br/>
            MySQL, HTML, CSS, Bootstrap, Vanilla JS (JavaScript), jQuery, React Native, React Redux

          </p>
        </div>

        <Social shown={false}/>
        <Navfooter/>
      </div>
    );

 }
}
