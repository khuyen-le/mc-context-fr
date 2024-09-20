/* var preamble_id = `Meet Blue Monster and Red Monster. 
                   They love collecting things and spend their days 
                   searching for stuff to add to their collections.`

var preamble_fn = `Meet Blue Monster and Red Monster. 
                   They are moving into their new houses, 
                   and are unpacking their belongings.` */

//var preamble = `Meet Manchot and his friends, Blue Monster and Red Monster.`

// var prompt_id = "Here's what the monsters found for their collections."
// var prompt_fn = "Here's what the monsters unpack for their houses."
var preamble_neutral = "Regardez ce que les monstres ont!"
var preamble_neutral_audio = "audio/preamble_neutral.mp3"

var right_or_wrong = "audio/right_or_wrong.mp3";

var RIGHT = 0
var WRONG = 1 

var practice_trials = shuffle([
  {
    intro_slide: "img/intro_neutral_blue_left.png",
    trial_img: "img/practice_1.png",
    prompt: "audio/practice_1_prompt.mp3",
    trial_penguin_talk: "img/practice_1_talk.png",
    trial_audio: "audio/practice_1.mp3",
    trial_penguin: "audio/practice_1_ans.mp3",
    correct_resp: RIGHT, // just hardcoded
    prompt_text: "Qui a un sac à dos?", 
    trial_penguin_text: "<i>Manchot:</i> Monstre Bleu a un sac à dos.",
    trial_type: "practice", 
    trial_id: "prac_1",
  }, 
  {
    intro_slide: "img/intro_neutral_red_left.png",
    trial_img: "img/practice_2.png",
    prompt: "audio/practice_2_prompt.mp3",
    trial_penguin_talk: "img/practice_2_talk.png",
    trial_audio: "audio/practice_2.mp3",
    trial_penguin: "audio/practice_2_ans.mp3",
    correct_resp: WRONG,
    prompt_text: "Qui a une fleur?", 
    trial_penguin_text: "<i>Manchot:</i> Monstre Rouge a une fleur.",
    trial_type: "practice", 
    trial_id: "prac_2"
  }, 
])

  // making sure that the counterbalancing is within mass items and within count items as well!
  //var trial_item_names = shuffle(["furniture", "clothing", "cutlery", "sports", "luggage", "jewelry"])
                      //.concat(shuffle(["tools", "instruments", "utensils", "accessories", "vehicles", "weapons"]));

  var trials = shuffle([
    {
      trial_item: "tools", 
      trial_item_fr: "outils",
      trial_goal: `<i>Manchot:</i> Je veux rénover ma maison et j'ai besoin d'outils. 
                    Monstre Bleu et Monstre Rouge veulent me donner leurs outils.`, 
    }, 
    {
      trial_item: "instruments", 
      trial_item_fr: "instruments",
      trial_goal: `<i>Manchot:</i> Je veux jouer de la musique et j'ai besoin d'instruments. 
                  Monstre Bleu et Monstre Rouge veulent me donner leurs instruments.`
    }, 
    {
      trial_item: "utensils", 
      trial_item_fr: "ustensiles",
      trial_goal: `<i>Manchot:</i> J'organise un dîner et j'ai besoin d'ustensiles. 
                  Monstre Bleu et Monstre Rouge veulent me donner leurs ustensiles.`
    }, 
    {
      trial_item: "vehicles", 
      trial_item_fr: "véhicules",
      trial_goal: `<i>Manchot:</i> Je suis responsable du transport de fournitures pour un grand événement, et j'ai besoin de véhicules. 
                  Monstre Bleu et Monstre Rouge veulent me donner leurs véhicules.`
    }, 
    {
      trial_item: "weapons", 
      trial_item_fr: "armes",
      trial_goal: `<i>Manchot:</i> Je suis responsable de protéger des artefacts précieux et j'ai besoin d'armes. 
                  Monstre Bleu et Monstre Rouge veulent me donner leurs armes.`
    }, 
    {
      trial_item: "accessories", 
      trial_item_fr: "accessoires",
      trial_goal: `<i>Manchot:</i> Je vais à un gala et j'ai besoin d'accessoires. 
                  Monstre Bleu et Monstre Rouge veulent me donner leurs accessoires.`
    }])
    .concat(shuffle([
    {
      trial_item: "furniture", 
      trial_item_fr: "meubles",
      trial_goal: `<i>Manchot:</i> Je viens d'emménager dans une nouvelle maison et j'ai besoin de meubles pour l'aménager. 
                  Monstre Bleu et Monstre Rouge veulent me donner leurs meubles.`, 
    }, 
    {
      trial_item: "clothing", 
      trial_item_fr: "vêtements",
      trial_goal: `<i>Manchot:</i> J'ai perdu mon sac dans l'avion et j'ai besoin de vêtements. 
                  Monstre Bleu et Monstre Rouge veulent me donner leurs vêtements.`
    }, 
    {
      trial_item: "cutlery", 
      trial_item_fr: "couverts",
      trial_goal: `<i>Manchot:</i> J'organise un dîner et j'ai besoin de couverts. 
                  Monstre Bleu et Monstre Rouge veulent me donner leurs couverts.`
    }, 
    {
      trial_item: "sports", 
      trial_item_fr: "équipements sportifs",
      trial_goal: `<i>Manchot:</i> J'organise un programme extrascolaire et j'ai besoin d'équipements sportifs. 
                  Monstre Bleu et Monstre Rouge veulent me donner leurs équipements sportifs.`
    }, 
    {
      trial_item: "luggage", 
      trial_item_fr: "bagages",
      trial_goal: `<i>Manchot:</i> Je pars en vacances et j'ai besoin de bagages. 
                  Monstre Bleu et Monstre Rouge veulent me donner leurs bagages.`
    }, 
    {
      trial_item: "jewelry", 
      trial_item_fr: "bijoux",
      trial_goal: `<i>Manchot:</i> Je vais à un gala et j'ai besoin de bijoux. 
                  Monstre Bleu et Monstre Rouge veulent me donner leurs bijoux.`
    }]))

    /*
  var trials = []
  for (item of trial_item_names) {
    let item_index = trials_unshuffled.findIndex(
      (temp) => temp["trial_item"] == item
    )
    trials.push(trials_unshuffled[item_index])
  }
    */

  var trial_vowel = ["sports", "tools", "instruments", "utensils", "accessories", "weapons"]

  var variety_ans = shuffle(["yes", "yes", "yes", "no", "no", "no"])
                      .concat(shuffle(["yes", "yes", "yes", "no", "no", "no"]));

  // response is counterbalanced between penguin saying the red or the blue monster has more.
  var response_monsters = shuffle(["red", "red", "red", "blue", "blue", "blue"])
                            .concat(shuffle(["red", "red", "red", "blue", "blue", "blue"]));

  var crit_trials = [];

  for (let i = 0; i < trials.length; i++) {
    // Runs 12 times
    //let trial_item = trial_items[i];
    let trial_item = trials[i].trial_item;
    let trial_item_fr = trials[i].trial_item_fr;
    let trial_goal_text = trials[i].trial_goal;
    let trial_variety_ans = variety_ans[i];
    let response_monster = response_monsters[i];
    let trial_variety_monster = "";
    if (trial_variety_ans == "yes") { // correct response
      if (response_monster == "blue") { 
        trial_variety_monster = "blue"
      } else {
        trial_variety_monster = "red"
      }
    } else {
      if (response_monster == "blue") {
        trial_variety_monster = "red"
      } else {
        trial_variety_monster = "blue"
      }
    }

    function get_response_text(response_monster, trial_item, trial_item_fr) {
      //trial_item = trial_item == "sports" ? "sports equipment" : trial_item // don't need this for french
      let text = "";
      let response_monster_proper = response_monster == "blue" ? "Monstre Bleu" : "Monstre Rouge";
      let other_monster = response_monster == "blue" ? "Monstre Rouge" : "Monstre Bleu";
      if (trial_vowel.includes(trial_item)){
        text = "<i>Manchot:</i> " + response_monster_proper + " a plus d'" + trial_item_fr + " que " + other_monster + ".";  
      } else {
        text = "<i>Manchot:</i> " + response_monster_proper + " a plus de " + trial_item_fr + " que " + other_monster + ".";  
      }
      return text; 
    }

    function get_intro_slide_fn(trial_item) {
      if (trial_item == "furniture" || trial_item == "sports" || trial_item == "jewelry" ||
        trial_item == "tools" || trial_item == "accessories" || trial_item == "weapons") {
          return "img/intro_talk_blue_left.png"
        } else {
          return "img/intro_talk_red_left.png"
        }
    }

    function get_intro_slide_id(trial_item) {
      if (trial_item == "furniture" || trial_item == "sports" || trial_item == "jewelry" ||
        trial_item == "tools" || trial_item == "accessories" || trial_item == "weapons") {
          return "img/intro_neutral_blue_left.png"
        } else {
          return "img/intro_neutral_red_left.png"
        }
    }

    function get_trial_text_id(trial_item_fr) {
      //trial_item = trial_item == "sports" ? "sports equipment" : trial_item;
      let text = "Monstre Bleu et Monstre Rouge ont des " + trial_item_fr + ".<br>";
      return text;
    }

    function get_prompt_text(trial_item, trial_item_fr) {
      let text = ""; 
      if (trial_vowel.includes(trial_item)){
        text = "Qui a plus d'" + trial_item_fr + "?";  
      } else {
        text = "Qui a plus de " + trial_item_fr + "?";  
      }
      return text; 
    }
    
    let trial_obj = {
      trial_text_fn: trial_goal_text + "<br>",
      trial_text_id: get_trial_text_id(trial_item),
      //trial_goal_penguin: "audio/" + trial_item + "_penguin_goal.mp3",
      intro_audio_fn: "audio/" + trial_item + "_penguin_goal.mp3",
      intro_audio_id: "audio/" + trial_item + "_intro.mp3",
      intro_slide_fn: get_intro_slide_fn(trial_item), 
      intro_slide_id: get_intro_slide_id(trial_item),
      // who has more furniture?
      prompt: "audio/" + trial_item + "_prompt.mp3",
      prompt_text: get_prompt_text(trial_item, trial_item_fr),
      trial_img: "img/" + trial_item + "_" + trial_variety_monster + ".png",
      trial_penguin_talk: "img/" + trial_item + "_" + trial_variety_monster + "_talk.png",
      // blue monster has this and that
      trial_audio: "audio/" + trial_item + "_" + trial_variety_monster + ".mp3",
      // Penguin says blue monster has more
      trial_penguin: "audio/" + trial_item + "_penguin_" + response_monster + ".mp3",
      trial_penguin_text: get_response_text(response_monster, trial_item, trial_item_fr),
      trial_type: "critical",    
      trial_id: "crit_" + trial_item,
      trial_item: trial_item, 
      trial_variety_monster: trial_variety_monster, //trial_monster is always the one with 'more' variety
      response_monster: response_monster,
      coded_variety_ans: trial_variety_ans // "yes" or "no", will need to recheck
      // if trial_variety_monster = response_monster --> variety_ans = 1
    }
    crit_trials.push(trial_obj);
  }
  crit_trials = shuffle(crit_trials);

  var cutlery_index = crit_trials.findIndex(
    (item) => item["trial_item"] == "cutlery"
  )
  var utensils_index = crit_trials.findIndex(
    (item) => item["trial_item"] == "utensils"
  )

  var jewelry_index = crit_trials.findIndex(
    (item) => item["trial_item"] == "jewelry"
  )
  var accessories_index = crit_trials.findIndex(
    (item) => item["trial_item"] == "accessories"
  )

  while(Math.abs(cutlery_index - utensils_index) < 3 || Math.abs(jewelry_index - accessories_index) < 3) {
    // at least 2 items in between these

    crit_trials = shuffle(crit_trials);

    var cutlery_index = crit_trials.findIndex(
      (item) => item["trial_item"] == "cutlery"
    )
    var utensils_index = crit_trials.findIndex(
      (item) => item["trial_item"] == "utensils"
    )
  
    var jewelry_index = crit_trials.findIndex(
      (item) => item["trial_item"] == "jewelry"
    )
    var accessories_index = crit_trials.findIndex(
      (item) => item["trial_item"] == "accessories"
    )
  }

  var att_trials = shuffle([
    {
      trial_text_fn: preamble_neutral, // Look what the monsters have! // use this for a  'neutral' preamble.
      trial_text_id: preamble_neutral,
      intro_audio_fn: preamble_neutral_audio, // look what the monsters have!
      intro_audio_id: preamble_neutral_audio, // look what the monsters have!
      intro_slide_fn:"img/intro_neutral_blue_left.png",
      intro_slide_id: "img/intro_neutral_blue_left.png",
      trial_img: "img/att_1.png",
      prompt: "audio/att_1_prompt.mp3",
      trial_penguin_talk: "img/att_1_talk.png",
      trial_audio: "audio/att_1.mp3", 
      trial_penguin: "audio/att_1_ans.mp3",
      trial_prompt_att: "audio/att_1_check_prompt.mp3",
      prompt_text: "Qui a une clé?", 
      trial_penguin_text: "<i>Manchot:</i> Monstre Bleu a une clé.",
      prompt_att: "Ceci est une question d'évaluation du niveau d'attention. Sélectionnez 'Manchot a raison.'",
      correct_resp: RIGHT,  
      trial_type: "attention",
      trial_id: "att_1", 
      intro_slide: "img/att_1.png" // for attention trials, the intro slide is the same as the image.
      //intro_slide: "img/intro_penguin_blue_left.png"
    }, 
    {
      trial_text_fn: preamble_neutral, // Look what the monsters have! // use this for a  'neutral' preamble.
      trial_text_id: preamble_neutral,
      intro_audio_fn: preamble_neutral_audio, // look what the monsters have!
      intro_audio_id: preamble_neutral_audio, // look what the monsters have!
      intro_slide_id: "img/intro_neutral_red_left.png",
      intro_slide_fn: "img/intro_neutral_red_left.png",
      trial_img: "img/att_2.png",
      prompt: "audio/att_2_prompt.mp3",
      trial_penguin_talk: "img/att_2_talk.png",
      trial_audio: "audio/att_2.mp3",
      trial_penguin: "audio/att_2_ans.mp3",
      trial_prompt_att: "audio/att_2_check_prompt.mp3",
      prompt_text: "Qui a un crayon?", 
      trial_penguin_text: "<i>Manchot:</i> Monstre Rouge a un crayon.",
      prompt_att: "Ceci est une question d'évaluation du niveau d'attention. Sélectionnez 'Manchot a tort.'",
      correct_resp: WRONG,  
      trial_type: "attention", 
      trial_id: "att_2",
      intro_slide: "img/att_2.png",
      //intro_slide: "img/intro_penguin_red_left.png"
    },  
  ])
  

  var compre_text = [
    {
      prompt_text: "Qui a un seau?", 
      trial_penguin_text: "<i>Manchot:</i> Monstre Rouge a un seau."
    }, 

    {
      prompt_text: "Qui a un parapluie?", 
      trial_penguin_text: "<i>Manchot:</i> Monstre Bleu a un parapluie."
    },

    {
      prompt_text: "Qui a une lanterne?", 
      trial_penguin_text: "<i>Manchot:</i> Monstre Bleu a une lanterne."
    }, 

    {
      prompt_text: "Qui a une bouteille?", 
      trial_penguin_text: "<i>Manchot:</i> Monstre Rouge a une bouteille."
    }, 
  ]

  var compre_trials = [];
  for (i of [1, 2, 3, 4]) {
  //for (i of [1, 3]){
    let compre_trial_obj = {
      trial_text_fn: preamble_neutral, // Look what the monsters have! // use this for a  'neutral' preamble.
      trial_text_id: preamble_neutral, // Look what the monsters have! // use this for a  'neutral' preamble.
      intro_audio_fn: preamble_neutral_audio, // look what the monsters have!
      intro_audio_id: preamble_neutral_audio, // look what the monsters have!
      prompt: "audio/compre_" + i + "_prompt.mp3",
      trial_img: "img/compre_" + i + ".png",
      trial_penguin_talk: "img/compre_" + i + "_talk.png",
      trial_audio: "audio/compre_" + i + ".mp3",
      trial_penguin: "audio/compre_" + i + "_ans.mp3",
      prompt_text: compre_text[i-1].prompt_text,
      trial_penguin_text: compre_text[i-1].trial_penguin_text,
      correct_resp: (i == 1 || i == 2) ? RIGHT : WRONG,
      trial_type: "compre", 
      trial_id: "compre_" + i,
      //intro_slide: "img/compre_" + i + ".png", // for compre trials, the intro slide is the same as the image.
      intro_slide_id: (i == 1 || i == 3) ? "img/intro_neutral_blue_left.png" : "img/intro_neutral_red_left.png",
      intro_slide_fn: (i == 1 || i == 3) ? "img/intro_neutral_blue_left.png" : "img/intro_neutral_red_left.png",
    }
    compre_trials.push(compre_trial_obj);
  } 
  compre_trials = shuffle(compre_trials);
  
  //var all_trials = crit_trials.concat(compre_trials);
  var all_trials = crit_trials;
  all_trials.splice(getRandomInt(9,11), 0, compre_trials[0]);
  all_trials.splice(getRandomInt(6,8), 0, compre_trials[1]);
  all_trials.splice(getRandomInt(3,5), 0, compre_trials[2]);
  all_trials.splice(getRandomInt(0,2), 0, compre_trials[3]);
  
  //console.log(all_trials); // actually just compre and crit trials


// define shuffle function
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

//get random int
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}