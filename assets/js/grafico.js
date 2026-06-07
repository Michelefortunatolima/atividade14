const dadosArtistas = [
  { nome: "Rihanna", qtd: 15 },
  { nome: "Bruno Mars", qtd: 12 },
  { nome: "M83", qtd: 8 },
  { nome: "Demi Lovato", qtd: 10 },
  { nome: "Daft Punk", qtd: 7 },
  { nome: "Tame Impala", qtd: 6 },
  { nome: "Lana Del Rey", qtd: 9 },
  { nome: "Billie Eilish", qtd: 11 },
  { nome: "The Weeknd", qtd: 14 },
  { nome: "Gorillaz", qtd: 13 }
];

const labels = dadosArtistas.map(a => a.nome);
const valores = dadosArtistas.map(a => a.qtd);

new Chart(document.getElementById("graficoArtistas"), {
  type: "pie",
  data: {
    labels: labels,
    datasets: [{
      data: valores,
      backgroundColor: [
        "#FF6384","#36A2EB","#FFCE56","#4CAF50",
        "#9C27B0","#FF9800","#00BCD4","#8BC34A",
        "#E91E63","#3F51B5"
      ]
    }]
  },
  options: {
    responsive: false,
    plugins: {
      title: {
        display: true,
        text: "Distribuição de Produção Musical",
        font: { size: 18, weight: 'bold' },
        color: "#444"
      },
      legend: {
        position: "bottom",
        labels: {
          font: { size: 12 },
          color: "#555"
        }
      }
    }
  }
});