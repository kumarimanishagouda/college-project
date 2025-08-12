document.addEventListener("DOMContentLoaded", function() {
    const eventForm = document.querySelector("form"); // Selects the form
    const eventTableBody = document.querySelector("table tbody"); // Selects table body

    if (!eventForm || !eventTableBody) {
        console.error("Form or table not found! Check IDs in HTML.");
        return;
    }

    // Attach event listener to form
    eventForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const eventName = document.getElementById("event-name").value.trim();
        const eventPerformance = document.getElementById("event-performance").value;
        const eventclass = document.getElementById("event-class").value.trim();
        const numberofp =document.getElementById("numberofp").value.trim();

        if (eventName && eventPerformance && eventclass && numberofp) {
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${eventName}</td>
                <td>${eventPerformance}</td>
                <td>${eventclass}</td>
                <td>${numberofp}</td>
                <td>
                    <button class="btn edit">Edit</button>
                    <button class="btn delete">Delete</button>
                </td>
            `;

            eventTableBody.appendChild(newRow);
            addEventListeners(newRow);

            eventForm.reset();
        }
    });

    // Function to add event listeners to buttons
    function addEventListeners(row) {
        row.querySelector(".delete").addEventListener("click", function() {
            row.remove();
        });

        row.querySelector(".edit").addEventListener("click", function() {
            const cells = row.getElementsByTagName("td");
            document.getElementById("event-name").value = cells[0].textContent;
            document.getElementById("event-performance").value = cells[1].textContent;
            document.getElementById("event-class").value = cells[2].textContent;
            document.getElementById("numberofp").value=cells[3].textContent;
            row.remove();
        });
    }

    // Attach event listeners to pre-existing rows
    document.querySelectorAll("table tbody tr").forEach(row => {
        addEventListeners(row);
    });
});
