import React from "react";
import Select from 'react-select';
import { connect } from "react-redux"
import ReactDom from 'react-dom';

import About from './About.js'
import Basic from './Basic.js';
import Condition from './Condition.js';
import Drug from './Drug.js';
import Sides from './Sides.js'
import Other from './Other.js'
import Nutrient from './Nutrient.js'
import Natural from './Naturalremedies.js'
import Extra from './Extra.js'
import Button from './Buttondefault.js'
import Success from './Buttonsuccess.js'
import Navbar from '../Navbar.js'
import Navfooter from '../Navfooter.js'

import * as user from "./Functions.js"
import axios from "axios";


@connect((store) => {
  return {
    data_input:store.data_input,
    basic:store.basic,
    condition:store.condition,
    drug:store.drug,
    sides:store.sides,
    nutrient:store.nutrient,
    natural:store.natural,
    extra:store.extra,
    other:store.other,
    getId:store.getId

  };
})
export default class Inputform extends React.Component {
  constructor(props) {
     super(props);
     this.updateDimensions = this.updateDimensions.bind(this);
     this.state = ({add_drug_one:false,add_drug_two:false,add_drug_three:false,add_drug_four:false,success:false,
       clicked:false,new_success:false,clicked2:false,final_success:false,warning_clicked:false, proceed_main_clicked:false, mgcondition:{marginTop:0}
     });

     this.props.dispatch(user.getRequest('http://www.projectsgono.com/medsforlife/ppi_input/get_last_id.php', 'get-max-id')).then(()=> {
       let FK_id = this.props.getId.getLastId;
       user.postRequest('http://projectsgono.com/medsforlife/ppi_input/basic.php', FK_id, 2, 3,'nes', 0,'as','assdf','asdfas').then(()=> {

        user.postRequest('http://projectsgono.com/medsforlife/ppi_input/all_other.php',
        ['acid reflux', 'GERD', 'achalasia'],
        ['acid reflux', 'GERD'],
        ['acid reflux'],
        FK_id,

        ['esomeprazole', 'pantoprazole','eastdam'],
        ['nexium', 'protonix',''],
        [20, 40, 40],
        [3, 2, 30],
        ['year', 'week', ''],
        ['yes', 'no', ''],

        ['arm pain','feet pain', 'other pain'],

        ['domperidone','ranitidine', 'sucralfate'],

        ['calcium','magnesium', 'iron'],

        ['rosemarie','ginger', 'ACV'],
        ['calcium'],

        'hpylori',
        'exeric',
        'smoke',
        'alcocohol',
        'obese',
        'healthy eat',
        'stres',
        'familly',
        'anx',
        'gl',
        'lac',
        'substitute',
        'off drug',
        'acid rebound',
        'overall experience'

        ).then(()=> {
          // 3 is the array amount which you will calculate on the frontend side...
          // all arrays have to have same lenght when you send to database!
            user.postRequest('http://projectsgono.com/medsforlife/ppi_input/side_effect_ppi_drug.php',
            3,
            ['first side','first side2', 'first side3'],
            ['first side','first side2', 'first side3'],
            ['first side','first side2', 'first side3'])
            .then(()=> {alert("Form completed, thank you!")
          }).catch((err)=>{
              alert("Error occured, please try again");
             });
        }).catch((err)=>{
            alert("Error occured, please try again");
           });
       }).catch((err)=>{
           alert("Error occured, please try again");
          });
     }).catch((err)=>{
         alert("Error occured, please try again");
        });
   }

   updateDimensions(){
     if (window.innerWidth<992){
       console.log("INSIDE");
       this.setState({mgcondition:{marginTop:22}})
       //solve condition row

       //solve drug row
     }
     else if (window.innerWidth>=992){
        this.setState({mgcondition:{marginTop:0}})
     }
   }
   componentDidMount(){
     window.addEventListener("resize", this.updateDimensions);
   }
   componentWillUnmount(){
     window.removeEventListener('resize', this.updateDimensions);
   }
   componentDidUpdate(){
   }

