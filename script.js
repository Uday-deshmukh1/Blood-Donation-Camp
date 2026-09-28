document.addEventListener('DOMContentLoaded', function() {
    const camps = [
        {
            name: 'Navsari Camp',
            location: 'Navsari, Maharashtra',
            pincode: '444604',
            date: 'June 15, 2024',
            time: '9:00 AM - 4:00 PM',
            organizer: 'Red Cross Society'
        },
        {
            name: 'Township Camp',
            location: 'Township, Maharashtra',
            pincode: '444604',
            date: 'June 20, 2024',
            time: '10:00 AM - 5:00 PM',
            organizer: 'City Hospital'
        },
        {
            name: 'Ichalkaranji Camp',
            location: 'Ichalkaranji, Maharashtra',
            pincode: '444604',
            date: 'June 25, 2024',
            time: '9:00 AM - 4:00 PM',
            organizer: 'Medical Association'
        },
        {
            name: 'Sangli Camp',
            location: 'Sangli, Maharashtra',
            pincode: '444604',
            date: 'July 01, 2024',
            time: '10:00 AM - 4:00 PM',
            organizer: 'Blood Bank Unit'
        },
        {
            name: 'Sangli-Miraj Camp',
            location: 'Sangli-Miraj, Maharashtra',
            pincode: '444604',
            date: 'July 05, 2024',
            time: '9:00 AM - 3:00 PM',
            organizer: 'Health Department'
        }
    ];

    const campsGrid = document.getElementById('campsGrid');
    const locationFilter = document.getElementById('locationFilter');
    const noResults = document.createElement('div');
    noResults.style.textAlign = 'center';
    noResults.style.padding = '2rem';
    noResults.style.color = '#666';
    noResults.style.display = 'none';
    noResults.innerHTML = 'No camps found for this location';
    campsGrid.parentNode.appendChild(noResults);

    function renderCamps(filter) {
        const filterLower = filter.toLowerCase();
        const filteredCamps = camps.filter(camp => 
            camp.location.toLowerCase().includes(filterLower) || 
            camp.name.toLowerCase().includes(filterLower)
        );

        if (filteredCamps.length === 0) {
            noResults.style.display = 'block';
            campsGrid.innerHTML = '';
            return;
        }

        noResults.style.display = 'none';
        campsGrid.innerHTML = '';

        filteredCamps.forEach(camp => {
            const card = document.createElement('div');
            card.className = 'camp-card';
            card.innerHTML = `
                <div class="camp-image">Camp Image</div>
                <div class="camp-content">
                    <h2>${camp.name}</h2>
                    <div class="camp-details">
                        <span><strong>Location:</strong> ${camp.location}</span>
                        <span><strong>Pincode:</strong> ${camp.pincode}</span>
                        <span><strong>Date:</strong> ${camp.date}</span>
                        <span><strong>Time:</strong> ${camp.time}</span>
                        <span><strong>Organizer:</strong> ${camp.organizer}</span>
                    </div>
                    <div class="camp-location">${camp.location}</div>
                    <button class="btn">Register</button>
                </div>
            `;
            campsGrid.appendChild(card);
        });
    }

    renderCamps('');

    locationFilter.addEventListener('input', function(e) {
        renderCamps(e.target.value);
    });
});