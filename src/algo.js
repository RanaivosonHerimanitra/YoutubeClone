const solver = require("/usr/lib/node_modules/javascript-lp-solver/src/solver")
var model = [
                 "max: 1200 x 1600 y 500 z",
                  "30 x 20 y 20 z <= 300",
                  "5 x 10 y 10 z <= 110",
                  "30 x 50 y -15 z <= 400",
                  "int x",
                  "int y",
                  "int z",
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
  model = solver.ReformatLP(model);
  
  // Solve the model 
  const res = solver.Solve(model);
console.log(res)
