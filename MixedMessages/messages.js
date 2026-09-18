function getMixedMessages() {
    const course = getCourse();
    const weather = getWeather();
    
    const greetings = ["You are playing at: " + course, "The weather is: " + weather];
    return greetings;
}

const getCourse = () => {
    const pgaTourCourses = [
    "Augusta National Golf Club",
    "Pebble Beach Golf Links",
    "Torrey Pines Golf Course",
    "Bethpage Black",
    "Pinehurst No. 2",
    "TPC Sawgrass",
    "Bay Hill Club & Lodge",
    "Innisbrook Resort",
    "TPC Scottsdale",
    "Riviera Country Club",
    "Quail Hollow Club",
    "The Club at Nine Bridges",
    "Muirfield Village Golf Club",
    "Harbour Town Golf Links",
    "TPC Charlotte",
    "Waialae Country Club",
    "Sentry Tournament of Champions",
    "The Genesis Invitational venue",
    "The Players Stadium Course",
    "Oak Hill Country Club",
    "Valhalla Golf Club",
    "Whistling Straits",
    "Bellerive Country Club",
    "Royal Troon Golf Club",
    "The Old Course at St Andrews",
    "Merion Golf Club",
    "Brookline Country Club",
    "TPC Boston",
    "The Country Club",
    "East Lake Golf Club",
    "Cypress Point Club",
    "Spyglass Hill Golf Course",
    "Seminole Golf Club",
    "TPC River Highlands",
    "Firestone Country Club",
    "Kiawah Island Ocean Course",
    "Sherwood Country Club",
    "The Golf Club at South Hampton",
    "Hilton Head Island Harbour Town",
    "Sea Island Golf Club",
    "PGA National Champion Course",
    "Congressional Country Club",
    "LACC Riviera",
    "Auburn Hills Country Club",
    "Southwind Country Club",
    "Troon North",
    "Wyndham Championship course",
    "The Championship Course at TPC",
    "La Quinta Resort & Club",
    "St. Andrews Bay Golf Club",
    "Mammoth Dunes",
    "The Bear Trace at Big Cedar",
    "Blue Monster at Trump National"
    ];

    return pgaTourCourses[Math.floor(Math.random() * pgaTourCourses.length)];
}

const getWeather = () => {
    const weatherConditions = [
    "Sunny",
    "Partly Cloudy",
    "Overcast",
    "Rainy",
    "Stormy",
    "Windy",
    "Foggy"
    ];

    return weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
}

console.log(getMixedMessages());