  successConfirm(){
    var gender_radio, race_radio, height_sel, weight_sel;

    gender_radio=this.props.basic.gender;
    race_radio=this.props.basic.race;
    height_sel=this.props.basic.height_select;
    weight_sel=this.props.basic.weight_select;

    //finalize
    if ((this.props.basic.age!=undefined && this.props.basic.age.length!=0 && user.isValidInteger(this.props.basic.age,0,110)!="error_red") && (this.props.basic.weight!=undefined && this.props.basic.weight.length!=0 &&
      user.isValidInteger(this.props.basic.weight,0,1000)!="error_red") &&
       (this.props.basic.height!=undefined && this.props.basic.height.length!=0 && user.isValidInteger(this.props.basic.height,0,300)!="error_red" ) && gender_radio!=undefined && race_radio!=undefined &&
        height_sel!=undefined && weight_sel!=undefined
        &&(this.props.condition.gastro!=undefined && this.props.condition.gastro.length!=0)
        && (this.props.drug.generic1!=null)
          && this.props.drug.dosage1!==undefined && (this.props.drug.duration1!==undefined && this.props.drug.duration1!="" &&  user.isValidInteger(this.props.drug.duration1,0,1000)!="error_red")
        && this.props.drug.globaltime1!==undefined && this.props.drug.daily1!==undefined){
          if (this.state.add_drug_one){
             if ((this.props.drug.generic2!=null)  && this.props.drug.dosage2!==undefined
             && (this.props.drug.duration2!==undefined && this.props.drug.duration2!=""  && user.isValidInteger(this.props.drug.duration2,0,1000)!="error_red") && this.props.drug.globaltime2!==undefined && this.props.drug.daily2!==undefined){
                 if (this.state.add_drug_two){
                    if ((this.props.drug.generic3!=null)  && this.props.drug.dosage3!==undefined
                    && (this.props.drug.duration3!==undefined && this.props.drug.duration3!="" && user.isValidInteger(this.props.drug.duration3,0,1000)!="error_red") && this.props.drug.globaltime3!==undefined && this.props.drug.daily3!==undefined){
                      if (this.state.add_drug_three){
                        if ((this.props.drug.generic4!=null)  && this.props.drug.dosage4!==undefined
                        && (this.props.drug.duration4!==undefined && this.props.drug.duration4!="" && user.isValidInteger(this.props.drug.duration4,0,1000)!="error_red") && this.props.drug.globaltime4!==undefined && this.props.drug.daily4!==undefined){
                          this.setState({success:true,clicked:true})
                          console.log("fourth row success");
                        }
                        else{
                            console.log("fourth row fail")
                            this.setState({clicked:true})
                        }

                      }
                      else{
                        this.setState({success:true,clicked:true})
                        console.log("third row success");
                      }
                    }
                    else{
                      console.log("third row fail")
                      this.setState({clicked:true})
                    }
                 }
                 else{
                   this.setState({success:true,clicked:true})
                   console.log("second row success");
                   //success first row
                 }
             }
             else{
               console.log("second row fail")
               this.setState({clicked:true})
             }


          }
          else{
              this.setState({success:true,clicked:true})
              console.log("first row success");
              //success first row
          }

        }
        else{
          this.setState({clicked:true})
      console.log("failed something up to first row");
          console.log("gastro value: "+this.props.condition.gastro)
          console.log("other value: "+this.props.condition.other)
          console.log("ppi si value: "+this.props.condition.ppi)

          //fail first row
        }
  }

