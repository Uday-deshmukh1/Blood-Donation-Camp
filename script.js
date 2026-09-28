document.addEventListener('DOMContentLoaded', function() {
    const camps = [
        {
            name: 'Amravati Life Saver Blood Donation Camp',
            location: 'Irwin Hospital Campus, Amravati',
            pincode: '444601',
            date: '15 October 2026',
            time: '9:00 AM – 4:00 PM',
            organizer: 'Amravati Life Saver Foundation',
            contact: '0721-2663337'
        },
        {
            name: 'Youth for Life Blood Donation Camp',
            location: 'Sant Gadge Baba Amravati University',
            pincode: '444602',
            date: '18 October 2026',
            time: '10:00 AM – 3:00 PM',
            organizer: 'Youth for Life Foundation',
            contact: '9876543210'
        },
        {
            name: 'Amravati Community Blood Camp',
            location: 'Badnera Road, Amravati',
            pincode: '444605',
            date: '22 October 2026',
            time: '9:30 AM – 3:30 PM',
            organizer: 'Amravati Community Group',
            contact: '9823456789'
        },
        {
            name: 'Give Life Blood Donation Drive',
            location: 'Rajapeth, Amravati',
            pincode: '444605',
            date: '25 October 2026',
            time: '9:00 AM – 2:00 PM',
            organizer: 'Give Life Amravati',
            contact: '9765432108'
        },
        {
            name: 'Students Blood Donation Camp',
            location: 'Amravati City',
            pincode: '444601',
            date: '29 October 2026',
            time: '10:00 AM – 4:00 PM',
            organizer: 'Amravati Student Welfare Group',
            contact: '9898989898'
        },
        {
            name: 'Hope for Life Blood Donation Camp',
            location: 'Dastur Nagar, Amravati',
            pincode: '444606',
            date: '2 November 2026',
            time: '9:00 AM – 4:00 PM',
            organizer: 'Hope for Life Foundation',
            contact: '9812345678'
        }
    ];

    const campsGrid = document.getElementById('campsGrid');
    const locationFilter = document.getElementById('locationFilter');
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.innerHTML = 'No camps found for this location';
    campsGrid.parentNode.appendChild(noResults);

    // Modal elements - keep modal structure intact
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.innerHTML = `
        <div class="modal" id="modal">
            <span class="close" id="closeBtn">&times;</span>
            <h2>Register as Donor</h2>
            <form id="donorForm">
                <div class="field">
                    <label>Full Name</label>
                    <input type="text" id="nameInput" required>
                </div>
                <div class="field">
                    <label>Email</label>
                    <input type="email" id="emailInput" required>
                </div>
                <div class="field">
                    <label>Phone</label>
                    <input type="tel" id="phoneInput" required>
                </div>
            </form>
            <button class="btn" id="submitBtn">Submit Registration</button>
            <div id=" thankYouMessage" style="display:none; margin-top:1rem; padding-top:1rem; border-top:1px solid #e2e6ea; color:#2c3e50;"></div>
        </div>
    `;
    document.body.appendChild(overlay);

    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('closeBtn');
    const submitBtn = document.getElementById('submitBtn');
    const thankYouMessage = document.getElementById(' thankYouMessage');
    const donorForm = document.getElementById('donorForm');

    function openModal() {
        overlay.style.display = 'flex';
    }

    function closeModal() {
        overlay.style.display = 'none';
        thankYouMessage.style.display = 'none';
        donorForm.reset();
    }

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });

    // Form submission - prevent default and show thank you
    donorForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('nameInput').value;
        const email = document.getElementById('emailInput').value;
        const phone = document.getElementById('phoneInput').value;

        if (name && email && phone) {
            // Show thank you message instead of replacing modal
            thankYouMessage.style.display = 'block';
            thankYouMessage.innerHTML = `
                <h2>Thank You!</h2>
                <p>Dear ${name}, your registration is complete!</p>
                <p>We will contact you at ${email}</p>
            `;
        } else {
            alert('Please fill all fields');
        }
    });

    function renderCamps(filter) {
        const filterLower = filter.toLowerCase();
        const filteredCamps = camps.filter(camp => 
            camp.name.toLowerCase().includes(filterLower) ||
            camp.location.toLowerCase().includes(filterLower) ||
            camp.organizer.toLowerCase().includes(filterLower)
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
                <div class="camp-header">
                    <span class="emoji">🩸</span>
                    <span>${camp.name}</span>
                </div>
                <div class="camp-body">
                    <div class="field">
                        <span class="location-label">📍 Location</span>
                        <span>${camp.location}</span>
                    </div>
                    <div class="field">
                        <span class="address-label">📮 Pincode</span>
                        <span>${camp.pincode}</span>
                    </div>
                    <div class="field">
                        <span class="date-label">📅 Date</span>
                        <span>${camp.date}</span>
                    </div>
                    <div class="field">
                        <span class="time-label">⏰ Time</span>
                        <span>${camp.time}</span>
                    </div>
                    <div class="field">
                        <span class="organizer-label">👥 Organizer</span>
                        <span>${camp.organizer}</span>
                    </div>
                    <div class="field">
                        <span class="contact-label">📞 Contact</span>
                        <span>${camp.contact}</span>
                    </div>
                </div>
                <div class="camp-footer">
                    <button class="btn" onclick="openModal()">Register Now</button>
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