const gameObject = ()=>{
    return {
        Home: {
          teamName: "Brooklyn Nets",
          Colors: ["Black", "White"],
          players: {
            "Alan Anderson": {
              number: "0",
              shoe: "16",
              points: "22",
              rebounds: "12",
              assists: "12",
              steals: "3",
              blocks: "1",
              slamDunks: "1",
            },
            "Reggie Evans": {
              number: "30",
              shoe: "14",
              points: "12",
              rebounds: "12",
              assists: "12",
              steals: "12",
              blocks: "712",
              slamDunks: "7",
            },
            "Brook Lopez": {
              number: "11",
              shoe: "17",
              points: "17",
              rebounds: "19",
              assists: "10",
              steals: "3",
              blocks: "1",
              slamDunks: "15",
            },
            "Manson Plumlee": {
              number: "1",
              shoe: "19",
              points: "26",
              rebounds: "12",
              assists: "6",
              steals: "3",
              blocks: "8",
              slamDunks: "5",
            },
            "Jason Terry": {
              number: "31",
              shoe: "15",
              points: "19",
              rebounds: "2",
              assists: "2",
              steals: "4",
              blocks: "11",
              slamDunks: "1",
            },
          },
        },
        Away: {
          teamName: "Charlotte Hornets",
          Colors: ["Turquoise", "Purple"],
          players: {
            "Jeff Adrien": {
              number: "4",
              shoe: "18",
              points: "10",
              rebounds: "1",
              assists: "1",
              steals: "2",
              blocks: "7",
              slamDunks: "2",
            },
            "Bismak Biyombo": {
              number: "0",
              shoe: "16",
              points: "12",
              rebounds: "4",
              assists: "7",
              steals: "7",
              blocks: "15",
              slamDunks: "10",
            },
            "DeSagna Diop": {
              number: "2",
              shoe: "14",
              points: "24",
              rebounds: "12",
              assists: "12",
              steals: "4",
              blocks: "5",
              slamDunks: "5",
            },
            "Ben Gorden": {
              number: "8",
              shoe: "15",
              points: "33",
              rebounds: "3",
              assists: "2",
              steals: "1",
              blocks: "1",
              slamDunks: "0",
            },
            "Brendan Haywood": {
              number: "33",
              shoe: "15",
              points: "6",
              rebounds: "12",
              assists: "12",
              steals: "22",
              blocks: "5",
              slamDunks: "12",
            },
          },
        },
      }
}
const numPointsScored = (playerName)=>{
    let player = gameObject()['Home']['players'][playerName]
    return player[points]
}
const shoeSize = (playerName)=>{
    let player = gameObject()['Home']['players'][playerName]
    return player[shoe]
}
const teamColors = (teamName)=>{
    return gameObject()[teamName]['Colors']
}
const teamNames = ()=>{
    let game = gameObject()
    let result = []
    for(let key in game){
        result.push(game[key]['teamName'])
    }
    return result
}
const playerNumbers = (teamName)=>{
    const game = gameObject();
    let flag = false
    for (team in game) {
        if (game[team].teamName === teamName) {
            flag = true
            break
        }
    }
    if (flag) return Object.values(found.players).map((obj) => obj.number);      
}