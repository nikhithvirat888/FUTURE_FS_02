console.log("JS Loaded");

/* ADD LEAD */
function addLead() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
        alert("Please enter name and email");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        💼 ${name} - ${email}

        <select onchange="saveData()">
            <option>New 🆕</option>
            <option>Contacted 📞</option>
            <option>Converted ✅</option>
        </select>

        <button onclick="deleteLead(this)">❌</button>
    `;

    document.getElementById("leadList").appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";

    saveData();
    updateCount();
}

/* DELETE */
function deleteLead(btn) {
    btn.parentElement.remove();
    saveData();
    updateCount();
}

/* SAVE */
function saveData() {
    localStorage.setItem("leads", document.getElementById("leadList").innerHTML);
}

/* LOAD */
window.onload = function () {
    const data = localStorage.getItem("leads");
    if (data) {
        document.getElementById("leadList").innerHTML = data;
    }
    updateCount();
};

/* SEARCH */
function searchLead() {
    const input = document.getElementById("search").value.toLowerCase();
    const items = document.querySelectorAll("#leadList li");

    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(input)) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
}

/* COUNT */
function updateCount() {
    const total = document.querySelectorAll("#leadList li").length;
    document.getElementById("count").textContent = "Total Leads: " + total;
}
