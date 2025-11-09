//index.js
document.getElementById('entryButton').addEventListener("click", async () => {
    const thing = await fetch("/add", { method: 'POST' });

    if (thing.ok) { 
        const msg = await thing.json();
        alert("Success! Server says: " + msg.msg);
    } 
    else {
        alert("Oops! Something went wrong. Server status: " + thing.status);
    }
});
