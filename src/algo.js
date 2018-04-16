const solver = require("/usr/lib/node_modules/javascript-lp-solver/src/solver")
//max: 168 a -2 c -3 d  -4 e -5 f -6 g -7 h -8 i  -9 j -10 k -11 l -12 n -13 b

//supposons que j'ai 02 paires d'As
//je veux evaluer son score par rapport au score max 1ere main: As As
const table_correspondance = {car_2:{weight:2,var:"c"},
                              car_3:{weight:3,var:"d"},
                              car_as:{weight:14,var:"a"},
                              tre_as:{weight:14,var:"a"},
                              tre_2:{weight:2,var:"c"},
                              tre_3:{weight:3,var:"d"} }
// my first hand:
let myhand = {tre_as:{weight:14,var:"a"},
              tre_2:{weight:2,var:"c"}}


let model = ["min:  2 c 3 d  -18 a ",
            "14 a 13 b -4 c <= 27",
            //" 14 a  9 j  -18 j <= 14 ", //paire 9 superieure à la carte 9 et As
            //" 14 a  10 k  -20 k <= 14 ", //paire 10 superieure à la carte 10 et As
            //contrainte de superiorite des cartes
            " 3 d -2 c <= 2",
            " 4 e -3 d <= 3",
            " 5 f -4 e <= 4",
            " 6 g -5 f <= 5",
            " 7 h -6 g <= 6",
            " 8 i -7 h <= 7",
            " 9 j -8 i <= 8",
            " 10 k -9 j  <= 9",
            " 11 l -10 k <= 10",
            " 12 n -11 l <= 11",
            "  13 b  - 12 n <= 12",
            "14 a -13 b <= 13",
           //fin contrainte de superiorite des cartes
            "28 a -4 c -6 d <= 28",
            "28 a 26 b -6 c <= 54 ",
            "42 a -2 c -3 d -4 e -5 f -6 g <= 42",
            "2 c  - 7 h <= 2",
            "3 d  -8 i <= 3",
            "5 f -10 k <= 5",
            "6 g -11 l <= 6",
            "7 h 12 n <= 7",
            "8 i  -13 b <= 8",
            "9 j  10 k  11 l  12 n  13 b -6 c  -6 d <= 55",
            "42 a  26 b -8 c <= 68",
            "56 a  -14 a  -13 b -12 n -11 l -10 k <= 56",
            "a >= 0",
            "b >= 0",
            "c >= 0",
            "e >= 0",
                  "num a",
                  "num b",
                  "num c",
                  "num d",
                  "num e",
                  "num f",
                  "num g",
                  "num h",
                  "num i",
                  "num j",
                  "num k",
                  "num l",
                  "num n"
      
                ];
 const db = [{A:0,K:0,Q:0,J:0,x10:0,x9:0,x8:0,x7:0,x6:0,x5:0,x4:0,x3:0,x2:0,
 A:0,K:0,Q:0,J:0,x10:0,x9:0,x8:0,x7:0,x6:0,x5:0,x4:0,x3:0,x2:0,
 guess_main1_check0:-1,guess_main2_check0:-1,
 guess_main1_check1:-1,guess_main2_check1:-1,
 guess_main1_check2:-1,guess_main2_check2:-1,
 guess_main1_finalcheck:-1,guess_main2_finalcheck:-1,
 myscore:0,winner_score:0,win:0,winnerId:0,
 strategie_which:0,scoring_version:0}] 
// Reformat to JSON model               
let model_reformated = solver.ReformatLP(model);
// Solve the model 
let res = solver.Solve(model_reformated);
console.log(res)
// first check situation
let firstCheck = true
if (firstCheck) {
  let firstCheck = false
}
//score of each card at before first check:
const score_base = {car_2: 2*res.c,car_3:3*res.d,car_as:14*res.a}
console.log(score_base)
// after first check situation
const card1_check1 ="car_2"
const card2_check1 ="car_3"
const card3_check1 ="car_as"

const highestCardOnDeck = (score_base) => {
  const max_first_hand = Object.keys(score_base).reduce((a, b) => 
            score_base[a] > score_base[b] ? a : b);
  console.log(max_first_hand)
  return max_first_hand
}
let myscore = ({score_base,myhand}) => {
  //get the highest card among score base
  //apply the highest possible pair strategy
  const hcard=highestCardOnDeck(score_base)
  
  //get weigths and varname of my hand:
  let weights = Object.keys(myhand).map((x)=>myhand[x].weight)
  let vars = Object.keys(myhand).map((x)=>myhand[x].var)

  //update cost function using:
  model[0]=`min: ${weights[0]}  ${vars[0]} ${weights[1]}  ${vars[1]}  ${-2*table_correspondance[hcard].weight} 
  ${table_correspondance[hcard].var}`

  //resolve LP:
  console.log(model[0])
  // Reformat to JSON model               
  model_reformated = solver.ReformatLP(model);
  // Solve the model 
  res = solver.Solve(model_reformated);
  console.log(res)
}
//update  my score using equal split on card1_check1,card2_check1,card3_check1

myscore({score_base,myhand})




