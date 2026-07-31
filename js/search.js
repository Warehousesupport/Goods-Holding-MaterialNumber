// =======================================
// Warehouse Material Locator
// search.js
// =======================================

const input = document.getElementById("searchInput");

const btnSearch = document.getElementById("searchBtn");

const btnClear = document.getElementById("clearBtn");

const storageFilter = document.getElementById("storageFilter");

const tbody = document.getElementById("resultBody");

// Search button

btnSearch.onclick = search;

// Enter

input.addEventListener("keypress", function(e){

    if(e.key==="Enter"){

        search();

    }

});

// Filter

storageFilter.onchange = search;

// Clear

btnClear.onclick=function(){

    input.value="";

    storageFilter.value="";

    tbody.innerHTML="";

}

// Search

function search() {

    const keyword = input.value.trim().toLowerCase();
    const storage = storageFilter.value;

    const result = warehouseData.filter(item => {

        const match =
            String(item["Product"] ?? "").toLowerCase().includes(keyword) ||
            String(item["Product Description"] ?? "").toLowerCase().includes(keyword) ||
            String(item["Storage Bin"] ?? "").toLowerCase().includes(keyword) ||
            String(item["Stock Type"] ?? "").toLowerCase().includes(keyword);

        if (storage && storage !== "All") {
            return match && item["Stock Type"] === storage;
        }

        return match;
    });

    showResult(result);
}

        if(storage!=""){

            match=match && item["Storage Type"]==storage;

        }

        return match;

    });

    showResult(result);

}

// Table

function showResult(data){

    tbody.innerHTML="";

    if(data.length==0){

        tbody.innerHTML=

        "<tr><td colspan='7'>No data found.</td></tr>";

        return;

    }

    data.forEach(item=>{

        tbody.innerHTML+=`

<tr>

<td>${item["Product"]}</td>

<td>${item["Product Description"]}</td>

<td>${item["Storage Type"]}</td>

<td>${item["Storage Bin"]}</td>

<td>${item["Quantity"]}</td>

<td>${item["Base Unit of Measure"]}</td>

<td>${item["Stock Reference Doc."] || "-"}</td>

</tr>

`;

    });

}

// Copy

function copyBin(bin){

    navigator.clipboard.writeText(bin);

    alert("Storage Bin disalin : "+bin);

}
