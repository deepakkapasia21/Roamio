// Indian Hotels Database
const INDIAN_HOTELS = {
    'Mumbai': [
        {
            name: 'Taj Mahal Palace',
            price: 15000,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
            description: 'Iconic luxury hotel with stunning views of the Gateway of India',
            amenities: ['Free WiFi', 'Swimming Pool', 'Spa', 'Multiple Restaurants', '24/7 Room Service'],
            location: 'Mumbai, India'
        },
        {
            name: 'The Oberoi',
            price: 12000,
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
            description: 'Modern luxury hotel with panoramic views of the Arabian Sea',
            amenities: ['Free WiFi', 'Gym', 'Restaurant', 'Bar', 'Spa'],
            location: 'Mumbai, India'
        },
        {
            name: 'ITC Maratha',
            price: 8000,
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
            description: 'Luxury hotel with authentic Indian hospitality',
            amenities: ['Free WiFi', 'Swimming Pool', 'Spa', 'Airport Shuttle', 'Restaurant'],
            location: 'Mumbai, India'
        }
    ],
    'Delhi': [
        {
            name: 'The Imperial',
            price: 13000,
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
            description: 'Historic luxury hotel in central Delhi',
            amenities: ['Free WiFi', 'Swimming Pool', 'Spa', 'Restaurant', 'Bar'],
            location: 'Delhi, India'
        },
        {
            name: 'The Leela Palace',
            price: 14000,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
            description: 'Luxury hotel with royal Indian architecture',
            amenities: ['Free WiFi', 'Swimming Pool', 'Spa', 'Multiple Restaurants', '24/7 Room Service'],
            location: 'Delhi, India'
        },
        {
            name: 'The Lalit',
            price: 7000,
            rating: 4.4,
            image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
            description: 'Modern hotel with excellent amenities',
            amenities: ['Free WiFi', 'Swimming Pool', 'Spa', 'Business Center', 'Restaurant'],
            location: 'Delhi, India'
        }
    ],
    'Bangalore': [
        {
            name: 'The Ritz-Carlton',
            price: 13000,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
            description: 'Luxury hotel with world-class amenities',
            amenities: ['Free WiFi', 'Swimming Pool', 'Spa', 'Multiple Restaurants', '24/7 Room Service'],
            location: 'Bangalore, India'
        },
        {
            name: 'Taj West End',
            price: 10000,
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
            description: 'Heritage hotel with lush gardens',
            amenities: ['Free WiFi', 'Swimming Pool', 'Fitness Center', 'Spa', 'Restaurant'],
            location: 'Bangalore, India'
        },
        {
            name: 'The Oberoi',
            price: 9000,
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
            description: 'Luxury hotel with modern amenities',
            amenities: ['Free WiFi', 'Swimming Pool', 'Spa', 'Business Center', 'Restaurant'],
            location: 'Bangalore, India'
        }
    ],
    'Hyderabad': [
        {
            name: 'Taj Falaknuma Palace',
            price: 20000,
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
            description: 'Royal palace turned luxury hotel',
            amenities: ['Free WiFi', 'Swimming Pool', 'Spa', 'Multiple Restaurants', '24/7 Room Service'],
            location: 'Hyderabad, India'
        },
        {
            name: 'ITC Kohenur',
            price: 8000,
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
            description: 'Modern luxury hotel in the heart of the city',
            amenities: ['Free WiFi', 'Swimming Pool', 'Spa', 'Restaurant', 'Business Center'],
            location: 'Hyderabad, India'
        }
    ],
    'Chennai': [
        {
            name: 'The Leela Palace',
            price: 12000,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
            description: 'Luxury hotel with stunning sea views',
            amenities: ['Free WiFi', 'Swimming Pool', 'Spa', 'Multiple Restaurants', '24/7 Room Service'],
            location: 'Chennai, India'
        },
        {
            name: 'ITC Grand Chola',
            price: 9000,
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
            description: 'Grand hotel with traditional architecture',
            amenities: ['Free WiFi', 'Swimming Pool', 'Spa', 'Multiple Restaurants', 'Business Center'],
            location: 'Chennai, India'
        }
    ]
};

// API Configuration
const API_CONFIG = {
    RAPIDAPI_KEY: '9b5b575259msh6fdc975e6690b0dp178195jsndaabb1745de5', // Replace with your RapidAPI key
    RAPIDAPI_HOST: 'booking-com15.p.rapidapi.com',
    RAPIDAPI_URL: 'https://booking-com15.p.rapidapi.com/v1'
};

// Popular Indian Cities with Coordinates
const INDIAN_CITIES = {
    'Mumbai': { lat: 19.0760, lon: 72.8777 },
    'Delhi': { lat: 28.7041, lon: 77.1025 },
    'Bangalore': { lat: 12.9716, lon: 77.5946 },
    'Hyderabad': { lat: 17.3850, lon: 78.4867 },
    'Chennai': { lat: 13.0827, lon: 80.2707 },
    'Kolkata': { lat: 22.5726, lon: 88.3639 },
    'Pune': { lat: 18.5204, lon: 73.8567 },
    'Ahmedabad': { lat: 23.0225, lon: 72.5714 },
    'Jaipur': { lat: 26.9124, lon: 75.7873 },
    'Goa': { lat: 15.2993, lon: 74.1240 }
};

