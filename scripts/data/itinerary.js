export const day1 = {
  name: "Day 1 (Tai Po)",
  color: "#3e6b33",
  center: [22.4465, 114.1698],
  zoom: 14,
  stops: [
    {
      id: "d1-hotel",
      category: "hotel",
      title: "Royal Park Hotel",
      subtitle: "Trip starting point",
      latlng: [22.379924625747798, 114.18855144136442],
      story: "Royal Park Hotel works well as a tourist base in Sha Tin because it sits right beside Sha Tin Station, links easily into New Town Plaza, and keeps both the riverside district and cross-town transport within easy reach. Official hotel information highlights the location as one of its biggest advantages, with quick rail access, nearby shopping, and easy connections to the cultural stops built into this two-day route.",
      routeHeading: "Starting from Royal Park Hotel",
      routeSummary: "For Day 1, use the hotel as a comfortable Sha Tin base, then head straight to Sha Tin Station to begin the Tai Po route by rail.",
      steps: [
        "Leave the hotel and follow the connected pedestrian route toward Sha Tin Station.",
        "Use the station as your main starting hub for the MTR ride to Tai Po Market.",
        "If needed, pick up breakfast, water, or extra supplies in the plaza area before leaving Sha Tin."
      ],
      photos: ["./assets/photos/hotel_1.jpg", "./assets/photos/hotel_2.jpg", "./assets/photos/main_hotel.avif"],
      audio: [],
      tips: [
        "Staying beside rail and walkable services helps reduce short taxi trips and supports lower-carbon city travel.",
        "Using a connected hotel base supports SDG 11 by making it easier to explore Sha Tin through public space, rail access, and compact urban movement.",
        "Packing reusable bottles and buying only what you need before departure supports SDG 12 by reducing single-use waste during the day."
      ]
    },
    {
      id: "d1-shatin-mtr",
      category: "mtr",
      title: "Sha Tin Station",
      subtitle: "Start point by MTR",
      latlng: [22.384057872413763, 114.18796060900773],
      story: "Main MTR departure point from the Royal Park Hotel area, linking Sha Tin directly with Tai Po Market Station.",
      steps: [
        "Walk: Royal Park Hotel → Sha Tin Station",
        "MTR: Sha Tin Station → Tai Po Market Station"
      ],
      photos: [],
      audio: [],
      tips: ["Rail transit produces less per-person impact than private cars."]
    },
    {
      id: "d1-tp-mtr",
      category: "mtr",
      title: "Tai Po Market Station",
      subtitle: "Main transfer hub",
      latlng: [22.444644933229252, 114.170447270816],
      story: "Main arrival point in Tai Po and the key transfer hub for buses and minibuses used throughout Day 1.",
      steps: [
        "MTR arrival: Tai Po Market Station",
        "Walk to Tai Po Market Station Bus Terminus"
      ],
      photos: [],
      audio: [],
      tips: ["Using one transfer hub cuts down on repeated extra journeys and keeps the day more transport-efficient."]
    },
    {
      id: "d1-bus-terminus",
      category: "bus",
      title: "Tai Po Market Station Bus Terminus",
      subtitle: "Board KMB 64K here",
      latlng: [22.44403862026315, 114.16943657191885],
      story: "Main bus boarding point for Lam Tsuen Wishing Tree, making it the first major transport connection after arriving in Tai Po.",
      steps: [
        "Board: KMB 64K",
        "Direction: Fong Ma Po Road / Lam Tsuen"
      ],
      photos: [],
      audio: [],
      tips: ["Combining MTR with public bus travel supports lower-carbon tourism."]
    },
    {
      id: "d1-fongmapo",
      category: "bus",
      title: "Fong Ma Po Road",
      subtitle: "Bus stop for Lam Tsuen Wishing Tree",
      latlng: [22.455548684264315, 114.14236082066064],
      story: "This is the alighting point for visitors heading to Lam Tsuen Wishing Tree.",
      steps: [
        "Alight: Fong Ma Po Road",
        "Walk to Lam Tsuen Wishing Tree"
      ],
      photos: [],
      audio: [],
      tips: ["Using designated stops instead of ad hoc drop-offs helps manage visitor flow and reduces unnecessary roadside disturbance."]
    },
    {
      id: "d1-lamtsuen",
      category: "tree",
      title: "Lam Tsuen Wishing Tree",
      subtitle: "Cultural stop",
      latlng: [22.457042875730743, 114.14248778332545],
      story: "A well-known New Territories heritage attraction where local custom, wish-making traditions, and community identity come together.",
      steps: [
        "Board: Tai Po Market Station Bus Terminus",
        "Bus: KMB 64K",
        "Alight: Fong Ma Po Road",
        "Walk to Lam Tsuen Wishing Tree"
      ],
      photos: [
        "./assets/photos/tree_1.jpg", "./assets/photos/tree_2.jpg", "./assets/photos/tree_3.jpg", "./assets/photos/tree_4.jpg",
        "./assets/photos/tree_5.jpg", "./assets/photos/tree_6.jpg", "./assets/photos/tree_7.jpg", "./assets/photos/tree_8.jpg",
        "./assets/photos/tree_9.jpg", "./assets/photos/tree_10.jpg", "./assets/photos/tree_11.jpg", "./assets/photos/tree_12.jpg",
        "./assets/photos/tree_13.jpg", "./assets/photos/tree_14.jpg", "./assets/photos/tree_15.jpg", "./assets/photos/tree_16.jpg"
      ],
      audio: [],
      tips: [
        "Respect the site and keep waste to a minimum.",
        "Sustainable tourism here supports SDG 11 by protecting cultural heritage.",
        "Responsible visitor behavior also supports SDG 12 through lower-waste consumption."
      ]
    },
    {
      id: "d1-paktaitoyan",
      category: "hiking",
      title: "Pak Tai To Yan",
      subtitle: "Tai Po ridge walk with long open views",
      latlng: [22.467113267435742, 114.13326730859701],
      story: "Pak Tai To Yan is one of the exposed high points on the Tai To Yan ridge, a grassy upland route that Hong Kong Tourism Board describes as a sweeping mountain path with broad New Territories views. The route is known for its long ridgeline feel, open scenery, and more demanding climbs than the gentler cultural stops in Tai Po.",
      routeSummary: "From the Tai Po day cluster, the most practical access is via Tai Po Market Station and KMB 64K toward Kadoorie Farm, then the climb begins on Tai To Yan Path.",
      difficulty: "Difficult",
      distance: "About 10 km",
      duration: "About 4 hours",
      steps: [
        "Start from Tai Po Market Station.",
        "Take KMB 64K and get off near Kadoorie Farm / Tai To Yan trail access.",
        "Follow Tai To Yan Path up the ridge toward Tai To Yan and continue to Pak Tai To Yan.",
        "Return by descending toward Fanling or retracing the ridge only if weather and energy still allow."
      ],
      photos: [
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pak%20Tai%20To%20Yan%20Summit.jpg"
      ],
      footprint: "Estimated footprint: 0.4-1.1 kg CO2e if reached by shared bus from Tai Po and completed on foot.",
      tips: [
        "Stay on established trail lines to avoid widening the ridge path and damaging hillside vegetation.",
        "Pack out all litter and snack wrappers, because exposed upland routes recover slowly once waste or trampling builds up.",
        "Low-impact hiking here supports SDG 15 through care for natural landscapes and also supports SDG 12 through responsible outdoor travel habits."
      ]
    },
    {
      id: "d1-ngtungchai",
      category: "hiking",
      title: "Ng Tung Chai Waterfalls",
      subtitle: "Forest trail to four waterfalls below Tai Mo Shan",
      latlng: [22.427151900991586, 114.13172579800211],
      story: "Ng Tung Chai Waterfalls is one of the best-known waterfall hikes in Hong Kong, with Bottom, Middle, Main, and Scatter Falls stepping upward through lush foothill forest below Tai Mo Shan. Hong Kong Tourism Board describes it as a scenic but demanding route where the cooling waterfall views are the reward for a steady uphill climb.",
      routeSummary: "From Tai Po, the official access is straightforward: go to Tai Po Market Station, take KMB 64K, get off at Ng Tung Chai, and follow the signed trail in from the road.",
      difficulty: "Difficult",
      distance: "About 7 km",
      duration: "About 3 - 4 hours",
      steps: [
        "Start from Tai Po Market Station.",
        "Walk to the adjacent bus stop and take KMB 64K toward Yuen Long.",
        "Get off at Ng Tung Chai and follow the signs past the monastery toward Bottom Fall.",
        "Continue uphill through the waterfall sequence if conditions are safe, then return to the same roadside stop for the bus back to Tai Po."
      ],
      photos: [
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ng%20Tung%20Chai%20Waterfalls%2C%20Hong%20Kong.jpg",
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Old%20Temple%2C%20Ng%20Tung%20Chai%20Waterfalls%2C%20Hong%20Kong.jpg",
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Old%20Temple%2C%20Ng%20Tung%20Chai%20Waterfalls%2C%20Hong%20Kong%20-%2048114780618.jpg"
      ],
      footprint: "Estimated footprint: 0.4-1.0 kg CO2e when combined with bus access from Tai Po and the hike itself.",
      tips: [
        "Waterfall paths are sensitive to erosion, so avoid stepping off the main route or climbing on wet rock beside the formal trail.",
        "Bring reusables from town and avoid leaving drink bottles or food packaging in the forested stream corridor.",
        "Careful trail behaviour here supports SDG 15 by reducing pressure on a fragile woodland and stream environment."
      ]
    },
    {
      id: "d1-manmo",
      category: "temple",
      title: "Fu Shin Street Market + Man Mo Temple",
      subtitle: "Temple inside a market",
      latlng: [22.44926799019482, 114.16466662675286],
      story: "This stop combines daily market life with religious heritage. Man Mo Temple sits within the Fu Shin Street area, showing how culture in Tai Po is still embedded in everyday community space rather than isolated from it.",
      steps: [
        "Return from Lam Tsuen toward Tai Po town",
        "Walk to Fu Shin Street Market",
        "Explore market → enter Man Mo Temple area"
      ],
      photos: [
        "./assets/photos/manmo_1.jpg",
        "./assets/photos/manmo_2.jpg",
        "./assets/photos/manmo_3.jpg",
        "./assets/photos/manmo_4.jpg",
        "./assets/photos/manmo_5.jpg"
      ],
      audio: [],
      tips: [
        "Supporting traditional market districts helps sustain community-based urban life.",
        "This stop relates to SDG 11 through preservation of living heritage and local identity."
      ]
    },
    {
      id: "d1-railway",
      category: "railway",
      title: "Hong Kong Railway Museum",
      subtitle: "Walkable old-town cluster",
      latlng: [22.44780136076287, 114.1644481670936],
      story: "A transport-history museum located within Tai Po’s walkable old-town cluster, making it an easy and low-impact addition to the route.",
      steps: ["Walk from Fu Shin Street area to Hong Kong Railway Museum."],
      photos: [
        "./assets/photos/railway_1.jpg",
        "./assets/photos/railway_2.jpg",
        "./assets/photos/railway_3.jpg",
        "./assets/photos/railway_4.jpg"
      ],
      audio: [],
      tips: [
        "Walking between clustered attractions reduces transport emissions.",
        "The museum also supports SDG 11 by preserving transport heritage and public memory."
      ]
    },
    {
      id: "d1-buddhas",
      category: "temple",
      title: "Ten Thousand Buddhas Monastery",
      subtitle: "Sha Tin hillside monastery stop",
      latlng: [22.387802743469916, 114.18486333069305],
      story: "Ten Thousand Buddhas Monastery is a hillside temple complex above Sha Tin, known for its long stair approach, gold Buddha statues, and layered pagodas and halls. It works well as the last cultural stop of Day 1 after returning from Tai Po.",
      steps: [
        "Return to Sha Tin by MTR",
        "Walk from Sha Tin Station toward the monastery entrance",
        "Climb the hillside stairway",
        "Explore the monastery terraces and temple halls"
      ],
      photos: [
        "./assets/photos/buddhas_1.jpg",
        "./assets/photos/buddhas_2.jpg",
        "./assets/photos/buddhas_3.jpg",
        "./assets/photos/buddhas_4.jpg",
        "./assets/photos/buddhas_5.jpg",
        "./assets/photos/buddhas_6.jpg",
        "./assets/photos/buddhas_8.jpg",
        "./assets/photos/buddhas_9.jpg",
        "./assets/photos/buddhas_10.jpg",
        "./assets/photos/buddhas_11.jpg",
        "./assets/photos/buddhas_12.jpg",
        "./assets/photos/buddhas_13.jpg",
        "./assets/photos/buddhas_14.jpg",
        "./assets/photos/buddhas_15.jpg"
      ],
      panoramas: [
        { src: "./assets/photos/360/panorama_monastery_1.JPG", label: "Entrance stairway" },
        { src: "./assets/photos/360/panorama_monastery_2.JPG", label: "Upper monastery terrace" },
        { src: "./assets/photos/360/panorama_monastery_3.JPG", label: "Pagoda and temple view" }
      ],
      audio: [],
      tips: [
        "Respectful behaviour in temple spaces supports SDG 11 by helping protect living heritage, historic structures, and shared cultural memory.",
        "Keeping noise low and carrying out all litter helps preserve the calmer hillside setting for other visitors and worshippers.",
        "Choosing rail and walking access to the monastery instead of point-to-point car trips keeps the visit lower-impact."
      ]
    }
  ]
};

