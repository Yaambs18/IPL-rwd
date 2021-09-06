let getPlayerList = async () => {
    try {
        const response = await fetch('https://ipl-t20.herokuapp.com/teams/royal-challengers-bangalore');
        const json = await response.json();
        return json;
    } catch (e) {
        console.log(e);
    }
}
let rcb = {
    render: async () => {
        let playersList = await getPlayerList();
        console.log(playersList.players);
        let view =
            `<div class="team-container">
                <div class="team-header rcb">
                    <div class="team-header-overlay">
                        <div class="team-header-overlay-img">
                            <div class="teamheader-overlay-color">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="players-info">
                    ${playersList.players.map(player =>
                    `<div class="playercard">
                        <img id="img-p1" src=${player.image} alt=${player.name}>
                        <p class="player_name">
                        <strong id="player-1">${player.name}</strong>
                        </p>
                        <div class="data">
                            <h3 class="value" id="player-1-mat">${player.stats.matches}</h3>
                            <h6 class="label">Matches</h6>
                        </div>
                        <div class="data">
                            <h3 class="value" id="player-1-rn">${player.stats.runs}</h3>
                            <h6 class="label">Runs</h6>
                        </div>
                        <div class="data">
                            <h3 class="value" id="player-1-wik">${player.stats.wickets}</h3>
                            <h6 class="label">Wickets</h6>
                        </div>
                    </div>`).join('')}
                </div>
            </div>
            `
        return view
                    },
                    after_render: async () => { }
                }
                
                export default rcb;