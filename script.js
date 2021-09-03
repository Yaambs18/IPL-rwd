teamname = [
    document.getElementById('csk'),
    document.getElementById('di'),
    document.getElementById('kkr'),
    document.getElementById('mi'),
    document.getElementById('pk'),
    document.getElementById('rr'),
    document.getElementById('rcb'),
    document.getElementById('srh')
]

teamvenue = [
    document.getElementById('csk-ven'),
    document.getElementById('di-ven'),
    document.getElementById('kkr-ven'),
    document.getElementById('mi-ven'),
    document.getElementById('pk-ven'),
    document.getElementById('rr-ven'),
    document.getElementById('rcb-ven'),
    document.getElementById('srh-ven')
]

teamtrophy = [
    document.getElementById('csk-tr'),
    document.getElementById('di-tr'),
    document.getElementById('kkr-tr'),
    document.getElementById('mi-tr'),
    document.getElementById('pk-tr'),
    document.getElementById('rr-tr'),
    document.getElementById('rcb-tr'),
    document.getElementById('srh-tr')
]

teamdata = [
    {
      "id": "chennai-super-kings",
      "teamName": "Chennai Super Kings",
      "winningYears": [
        2010,
        2011,
        2018
      ],
      "venue": "M. A. Chidambaram Stadium"
    },
    {
      "id": "delhi-capitals",
      "teamName": "Delhi Capitals",
      "winningYears": [],
      "venue": "Feroz Shah Kotla Ground"
    },
    {
        "id": "kolkata-knight-riders",
        "teamName": "Kolkata Knight Riders",
        "winningYears": [
          2012,
          2014
        ],
        "venue": "Eden Gardens"
      },
    {
        "id": "mumbai-indians",
        "teamName": "Mumbai Indians",
        "winningYears": [
          2013,
          2015,
          2017,
          2019
        ],
        "venue": "Wankhede Stadium"
    },
    {
      "id": "kings-xi-punjab",
      "teamName": "Kings XI Punjab",
      "winningYears": [],
      "venue": "IS Bindra Stadium"
    },
    {
      "id": "rajasthan-royals",
      "teamName": "Rajasthan Royals",
      "winningYears": [
        2008
      ],
      "venue": "Sawai Mansingh Stadium"
    },
    {
      "id": "royal-challengers-bangalore",
      "teamName": "Royal Challengers Bangalore",
      "winningYears": [],
      "venue": "M. Chinnaswamy Stadium"
    },
    {
      "id": "sunrisers-hyderabad",
      "teamName": "Sunrisers Hyderabad",
      "winningYears": [
        2016
      ],
      "venue": "Rajiv Gandhi Intl. Cricket Stadium"
    }
  ]

fetch("https://cors-anywhere.herokuapp.com/https://ipl-t20.herokuapp.com/teams", {
    method: "GET", 
}).then((data) => { return data.json() }).then((res) => {
    teamdata = res
    if (res.length != 0) {
        for (let i = 0; i < teamdata.length; i++) {
            console.log()
            teamname[i].innerText = teamdata[i].teamName
            teamvenue[i].innerText = teamdata[i].venue
            if (teamdata[i].winningYears.length > 0) {
                teamtrophy[i].innerText = teamdata[i].winningYears

            } else {
                teamtrophy[i].style.visibility = 'hidden'
            }

        }
    }
}).catch((e) => {
    for (let i = 0; i < teamdata.length; i++) {
        console.log()
        teamname[i].innerText = teamdata[i].teamName
        teamvenue[i].innerText = teamdata[i].venue
        if (teamdata[i].winningYears.length > 0) {
            teamtrophy[i].innerText = teamdata[i].winningYears

        } else {
            teamtrophy[i].style.visibility = 'hidden'
        }

    }
    
})