export const day2 = {
  name: "Day 2 (Sha Tin)",
  color: "#7ea35a",
  center: [22.3798, 114.1878],
  zoom: 15,
  stops: [
    {
      id: "d2-hotel",
      category: "hotel",
      title: "Royal Park Hotel",
      subtitle: "Trip starting point",
      latlng: [22.379924625747798, 114.18855144136442],
      story: "On the Sha Tin day, Royal Park Hotel feels less like a transit node and more like a comfortable base in the middle of the district. With the river, Sha Tin Town Hall, New Town Plaza, and the museum-temple cluster all nearby, it gives visitors a much easier start to a relaxed day of walking, sightseeing, and short hops between attractions.",
      routeHeading: "Starting from Royal Park Hotel",
      routeSummary: "For Day 2, most places can be reached on foot from the hotel, so it works well as a slower-paced base for a local Sha Tin day.",
      steps: [
        "Step out from the hotel toward the Shing Mun River and civic core of Sha Tin.",
        "Walk to the Heritage Museum first, then continue on foot to Che Kung Temple, the river promenade, or back toward the plaza area.",
        "Return here easily at the end of the day without needing a long transfer."
      ],
      photos: ["./assets/photos/hotel_1.jpg", "./assets/photos/hotel_2.jpg", "./assets/photos/main_hotel.avif"],
      audio: [],
      tips: [
        "A hotel base beside rail, footbridges, and everyday services helps make the whole Sha Tin day more walkable and lower-carbon.",
        "This kind of compact urban stay supports SDG 11 by encouraging access through public transport and connected public space instead of car-dependent movement.",
        "Choosing a reusable-item routine from the hotel, such as refillables and lighter daily purchasing, supports SDG 12 during the trip."
      ]
    },
    {
      id: "d2-heritage",
      category: "museum",
      title: "Hong Kong Heritage Museum",
      subtitle: "Main Day 2 attraction",
      latlng: [22.37686464076839, 114.18568034099643],
      story: "Hong Kong Heritage Museum is one of the easiest major museums to enjoy in Sha Tin, both because of its calm riverside setting and because the museum itself is designed as more than a single-topic visit. Hong Kong Tourism Board describes it as a large museum inspired by the layout of a traditional siheyuan courtyard compound, with twelve galleries exploring Hong Kong culture and the wider South China region. Highlights noted by official sources include Cantonese opera, Lingnan painting, and the well-known Jin Yong gallery, which together make the museum feel broad, local, and tourist-friendly rather than overly academic.",
      routeHeading: "Getting there from Royal Park Hotel",
      routeSummary: "The museum is one of the easiest stops on the Sha Tin day and works best as the first major visit before moving on to the temple and riverfront.",
      steps: [
        "Leave Royal Park Hotel and walk toward Man Lam Road and the museum area.",
        "Enter the museum complex and begin with the permanent galleries if you want the best overview of Hong Kong culture.",
        "Check whether any temporary exhibition is on during your visit, then continue toward the riverside or Che Kung Temple afterward."
      ],
      photos: ["./assets/photos/museum_1.jpg", "./assets/photos/museum_2.jpg", "./assets/photos/museum_3.jpg"],
      audio: [],
      tips: [
        "Museums directly support SDG 11 by safeguarding cultural heritage and making local history accessible to the public.",
        "Choosing a museum stop within a walkable Sha Tin cluster keeps the day culturally rich without adding much transport impact.",
        "Supporting heritage venues also strengthens the long-term case for preserving local collections, stories, and community identity."
      ]
    },
    {
      id: "d2-chekung",
      category: "temple",
      title: "Sha Tin Che Kung Temple",
      subtitle: "Updated cultural stop",
      latlng: [22.3749, 114.1866],
      story: "One of Sha Tin’s best-known cultural landmarks, Che Kung Temple is a popular heritage site where traditional beliefs, local customs, and everyday community life still come together.",
      steps: ["Walk from museum area toward Che Kung Temple."],
      photos: [
        "./assets/photos/chekung_1.jpg",
        "./assets/photos/chekung_2.jpg",
        "./assets/photos/chekung_3.jpg",
        "./assets/photos/chekung_4.jpg",
        "./assets/photos/chekung_5.jpg",
        "./assets/photos/chekung_6.jpg",
        "./assets/photos/chekung_7.jpg",
        "./assets/photos/chekung_8.jpg"
      ],
      panoramas: [
        { src: "./assets/photos/360/panorama_temple_1.JPG", label: "Temple courtyard" },
        { src: "./assets/photos/360/panorama_temple_2.JPG", label: "Main prayer area" }
      ],
      audio: [],
      tips: [
        "Respectful temple visits support SDG 11 by helping preserve religious heritage within everyday community life.",
        "Walking here from nearby Sha Tin stops keeps the cultural visit low-impact and avoids extra vehicle use.",
        "Reducing noise, waste, and crowding helps protect the atmosphere of an active place of worship."
      ]
    },
    {
      id: "d2-shingmun-promenade",
      category: "garden",
      title: "Shing Mun River Promenade Garden",
      subtitle: "Riverside promenade stop in Sha Tin",
      latlng: [22.37712581173113, 114.1899939588966],
      story: "Shing Mun River Promenade Garden sits along the wide Shing Mun River corridor, one of the most recognizable open-air leisure areas in Sha Tin. Hong Kong Tourism Board describes the riverfront as a peaceful local recreation zone where people come to stroll, jog, cycle, fish, and watch rowers on the water, while the nearby promenade and bridges become especially lively during festival periods such as dragon boat season.",
      routeSummary: "From the Sha Tin base, this is an easy riverside add-on reached on foot from the hotel, museum, or Che Kung Temple side of the district.",
      routeHeading: "Getting there from Sha Tin",
      steps: [
        "Start from Royal Park Hotel or continue from the Heritage Museum / Che Kung Temple cluster.",
        "Walk toward the Shing Mun River waterfront and cross over to the promenade near Che Kung Miu Road / Tai Chung Kiu Road.",
        "Follow the riverside path southward to reach the promenade garden section.",
        "Continue the walk along the water if you want a longer low-effort Sha Tin loop."
      ],
      photos: [
        "./assets/photos/shing_mun_promenade_1.jpg",
        "./assets/photos/shing_mun_promenade_2.jpg"
      ],
      footprint: "Estimated footprint: 0.1-0.4 kg CO2e when visited as part of the existing Sha Tin walking cluster.",
      tips: [
        "Well-used waterfront promenades support SDG 11 by giving the city accessible public space for walking, rest, and everyday recreation.",
        "Choosing riverside walking instead of additional short rides keeps this part of the day especially low-carbon.",
        "Keeping the riverfront clean and avoiding litter near the water helps protect the quality of the shared urban landscape."
      ],
      websiteUrl: "https://www.gohk.gov.hk/en/spots/spot_detail.php?spot=Shing+Mun+River",
      websiteLabel: "Official website"
    },
    {
      id: "d2-lionrock",
      category: "hiking",
      title: "Lion Rock",
      subtitle: "Iconic summit above Kowloon and Sha Tin",
      latlng: [22.352645500574166, 114.1870615825635],
      story: "Lion Rock is one of Hong Kong's most iconic summits, rising to 495 metres and marking the mountainous edge between Kowloon and Sha Tin. According to the Agriculture, Fisheries and Conservation Department, the peak is reached by traditional stone trails on both sides and is prized for its rugged western escarpment and broad city views.",
      routeSummary: "From the Sha Tin day base, the closest practical approach is from the Sha Tin side via the eastern stone-trail access around Sha Tin Pass Road / Tsok Pok Hang before climbing to the summit ridge.",
      difficulty: "Moderate to difficult",
      distance: "Variable approach; summit section is steep",
      duration: "Allow about 2.5 - 4 hours depending on the chosen approach",
      steps: [
        "Start from the Sha Tin side and head toward the Sha Tin Pass Road / Tsok Pok Hang access for Lion Rock Country Park.",
        "Follow the eastern stone trail uphill toward Lion Rock Pass and the summit junctions.",
        "Complete the final steep climb carefully, especially near exposed rock and uneven steps.",
        "Descend before dark and avoid continuing in poor weather because the summit section is more demanding than the riverside Sha Tin stops."
      ],
      photos: [
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Lion%20Rock%20trail%20%2851062880992%29.jpg",
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Hong%20Kong%20views%20from%20Lion%20Rock%20%2851062796116%29.jpg",
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Lion%20Rock%2C%20Hong%20Kong.jpg"
      ],
      footprint: "Estimated footprint: 0.3-0.9 kg CO2e when approached from Sha Tin by short public-transport hops and completed mostly on foot.",
      tips: [
        "Stay on marked trails to reduce erosion on one of Hong Kong's best-known hillside routes.",
        "Take all litter back down with you, because high-visibility peaks are especially vulnerable to visual and ecological damage from waste.",
        "Responsible hiking here supports SDG 11 through care for an iconic shared landscape and SDG 15 through lower-impact use of natural terrain."
      ]
    }
  ]
};

