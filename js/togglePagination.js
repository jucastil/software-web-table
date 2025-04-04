// togglePagination

let isALLVisible = false;


function togglePagination() {
    const table = document.getElementById("data-table");
    const rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    if (isALLVisible) {
        for (let i = 1; i < rows.length; i++) {
            // rows[i].style.display = "none";
            //clear the data table
        }
        document.getElementById("togglePagination").innerText = "Show All";
    } else {
        for (let i = 0; i < rows.length; i++) {
            rows[i].style.display = "";
        }
        document.getElementById("togglePagination").innerText = "Show Less";
        
    }
    isALLVisible = !isALLVisible

    // function showLess() {
    //     currentPage = 1;
    //     displayTableData();
    //     // Hide 'Show less' button and display 'Show all' button
    //     document.getElementById('show-all-btn').style.display = 'inline-block';
    //     document.getElementById('show-less-btn').style.display = 'none';
    //     // Enable pagination buttons
    //     document.getElementById('prev-btn').disabled = false;
    //     document.getElementById('next-btn').disabled = false;
    //   }
}



    // function showAll() {
    //     const tableBody = document.querySelector('#data-table tbody');
    //     tableBody.innerHTML = '';
    //     tableData.forEach(row => {
    //         const tr = document.createElement('tr');
    //         tr.innerHTML = `<td>${row.software}</td> <td>${row.description}</td> <td>${row.platform}</td><td>${row.source}</td>`;
    //         tableBody.appendChild(tr);
    //     });
    //     // Hide 'Show all' button and display 'Show less' button
    //     document.getElementById('show-all-btn').style.display = 'none';
    //     document.getElementById('show-less-btn').style.display = 'inline-block';
    //     // Disable pagination buttons when showing all rows
    //     document.getElementById('prev-btn').disabled = true;
    //     document.getElementById('next-btn').disabled = true;
    //  }


//     currentPage = 1; // 현재 페이지를 1로 초기화
//     totalPages = 0; // 전체 페이지 수를 0으로 설정
//     data = []; // 데이터 배열을 초기화 (필요에 따라)
    
//     // 테이블을 비우거나 초기 상태로 되돌립니다.
//     clearTable(); // 테이블을 비우는 함수 호출
// }
// function clearTable() {
//     const tableBody = table.querySelector("tbody");
//     tableBody.innerHTML = ''; // 테이블 내용을 비웁니다.
//     // paginationDiv.innerHTML = ""; 
// }
// function updatePaginationControls() {
//   const table = document.getElementById("data-table");
//   const tbody = table.querySelector("tbody");
//   const rows = tbody.querySelectorAll("tr");


//   rows.forEach(row => tbody.appendChild(row));
//   tbody.innerHTML = '';

//   // rows.forEach((row, index) => {
//   //   row.style.display = (index >= (currentPage - 1) * rowsPerPage && index < currentPage * rowsPerPage) ? "" : "none";
//   // });
    
// }
// function setData(newData) {
//     data = newData;
//     paginateTable(); 
// }


// togglePagination

// let isALLVisible = false;


// function togglePagination() {
//     const table = document.getElementById("data-table");
//     currentPage = 1; // 현재 페이지를 1로 초기화
//     totalPages = 0; // 전체 페이지 수를 0으로 설정
//     data = []; // 데이터 배열을 초기화 (필요에 따라)
    
//     // 테이블을 비우거나 초기 상태로 되돌립니다.
//     clearTable(); // 테이블을 비우는 함수 호출
// }
// function clearTable() {
//     const tableBody = table.querySelector("tbody");
//     tableBody.innerHTML = ''; // 테이블 내용을 비웁니다.
//     // paginationDiv.innerHTML = ""; 
// }
// function updatePaginationControls() {
//   const table = document.getElementById("data-table");
//   const tbody = table.querySelector("tbody");
//   const rows = tbody.querySelectorAll("tr");


//   rows.forEach(row => tbody.appendChild(row));
//   tbody.innerHTML = '';

//   // rows.forEach((row, index) => {
//   //   row.style.display = (index >= (currentPage - 1) * rowsPerPage && index < currentPage * rowsPerPage) ? "" : "none";
//   // });
    
// }
// function setData(newData) {
//     data = newData;
//     paginateTable(); 
// }

// function stopPagination() {
//   currentPage = 1; // 현재 페이지를 1로 초기화
//   totalPages = 0; // 전체 페이지 수를 0으로 설정
//   data = []; // 데이터 배열을 초기화 (필요에 따라)
  
//   // 테이블을 비우거나 초기 상태로 되돌립니다.
//   clearTable(); // 테이블을 비우는 함수 호출
// }
// function clearTable() {
//   const tableBody = document.querySelector('#data-table tbody');
//   tableBody.innerHTML = ''; // 테이블 내용을 비웁니다.
// }
// // function updatePaginationControls() {
//   // 페이지 번호를 업데이트하는 로직을 여기에 추가합니다.
//   // 예를 들어, 페이지 번호 버튼을 생성하고 현재 페이지를 강조 표시하는 등의 작업을 수행합니다.
// // }
// // 데이터 배열을 설정하고 페이지네이션을 시작하는 함수
// function setData(newData) {
//   data = newData;
//   paginateTable(); 
// }

