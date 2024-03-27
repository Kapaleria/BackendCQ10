document.getElementById('journalForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const notes = document.getElementById('notes').value;
    
        const response = await fetch('/journal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, notes })
    });

    if (response.ok) {
        window.location.href = './journals.html'; // Redirect to the next page
    } else {
        console.error('Failed to submit journal:', response.statusText);
    }
});