day2.stops.push(
  {
    id: "d2-shingkee",
    category: "restaurant",
    tooltipOnly: true,
    title: "Shing Kee Noodles",
    subtitle: "Local noodle shop near the river corridor",
    latlng: [22.384947849433182, 114.19099029999998],
    openingHours: "06:00 - 16:00, 19:00 - 23:00",
    shortInfo: "A well-known local noodle stop in Sha Tin with a casual open-air setting that fits the museum and temple cluster.",
    footprintEstimate: "Estimated meal footprint: moderate, around 1.8-2.6 kg CO2e for a typical pork or beef noodle meal.",
    websiteUrl: "https://www.google.com/maps?q=22.384947849433182,114.19099029999998",
    websiteLabel: "Google Maps",
    photos: ["./assets/photos/shingkee_noodles.jpg"]
  },
  {
    id: "d2-simplylife",
    category: "restaurant",
    tooltipOnly: true,
    title: "SimplyLife Bakery Cafe",
    subtitle: "Cafe option near Sha Tin Station",
    latlng: [22.38237836875854, 114.18833909999998],
    openingHours: "07:30 - 22:00",
    shortInfo: "An easy bakery cafe option close to the Sha Tin hub, useful before or after the heritage stops.",
    footprintEstimate: "Estimated meal footprint: low-to-moderate, around 0.8-1.6 kg CO2e for bakery, salad, or lighter cafe meals.",
    websiteUrl: "https://www.google.com/maps?q=22.38237836875854,114.18833909999998",
    websiteLabel: "Google Maps",
    photos: ["./assets/photos/simply_life_bakery.jpg"]
  },
  {
    id: "d2-newtownplaza",
    category: "mall",
    tooltipOnly: true,
    title: "New Town Plaza",
    subtitle: "Main food and supplies hub in Sha Tin",
    latlng: [22.381885603331025, 114.18867739120614],
    openingHours: "07:00 - 00:00 public area; most restaurants 11:00 - 22:00",
    shortInfo: "Large mall with diverse dining and supermarket options, making it the main practical hub near the museum and Che Kung Temple route.",
    websiteUrl: "https://www.newtownplaza.com.hk/",
    websiteLabel: "Official website",
    photos: ["./assets/photos/newtownplaza.jpg"]
  },
  {
    id: "d2-7eleven-chekung",
    category: "convenience-store",
    tooltipOnly: true,
    title: "7-Eleven (Che Kung Temple MTR Station)",
    subtitle: "Quick drinks and snacks stop",
    latlng: [22.374648255009102, 114.18594872461193],
    openingHours: "06:30 - 23:00",
    shortInfo: "Handy for a quick water or snack pickup right by the Che Kung Temple station area.",
    websiteUrl: "https://www.google.com/maps?q=22.374648255009102,114.18594872461193",
    websiteLabel: "Google Maps",
    photos: ["./assets/photos/711.png"]
  },
  {
    id: "d2-7eleven-shatin",
    category: "convenience-store",
    tooltipOnly: true,
    title: "7-Eleven (Sha Tin MTR Station)",
    subtitle: "Station convenience stop",
    latlng: [22.382725232491214, 114.18744479130169],
    openingHours: "06:00 - 00:00",
    shortInfo: "Useful for quick supplies around the Sha Tin rail hub before heading out or returning.",
    websiteUrl: "https://www.google.com/maps?q=22.382725232491214,114.18744479130169",
    websiteLabel: "Google Maps",
    photos: ["./assets/photos/711.png"]
  },
  {
    id: "d2-circlek-jatmin",
    category: "convenience-store",
    tooltipOnly: true,
    title: "Circle K (Jat Min Chuen)",
    subtitle: "24-hour convenience store",
    latlng: [22.377222362928315, 114.19115936931037],
    openingHours: "24 hours",
    shortInfo: "A 24-hour option near the Sha Tin riverside neighborhood if you need essentials late in the day.",
    websiteUrl: "https://www.google.com/maps?q=22.377222362928315,114.19115936931037",
    websiteLabel: "Google Maps",
    photos: ["./assets/photos/circle_k.png"]
  },
  {
    id: "d2-toilet-shatintau",
    category: "toilet",
    tooltipOnly: true,
    title: "Sha Tin Tau Village Public Toilet",
    subtitle: "24-hour public toilet with accessible facilities",
    latlng: [22.37390186872732, 114.1895026],
    openingHours: "24 hours",
    shortInfo: "Useful toilet stop near the Che Kung Temple side of the route, including accessible facilities.",
    websiteUrl: "https://www.google.com/maps?q=22.37390186872732,114.1895026",
    websiteLabel: "Google Maps",
    photos: []
  },
  {
    id: "d2-toilet-shingho",
    category: "toilet",
    tooltipOnly: true,
    title: "Shing Ho Road Public Toilet & Bathhouse",
    subtitle: "24-hour public toilet",
    latlng: [22.376226612532374, 114.1793567730172],
    openingHours: "24 hours",
    shortInfo: "A public toilet and bathhouse option on the Tai Wai side of the Sha Tin heritage route.",
    websiteUrl: "https://www.google.com/maps?q=22.376226612532374,114.1793567730172",
    websiteLabel: "Google Maps",
    photos: []
  },
  {
    id: "d2-toilet-taiwai",
    category: "toilet",
    tooltipOnly: true,
    title: "Tai Wai Station PTI Public Toilet",
    subtitle: "24-hour public toilet at the interchange",
    latlng: [22.37331501512663, 114.18091008465517],
    openingHours: "24 hours",
    shortInfo: "Convenient toilet stop right by the public transport interchange near Tai Wai.",
    websiteUrl: "https://www.google.com/maps?q=22.37331501512663,114.18091008465517",
    websiteLabel: "Google Maps",
    photos: []
  }
);

