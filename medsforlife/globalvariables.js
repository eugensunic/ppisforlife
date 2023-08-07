var drug_generic = ['1unknown','2Esomeprazole', '3Pantoprazole', '4Lansoprazole', '5Dexlansoprazole',
          '6Rabeprazole', '7Ilaprazole', '8Tenatoprazole', '9Timoprazole', '10Picoprazole','11Omeprazole'];
//---------------------------------------------------------------------------------------------------
var drug_brand = ['1unknown','2Nexium','3Aciphex', '4Controloc', '5Protonix',
 '6Zegerid', '7Kapidex', '8Prevacid', '9Nolpaza','10Dexilant', '11Zoton','12Protium','13Losec','14Prilosec','15Tecta','16Somac','17Pantoloc','18Pariet','19Solox'];
//---------------------------------------------------------------------------------------------------
var side_effects = ['1unknown','2Diarrhea', '3Constipation', '4Abdominal pain', '5Flatulence (gas)',
'6Fever', '7Vomiting', '8Nausea', '9Rash', '10Bloating', '11Nephritis', '12Chronic kidney disease', '13Drowsiness', '14Dizziness', '15Anxiety', '16Alergy', '17Muscle ache',
'18Back pain', '19Headache', '20Dementia', '21Chest pain', '22Burning pain', '23explicitnone', '24Clostridium difficile infection', '25Tinnitus', '26Hypochloridia', '27Muscle cramp', '28Brain fog', '29Chest tightness', '30Blurred vision', '31Fatigue', '32Burning feet', '33Concetration problem'
, '34Hunger', '35Thirst', '36Muscle twitch','37Confusion','38Light sensitivity', '39Tachycardia', '40Hypertension', '41Anemia', '42Sinusitis', '43Insomnia', '44Bone pain', '45Weakness', '46Pneumonia', '47General pain', '48Weight gain', '49Gallbladder infection', '50Shortness of breath', '51Muscle tremor','52Itching','53Metal taste','54Upper body pain','55Neck pain','56Blisters on body','57Mouth problems','58Runny nose','59Tongue ulcers','60Stomach pain','61Panic attack','62Lightheaded','63Nasal congestion','64Hair fall','65Heart problems','66Double vision','67Lump in throat','68Mood change','69Depression','70Belching','71Hard stomach','72Gas','73Numbness','74Irregular breathing','75Sweating','76Nightmares','77Loose bowels','78Flu like symptoms','79Appetite loss','80Tingling','81Dry eyes', '82Dry mouth','83Swelling','84Joint pain','85Swollen feet','86Feeling unwell','87Breast pain','88Hearing loss','89Hiccups','90Stomach spasms','91urination problems','92Hair thinning','93Sore throat','94Palpitation','95Feeling sick','96Digestion problems','97Swallowing problems','98Halucination','99Liver problem','100Blood in urine','101Teeth problem','102leg pain','103Finger pain','104Jaw pain','105Stomach polyps','106Infection','107Hip pain','108Muscle weakness','109Weight loss','110Memory problem','111Voice problems','112Vision problem','113Skin problem','114Blood sugar','115Thyroid problem','116Lung problem','117Gut problems','118Irregular heart rythm','119Grey hair','120low energy','121Nail problem','122Cramp','123Neuropathy','124Bursitis','125Stomach cramp','126Spine problem','127Elbow pain','128Shoulder pain','129Knee pain','130Stiffness','131Ankle pain','132Cough','133Taste problem','134Tender stomach','135Food sensitivity','136Stomach burn','137Ear buzz','138Ear problems','139Chills','140Chest burn']; 
//---------------------------------------------------------------------------------------------------
var condition = ['1unknown', '2Duodenitis', '3Barrett\'s esophagus', '4Duodenal ulcer', '5Erosive Esophagitis',
'6NERD(nonerosive reflux disease)', '7Stomach ulcer', '8Helicobacter Pylori', '9Indigestion', '10Zollinger-Ellison syndrome', '11Crohn’s Disease',
'12Gastroesophageal reflux disease (GERD)', '13Celiac Disease', '14Irritable Bowel Syndrome', '15Gastritis', '16Candida Overgrowth', '17Anxiety disorder', '18Hiatal Hernia', '19Lactose intolerant', '20Gluten intolerance', '21Laryngopharyngeal reflux (LPR)', '22Diabetes', '23Sinusitis', '24Hypertension', '25Anemia', '26Tachycardia', '27Diarrhea', '28Stomach bloating', '29General Pain', '30Eosinophilic Esophagitis', '31Esophagitis', '32Gastroparesis', '33Chron\s Disease', '34Gallstones', '35Gallbladder disease', '36Pancreatitis', '37Exesccive acid production', '38Arhtritis', '39Asthma', '40Hypersecretion of gastric acid', '41Heart problems', '42Kidney problems', '43Bulimia', '44Stomach problems', '45Ulcer', '46Esophageal ulcer', '47Acid reflux', '48Esophagectomy','49Diverticulosis','50Colitis','51Stomach cancer','52Esophagus cancer','53Thyroid'];

