const root = document.getElementById('page_container');
root.innerHTML = `<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;
let getTeamList = async () => {
    try {
        const response = await fetch('https://ipl-t20.herokuapp.com/teams');
        const json = response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}

let Teams = {
    render: async () => {
        let teams = await getTeamList();
        console.log(teams);
        let view = 
        `<div class="container">
        <div class="cards cards-csk" id="card-1" onclick="location.href = '/IPL-rwd/#/teams/chennai-super-kings';">
            <img src="images/csk.png" alt="csk ka logo">
            
            <div class="team-card__wins">
                <h3 class="card__title" id="csk">${teams[0].teamName}</h3>
                <p class="card__subtitle" id="csk-ven">
                ${teams[0].venue}
                </p>
                <i class="fa fa-trophy year" id="csk-tr"> ${teams[0].winningYears}</i>
            </div>
            <button class="card__link">
                Team Home
            </button>
            <i class="fas fa-angle-right card-arrow"></i>
            
        </div>
        <div class="cards cards-di" id="card-2" onclick="location.href = '/IPL-rwd/#/teams/dc';">
            <img src="images/dc.png" alt="dc ka logo">
            <div class="team-card__wins">
                <h3 class="card__title" id="di">${teams[1].teamName}</h3>
                <p class="card__subtitle" id="di-ven">${teams[1].venue}</p>
                <i class="fa fa-trophy year" id="di-tr">${teams[1].winningYears}</i>
            </div>
            <button class="card__link">
                Team Home
            </button>
            <i class="fas fa-angle-right card-arrow"></i>
        </div>
        <div class="cards cards-pix" id="card-3" onclick="location.href = '/IPL-rwd/#/teams/pk';">
            <img src="images/pk.png" alt="pix ka logo">
            <div class="team-card__wins">
                <h3 class="card__title" id="pk">${teams[2].teamName}</h3>
                <p class="card__subtitle" id="pk-ven">${teams[2].venue}</p>
                <i class="fa fa-trophy year" id="pk-tr"> ${teams[2].winningYears}</i>
            </div>
            <button class="card__link">
                Team Home
            </button>
            <i class="fas fa-angle-right card-arrow"></i>
        </div>
        <div class="cards cards-kkr" id="card-4" onclick="location.href = '/IPL-rwd/#/teams/kkr';">
            <img src="images/kkr.png" alt="kkr ka logo">
            <div class="team-card__wins">
                <h3 class="card__title" id="kkr">${teams[3].teamName}</h3>
                <p class="card__subtitle" id="kkr-ven">${teams[3].venue}</p>
                <i class="fa fa-trophy year" id="kkr-tr">${teams[3].winningYears}</i>
            </div>
            <button class="card__link">
                Team Home
            </button>
            <i class="fas fa-angle-right card-arrow"></i>
        </div>
        <div class="cards cards-mi" id="card-5" onclick="location.href = '/IPL-rwd/#/teams/mi';">
            <img src="images/mi.png" alt="mi ka logo">
            <div class="team-card__wins">
                <h3 class="card__title" id="mi">${teams[4].teamName}</h3>
                <p class="card__subtitle" id="mi-ven">${teams[4].venue}</p>
                <i class="fa fa-trophy year" id="mi-tr">${teams[4].winningYears} </i>
            </div>
            <button class="card__link">
                Team Home
            </button>
            <i class="fas fa-angle-right card-arrow"></i>
        </div>
        <div class="cards cards-rr" id="card-6" onclick="location.href = '/IPL-rwd/#/teams/rr';">
            <img src="images/rr.png" alt="rr ka logo">
            <div class="team-card__wins">
                <h3 class="card__title" id="rr">${teams[5].teamName}</h3>
                <p class="card__subtitle" id="rr-ven">${teams[5].venue}</p>
                <i class="fa fa-trophy year" id="rr-tr">${teams[5].winningYears}</i>
            </div>
            <button class="card__link">
                Team Home
            </button>
            <i class="fas fa-angle-right card-arrow"></i>
        </div>
        <div class="cards cards-rcb" id="card-7" onclick="location.href = '/IPL-rwd/#/teams/rcb';">
            <img src="images/rcb.png" alt="rcb ka logo">
            <div class="team-card__wins">
                <h3 class="card__title" id="rcb">${teams[6].teamName}</h3>
                <p class="card__subtitle" id="rcb-ven">${teams[6].venue}</p>
                <i class="fa fa-trophy year" id="rcb-tr">${teams[6].winningYears}</i>
            </div>
            <button class="card__link">
                Team Home
            </button>
            <i class="fas fa-angle-right card-arrow"></i>
        </div>
        <div class="cards cards-sh" id="card-8" onclick="location.href = '/IPL-rwd/#/teams/srh';">
            <img src="images/srh.png" alt="srh ka logo">
            <div class="team-card__wins">
                <h3 class="card__title" id="srh">${teams[7].teamName}</h3>
                <p class="card__subtitle" id="srh-ven">${teams[7].venue}</p>
                <i class="fa fa-trophy year" id="srh-tr"> ${teams[7].winningYears}</i>
            </div>
            <button class="card__link">
                Team Home
            </button>
            <i class="fas fa-angle-right card-arrow"></i>
        </div>
    </div>`;
    return view;
},
after_render: async () => { }
}
export default Teams;