day1.stops.push(
  {
    id: "d1-citylink",
    category: "mall",
    tooltipOnly: true,
    title: "Citylink Plaza",
    subtitle: "Supplies before the monastery climb",
    latlng: [22.382757569880205, 114.18756474096665],
    openingHours: "10:00 - 22:00",
    shortInfo: "Directly connected to Sha Tin Station and a practical place to pick up drinks or snacks before heading to Ten Thousand Buddhas Monastery.",
    websiteUrl: "https://www.google.com/maps?q=22.382757569880205,114.18756474096665",
    websiteLabel: "Google Maps",
    photos: ["./assets/photos/citylink.jpg"]
  },
  {
    id: "d1-yata",
    category: "store",
    tooltipOnly: true,
    title: "YATA Supermarket (New Town Plaza)",
    subtitle: "Large supermarket option",
    latlng: [22.37977013771574, 114.18762337301725],
    openingHours: "10:00 - 22:30",
    shortInfo: "A larger supermarket choice near Sha Tin Station if you want to stock up before the monastery climb.",
    websiteUrl: "https://www.google.com/maps?q=22.37977013771574,114.18762337301725",
    websiteLabel: "Google Maps",
    photos: []
  },
  {
    id: "d1-7eleven-lekyuen",
    category: "convenience-store",
    tooltipOnly: true,
    title: "7-Eleven (Lek Yuen Estate)",
    subtitle: "24-hour convenience store",
    latlng: [22.384575193043453, 114.19072645767241],
    openingHours: "24 hours",
    shortInfo: "Convenient for a last-minute drink or snack near the Sha Tin monastery approach.",
    websiteUrl: "https://www.google.com/maps?q=22.384575193043453,114.19072645767241",
    websiteLabel: "Google Maps",
    photos: ["./assets/photos/711.png"]
  },
  {
    id: "d1-toilet-sheungpaitau",
    category: "toilet",
    tooltipOnly: true,
    title: "Sheung Pai Tau Village Public Toilet",
    subtitle: "24-hour public toilet",
    latlng: [22.38555198559541, 114.18547442698276],
    openingHours: "24 hours",
    shortInfo: "The closest public toilet option near the lower approach to Ten Thousand Buddhas Monastery.",
    websiteUrl: "https://www.google.com/maps?q=22.38555198559541,114.18547442698276",
    websiteLabel: "Google Maps",
    photos: []
  },
  {
    id: "d1-toilet-yuenwo",
    category: "toilet",
    tooltipOnly: true,
    title: "Yuen Wo Road Recreation Ground Public Toilet",
    subtitle: "24-hour public toilet",
    latlng: [22.385204845265893, 114.19540242883622],
    openingHours: "24 hours",
    shortInfo: "A backup 24-hour toilet option in the wider Sha Tin area before or after the monastery visit.",
    websiteUrl: "https://www.google.com/maps?q=22.385204845265893,114.19540242883622",
    websiteLabel: "Google Maps",
    photos: []
  }
);