 whichOneReturn(){
   var counter=0;
   if (this.props.drug.generic1!=undefined){
     counter++;
   }
   if (this.props.drug.generic2!=undefined){
     counter++;
   }
   if (this.props.drug.generic3!=undefined){
     counter++;
   }
   if (this.props.drug.generic4!=undefined){
     counter++;
   }
   if (counter===1){
     console.log("counter is really 1");
     if (this.props.sides.effect1!=undefined && this.props.sides.effect1!=""){
       return true;
     }
     else{
       return false;
     }
   }
   else if (counter===2){
     if ((this.props.sides.effect1!=undefined && this.props.sides.effect1!="") && (this.props.sides.effect2!=undefined && this.props.sides.effect2!="")){
       return true;
     }
     else{
       return false;
     }
   }
   else if (counter===3){
     if ((this.props.sides.effect1!=undefined && this.props.sides.effect1!="") && (this.props.sides.effect2!=undefined && this.props.sides.effect2!="") &&
         (this.props.sides.effect3!=undefined && this.props.sides.effect3!="")){
       return true;
     }
     else{
       return false;
     }
   }
   else if (counter===4){
     if ((this.props.sides.effect1!=undefined && this.props.sides.effect1!="") && (this.props.sides.effect2!=undefined && this.props.sides.effect2!="") &&
    (this.props.sides.effect3!=undefined && this.props.sides.effect3!="") && (this.props.sides.effect4!=undefined && this.props.sides.effect4!="")){
       return true;
     }
     else{
       return false;
     }
   }

 }
 extraReturnTrue(){
   if (this.props.extra.exercise!=undefined && this.props.extra.smoke!=undefined  && this.props.extra.alcohol!=undefined  && this.props.extra.obesse!=undefined &&
       this.props.extra.eat!=undefined      && this.props.extra.stress!=undefined &&
       this.props.extra.anxiety!=undefined  && this.props.extra.familly!=undefined  && this.props.extra.gluten!=undefined &&
       this.props.extra.lactose!=undefined  && this.props.extra.acid!=undefined   &&
       this.props.extra.overall!=undefined  && this.props.extra.pylori!=undefined){
         return true;
       }
       else{return false;}
 }
 //daj ove checkboxe resetaj obavezno na onclick nemoj da mi se tam vrijednsoti pojavljuju
sendDataToDatabase(){
  console.log("sending the data to database");
  //display data from first section
  //basic
   console.log("BASIC")
   console.log("--------------------------");
  console.log("age value: "+this.props.basic.age)
  console.log("weight value: "+this.props.basic.weight)
  console.log("weight si value: "+this.props.basic.weight_select)
  console.log("height value: "+this.props.basic.height)
  console.log("height si value: "+this.props.basic.height_select)
  console.log("gender value: "+this.props.basic.gender)
  console.log("race value: "+this.props.basic.race)

  //condition
   console.log("CONDITION")
   console.log("--------------------------");
  console.log("gastro value: "+this.props.condition.gastro)
  for(var key in this.props.condition.gastro) {
    console.log(this.props.condition.gastro[key]);
  }
  console.log("other value: "+this.props.condition.other)
  console.log("ppi si value: "+this.props.condition.ppi)

  //drugs
  // you will have to put this into an array, don't send evetything
  // to the backend just stuff that you need to send. send array anyways no matter if just
  // one element is inside
    console.log("DRUGS")
    console.log("--------------------------");
   console.log("generic value: "+this.props.drug.generic1)
   console.log("brand value: "+this.props.drug.brand1)
   console.log("dosage si value: "+this.props.drug.dosage1)
   console.log("duration value: "+this.props.drug.duration1)
   console.log("globaltime value: "+this.props.drug.globaltime1)
   console.log("daily value: "+this.props.drug.daily1)
   //display data from second section
   //sides
   console.log("SIDES")
   console.log("--------------------------");
  console.log("radio value: "+this.props.sides.radio_side)
  console.log("side1 value: "+this.props.sides.effect1)
  console.log("side2 si value: "+this.props.sides.effect2)
  console.log("side3 value: "+this.props.sides.effect3)
  console.log("side4 value: "+this.props.sides.effect4)
  console.log("general value: "+this.props.sides.side_effect_general)
  //other
   console.log("OTHER DRUG")
   console.log("--------------------------");

  console.log("radio value: "+this.props.other.radio_other)
  console.log("other drug value: "+this.props.other.otherdrug)
  //nutrient
   console.log("NUTRIENT")
   console.log("--------------------------");
  console.log("radio value: "+this.props.nutrient.radio_nutrient)
  console.log("nutrient: "+this.props.nutrient.nutrient)
  //natural
   console.log("NATURAL")
   console.log("--------------------------");
  console.log("helped: "+this.props.natural.naturalhelped)
  console.log("not helped: "+this.props.natural.naturalnothelped)
  //extra
  console.log("exercise: "+this.props.extra.exercise)
  console.log("smoke: "+this.props.extra.smoke)
  console.log("alcohol: "+this.props.extra.alcohol)
  console.log("obesse: "+this.props.extra.obesse)
  console.log("eat: "+this.props.extra.eat)
  console.log("stress: "+this.props.extra.stress)
  console.log("anxiety: "+this.props.extra.anxiety)
  console.log("familly: "+this.props.extra.familly)
  console.log("gluten: "+this.props.extra.gluten)
  console.log("lactose: "+this.props.extra.lactose)
  console.log("acid: "+this.props.extra.acid)
  console.log("overall: "+this.props.extra.overall)
  console.log("good: "+this.props.extra.good)
  console.log("pylori: "+this.props.extra.pylori)

  //-----------------------------------------------------------
  // POST SEND PARAMS
  //-----------------------------------------------------------




}
finalConfirm(){
 this.setState({clicked2:true});
  if (this.props.sides.radio_side!=undefined){
    if (this.props.sides.radio_side[0]){
      if ((this.props.sides.side_effect_general!=undefined && this.props.sides.side_effect_general!="") || this.whichOneReturn.call(this)){
        if (this.props.other.radio_other!=undefined){
            if (this.props.other.radio_other[0]){
              if (this.props.other.otherdrug!=undefined && this.props.other.otherdrug!=""){
                if (this.props.nutrient.radio_nutrient!=undefined){
                  if (this.props.nutrient.radio_nutrient[0]){
                    if (this.props.nutrient.nutrient!=undefined && this.props.nutrient.nutrient!=""){
                        if (this.extraReturnTrue.call(this)){
                          console.log("SUCCESS FINAL");
                           this.setState({final_success:true})
                        }
                        else{
                          console.log("failed extra");
                           // failed extra
                        }
                    }
                    else{
                      console.log("failed inner nutrient");
                      //failed inner nutrient
                    }
                  }
                  else{
                      //radio nutrient is unknown or false, continue to Extra
                      if (this.extraReturnTrue.call(this)){
                        console.log("SUCCESS FINAL");
                         this.setState({final_success:true})
                      }
                      else{
                        console.log("failed extra");
                        //failed extra
                      }
                  }
                }
                else{
                  console.log("failed nutrient radio nutrient");
                  //failed nutrient radio_nutrient
                }
              }
              else{
                console.log("failed inner other");
                 //failed inner other
              }
            }
            else{
                //radio other is unknown or false, continue to nutrient_radio DONE!!!
                if (this.props.nutrient.radio_nutrient!=undefined){
                  if (this.props.nutrient.radio_nutrient[0]){
                      if (this.props.nutrient.nutrient!=undefined && this.props.nutrient.nutrient!=""){
                        if (this.extraReturnTrue.call(this)){
                            console.log("SUCCESS FINAL");
                           this.setState({final_success:true})
                        }
                        else{
                          console.log("failed extra");
                           // failed extra
                        }

                      }
                      else{
                        console.log("failed inner nutrient");
                        //failed inner nutrient
                      }

                  }
                  else{
                      //radio nutrient is unknown or false, continue to Extra
                      if (this.extraReturnTrue.call(this)){
                        console.log("SUCCESS FINAL");
                         this.setState({final_success:true})
                      }
                      else{
                        console.log("failed extra");
                        //failed extra
                      }
                  }

                }

                else{
                  console.log("failed nutrient radio_nutrient");
                  //failed nutrient radio_nutrient end
                }
            }
      }
      else{
        console.log("failed other radio_other");
        //failed other radio_other
      }
    }
      else{
        console.log("failed inner sides");
        //failed inner sides
      }
    }
    else{
      //radio sides is unknown or false, continue to other drugs
        if (this.props.other.radio_other!=undefined){
          if (this.props.other.radio_other[0]){
              if (this.props.other.otherdrug!=undefined && this.props.other.otherdrug!=""){
                  if (this.props.nutrient.radio_nutrient!=undefined){
                    if (this.props.nutrient.radio_nutrient[0]){
                      if (this.props.nutrient.nutrient!=undefined && this.props.nutrient.nutrient!=""){
                        if (this.extraReturnTrue.call(this)){
                          console.log("SUCCESS FINAL");
                           this.setState({final_success:true})
                        }
                        else{
                          console.log("failed extra");
                           // failed extra
                        }
                      }
                      else{
                        console.log("failed inner nutrient");
                        //failed inner nutrient
                      }

                    }
                    else{
                        //radio nutrient is unknown or false, continue to Extra
                        if (this.extraReturnTrue.call(this)){
                          console.log("SUCCESS FINAL");
                           this.setState({final_success:true})
                        }
                        else{
                          console.log("failed extra");
                          //failed extra
                        }
                    }
                  }
                  else{
                    console.log("failed nutrient radio nutrient");
                    //failed nutrient radio_nutrient
                  }

              }
              else{
                console.log("failed inner other");
                 //failed inner other
              }
          }
          else{
              //radio other is unknown or false, continue to nutrient_radio DONE!!!
              if (this.props.nutrient.radio_nutrient!=undefined){
                if (this.props.nutrient.radio_nutrient[0]){
                    if (this.props.nutrient.nutrient!=undefined && this.props.nutrient.nutrient!=""){
                      if (this.extraReturnTrue.call(this)){
                        console.log("SUCCESS FINAL");
                        this.setState({final_success:true})
                      }
                      else{
                        console.log("failed extra");
                         // failed extra
                      }

                    }
                    else{
                      console.log("failed inner nutrient");
                      //failed inner nutrient
                    }

                }
                else{
                    //radio nutrient is unknown or false, continue to Extra DONE!!!
                    if (this.extraReturnTrue.call(this)){
                      console.log("SUCCESS FINAL");
                       this.setState({final_success:true})
                    }
                    else{
                      console.log("failed extra");
                      console.log("exercise: "+this.props.extra.exercise)
                      console.log("smoke: "+this.props.extra.smoke)
                      console.log("alcohol: "+this.props.alcohol)
                      console.log("obesse: "+this.props.extra.obesse)
                      console.log("eat: "+this.props.extra.eat)
                      console.log("stress: "+this.props.extra.stress)
                      console.log("anxiety: "+this.props.extra.anxiety)
                      console.log("familly: "+this.props.extra.familly)
                      console.log("gluten: "+this.props.extra.gluten)
                      console.log("lactose: "+this.props.extra.lactose)
                      console.log("acid: "+this.props.extra.acid)
                      console.log("overall: "+this.props.extra.overall)
                      console.log("good: "+this.props.extra.good)
                      console.log("pylori: "+this.props.extra.pylori)
                    }
                }

              }

              else{
                console.log("failed nutrient radio nutrient");
                //failed nutrient radio_nutrient end
              }
          }
        }
        else{
          console.log("failed other radio_other");
          //failed other radio_other
        }



     }
  }
  else{
    console.log("failed radio_side");
    //fail sides radio_side
  }

}
popUpBox(){

 if (this.state.success && this.state.add_drug_three===false){
  return(
  <div className="modal_main">
    <div className="modal_sub_pop">
      <span className="close_pop" onClick={()=>this.setState({success:false})}>&times;</span>
      <p className="center">Do you want to add another PPI drug that you are using?<br/>If not, then just click Proceed to continue</p>
      <div className="center">
        <button type="button" className="btn btn-success btn_modal_success" onClick={()=>this.setState({new_success:true,success:false,warning_clicked:false,proceed_main_clicked:true})}>Proceed</button>
        <button type="button" className="btn btn-danger"  onClick={()=>this.setState({success:false})}>Add another drug</button>
      </div>
    </div>
  </div>);
}
  else{
    {
       console.log("entered where it should")
      if (this.state.success){console.log("entered the success");this.setState({new_success:true,success:false})}
  }
}
}
reverseToPrevious(){
  console.log("IS THIS TRUE: "+this.state.warning_clicked)
  return(
  <div className="modal_main">
    <div className="modal_sub_pop">
      <span className="close_pop" onClick={()=>this.setState({warning_clicked:false})}>&times;</span>
      <p className="center">Do you want to edit something in the previous section?</p>
      <div className="center">
        <button type="button" className="btn btn-success btn_modal_success" onClick={()=>this.setState({new_success:false,warning_clicked:true,proceed_main_clicked:false})}>YES</button>
        <button type="button" className="btn btn-danger"  onClick={()=>this.setState({warning_clicked:false})}>NO</button>
      </div>
    </div>
  </div>);
}
  successAdd(){
    console.log("scrolling")
    return(

      <div className="bordering" id="target_row">
        {console.log("waring is: "+this.state.warning_clicked)}
        {this.state.warning_clicked?this.reverseToPrevious.call(this):""}
        <Button id="reverse" className="btn btn-warning" val="Edit previous section" onClick={()=>this.setState({warning_clicked:true})}></Button>
        <Sides brand1={this.props.drug.brand1!=undefined?this.props.drug.brand1.value:null} brand2={this.props.drug.brand2!=undefined?this.props.drug.brand2.value:null}
          brand3={this.props.drug.brand3!=undefined?this.props.drug.brand3.value:null} brand4={this.props.drug.brand4!=undefined?this.props.drug.brand4.value:null}
          generic1={this.props.drug.generic1!=undefined?this.props.drug.generic1.value:null} generic2={this.props.drug.generic2!=undefined?this.props.drug.generic2.value:null} generic3={this.props.drug.generic3!=undefined?this.props.drug.generic3.value:null}
          generic4={this.props.drug.generic4!=undefined?this.props.drug.generic4.value:null}
          radio={((this.props.sides.radio_side==undefined || this.props.sides.radio_side.length==0) && this.state.clicked2)?" redness_radio":""}
          input_one={((this.props.sides.side_effect_general==undefined || this.props.sides.side_effect_general.length==0) && this.state.clicked2)?" redness_input":""}
          input_error1={((this.props.sides.effect1==undefined || this.props.sides.effect1.length==0) && this.state.clicked2)?" redness_input":""}
          input_error2={((this.props.sides.effect2==undefined || this.props.sides.effect2.length==0) && this.state.clicked2)?" redness_input":""}
          input_error3={((this.props.sides.effect3==undefined || this.props.sides.effect3.length==0) && this.state.clicked2)?" redness_input":""}
          input_error4={((this.props.sides.effect4==undefined || this.props.sides.effect4.length==0) && this.state.clicked2)?" redness_input":""}

        ></Sides>
        <hr/>
        <Other   input_one={((this.props.other.otherdrug==undefined || this.props.other.otherdrug.length==0) && this.state.clicked2)?" redness_input":""}
          radio={((this.props.other.radio_other==undefined || this.props.other.radio_other.length==0) && this.state.clicked2)?" redness_radio":""}
        ></Other>
        <hr/>
        <Nutrient input_one={((this.props.nutrient.nutrient==undefined || this.props.nutrient.nutrient.length==0) && this.state.clicked2)?" redness_input":""}
          radio={((this.props.nutrient.radio_nutrient==undefined || this.props.nutrient.radio_nutrient.length==0) && this.state.clicked2)?" redness_radio":""}

        ></Nutrient>
        <hr/>
        <Natural input_one={((this.props.natural.naturalhelped==undefined || this.props.natural.naturalhelped.length==0) && this.state.clicked2)?"":""}
          input_two={((this.props.natural.naturalnothelped==undefined || this.props.natural.naturalnothelped.length==0) && this.state.clicked2)?"":""}

        ></Natural>
        <hr/>
        <Extra exercise={((this.props.extra.exercise==undefined || this.props.extra.exercise.length==0) && this.state.clicked2)?" redness_radio":""}
          smoke={((this.props.extra.smoke==undefined || this.props.extra.smoke.length==0) && this.state.clicked2)?" redness_radio":""}
          alcohol={((this.props.extra.alcohol==undefined || this.props.extra.alcohol.length==0) && this.state.clicked2)?" redness_radio":""}
          obesse={((this.props.extra.obesse==undefined || this.props.extra.obesse.length==0) && this.state.clicked2)?" redness_radio":""}
          eat={((this.props.extra.eat==undefined || this.props.extra.eat.length==0) && this.state.clicked2)?" redness_radio":""}
          stress={((this.props.extra.stress==undefined || this.props.extra.stress.length==0) && this.state.clicked2)?" redness_radio":""}
          familly={((this.props.extra.familly==undefined || this.props.extra.familly.length==0) && this.state.clicked2)?" redness_radio":""}
          anxiety={((this.props.extra.anxiety==undefined || this.props.extra.anxiety.length==0) && this.state.clicked2)?" redness_radio":""}
          gluten={((this.props.extra.gluten==undefined || this.props.extra.gluten.length==0) && this.state.clicked2)?" redness_radio":""}
          lactose={((this.props.extra.lactose==undefined || this.props.extra.lactose.length==0) && this.state.clicked2)?" redness_radio":""}
          acid={((this.props.extra.acid==undefined || this.props.extra.acid.length==0) && this.state.clicked2)?" redness_radio":""}
          overall={((this.props.extra.overall==undefined || this.props.extra.overall.length==0) && this.state.clicked2)?" redness_radio":""}
          good={((this.props.extra.good==undefined || this.props.extra.good.length==0) && this.state.clicked2)?"":""}
          arebound={((this.props.extra.good==undefined || this.props.extra.good.length==0) && this.state.clicked2)?"":""}
          pylori={((this.props.extra.pylori==undefined || this.props.extra.pylori.length==0) && this.state.clicked2)?" redness_radio":""}

        >

        </Extra>
        <Success class="btn-success mg_top maxpercent" val="Submit" style="width:100%" onClick={this.finalConfirm.bind(this)}></Success>
      </div>);
  }
  addComponent(){

    if (this.state.add_drug_three){
     this.setState({add_drug_four:true})
    }
    else if (this.state.add_drug_two){
      this.setState({add_drug_three:true});
    }
    else if (this.state.add_drug_one){
      this.setState({add_drug_two:true});
    }
    else{
      this.setState({add_drug_one:true})
    }
  }
  removeComponent(){
    if (this.state.add_drug_four){
      this.props.drug.generic4=undefined
      this.props.drug.brand4=undefined
      this.props.drug.duration4=undefined
      this.props.drug.dosage4=undefined
      this.props.drug.daily4=undefined
      this.props.drug.globaltime4=undefined
      this.setState({add_drug_four:false, add_drug_three:false});
    }
    else if (this.state.add_drug_three){
      this.props.drug.generic4=undefined
      this.props.drug.brand4=undefined
      this.props.drug.duration4=undefined
      this.props.drug.dosage4=undefined
      this.props.drug.daily4=undefined
      this.props.drug.globaltime4=undefined
      this.setState({add_drug_three:false});

    }
    else if (this.state.add_drug_two){
      this.props.drug.generic3=undefined
      this.props.drug.brand3=undefined
      this.props.drug.duration3=undefined
      this.props.drug.dosage3=undefined
      this.props.drug.daily3=undefined
      this.props.drug.globaltime3=undefined
      this.setState({add_drug_two:false});
    }
    else if (this.state.add_drug_one){
      this.props.drug.generic2=undefined;
      this.props.drug.brand2=undefined;
      this.props.drug.duration2=undefined;
      this.props.drug.dosage2=undefined;
      this.props.drug.daily2=undefined;
      this.props.drug.globaltime2=undefined
      this.setState({add_drug_one:false});
    }
  }

