// Initialisation des votes
let appareilData = {
  pc: 0,
  tablette: 0,
  telephone: 0
};

// Récupération du contexte du canvas
const ctxReseau = document.getElementById("chartReseau").getContext("2d");

// Création du graphique
const chartReseau = new Chart(ctxReseau, {
  type: "bar",
  data: {
    labels: ["Portables / Ordinateurs", "Tablettes", "Téléphones portables"],
    datasets: [{
      label: "Nombre de votes",
      data: Object.values(appareilData),
      backgroundColor: "rgba(54, 162, 235, 0.6)"
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        precision: 0
      }
    }
  }
});

// Gestion du clic sur le bouton de vote
document.getElementById("vote-reseau").addEventListener("click", () => {
  const selected = document.querySelector("input[name='appareil']:checked");

  if (selected) {
    const appareil = selected.value;

    if (appareilData.hasOwnProperty(appareil)) {
      appareilData[appareil]++;
      chartReseau.data.datasets[0].data = Object.values(appareilData);
      chartReseau.update();
    }
    alert("Merci pour votre vote !");
  } else {
    alert("Veuillez sélectionner un appareil avant de voter !");
  }
});