var condition_ppi = ['1unknown', '2Dementia', '3Nephritis', '4CKD', '5Osteoporosis', '6Osteopenia', '7Heart disease', '8Cardiovascular disease', '9Clostridium difficile infection', '10Hypochloridia', '11Small Intestinal Bacterial Overgrowth',
'12Candida Overgrowth', '13Cognitive disorder', '14Food intolerance', '15Leaky gut', '16Anxiety','17pneumonia','18Tinnitus','19Gallstones','20Gallbladder disease','21Pancreatitis','22Depresion','23Arthritis','24Bone fracture','25Kidney failure','26Kidney problem','27Gastroparesis','28Ulcerative colitis','29Colitis','30Kidney stone']; //znaci tu samo idu bolesti koje se asociraju sa tezim posljedicama uzimanja ppi-a

var nutrient = ['1unknown','2Iron', '3Magnesium', '4Zinc', '5Calcium','6Vitamin B12','7Vitamin B', '8Vitamin C', '9Vitamin D','10Vitamin A','11Phospate'];
//---------------------------------------------------------------------------------------------------
var dosage = ['10', '15', '20', '30', '40', '60', '80', '100', '120', '140', '160'];
//---------------------------------------------------------------------------------------------------
var duration = ['0','1','1.5', '2','2.5', '3','3.5', '4','4.5', '5','5.5', '6', '6.5','7','7.5', '8','8.5', '9','9.5', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37','38','39','40','41','42','42','44','45','46','47','48','49'];
//---------------------------------------------------------------------------------------------------
//var otherdrugs = ['1unknown', '2Plavix', '3Brufen', '4Domperidone', '5Motilium', '6Ranitidine', '7Zantac', '8Gaviscon', '9Antibiotics','Sifrol','Lic'];
//---------------------------------------------------------------------------------------------------
var used_drugs = ['1unknown', '2Esomeprazole', '3Pantoprazole', '4Lansoprazole', '5Dexlansoprazole',
          '6Rabeprazole', '7Ilaprazole', '8Tenatoprazole', '9Timoprazole', '10Picoprazole', '11Omeprazole','12Nexium', '13Aciphex', '14Controloc', '15Protonix',
 '16Zegerid', '17Kapidex', '18Prevacid', '19Nolpaza', '20Dexilant', '21Zoton', '22Protium', '23Losec', '24Prilosec']


//variables BEGIN 
var showimage = false;
var flag_duration = 0;
var username;
var date;
var url;

var original_post = "";
var citation_post = "";

var drug_brand_variable = "";
var drug_generic_variable = "";
var age;

var condition_variable = [];
var condition_variable_ppi = [];
var side_effects_variable = [];
var nutrient_deficiency = [];

var dosage_variable;
var duration_treatment = 0;
var duration_checkbox = ""; // day, month, year, notspecified

var daily_checkbox = "";
var hpylori_checkbox = "unknown";


var other_drugs = [];
var other_checkbox = ""; // day, month, year, notspecified
var used_to_take = [];
var natural = [];
var natural_checkbox = [];
var used_to_take_checkbox; // day, month, year, notspecified




//variables END

//variables SUBMIT 
var temp_brand;
var temp_generic;
var temp_age = 0;
var temp_dosage;
var temp_daily;

var temp_duration;
var temp_duration_two;
var temp_post = 0;
var globaltime_data_first;
var globaltime_data_second;

var temp_condition;
var temp_condition_ppi
var temp_side;
var temp_nutrient;
var temp_other;
var temp_used_drugs;
var temp_natural;
var temp_natural_checkbox;

var current_id = null;


//varibales SUBMIT

//sql foreign keys
var databaseid = 0;
var dataid
//boolean flags
var first = false;
var second = false;
var third = false;
var fourth = false;
var fifth = false;
var sixth = false;
var seventh = false;
var eight = false;
var nine = false;
var ten = false;
var interval;
//just once
var brand_counter = 0;
var generic_counter = 0;
var dosage_counter = 0;
var duration_counter = 0;

var age_counter = 0;

var review_flag = false;
var sex_checkbox = "unknown";