day1.stops.push(
  {
    id: "d1-taipo-food-centre",
    category: "restaurant",
    tooltipOnly: true,
    title: "Tai Po Market Cooked Food Centre",
    subtitle: "Classic cooked-food stop in Tai Po",
    latlng: [22.446059247421854, 114.16668750955182],
    openingHours: "06:00 - 02:00 (varies by stall)",
    shortInfo: "A classic Tai Po option for dai pai dong style local food near the old market area.",
    footprintEstimate: "Estimated meal footprint: moderate-to-high, around 1.5-3.0 kg CO2e depending on how meat-heavy the chosen dishes are.",
    websiteUrl: "https://www.google.com/maps?q=22.446059247421854,114.16668750955182",
    websiteLabel: "Google Maps",
    photos: ["./assets/photos/food_market.jpg"]
  },
  {
    id: "d1-lamkee-dimsum",
    category: "restaurant",
    tooltipOnly: true,
    title: "Lam Kee Dim Sum",
    subtitle: "Casual dim sum stop in Tai Po",
    latlng: [22.446528178726883, 114.16643008883756],
    openingHours: "Hours vary",
    shortInfo: "A convenient Tai Po stop for a lighter sit-down meal before continuing through the old market area.",
    footprintEstimate: "Estimated meal footprint: around 0.9-1.8 kg CO2e depending on whether you choose mostly steamed dishes or meat-heavy baskets.",
    photos: ["./assets/photos/lam_kee.jpg"]
  },
  {
    id: "d1-tungkee-noodles",
    category: "restaurant",
    tooltipOnly: true,
    title: "Tung Kee Noodles Restaurant",
    subtitle: "Local noodle stop near Tai Po Market",
    latlng: [22.446207380904212, 114.16672341719718],
    openingHours: "Hours vary",
    shortInfo: "A quick local-style noodle option close to the Tai Po Market food cluster and transport links.",
    footprintEstimate: "Estimated meal footprint: around 1.0-2.0 kg CO2e depending on broth choice and whether you order meat or fishball toppings.",
    photos: ["./assets/photos/tung_kee.jpg"]
  },
  {
    id: "d1-grandmas-tofu-pudding",
    category: "restaurant",
    tooltipOnly: true,
    title: "Grandma's Tofu Pudding",
    subtitle: "Sweet tofu dessert stop",
    latlng: [22.446685550358527, 114.16687785217628],
    openingHours: "Hours vary",
    shortInfo: "A gentle dessert break for tofu pudding and lighter snacks in the Tai Po Market cluster.",
    footprintEstimate: "Estimated meal footprint: around 0.2-0.6 kg CO2e for a tofu-based dessert or light snack.",
    photos: ["./assets/photos/tofu.png"]
  },
  {
    id: "d1-taiwo-plaza",
    category: "mall",
    tooltipOnly: true,
    title: "Tai Wo Plaza",
    subtitle: "Mall and supermarket cluster",
    latlng: [22.451699967329297, 114.16171774562895],
    openingHours: "24 hours public area; most shops 10:00 - 22:00",
    shortInfo: "A practical stop near the railway museum area for food, groceries, and indoor supplies.",
    websiteUrl: "https://www.linkhk.com/",
    websiteLabel: "Official website",
    photos: ["./assets/photos/taiwo_plaza.jpg"]
  },
  {
    id: "d1-parknshop-honglokyuen",
    category: "store",
    tooltipOnly: true,
    title: "PARKnSHOP (Hong Lok Yuen)",
    subtitle: "Closest large supermarket to Lam Tsuen",
    latlng: [22.46222185471413, 114.15230114418102],
    openingHours: "08:00 - 22:30",
    shortInfo: "Useful if you want to buy supplies before or after heading out toward Lam Tsuen.",
    websiteUrl: "https://www.google.com/maps?q=22.46222185471413,114.15230114418102",
    websiteLabel: "Google Maps",
    photos: ["./assets/photos/parknshop.jpg"]
  },
  {
    id: "d1-7eleven-taiyuen",
    category: "convenience-store",
    tooltipOnly: true,
    title: "7-Eleven (Tai Yuen Shopping Centre)",
    subtitle: "24-hour convenience stop",
    latlng: [22.45548786423923, 114.16815563862076],
    openingHours: "24 hours",
    shortInfo: "Convenient for quick drinks or snacks near the railway museum side of Tai Po.",
    websiteUrl: "https://www.google.com/maps?q=22.45548786423923,114.16815563862076",
    websiteLabel: "Google Maps",
    photos: ["./assets/photos/711.png"]
  },
  {
    id: "d1-7eleven-taiwo",
    category: "convenience-store",
    tooltipOnly: true,
    title: "7-Eleven (Tai Wo Plaza)",
    subtitle: "24-hour convenience store",
    latlng: [22.450532203271074, 114.1601681153448],
    openingHours: "24 hours",
    shortInfo: "A practical quick-stop convenience store close to the Tai Wo Plaza area.",
    websiteUrl: "https://www.google.com/maps?q=22.450532203271074,114.1601681153448",
    websiteLabel: "Google Maps",
    photos: ["./assets/photos/711.png"]
  },
  {
    id: "d1-circlek-fortune",
    category: "convenience-store",
    tooltipOnly: true,
    title: "Circle K (Fortune Plaza)",
    subtitle: "24-hour convenience store",
    latlng: [22.452889637322233, 114.16804413752509],
    openingHours: "24 hours",
    shortInfo: "Useful for fast supplies in the Tai Po town center area.",
    websiteUrl: "https://www.google.com/maps?q=22.452889637322233,114.16804413752509",
    websiteLabel: "Google Maps",
    photos: ["./assets/photos/circle_k.png"]
  },
  {
    id: "d1-kwanyik",
    category: "store",
    tooltipOnly: true,
    title: "Kwan Yik Store",
    subtitle: "Village store in Lam Tsuen",
    latlng: [22.45086739342115, 114.13750897873204],
    openingHours: "10:00 - 00:00",
    shortInfo: "A small local village store within the Lam Tsuen area for simple drinks and essentials.",
    websiteUrl: "https://www.google.com/maps?q=22.45086739342115,114.13750897873204",
    websiteLabel: "Google Maps",
    photos: []
  },
  {
    id: "d1-toilet-oldmarket",
    category: "toilet",
    tooltipOnly: true,
    title: "Tai Po Old Market Public Toilet",
    subtitle: "24-hour public toilet with accessible facilities",
    latlng: [22.454883888667727, 114.1655211846552],
    openingHours: "24 hours",
    shortInfo: "A useful toilet stop in the old market area close to the Man Mo Temple and Tai Po center cluster.",
    websiteUrl: "https://www.google.com/maps?q=22.454883888667727,114.1655211846552",
    websiteLabel: "Google Maps",
    photos: []
  },
  {
    id: "d1-toilet-fongmapo",
    category: "toilet",
    tooltipOnly: true,
    title: "Fong Ma Po Public Toilet",
    subtitle: "24-hour public toilet by Lam Tsuen",
    latlng: [22.457286522855238, 114.1413778],
    openingHours: "24 hours",
    shortInfo: "Located right next to the Lam Tsuen Wishing Tree and includes accessible facilities.",
    websiteUrl: "https://www.google.com/maps?q=22.457286522855238,114.1413778",
    websiteLabel: "Google Maps",
    photos: []
  },
  {
    id: "d1-toilet-taipotau",
    category: "toilet",
    tooltipOnly: true,
    title: "Tai Po Tau Village South Public Toilet",
    subtitle: "24-hour public toilet",
    latlng: [22.45466586579444, 114.1565202],
    openingHours: "24 hours",
    shortInfo: "A backup public toilet option for the wider Tai Po route if you are moving between clusters.",
    websiteUrl: "https://www.google.com/maps?q=22.45466586579444,114.1565202",
    websiteLabel: "Google Maps",
    photos: []
  }
);

