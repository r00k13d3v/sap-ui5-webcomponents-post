import "@ui5/webcomponents/dist/Table";
import "@ui5/webcomponents/dist/TableColumn";
import "@ui5/webcomponents/dist/TableRow";
import "@ui5/webcomponents/dist/TableCell";

const tableConfig = {
  columns: [
    {
      header: "Character",
      default: "No Name",
      demandPopin: false,
      demandText: "Name",
      "min-width": "600",
    },
    {
      header: "Specie",
      demandPopin: true,
      demandText: "Specie",
      "min-width": "600",
    },
    {
      header: "Status",
      demandPopin: true,
      demandText: "Status",
      "min-width": "600",
    },
    {
      header: "Image",
      demandPopin: true,
      demandText: "Image",
      "min-width": "600",
    },
  ],
};

export async function refreshTable(page) {
  const domTable = document.getElementById("table");
  domTable.innerHTML = "";
  const table = document.createElement("ui5-table");
  //make table scrollable
  table.style = `max-height: ${window.innerHeight - 130}px; scroll-behavior: smooth; overflow-y: scroll;`;
  const height = window.innerHeight - 130;
  table.setAttribute("sticky-column-header", true);
  let columns = [];

  tableConfig.columns.forEach((column) => {
    const domColumn = document.createElement("ui5-table-column");
    domColumn.innerHTML = `<span>${column.header}</span>`;

    if (column.demandPopin) {
      domColumn.setAttribute("demand-popin", column["demandPopin"]);
      domColumn.setAttribute("min-width", column["min-width"]);
      domColumn.setAttribute("popin-text", column["demandText"]);
    }

    domColumn.slot = "columns";
    columns.push(domColumn);
  });

  table.innerHTML = columns.map((column) => column.outerHTML).join("");

  var settings = {
    url: "https://rickandmortyapi.com/api/character?page=" + page,
  };

  const result = await fetch(settings.url);

  const data = await result.json();

  let rows = data.results.map((row) => {
    let cells = [
      document.createElement("ui5-table-cell"),
      document.createElement("ui5-table-cell"),
      document.createElement("ui5-table-cell"),
      document.createElement("ui5-table-cell"),
    ];

    cells[0].innerHTML = `<span>${row.name}</span>`;
    cells[1].innerHTML = `<span>${row.species}</span>`;
    cells[2].innerHTML = `<span>${row.status}</span>`;
    cells[3].innerHTML = `<img src="${row.image}" style="width: 50px; height: 50px;"/>`;
    row = document.createElement("ui5-table-row");
    row.innerHTML = cells.map((cell) => cell.outerHTML).join("");
    return row;
  });

  table.innerHTML += rows.map((row) => row.outerHTML).join("");

  document.getElementById("table").appendChild(table);
}

refreshTable(1);