  render(){

  var options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' }
  ];
    return(
      <div className="container">
        <Navbar></Navbar>
        <div className="lang">
          <select name="language" className={this.props.error_height} onChange={(e)=>{this.props.dispatch({type:"language",payload:e.target.value})}} defaultValue="">
            <option value="" style={{display:'none'}} defaultValue="selected" label="choose language"></option>
            <option value="en">english</option>
            <option value="fr">french</option>
            <option value="sp">spanish</option>
            <option value="mt">german</option>
            <option value="mt">croatian</option>
          </select>
        </div>

        <About/>
        <div className={this.state.new_success?"disable_upper_container":""}>
          <Basic error_weight={((this.props.basic.weight_select==undefined || this.props.basic.weight_select.length==0) && this.state.clicked)?" redness_input":""}
            error_height={((this.props.basic.height_select==undefined || this.props.basic.height_select.length==0) && this.state.clicked)?" redness_input":""}
            age={user.isValidInteger(this.props.basic.age,0,110)} height={user.isValidInteger(this.props.basic.height,0,300)} weight={user.isValidInteger(this.props.basic.weight,0,1000)}
            race={((this.props.basic.race==undefined || this.props.basic.race.length==0) && this.state.clicked)?" redness_radio":""}
            gender={((this.props.basic.gender==undefined || this.props.basic.gender.length==0) && this.state.clicked)?" redness_radio":""}
            error_height_input={((this.props.basic.height==undefined || this.props.basic.height.length==0) && this.state.clicked)?" redness_radio":""}
            error_weight_input={((this.props.basic.weight==undefined || this.props.basic.weight.length==0) && this.state.clicked)?" redness_radio":""}
            error_age_input={((this.props.basic.age==undefined || this.props.basic.age==0) && this.state.clicked)?" redness_radio":""}
          ></Basic>
          <hr/>
          <Condition class_modification={this.state.mgcondition} error_gastro={((this.props.condition.gastro==undefined || this.props.condition.gastro.length==0) && this.state.clicked)?" redness_input":""}
            error_other={((this.props.condition.other==undefined || this.props.condition.other.length==0) && this.state.clicked)?"":""}
            error_ppi={((this.props.condition.ppi==undefined || this.props.condition.ppi.length==0) && this.state.clicked)?"":""}
          ></Condition>
          <hr/>
          <div className="row"><h3>Drugs <span className="ppi_only">(PPI only)</span></h3></div>
          <Drug id="first" clicked={this.state.success} validation={user.isValidInteger(this.props.drug.duration1,0,300)}
            generic1={((this.props.drug.generic1==undefined || this.props.drug.generic1.length==0) && this.state.clicked)?" redness_input":""}
            brand1={((this.props.drug.brand1==undefined || this.props.drug.brand1.length==0) && this.state.clicked)?"":""}
            brand12={((this.props.drug.brand1==undefined || this.props.drug.brand1.length==0) && this.state.clicked)?"":""}
            dosage1={((this.props.drug.dosage1==undefined || this.props.drug.dosage1.length==0) && this.state.clicked)?" redness_input":""}
            globaltime1={((this.props.drug.globaltime1==undefined || this.props.drug.globaltime1.length==0) && this.state.clicked)?" redness_radio":""}
            daily1={((this.props.drug.daily1==undefined || this.props.drug.daily1.length==0) && this.state.clicked)?" redness_radio":""}
            duration1={((this.props.drug.duration1==undefined || this.props.drug.duration1==0) && this.state.clicked)?" redness_radio":""}
          ></Drug>

          {this.state.add_drug_one?
            <Drug id="second" clicked={this.state.success} validation={user.isValidInteger(this.props.drug.duration2,0,400)}
              generic2={((this.props.drug.generic2==undefined || this.props.drug.generic2.length==0) && this.state.clicked)?" redness_input":""}
              brand2={((this.props.drug.brand2==undefined || this.props.drug.brand2.length==0) && this.state.clicked)?"":""}
              brand22={((this.props.drug.brand2==undefined || this.props.drug.brand2.length==0) && this.state.clicked)?"":""}
              dosage2={((this.props.drug.dosage2==undefined || this.props.drug.dosage2.length==0) && this.state.clicked)?" redness_input":""}
              globaltime2={((this.props.drug.globaltime2==undefined || this.props.drug.globaltime2.length==0) && this.state.clicked)?" redness_radio":""}
              daily2={((this.props.drug.daily2==undefined || this.props.drug.daily2.length==0) && this.state.clicked)?" redness_radio":""}
              duration2={((this.props.drug.duration2==undefined || this.props.drug.duration2==0) && this.state.clicked)?" redness_radio":""}
            ></Drug>:<span></span>}
          {this.state.add_drug_two?
            <Drug id="third" clicked={this.state.success} validation={user.isValidInteger(this.props.drug.duration3,0,400)}
              generic3={((this.props.drug.generic3==undefined || this.props.drug.generic3.length==0) && this.state.clicked)?" redness_input":""}
              brand3={((this.props.drug.brand3==undefined || this.props.drug.brand3.length==0) && this.state.clicked)?"":""}
              brand32={((this.props.drug.brand3==undefined || this.props.drug.brand3.length==0) && this.state.clicked)?"":""}
              dosage3={((this.props.drug.dosage3==undefined || this.props.drug.dosage3.length==0) && this.state.clicked)?" redness_input":""}
              globaltime3={((this.props.drug.globaltime3==undefined || this.props.drug.globaltime3.length==0) && this.state.clicked)?" redness_radio":""}
              daily3={((this.props.drug.daily3==undefined || this.props.drug.daily3.length==0) && this.state.clicked)?" redness_radio":""}
              duration3={((this.props.drug.duration3==undefined || this.props.drug.duration3==0) && this.state.clicked)?" redness_radio":""}
            ></Drug>:<span></span>}
          {this.state.add_drug_three?
            <Drug id="fourth" clicked={this.state.success} validation={user.isValidInteger(this.props.drug.duration4,0,400)}
              generic4={((this.props.drug.generic4==undefined || this.props.drug.generic4.length==0) && this.state.clicked)?" redness_input":""}
              brand4={((this.props.drug.brand4==undefined || this.props.drug.brand4.length==0) && this.state.clicked)?"":""}
              brand42={((this.props.drug.brand4==undefined || this.props.drug.brand4.length==0) && this.state.clicked)?"":""}
              dosage4={((this.props.drug.dosage4==undefined || this.props.drug.dosage4.length==0) && this.state.clicked)?" redness_input":""}
              globaltime4={((this.props.drug.globaltime4==undefined || this.props.drug.globaltime4.length==0) && this.state.clicked)?" redness_radio":""}
              daily4={((this.props.drug.daily4==undefined || this.props.drug.daily4.length==0) && this.state.clicked)?" redness_radio":""}
              duration4={((this.props.drug.duration4==undefined || this.props.drug.duration4==0) && this.state.clicked)?" redness_radio":""}></Drug>:<span></span>
          }
          <p>{this.state.add_drug_four?"Maximum reached":""}</p>
          <div className="row">
            <Button class="btn-default" val="+" onClick={this.addComponent.bind(this)}></Button>
            {this.state.add_drug_one? <Button class="btn-default" val="-" onClick={this.removeComponent.bind(this)}></Button>:<span></span>}

            <Success class="btn-primary mg_top maxpercent" val="Proceed" style="width:100%" onClick={this.successConfirm.bind(this)} disabled={this.state.proceed_main_clicked}></Success>
          </div>
        </div>
        {this.state.success?this.popUpBox():<span></span>}
        {this.state.new_success?this.successAdd():<span></span>}
        {this.state.final_success?this.sendDataToDatabase():<span></span>}
        <Navfooter/>
      </div>
   );
  }
}
