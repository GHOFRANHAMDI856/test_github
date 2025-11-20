let scoreData = Array(11).fill(0);  
const ctxScore = document.getElementById("chartScore").getContext("2d");
const chartScore = new Chart(ctxScore, {
  type: "bar",
  data: {
    labels: ["0","1","2","3","4","5","6","7","8","9","10"],
    datasets: [{
      label: "Nombre de votes",
      data: scoreData,
      backgroundColor: "rgba(54,162,235,0.6)"
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
});

