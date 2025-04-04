
  const rowsPerPage = 10; 
  let currentPage = 1;

  function paginateTable() {
    const table = document.getElementById("data-table");
    const tbody = table.querySelector("tbody");
    const rows = tbody.querySelectorAll("tr");
    const totalPages = Math.ceil(rows.length / rowsPerPage);

    
    rows.forEach((row, index) => {
      row.style.display = (index >= (currentPage - 1) * rowsPerPage && index < currentPage * rowsPerPage) ? "" : "none";
    });

   
    const paginationDiv = document.getElementById("pagination");
    paginationDiv.innerHTML = ""; 

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.innerText = i;
      btn.className = (i === currentPage) ? "active" : "";
      btn.onclick = function () {
        currentPage = i;
        paginateTable();
      };
      paginationDiv.appendChild(btn);
    }
  }

  paginateTable();
