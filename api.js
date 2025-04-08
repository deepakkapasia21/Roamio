// Mock Database
const MOCK_HOTELS = {
    delhi: [
        {
            id: 'del001',
            name: 'The Imperial New Delhi',
            address: 'Janpath Lane, Connaught Place',
            city: 'Delhi',
            rating: 4.8,
            reviewCount: 1250,
            price: {
                currency: 'INR',
                value: 15000,
                originalValue: 18000
            },
            images: ['https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3'],
            amenities: ['Swimming Pool', 'Spa', 'Fine Dining', '5 Star', 'Luxury'],
            latitude: 28.6280,
            longitude: 77.2189,
            description: 'Luxury 5-star hotel with colonial elegance',
            available_rooms: 15
        },
        {
            id: 'del002',
            name: 'The Taj Palace',
            address: 'Diplomatic Enclave, Chanakyapuri',
            city: 'Delhi',
            rating: 4.7,
            reviewCount: 980,
            price: {
                currency: 'INR',
                value: 12000,
                originalValue: 14000
            },
            images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3'],
            amenities: ['Pool', 'Spa', 'Multiple Restaurants', 'Business Center'],
            latitude: 28.6011,
            longitude: 77.1702,
            description: 'Traditional Indian luxury with modern amenities',
            available_rooms: 20
        }
    ],
    mumbai: [
        {
            id: 'mum001',
            name: 'The Taj Mahal Palace',
            address: 'Apollo Bunder, Colaba',
            city: 'Mumbai',
            rating: 4.9,
            reviewCount: 2100,
            price: {
                currency: 'INR',
                value: 18000,
                originalValue: 22000
            },
            images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3'],
            amenities: ['Sea View', 'Heritage Property', 'Spa', 'Pool', 'Fine Dining', '24/7 Butler'],
            latitude: 18.9217,
            longitude: 72.8332,
            description: 'Iconic seafront hotel with rich history',
            available_rooms: 10
        },
        {
            id: 'mum002',
            name: 'The Oberoi Mumbai',
            address: 'Nariman Point',
            city: 'Mumbai',
            rating: 4.8,
            reviewCount: 1500,
            price: {
                currency: 'INR',
                value: 16000,
                originalValue: 19000
            },
            images: ['https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3'],
            amenities: ['Ocean View', 'Luxury Spa', '24/7 Butler', 'Fine Dining', 'Business Center'],
            latitude: 18.9267,
            longitude: 72.8200,
            description: 'Contemporary luxury with ocean views',
            available_rooms: 25
        },
        {
            id: 'mum003',
            name: 'JW Marriott Mumbai Juhu',
            address: 'Juhu Tara Road, Juhu',
            city: 'Mumbai',
            rating: 4.7,
            reviewCount: 1800,
            price: {
                currency: 'INR',
                value: 14500,
                originalValue: 17000
            },
            images: ['https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3'],
            amenities: ['Beach Access', 'Spa', 'Multiple Pools', 'Beach View Rooms', 'Premium Restaurants'],
            latitude: 19.0876,
            longitude: 72.8258,
            description: 'Beachfront luxury hotel in the heart of Juhu',
            available_rooms: 30
        },
        {
            id: 'mum004',
            name: 'Four Seasons Hotel Mumbai',
            address: 'Worli, Mumbai',
            city: 'Mumbai',
            rating: 4.6,
            reviewCount: 1200,
            price: {
                currency: 'INR',
                value: 13000,
                originalValue: 15500
            },
            images: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3'],
            amenities: ['City View', 'Rooftop Bar', 'Spa', 'Business Center', 'Fine Dining'],
            latitude: 18.9940,
            longitude: 72.8258,
            description: 'Modern luxury in the business district',
            available_rooms: 40
        },
        {
            id: 'mum005',
            name: 'The St. Regis Mumbai',
            address: 'Lower Parel, Mumbai',
            city: 'Mumbai',
            rating: 4.8,
            reviewCount: 1600,
            price: {
                currency: 'INR',
                value: 15500,
                originalValue: 18500
            },
            images: ['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3'],
            amenities: ['Butler Service', 'Rooftop Pool', 'Luxury Spa', 'Multiple Restaurants', 'Art Collection'],
            latitude: 18.9929,
            longitude: 72.8255,
            description: 'Timeless luxury in the heart of Mumbai',
            available_rooms: 20
        },
        {
            id: 'mum006',
            name: 'Trident Bandra Kurla',
            address: 'Bandra Kurla Complex',
            city: 'Mumbai',
            rating: 4.5,
            reviewCount: 950,
            price: {
                currency: 'INR',
                value: 11000,
                originalValue: 13000
            },
            images: ['https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3'],
            amenities: ['Business Center', 'Spa', 'Fine Dining', 'Modern Rooms', 'Conference Facilities'],
            latitude: 19.0692,
            longitude: 72.8679,
            description: 'Contemporary luxury in business district',
            available_rooms: 35
        },
        {
            id: 'mum007',
            name: 'Sofitel Mumbai BKC',
            address: 'Bandra Kurla Complex',
            city: 'Mumbai',
            rating: 4.6,
            reviewCount: 1100,
            price: {
                currency: 'INR',
                value: 12500,
                originalValue: 14500
            },
            images: ['https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3'],
            amenities: ['French Restaurant', 'Luxury Spa', 'Pool', 'Business Center', 'Art Gallery'],
            latitude: 19.0696,
            longitude: 72.8656,
            description: 'French luxury in the heart of Mumbai',
            available_rooms: 28
        }
    ],
    bangalore: [
        {
            id: 'blr001',
            name: 'The Leela Palace',
            address: 'Old Airport Road',
            city: 'Bangalore',
            rating: 4.7,
            reviewCount: 890,
            price: {
                currency: 'INR',
                value: 14000,
                originalValue: 16000
            },
            images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3'],
            amenities: ['Rooftop Pool', 'Business Center', 'Spa'],
            latitude: 12.9606,
            longitude: 77.6484,
            description: 'Luxury business hotel with traditional charm',
            available_rooms: 30
        }
    ],
    chennai: [
        {
            id: 'chn001',
            name: 'ITC Grand Chola',
            address: 'Mount Road',
            city: 'Chennai',
            rating: 4.6,
            reviewCount: 780,
            price: {
                currency: 'INR',
                value: 13000,
                originalValue: 15000
            },
            images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3'],
            amenities: ['Multiple Restaurants', 'Spa', 'Pool'],
            latitude: 13.0827,
            longitude: 80.2707,
            description: 'Palatial luxury hotel with world-class amenities',
            available_rooms: 20
        }
    ]
};

