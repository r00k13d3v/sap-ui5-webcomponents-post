import "@ui5/webcomponents/dist/Table";
import "@ui5/webcomponents/dist/TableColumn";
import "@ui5/webcomponents/dist/TableRow";
import "@ui5/webcomponents/dist/TableCell";

export async function refreshTable(page) {
  const domTable = document.getElementById("table");
  domTable.innerHTML = "";
  const table = document.createElement("ui5-table");
  const height = window.innerHeight - 130;
  table.setAttribute("sticky-column-header", true);
  table.style = `max-height: ${height}px; scroll-behavior: smooth; overflow-y: scroll;`;
  let columns = [
    document.createElement("ui5-table-column"),
    document.createElement("ui5-table-column"),
    document.createElement("ui5-table-column"),
    document.createElement("ui5-table-column"),
  ];
  columns[0].innerHTML = "<span>Character</span>";
  columns[0].slot = "columns";
  columns[1].innerHTML = "<span>Specie</span>";
  columns[1].slot = "columns";
  columns[2].innerHTML = "<span>Status</span>";
  columns[2].slot = "columns";
  columns[3].innerHTML = "<span>Image</span>";
  columns[3].slot = "columns";
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