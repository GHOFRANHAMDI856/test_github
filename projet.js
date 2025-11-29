let scoreData = Array(11).fill(0);
let reseauData = {
  facebook: 0,
  youtube: 0,
  twitter: 0,
  instagram: 0,
  snapchat: 0,
  autre: 0
};
const ctxScore = document.getElementById("chartScore").getContext("2d");
const chartScore = new Chart(ctxScore, {
  type: "bar",
  data: {
    labels: ["0","1","2","3","4","5","6","7","8","9","10"],
    datasets: [{
      label: "Nombre de votes",
      data: scoreData,
      backgroundColor:"rgba(255,99,132,0.6)"
    }]
  },
  options: {
    responsive: true
  }
});
const ctxReseau = document.getElementById("chartReseau").getContext("2d");
const chartReseau = new Chart(ctxReseau, {
  type: "bar",
  data: {
    labels: ["Facebook","Youtube","Twitter","Instagram","Snapchat","Autre"],
    datasets: [{
      label: "Nombre de votes",
      data: Object.values(reseauData),
      backgroundColor: "rgba(255,99,132,0.6)"
    }]
  },
  options: {
    responsive: true
  }
});
document.getElementById("vote-score").addEventListener("click", () => {
  const value = parseInt(document.getElementById("score-select").value);

  if (!isNaN(value) && value >= 0 && value <= 10) {
    scoreData[value]++;          
    chartScore.update();         
  }
  alert("Merci pour votre vote !");
});
document.getElementById("vote-reseau").addEventListener("click", () => {
  const value = document.querySelector("input[name='reseau']:checked");
  if (value) {
    const reseau = value.value;
    if (reseauData.hasOwnProperty(reseau)) {
      reseauData[reseau]++;
      chartReseau.data.datasets[0].data = Object.values(reseauData);
      chartReseau.update();
    }
  }
  alert("Merci pour votre vote !");
});
