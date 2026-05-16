function addLead() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        ${name} - ${email}
        <label>Status: </label>
        <select>
            <option>New</option>
            <option>Contacted</option>
            <option>Converted</option>
        </select>

        <button onclick="deleteLead(this)">Delete</button>
    `;

    document.getElementById("leadList").appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";

    localStorage.setItem("leads", document.getElementById("leadList").innerHTML);
}

window.onload = function() {
    const savedLeads = localStorage.getItem("leads");
    if (savedLeads) {
        document.getElementById("leadList").innerHTML = savedLeads;
    }
};


function deleteLead(btn) {
    btn.parentElement.remove();
    localStorage.setItem("leads", document.getElementById("leadList").innerHTML);
}
