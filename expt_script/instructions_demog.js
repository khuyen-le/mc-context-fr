//CONSENT
//TODO: make specific instruction for this experiment clearer (larger font)
first_page_instruction =
        [`
        <div style="text-align:left;
                  line-height:normal;
                  padding-left:10%;
                  padding-right:10%">
        <p>Cette expérience est menée par des chercheurs du laboratoire de développement et de langage de l'Université de Californie à San Diego. 
        Avant de décider de participer, veuillez lire attentivement les informations suivantes:</p>
        <br>
        <p>Dans cette étude, vous lirez des histoires.
        Après chaque histoire, vous entendrez une description de l'histoire et jugerez si la description est correcte ou incorrecte.
       Cette étude fait partie d'un projet plus vaste qui explore le développement cognitif des enfants. 
       Par conséquent, l'étude utilisera une conception simple qui nous permettra de comparer vos jugements d'adultes à ceux des enfants.</p>
      <p>Si vous avez déjà terminé cette étude ou une étude similaire, veuillez ne pas la reprendre une deuxième fois. 
      Nous prévoyons que l'étude durera environ 17 minutes, y compris le temps nécessaire pour lire les instructions. 
      </p>
      <p>Si vous rencontrez des problèmes pour terminer la tâche, veuillez contacter le chercheur via Prolific.</p>
<br><br><br>
        <div id="legal">
      <p><b><u>Consentement à participer:</u></b></p>
      <p>Cette étude fait partie d'un projet plus vaste qui explore le développement cognitif des enfants. 
      Par conséquent, l'étude utilisera une conception simple qui nous permettra de comparer vos jugements 
      d'adulte à ceux des enfants. Il vous sera demandé de jouer à un jeu qui consiste à formuler des 
      jugements simples sur des images, des mots ou des quantités.</p>
      <p>. En répondant aux questions de cette étude, vous consentez à participer à la recherche menée par 
      le professeur David Barner à l'Université de Californie à San Diego.
      Si vous avez des questions sur l'étude, vous pouvez contacter notre laboratoire à l'adresse
      <a href="mailto:ladlab.ucsd@gmail.com">ladlab.ucsd@gmail.com</a>.
        Vous pouvez également appeler le Human Research Protections Program au (858) 246-4777 
        pour obtenir plus d'informations sur vos droits en tant que sujet de recherche, ou pour 
        signaler des problèmes liés à la recherche.</p>
      <p>La participation à la recherche est entièrement volontaire et ne comporte aucun 
        risque connu. Vous pouvez refuser de participer ou vous retirer à tout moment. 
        Les dossiers de recherche seront gardés confidentiels. Pour garantir l'anonymat, 
        nous ne collecterons aucune information d'identification vous concernant. Toutes 
        les informations que nous recueillons auprès de vous seront identifiées par 
        un numéro de sujet et seront référencées exclusivement par ce numéro dans 
        la collecte et l'analyse des données. Vous devez avoir au moins 18 ans pour participer.
</p>

        <p>Titre: Quantification and Language Development. PI: David Barner. 
        Protocole IRB #171652. Approuvé: 02 mai 2022 13h31 PDT.</p>
        </div>
        </div>
        `]

// FAIL
//FULL SCREEN INSTR
fullscreen_instr = "Cette étude nécessite que le navigateur soit en plein écran. Veuillez cliquer sur le bouton ci-dessous pour passer en mode plein écran.<br>"
fullscreen_thanks = "Merci! Veuillez ne pas quitter le mode plein écran avant la fin de l'étude."

//AUDIO
audio_instr = `Cette étude contient de l'audio. Veuillez confirmer que le son de votre ordinateur est ACTIVÉ 
                et que vous pourrez écouter l'audio sans interruption.
               <br>
               Veuillez cliquer sur le bouton ci-dessous pour confirmer.`

//EARLY END INST
early_end_instr = `<h1>Merci d'avoir participé à l'étude.</h1>
                <p>Dans cette étude, nous avons utilisé un contrôle de compréhension pour nous assurer que vous comprenez 
                les instructions nécessaires pour terminer le reste de l'étude. Malheureusement, vous n'avez pas terminé 
                le contrôle de compréhension dans le nombre d'essais requis.</p>
                <p>Par conséquent, nous vous demandons de quitter l'étude et de renvoyer la soumission. Vos données ne 
                seront pas utilisées pour de futurs rapports ou publications de cette étude. Nous apprécions vraiment 
                votre temps et n'hésitez pas à nous contacter via Prolific si vous avez des inquiétudes.
</p>`

///////////////////////// demog questions /////////////////////////
demog_instr = ["Enfin, nous aimerions vous poser quelques questions sur vous. Vos réponses resteront confidentielles."]
demog_require_answer = `<p style="font-size:small;">Les questions marquées d'un <font color="brown">*</font> nécessitent une réponse.</p>`
label_done = "Terminé!"


demog_current_country_instr = `Où vivez-vous actuellement ? Choisissez un pays dans le menu déroulant.`
demog_language_first_instr = "Le français est-il votre langue maternelle (ou l'une de vos langues maternelles)?"
demog_language_others_instr = `Quelle(s) autre(s) langue(s) pouvez-vous parler ou comprendre, même si vous ne la parlez pas couramment?
                              </br><p style="font-size:small">Si vous pouvez parler ou comprendre plusieurs autres langues, vous aurez 
                              la possibilité de répondre à cette question plusieurs fois.<br>Veuillez laisser la réponse vide et cliquer 
                              sur 'Continuer' une fois que vous avez répondu avec toutes les langues que vous pouvez parler ou comprendre.<p>` 
demog_language_first_opts = ["Oui", "Non"]
demog_language_others_fluency_sp = "Sur une échelle de 0 à 10, veuillez sélectionner votre niveau de compétence en  " // need to add 'parle'
demog_language_others_fluency_ud = "Sur une échelle de 0 à 10, veuillez sélectionner votre niveau de compétence en compréhension de "
demog_language_others_fluency_opts = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

demog_age_instr = "Quel est votre âge?"
demog_age_opts = ["18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"]
demog_gender_instr = "Quel est votre genre?"
demog_gender_opts = ["Femme", "Homme", "Non binaire", "Refuser de répondre"]
//demog_ethnic_instr = `What is your racial or ethnic identification? <p style="font-size:small">Please select all that apply.</p>`
//demog_ethnic_opts = ["American Indian or Alaska Native", "Asian", "Black or African American", "Hispanic or Latino", "Middle Eastern or North African", "Native Hawaiian or Pacific Islander", "White", "Other"]

demog_objective_ses_instr = `Quel est le diplôme ou le niveau d'études le plus élevé que vous avez atteint?`
demog_objective_ses_opts = ["BEPC, diplôme national du Brevet ou moins", "CAP, BEP, ou équivalent", 
                            "Baccalauréat, brevet professionnel ou équivalent", 
                            "Une ou plusieurs années d'études supérieures, sans diplôme", 
                            "BTS, DUT, ou équivalent", "Diplôme national de licence ou équivalent", 
                            "Au moins quelques études après la licence"]
  

demog_final_feedback_instr = "Certaines parties de cette expérience vous ont-elles semblé déroutantes?<p></p>Nous apprécions grandement vos commentaires!"
demog_meta_instr = "Quelles stratégies avez-vous utilisées pour répondre aux questions de l’étude?"

//demog_pid_instr = `Please enter the last 4 digits of your PID. We will use this to verify your responses.<font color="brown">*</font>`

////////////////////// demog questions end ////////////////////////