// Mock Bookings Database
let MOCK_BOOKINGS = [];

/**
 * Search for hotels based on location and dates
 * @param {Object} params - Search parameters
 * @param {string} params.city - City name
 * @param {string} params.checkIn - Check-in date (YYYY-MM-DD)
 * @param {string} params.checkOut - Check-out date (YYYY-MM-DD)
 * @param {number} params.adults - Number of adults
 * @param {number} params.rooms - Number of rooms
 * @returns {Promise} - Returns search results
 */
async function searchHotels(params) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const cityLower = params.city.toLowerCase();
            const hotels = MOCK_HOTELS[cityLower] || [];
            resolve({ hotels });
        }, 500); // Simulate network delay
    });
}

/**
 * Get detailed information about a specific hotel
 * @param {string} hotelId - The hotel ID
 * @returns {Promise} - Returns hotel details
 */
async function getHotelDetails(hotelId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hotel = Object.values(MOCK_HOTELS)
                .flat()
                .find(h => h.id === hotelId);

            if (!hotel) {
                reject(new Error('Hotel not found'));
                return;
            }

            resolve(hotel);
        }, 300);
    });
}

/**
 * Create a new booking
 * @param {Object} bookingData - Booking information
 * @param {string} bookingData.hotelId - Hotel ID
 * @param {string} bookingData.checkIn - Check-in date
 * @param {string} bookingData.checkOut - Check-out date
 * @param {number} bookingData.rooms - Number of rooms
 * @param {number} bookingData.adults - Number of adults
 * @param {Object} bookingData.guest - Guest information
 * @returns {Promise} - Returns booking confirmation
 */
async function createBooking(bookingData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hotel = Object.values(MOCK_HOTELS)
                .flat()
                .find(h => h.id === bookingData.hotelId);

            if (!hotel) {
                reject(new Error('Hotel not found'));
                return;
            }

            if (hotel.available_rooms < bookingData.rooms) {
                reject(new Error('Not enough rooms available'));
                return;
            }

            const booking = {
                id: `BK${Date.now()}`,
                ...bookingData,
                status: 'confirmed',
                hotelName: hotel.name,
                totalAmount: hotel.price.value * bookingData.rooms,
                createdAt: new Date().toISOString(),
                confirmationNumber: Math.random().toString(36).substring(2, 10).toUpperCase()
            };

            MOCK_BOOKINGS.push(booking);
            hotel.available_rooms -= bookingData.rooms;

            resolve(booking);
        }, 800);
    });
}

/**
 * Get booking details
 * @param {string} bookingId - Booking ID
 * @returns {Promise} - Returns booking details
 */
async function getBooking(bookingId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const booking = MOCK_BOOKINGS.find(b => b.id === bookingId);
            if (!booking) {
                reject(new Error('Booking not found'));
                return;
            }
            resolve(booking);
        }, 300);
    });
}

/**
 * Cancel booking
 * @param {string} bookingId - Booking ID
 * @returns {Promise} - Returns cancellation confirmation
 */
async function cancelBooking(bookingId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bookingIndex = MOCK_BOOKINGS.findIndex(b => b.id === bookingId);
            if (bookingIndex === -1) {
                reject(new Error('Booking not found'));
                return;
            }

            const booking = MOCK_BOOKINGS[bookingIndex];
            const hotel = Object.values(MOCK_HOTELS)
                .flat()
                .find(h => h.id === booking.hotelId);

            if (hotel) {
                hotel.available_rooms += booking.rooms;
            }

            booking.status = 'cancelled';
            booking.cancelledAt = new Date().toISOString();

            resolve({
                message: 'Booking cancelled successfully',
                booking
            });
        }, 500);
    });
}

/**
 * Search for locations (cities)
 * @param {string} query - Search query
 * @returns {Promise} - Returns location suggestions
 */
async function searchLocations(query) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const cities = Object.keys(MOCK_HOTELS)
                .filter(city => city.toLowerCase().includes(query.toLowerCase()))
                .map(city => ({
                    id: city,
                    name: city.charAt(0).toUpperCase() + city.slice(1),
                    type: 'city',
                    country: 'India'
                }));
            resolve(cities);
        }, 300);
    });
}

// Export the API functions
const BookingAPI = {
    searchHotels,
    getHotelDetails,
    createBooking,
    getBooking,
    cancelBooking,
    searchLocations
};

// Make the API available globally
window.BookingAPI = BookingAPI;

export default BookingAPI; 