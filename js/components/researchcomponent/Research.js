import React from 'react';

import Headerfirst from './Headerfirst.js';
import Headermain from './Headermain.js';
import Stats from './Stats.js';
import Problem from './Problem.js';
import Conclusion from './Conclusion.js';
import Explanation from './Explanation.js';
import Quickstats from './Quickstats.js';

import Navbar from '../Navbar.js';
import Navfooter from '../Navfooter.js';
import Social from '../Social.js';
import { content } from './Contentobject.js';

export default class Research extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    //na 363 px ga moras izlomiti...
  }
  render() {
    //  &#39; --> apostrophe

    return (
      <div className="container">
        <Navbar />
        <Quickstats />
        <p className="title_research">Published research</p>

        <div className="row">
          <div className="col-sm-6">
            <div className="research_wrapper">
              <Headerfirst id="1" date={content.date1} url={content.url1} show_pdf={false} />
              <Headermain heading={content.heading1} image={content.image1} info_content={content.info_content1} />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="research_wrapper">
              <Headerfirst id="1" date={content.date2} url={content.url2} show_pdf={false} />
              <Headermain heading={content.heading2} image={content.image2} info_content={content.info_content2} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="research_wrapper">
              <Headerfirst id="3" date="27.02.2011." url="" />
              <Headermain
                heading={'Kidney disease'}
                image={'../../pics/organs/kidney.jpg'}
                info_content=" laksjflkasjf aklsfj alfkajfl kasjflakf jalkfj alkaj flkas faklčsfj alksfjalskfjasl čfajslkf aslkfasj flakj faklfj alfkaj flkas fjlakakljfdkla flasjf askfjdsal kfjafklč ajkčajs flkčsjf aklsčfajs fkaf asdlkčfj asflčkajsflčksdajfas čfjka asklčfajsfkl čafjsl čkasfjalčkfjdlčkfj aflčkajsf alčskfj asslčfkajs flksajflakčs fjakdsfj ads "
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="research_wrapper">
              <Headerfirst id="4" date="27.02.2011." url="" />
              <Headermain heading={'Heart disease'} image={'../../pics/organs/heart.png'} info_content="" />
            </div>
          </div>
        </div>

        <Social shown={true} />
        <Navfooter />
      </div>
    );
  }
}
