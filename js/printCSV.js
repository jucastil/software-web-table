function printCSV() {
    const table = document.getElementById("data-table");
    let csvContent = "";
    for (let row of table.rows) {
        let rowData = [];
        for (let cell of row.cells) {
            rowData.push(cell.innerText);
        }
        csvContent += rowData.join(",") + "\n";
    }
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Sci_com_SW.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}