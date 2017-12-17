import React from "react"
import * as user from "./Functions.js"

export default class Ohterstats extends React.Component {
  constructor(props) {
     super(props);
     console.log("other stats is here");
    this.state=({pie_chart_one:true, pie_chart_two:false, pie_chart_three:false});
   }

   componentDidMount(){
     if (this.props.clicked_other_stats){
     location.href="#first_row_target";
     }
   }
   goToLocation(){
     console.log("entered method");

   }
   getOnlyOneValue(arr){
     console.log(arr);
     return (<span>{arr[0].amount}</span>);
   }
   graphPieChartWithZeroIndex(arr){

     var data_pie = [
     {
       label: "posts with 3 side effects",
       color: "#5093ce",
       highlight: "#78acd9",
       value: this.props.post_with_sides3[0].amount
     },
     {
       label: "posts with more than 3 side effects ",
       color: "#c7ccd1",
       highlight: "#e3e6e8",
       value: this.props.post_with_sides_greater3[0].amount
     },
     {
       label: "posts with less than 3 side effects",
       color: "#7fc77f",
       highlight: "#a3d7a3",
       value: this.props.post_with_sides_lower3[0].amount
     }
   ];
   return data_pie;
   }
   graphPieChart(arr,order){
     var label_0=[];
      if (order==="second"){
        label_0.push("GERD");
        label_0.push("Hiatal hernia");
        label_0.push("Barrett's");
      }
      if (order==="third"){
        label_0.push("GERD & Hiatal");
        label_0.push("GERD & Barrett's");
        label_0.push("Barrett's & Hiatal");
      }
     var data_pie = [
     {
       label: label_0[0],
       color: "#5093ce",
       highlight: "#78acd9",
       value: arr[0].amount
     },
     {
       label: label_0[1],
       color: "#c7ccd1",
       highlight: "#e3e6e8",
       value: arr[1].amount
     },
     {
       label: label_0[2],
       color: "#7fc77f",
       highlight: "#a3d7a3",
       value: arr[2].amount
     }
   ];
   return data_pie;
   }

