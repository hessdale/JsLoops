
//resetting counter
counter = 0;
//basketball player names
let ball_player = [`Steve`, `Micheal`, `Jordan`];
//basketball player scores
let player_points = [10, 15, 20]
//if players injured
let injury = [false, false, true]
//loop to console.log player and scores
while (counter < ball_player.length) {
    if (injury[counter] === true) {
        console.log(`${ball_player[counter]}has scored${player_points[counter]}points`);
    }
    counter = counter + 1;
}
for (counter = 0, counter < ball_player.length, counter = counter + 1) {
    if (injury[counter] === true) {
        console.log(`${ball_player[counter]}has scored${player_points[counter]}points`);
    }
}