// Mock hotel data for demonstration
const MOCK_HOTELS = {
    'Mumbai': [
        {
            name: 'Taj Mahal Palace',
            price: 15000,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
            description: 'Luxury hotel with stunning views of the Gateway of India',
            amenities: ['Free WiFi', 'Swimming Pool', 'Spa', 'Restaurant'],
            location: 'Mumbai, India'
        },
        {
            name: 'The Oberoi',
            price: 12000,
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
            description: 'Modern luxury hotel in the heart of Mumbai',
            amenities: ['Free WiFi', 'Gym', 'Restaurant', 'Bar'],
            location: 'Mumbai, India'
        }
    ],
    'Delhi': [
        {
            name: 'The Imperial',
            price: 13000,
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
            description: 'Historic luxury hotel in central Delhi',
            amenities: ['Free WiFi', 'Swimming Pool', 'Spa', 'Restaurant'],
            location: 'Delhi, India'
        }
    ]
};

// Authentication handling
document.addEventListener('DOMContentLoaded', function() {
    // Login form handling
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Simulate login (in a real app, this would be an API call)
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
            window.location.href = 'main.html';
        });
    }

    // Signup form handling
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            // Simulate signup (in a real app, this would be an API call)
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userName', name);
            window.location.href = 'main.html';
        });
    }

    // Check if user is logged in
    if (window.location.pathname.includes('main.html') && !localStorage.getItem('isLoggedIn')) {
        window.location.href = 'login.html';
    }

    // Update popular cities grid for Indian cities
    const citiesGrid = document.querySelector('.cities-grid');
    if (citiesGrid) {
        citiesGrid.innerHTML = Object.keys(INDIAN_CITIES).map(city => `
            <div class="city-card" data-city="${city}">
                <img src="https://source.unsplash.com/800x600/?${city.toLowerCase()},india" alt="${city}">
                <div class="city-info">
                    <h3>${city}</h3>
                    <p>Explore hotels in ${city}</p>
                </div>
            </div>
        `).join('');
    }

    // Initialize the page
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    document.getElementById('checkIn').value = today.toISOString().split('T')[0];
    document.getElementById('checkOut').value = tomorrow.toISOString().split('T')[0];

    // Add event listener to search form
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const location = document.getElementById('location').value;
            if (!location) {
                showError('Please enter a city name');
                return;
            }
            searchHotels();
        });
    }

    // Add event listeners to city cards
    const cityCards = document.querySelectorAll('.city-card');
    cityCards.forEach(card => {
        card.addEventListener('click', () => {
            const city = card.getAttribute('data-city');
            if (city) {
                document.getElementById('location').value = city;
                searchHotels();
            }
        });
    });
});

// Search Hotels Function
async function searchHotels() {
    const location = document.getElementById('location').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const guests = document.getElementById('guests').value;

    console.log('Searching hotels for:', { location, checkIn, checkOut, guests });

    if (!location || !checkIn || !checkOut || !guests) {
        showError('Please fill in all fields');
        return;
    }

    try {
        showLoading();
        
        // First, get the location ID
        const locationResponse = await fetch(
            `${API_CONFIG.RAPIDAPI_URL}/hotels/locations?name=${location}&locale=en-gb`,
            {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': API_CONFIG.RAPIDAPI_KEY,
                    'X-RapidAPI-Host': API_CONFIG.RAPIDAPI_HOST
                }
            }
        );

        if (!locationResponse.ok) {
            throw new Error('Failed to find location');
        }

        const locationData = await locationResponse.json();
        console.log('Location API Response:', locationData);

        if (!locationData || locationData.length === 0) {
            throw new Error('Location not found');
        }

        const locationId = locationData[0].dest_id;

        // Then, search for hotels
        const hotelsResponse = await fetch(
            `${API_CONFIG.RAPIDAPI_URL}/hotels/search?checkin_date=${checkIn}&checkout_date=${checkOut}&units=metric&room_number=1&adults_number=${guests}&order_by=popularity&dest_id=${locationId}&dest_type=city&locale=en-gb&filter_by_currency=INR`,
            {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': API_CONFIG.RAPIDAPI_KEY,
                    'X-RapidAPI-Host': API_CONFIG.RAPIDAPI_HOST
                }
            }
        );

        if (!hotelsResponse.ok) {
            throw new Error('Failed to fetch hotels');
        }

        const hotelsData = await hotelsResponse.json();
        console.log('Hotels API Response:', hotelsData);

        if (!hotelsData || !hotelsData.result || hotelsData.result.length === 0) {
            throw new Error('No hotels found in this location');
        }

        // Process hotel data
        const hotels = hotelsData.result.map(hotel => ({
            name: hotel.hotel_name,
            price: hotel.min_total_price,
            rating: hotel.review_score / 2, // Convert 10-point scale to 5-point scale
            image: hotel.main_photo_url || getHotelImage(hotel.hotel_name, location),
            description: hotel.hotel_name_trans || 'A comfortable stay with modern amenities',
            amenities: hotel.hotel_facilities || ['Free WiFi', 'Swimming Pool', 'Restaurant', 'Spa'],
            location: `${location}, India`,
            checkIn: checkIn,
            checkOut: checkOut,
            guests: guests
        }));

        displayHotels(hotels);
    } catch (error) {
        console.error('Error:', error);
        showError('Failed to fetch hotel data. Please try again.');
    } finally {
        hideLoading();
    }
}

