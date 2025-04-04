function sortTable(columnIndex) {
    const table = document.getElementById('data-table');
    const rows = Array.from(table.rows).slice(1); // Exclude the header row
    const isAscending = table.getAttribute('data-sort-order') === 'asc';
    const direction = isAscending ? 1 : -1;
    rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].innerText.toLowerCase();
        const cellB = rowB.cells[columnIndex].innerText.toLowerCase();
        if (cellA < cellB) return -1 * direction;
        if (cellA > cellB) return 1 * direction;
        return 0;
    });
    // Append sorted rows back to the table body
    const tableBody = table.querySelector('tbody');
    tableBody.innerHTML = '';
    rows.forEach(row => tableBody.appendChild(row));
    // Toggle the sorting order for the next click
    table.setAttribute('data-sort-order', isAscending ? 'desc' : 'asc');
}


// pagination
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

// togglePagination
let isALLVisible = false;

function togglePagination() {
    const table = document.getElementById("data-table");
    const rows = table.querySelector("tbody").querySelectorAll("tr");
    const paginationDiv = document.getElementById("pagination");
    const toggleBtn = document.getElementById("togglePagination");

    if (isALLVisible) {
        paginateTable();
        toggleBtn.innerText = "Show All";
    } else {
        rows.forEach(row => row.style.display = "");  // show all rows
        paginationDiv.innerHTML = ""; // deactive the page buttons
        toggleBtn.innerText = "Show Less";
    }
    isALLVisible = !isALLVisible;
}

// // 버튼 active function
// function showTab(tabId) {
//   // 모든 탭을 숨김
//   const tabs = document.querySelectorAll('.form-container');
//   tabs.forEach(tab => {
//       tab.style.display = 'none';
//   });
//   // 선택한 탭을 보임
//   const activeTab = document.querySelector(tabId);
//   if (activeTab) {
//       activeTab.style.display = 'block';
//   }
//   // 모든 버튼에서 active 클래스 제거
//   const buttons = document.querySelectorAll('.tab-button');
//   buttons.forEach(button => {
//       button.classList.remove('active');
//   });
//   // 클릭한 버튼에 active 클래스 추가
//   const activeButton = Array.from(buttons).find(button => button.onclick.toString().includes(tabId));
//   if (activeButton) {
//       activeButton.classList.add('active');
//   }
// }