/* ---------- RENDER ---------- */

export const routePlans = {
  day1: [
    { type: "stay", label: "Start at Royal Park Hotel", meta: "Prepare for a public-transport first day." },
    { type: "transfer", label: "MTR + bus/minibus into Tai Po", meta: "Use rail first, then local public transport." },
    { type: "stop", label: "Lam Tsuen", meta: "Main heritage and village stop." },
    { type: "optional", label: "Man Mo Temple", meta: "Optional stop inside the market district." },
    { type: "stop", label: "Hong Kong Railway Museum", meta: "Easy walkable cultural stop." },
    { type: "optional", label: "Tai Po Market free exploration", meta: "Optional local wandering time." },
    { type: "transfer", label: "Return by MTR to Sha Tin", meta: "Simple rail transfer back." },
    { type: "stop", label: "Ten Thousand Buddhas Monastery", meta: "Optional higher-effort cultural climb before ending the day." },
    { type: "stay", label: "Return to hotel", meta: "End of Day 1." }
  ],
  day2: [
    { type: "stay", label: "Start at Royal Park Hotel", meta: "Compact walking-focused second day." },
    { type: "stop", label: "Hong Kong Heritage Museum", meta: "Main cultural anchor for the day." },
    { type: "stop", label: "Che Kung Temple", meta: "Classic heritage stop in Sha Tin." },
    { type: "optional", label: "Free exploration around Sha Tin", meta: "Use the riverfront, mall, or cafe cluster as you like." },
    { type: "stay", label: "Leave / end route", meta: "Flexible finish depending on your schedule." }
  ]
};

export const landingDayMeta = {
  day1: {
    title: "Day 1 - Tai Po",
    summary: "Village heritage, temple streets, railway stories, practical food stops, and optional hiking add-ons linked by public transport."
  },
  day2: {
    title: "Day 2 - Sha Tin",
    summary: "Museum visits, temple heritage, riverside walking, city conveniences, and optional Lion Rock exploration around Sha Tin."
  }
};