// Helper function to get hotel image
function getHotelImage(hotelName, location) {
    if (hotelName) {
        // Try to get a specific image for known hotels
        const hotelImages = {
            'Taj Mahal Palace': 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
            'The Oberoi': 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
            'ITC Maratha': 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
            'The Leela Palace': 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
            'The Imperial': 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
            'The Lalit': 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
            'Taj West End': 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
            'Taj Falaknuma Palace': 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
            'ITC Kohenur': 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
            'ITC Grand Chola': 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4'
        };
        
        if (hotelImages[hotelName]) {
            return hotelImages[hotelName];
        }
    }
    
    // Fallback to location-based image
    const locationImages = {
        'Mumbai': 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        'Delhi': 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
        'Bangalore': 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
        'Hyderabad': 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        'Chennai': 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa'
    };
    
    return locationImages[location] || 'https://images.unsplash.com/photo-1566073771259-6a8506099945';
}

// Display Hotels Function
function displayHotels(hotels) {
    const hotelsContainer = document.getElementById('hotelsContainer');
    if (!hotelsContainer) {
        console.error('Hotels container not found');
        return;
    }

    hotelsContainer.innerHTML = '';

    hotels.forEach(hotel => {
        const hotelCard = document.createElement('div');
        hotelCard.className = 'hotel-card';
        hotelCard.innerHTML = `
            <div class="hotel-image" style="background-image: url('${hotel.image}')">
                <div class="hotel-rating">${hotel.rating} ★</div>
            </div>
            <div class="hotel-info">
                <h3>${hotel.name}</h3>
                <p class="location">${hotel.location}</p>
                <p class="description">${hotel.description}</p>
                <div class="amenities">
                    ${hotel.amenities.map(amenity => `<span class="amenity">${amenity}</span>`).join('')}
                </div>
                <div class="hotel-footer">
                    <span class="price">₹${hotel.price}/night</span>
                    <button class="btn btn-primary" onclick="bookHotel('${hotel.name}')">Book Now</button>
                </div>
            </div>
        `;
        hotelsContainer.appendChild(hotelCard);
    });
}

// Utility Functions
function showLoading() {
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="spinner"></div><p>Searching hotels...</p>';
    document.body.appendChild(loading);
}

function hideLoading() {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.remove();
    }
}

function showError(message) {
    const error = document.createElement('div');
    error.className = 'error';
    error.innerHTML = `<p>${message}</p>`;
    document.body.appendChild(error);
    setTimeout(() => error.remove(), 3000);
}

// Function to handle hotel booking
function bookHotel(hotelName) {
    if (!localStorage.getItem('isLoggedIn')) {
        window.location.href = 'login.html';
        return;
    }

    alert(`Booking confirmed for ${hotelName}!`);
}

// Add some additional styles for the loading and error states
const style = document.createElement('style');
style.textContent = `
    .loading, .error {
        text-align: center;
        padding: 2rem;
        font-size: 1.2rem;
    }
    
    .error {
        color: red;
    }
    
    .popular-cities {
        padding: 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .popular-cities h2 {
        text-align: center;
        margin-bottom: 2rem;
    }
    
    .cities-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
    }
    
    .city-card {
        cursor: pointer;
        border-radius: 1rem;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
    }
    
    .city-card:hover {
        transform: translateY(-5px);
    }
    
    .city-card img {
        width: 100%;
        height: 150px;
        object-fit: cover;
    }
    
    .city-card h3 {
        padding: 1rem;
        text-align: center;
        background-color: white;
    }

    .hotel-image-container {
        position: relative;
        height: 200px;
        overflow: hidden;
        border-radius: 1rem 1rem 0 0;
    }

    .hotel-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .hotel-card:hover .hotel-image {
        transform: scale(1.05);
    }

    .hotel-rating {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 2rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .hotel-info {
        padding: 1.5rem;
    }

    .hotel-info h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.2rem;
    }

    .location {
        color: #666;
        margin-bottom: 0.5rem;
    }

    .price {
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--primary-color);
        margin: 1rem 0;
    }

    .description {
        color: #666;
        margin-bottom: 1rem;
        line-height: 1.5;
    }

    .amenities {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 1rem 0;
    }

    .amenity {
        background-color: var(--light-gray);
        padding: 0.3rem 0.8rem;
        border-radius: 1rem;
        font-size: 0.8rem;
    }

    .hotel-actions {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
    }

    .hotel-actions button {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }
`;
document.head.appendChild(style); 