  render(){
  var conclusion1= "Most patients have been on the drug for 10 years. However, as numbers tend to drop after 10 years on the drug, there is a big number of patients being on the drug for 15 and 20 years.";
  var conclusion2="Daily used PPIs means that patients were daily on them (continuously/non-stop) for the given amount of years. Most patients were on them continuously for equal or less than 10 years, but there are also patient’s who’ve been on them for 15 and 20 years continuously";
  var conclusion3="Most patients are on a maintenance dose (pantoprazole, esomeprazole: 40mg, omeprazole, rabeprazole: 20mg, lansoprazole: 30mg), few are on a high dosage and OTC-low dosage";

  var PieChart;
  PieChart = require("react-chartjs").Pie;
  const canStyle = {
    marginTop:30
  };
    return(
      <div id="first_row_target" className="container">
        <div  className="row">
          <div className="col-sm-4">
            <h5 className="others_heading">Period on drug <span>(duration)</span></h5>
            {user.getTable(this.props.drug_years,"Duration (years)", "Post",conclusion1,"firstcol","secondcol")}
            {/* SELECT duration, COUNT( data.id )
              FROM data
              WHERE duration <=30
            GROUP BY duration */}
          </div>
          <div className="col-sm-4">
            <h5 className="others_heading">Period on drug daily <span>(duration)</span></h5>
            {user.getTable(this.props.patients_on_daily,"Duration_daily (years)", "Post",conclusion2,"firstcol","secondcol")}
            {/* select duration as daily_duration, count(data.id) as post from data
              where dailyuse='yes'
              group by duration
            having duration<30 */}
          </div>
          <div className="col-sm-4">
            <h5 id="targeting" className="others_heading">Period on drug <span>(dosage)</span></h5>
            {user.getTable(this.props.patients_on_dosage,"Dosage", "Post",conclusion3,"firstcol","secondcol")}
            {/* SELECT dosage, COUNT( data.id )
              FROM data
              WHERE duration <=30
            GROUP BY dosage */}
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-sm-4">
            <h5 className="others_heading">Dosage related to side effects</h5>
            {user.getTable(this.props.dosage_to_sides,"Dosage", "Side effects","","firstcol","secondcol")}
            {/*select dosage, count(sides.name) as ppi_sides from post, post_sides,data,sides
              where data.post_FK=post.id  AND post_sides.post=post.id AND post_sides.sides=sides.id
            GROUP BY dosage */}
          </div>
          <div className="col-sm-4">
            <h5 className="others_heading">Duration related to side effects</h5>
            {user.getTable(this.props.duration_to_sides,"Duration (years)", "Side effects","","firstcol","secondcol")}
            {/* select duration, count(sides.name) as ppi_sides from post, post_sides,data,sides
              where data.post_FK=post.id  AND post_sides.post=post.id AND post_sides.sides=sides.id
            GROUP BY duration */}
          </div>
          <div className="col-sm-4">
            <h5 className="others_heading">Drug <span>generic</span> related to side effects</h5>
            {user.getTable(this.props.side_effects_generic,"Drug generic", "Side effects (amount)","","firstcol","secondcol")}
            {/* select drug_generic.name, count(post_sides.sides) as amount_of_sides from post, post_sides, drug_generic, data
              where data.post_FK=post.id and drug_generic.id=data.drug_generic_FK AND post_sides.post=post.id
            GROUP BY drug_generic.name */}
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-sm-4">
            <h5 className="others_heading">Drugs <span>generic</span> associated to zero side effects</h5>
            {user.getTable(this.props.drugs_to_explicitnone,"Drug generic", "No side effects","","firstcol","secondcol")}
            {/* select drug_generic.name, count(post_sides.sides) as amount_of_sides from post, post_sides, drug_generic, data,sides
              where data.post_FK=post.id and drug_generic.id=data.drug_generic_FK AND post_sides.post=post.id AND post_sides.sides=sides.id
              and sides.name='explicitnone'
            GROUP BY drug_generic.name */}
          </div>
          <div className="col-sm-4">
            <h5 className="others_heading">Drugs <span>generic</span> associated to stomach polyps <span>(side effect)</span></h5>
            {user.getTable(this.props.drugs_to_stomach_polyps,"Drug generic", "Stomach polyp side effect","","firstcol","secondcol")}
            {/* select drug_generic.name, count(post_sides.sides) as amount_of_sides from post, post_sides, drug_generic, data,sides
              where data.post_FK=post.id and drug_generic.id=data.drug_generic_FK AND post_sides.post=post.id AND post_sides.sides=sides.id
              and sides.name='stomach polyps'
            GROUP BY drug_generic.name */}
          </div>
          <div className="col-sm-4">
            <h5 className="others_heading">Drug <span>generic</span> associated to kidney problems <span>(kidney failure, ckd, nephritis etc.)</span></h5>
            {user.getTable(this.props.drugs_to_kidney,"Drug generic", "Kidney condition side effect","","firstcol","secondcol")}
            {/* select drug_generic.name, count(conditionppi.name) as amount_of_anxiety from post, post_conditionppi, drug_generic, data, conditionppi
              where data.post_FK=post.id and drug_generic.id=data.drug_generic_FK AND post_conditionppi.post=post.id AND post_conditionppi.conditionppi=conditionppi.id
              and conditionppi.name='CKD' OR conditionppi.name='Kidney failure' OR conditionppi.name='kidney problem' OR conditionppi.name='nephritis'
            GROUP BY drug_generic.name */}
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-sm-4">
            <h5 className="others_heading">Drugs <span>generic</span> associated to bone problems <span>(osteopenia, osteoporosis, bone fracture etc.)</span></h5>
            {user.getTable(this.props.drugs_to_osteo,"Drug generic", "Bone problems side effect","","firstcol","secondcol")}
            {/* select drug_generic.name, count(conditionppi.name) as amount_of_anxiety from post, post_conditionppi, drug_generic, data, conditionppi
              where data.post_FK=post.id and drug_generic.id=data.drug_generic_FK AND post_conditionppi.post=post.id AND post_conditionppi.conditionppi=conditionppi.id
              and conditionppi.name='Osteoporosis' or conditionppi.name='Osteopenia' or conditionppi.name='bone fracture'
            GROUP BY drug_generic.name */}
          </div>
          <div className="col-sm-4">
            <h5 className="others_heading">Drugs <span>generic</span> associated with Anxiety</h5>
            {user.getTable(this.props.drugs_to_anxiety,"Drug generic", "Anxiety side effect","","firstcol","secondcol")}
            {/* select drug_generic.name, count(conditionppi.name) as amount_of_anxiety from post, post_conditionppi, drug_generic, data, conditionppi
              where data.post_FK=post.id and drug_generic.id=data.drug_generic_FK AND post_conditionppi.post=post.id AND post_conditionppi.conditionppi=conditionppi.id
              and conditionppi.name='Anxiety'
            GROUP BY drug_generic.name */}
          </div>
          <div className="col-sm-4">
            <h5 className="others_heading">Drug <span>generic</span> associated to dementia</h5>
            {user.getTable(this.props.drugs_to_dementia,"Drug generic", "Dementia side effect","","firstcol","secondcol")}
            {/* select drug_generic.name, count(conditionppi.name) as amount_of_anxiety from post, post_conditionppi, drug_generic, data, conditionppi
              where data.post_FK=post.id and drug_generic.id=data.drug_generic_FK AND post_conditionppi.post=post.id AND post_conditionppi.conditionppi=conditionppi.id
              and conditionppi.name='Dementia'
            GROUP BY drug_generic.name */}
          </div>
        </div>
        <hr/>

        <div className="row">
          <div className="col-sm-4">
            <h5 className="others_heading">Drugs <span>generic</span> associated to vitamin B12 defficiency </h5>
            {user.getTable(this.props.drugs_to_b12,"Drug generic", "B12 defficiency","","firstcol","secondcol")}
            {/* select drug_generic.name, count(conditionppi.name) as amount_of_anxiety from post, post_conditionppi, drug_generic, data, conditionppi
              where data.post_FK=post.id and drug_generic.id=data.drug_generic_FK AND post_conditionppi.post=post.id AND post_conditionppi.conditionppi=conditionppi.id
              and conditionppi.name='Osteoporosis' or conditionppi.name='Osteopenia' or conditionppi.name='bone fracture'
            GROUP BY drug_generic.name */}
          </div>
          <div className="col-sm-4">
            <h5 className="others_heading">Drugs <span>generic</span> associated to vitamin Mg defficiency</h5>
            {user.getTable(this.props.drugs_to_magnesium,"Drug generic", "Mg defficiency","","firstcol","secondcol")}
            {/* select drug_generic.name, count(conditionppi.name) as amount_of_anxiety from post, post_conditionppi, drug_generic, data, conditionppi
              where data.post_FK=post.id and drug_generic.id=data.drug_generic_FK AND post_conditionppi.post=post.id AND post_conditionppi.conditionppi=conditionppi.id
              and conditionppi.name='Anxiety'
            GROUP BY drug_generic.name */}
          </div>
          <div className="col-sm-4">
            <h5 className="others_heading">Drug <span>generic</span> associated to Calcium defficiency</h5>
            {user.getTable(this.props.drugs_to_calcium,"Drug generic", "Ca defficiency","","firstcol","secondcol")}
            {/* select drug_generic.name, count(conditionppi.name) as amount_of_anxiety from post, post_conditionppi, drug_generic, data, conditionppi
              where data.post_FK=post.id and drug_generic.id=data.drug_generic_FK AND post_conditionppi.post=post.id AND post_conditionppi.conditionppi=conditionppi.id
              and conditionppi.name='Dementia'
            GROUP BY drug_generic.name */}
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-sm-6">
            <h5 className="others_heading">Data 3 elements stats</h5>
            <div className="first_option" onClick={()=>this.setState({pie_chart_one:true,pie_chart_two:false,pie_chart_three:false})}>
              <p className="inline">Posts with 3 side effects</p>
              <span className="inline">{this.getOnlyOneValue(this.props.post_with_sides3)}</span>
              <br/>
              <p className="inline">Posts with 3 or more side effects</p>
              <span className="inline">{this.getOnlyOneValue(this.props.post_with_sides_greater3)}</span>
              <br/>
              <p className="inline">Posts with less than 3 side effects</p>
              <span className="inline">{this.getOnlyOneValue(this.props.post_with_sides_lower3)}</span>
            </div>

            <p></p>
            <div className="second_option" onClick={()=>this.setState({pie_chart_one:false,pie_chart_two:true,pie_chart_three:false})}>
              <p className="inline">Patients with GERD</p>
              <span className="inline">{this.props.gerd_barrett_hiatal[0].amount}</span>
              <br/>
              <p className="inline">Patients with Hiatal Hernia</p>
              <span className="inline">{this.props.gerd_barrett_hiatal[1].amount}</span>
              <br/>
              <p className="inline">Patients with Barrett's</p>
              <span className="inline">{this.props.gerd_barrett_hiatal[2].amount}</span>
              <p></p>
            </div>
            <div className="third_option" onClick={()=>this.setState({pie_chart_one:false,pie_chart_two:false,pie_chart_three:true})}>
              <p className="inline">Patients with GERD and Hiatal hernia</p>
              <span className="inline">{this.props.gerd_barrett_hiatal_and[0].amount}</span>
              <br/>
              <p className="inline">Patients with GERD and Barrett's</p>
              <span className="inline">{this.props.gerd_barrett_hiatal_and[1].amount}</span>
              <br/>
              <p className="inline last_graph_bottom">Patients with Barrett's and Hiatal hernia</p>
              <span className="inline">{this.props.gerd_barrett_hiatal_and[2].amount}</span>
            </div>

          </div>

          <div className="col-sm-6">
            {this.state.pie_chart_one?<PieChart style={canStyle} data={this.graphPieChartWithZeroIndex()} width="350" height="300" redraw/>:""}
            {this.state.pie_chart_two?<PieChart style={canStyle} data={this.graphPieChart(this.props.gerd_barrett_hiatal,"second")} width="350" height="300" redraw/>:""}
            {this.state.pie_chart_three?<PieChart style={canStyle} data={this.graphPieChart(this.props.gerd_barrett_hiatal_and,"third")} width="350" height="300" redraw/>:""}
          </div>
        </div>
        <hr/>
      </div>



);


}
}
