const iataConvert = code => {
  const iataCodes = {
    '0A': 'Amber Air',
    '0B': 'Blue Air',
    '0D': 'Darwin Airline',
    '2B': 'Aerocondor',
    '2C': 'SNCF',
    '2E': 'Smokey Bay Air',
    '2I': 'Star Peru',
    '2J': 'Air Burkina',
    '2K': 'Aerolineas Galapagos',
    '2L': 'Helvetic Airways',
    '2M': 'Moldavian Airlines',
    '2N': 'Nextjet',
    '2O': 'Island Air Service',
    '2P': 'Air Philippines',
    '2Q': 'Avitrans Nordic',
    '2U': 'Sun dOr International Air',
    '2W': 'Welcome Air',
    '2Y': 'Air Andaman',
    '2Z': 'TTA',
    '3B': 'Job Air',
    '3C': 'Regionsair',
    '3E': 'Multi-Aero, Inc. d/b/a Air Choice One',
    '3F': 'Pacific Airways Inc',
    '3H': 'Air Inuit',
    '3I': 'Aerolineas Del Sur',
    '3K': 'Jetstar Asia',
    '3L': 'Intersky Luftfahrt',
    '3M': 'Gulfstream',
    '3O': 'Air Arabia Maroc',
    '3P': 'Tiara Air Aruba',
    '3R': 'Gromov Airline',
    '3S': 'Air Antilles Express',
    '3T': 'Turan Air',
    '3U': 'Sichuan Airlines',
    '3W': 'EuroManx',
    '3Y': 'Kartika Airlines',
    '3Z': 'Everts Air',
    '3�': 'Moskovia airlines',
    '4C': 'Aires',
    '4D': 'Air Sinai',
    '4E': 'Tanana Air Service',
    '4G': 'Gazprom Avia',
    '4H': 'United Airways Bangladesh',
    '4J': 'Somon Air',
    '4K': 'Kenn Borek Air',
    '4L': 'Euroline',
    '4M': 'LAN Argentina',
    '4N': 'Air North',
    '4O': 'Interjet',
    '4Q': 'Safi Airways',
    '4R': 'Hamburg International',
    '4T': 'Belair Airlines',
    '4U': 'Germanwings',
    '4V': 'Lignes Aeriennes Congolaises',
    '4W': 'Warbelow',
    '4Y': 'Flight Alaska',
    '5C': 'NatureAir',
    '5G': 'Skyservice Airlines',
    '5H': 'Five Forty Aviation',
    '5J': 'Cebu Air',
    '5L': 'Aerosur',
    '5M': 'FlyMontserrat',
    '5N': 'Nordavia',
    '5O': 'Europe Airpost',
    '5P': 'Aerolinea Principal',
    '5Q': 'BQB Air',
    '5R': 'Karthago Airlines',
    '5T': 'Canadian North',
    '5U': 'Royal Belau Airways',
    '5V': 'Lviv Airlines',
    '5W': 'Astraeus',
    '5Y': 'Express Rail Link',
    '5Z': 'Bismillah Airlines',
    '5�': 'Odessa Air',
    '6A': 'Aviacsa',
    '6C': 'Air Timor',
    '6E': 'IndiGo Air',
    '6F': 'MAT Airways',
    '6G': 'Gulfstream Connection',
    '6H': 'Israir Airlines',
    '6I': 'Fly 6ix',
    '6J': 'Jubba Airways',
    '6K': 'KyrgyzTransAvia',
    '6L': 'Aklak Air',
    '6N': 'Nordic Airways',
    '6P': 'Gryphon Airlines',
    '6Q': 'Cham Wings Airlines',
    '6R': 'Alrosa',
    '6S': 'Kato Airline',
    '6T': 'Air Mandalay Ltd',
    '6V': 'Mars RK',
    '6W': 'Saratov Air',
    '6Y': 'SMARTLYNX AIRLINES Ltd',
    '6Z': 'Euro-Asia Air',
    '7C': 'Jeju Airlines',
    '7D': 'Donbass Aero',
    '7E': 'Sylt Air Gmbh',
    '7F': 'First Air',
    '7G': 'Star Flyer',
    '7H': 'Era Aviation',
    '7I': 'Insel Air International',
    '7J': 'Tajik Air',
    '7K': 'Kogalym Avia',
    '7L': 'Aerocaribbean',
    '7M': 'Mayair, S.A. de C.V.',
    '7N': 'National Airways',
    '7P': 'Air Castilla',
    '7R': 'Rusline Air',
    '7V': 'Federal Airlines (Pty) Ltd',
    '7W': 'Wind Rose',
    '7Z': 'Halcyonair Cabo Verde Airways S.A.',
    '8B': 'Business Air Centre Co',
    '8D': 'Servant Air, Inc.',
    '8E': 'Bering Air',
    '8F': 'STP Airways',
    '8G': 'Girjet',
    '8J': 'Jet4You.Com',
    '8L': 'Lucky Air Co. Ltd.',
    '8M': 'Myanmar Airways',
    '8N': 'Barents Airlink',
    '8O': 'West Coast Air',
    '8P': 'Pacific Coastal Airlines',
    '8Q': 'Onur Air',
    '8R': 'TRIP Linhas Aereas S.A.',
    '8T': 'Air Tindi Ltd',
    '8U': 'Afriqiyah Airways',
    '8V': 'Wright Air Service',
    '8W': 'Private Wings',
    '9B': 'Accesrail',
    '9C': 'Spring Airlines',
    '9D': 'Toumai Air Tchad',
    '9E': 'Pinnacle Airlines',
    '9F': 'Eurostar',
    '9G': '9G Rail Ltd',
    '9H': 'Dutch Antilles Express',
    '9J': 'Dana Airlines Ltd',
    '9K': 'Cape Air',
    '9L': 'Colgan Airlines',
    '9M': 'Central Mountain Air',
    '9O': 'National Airways Cameroon',
    '9R': 'Satena',
    '9U': 'Air Moldova',
    '9V': 'Avior Airlines',
    '9W': 'Jet Airways',
    '9X': 'New Axis Airways',
    '9Y': 'Air Kazakstan',
    A0: "L'Avion",
    A2: 'Astra Airlines',
    A3: 'Aegean Airlines',
    A4: 'Aerocon',
    A5: 'Airlinair',
    A6: 'Air Alps Aviation',
    A7: 'Air Comet',
    A8: 'Benin Golf Air',
    A9: 'Georgian Airways',
    AA: 'American Airlines',
    AB: 'Air Berlin',
    AC: 'Air Canada',
    AD: 'Azul Airlines',
    AE: 'Mandarin Airlines',
    AF: 'Air France',
    AH: 'Air Algerie',
    AI: 'Nacil Air India',
    AJ: 'Aerocontractors',
    AK: 'Airasia',
    AM: 'Aeromexico',
    AO: 'Avianova',
    AP: 'Air One',
    AQ: 'Aloha Airlines',
    AR: 'Aerolineas Argentinas',
    AS: 'Alaska Airlines',
    AT: 'Royal Air Maroc',
    AU: 'Austral Lineas Aereas',
    AV: 'Avianca',
    AW: 'Africa World Airlines Limited',
    AX: 'American Connection',
    AY: 'Finnair',
    AZ: 'Alitalia',
    B2: 'Belavia',
    B3: 'Bellview Airlines',
    B5: 'East African Safari Air',
    B6: 'JetBlue',
    B7: 'Uni Air',
    B8: 'Eritrean Airlines',
    B9: 'Iran Air Tours',
    BA: 'British Airways',
    BB: 'Seaborne Airlines',
    BC: 'Skymark Airlines',
    BD: 'BMI',
    BE: 'Flybe',
    BF: 'Vincent Aviation',
    BG: 'Biman Airlines',
    BH: 'Hawkair',
    BI: 'Royal Brunei',
    BJ: 'Nouvelair',
    BK: 'Okay Airways',
    BL: 'Pacific Airlines',
    BN: 'Bahrain Air',
    BP: 'Air Botswana',
    BR: 'Eva Air',
    BS: 'British International',
    BT: 'Air Baltic',
    BU: 'SAS Norway',
    BV: 'Blue Panorama Air',
    BW: 'Caribbean Airlines',
    BX: 'Coast Air',
    C3: 'ICAR Airlines',
    C4: 'Alma De Mexico',
    C5: 'CommutAir',
    C7: 'Rico Linhas Aereas',
    C8: 'CRONOSAIR',
    C9: 'Cirrus Airlines',
    CA: 'Air China',
    CB: 'Scotairways',
    CC: 'Macair Airlines',
    CE: 'Nationwide Air',
    CF: 'City Airline',
    CG: 'Airlines PNG',
    CH: 'Bemidji Airlines',
    CI: 'China Airlines',
    CJ: 'China Northern Airlines',
    CL: 'Lufthansa CityLine',
    CM: 'Copa Airlines',
    CN: 'Islands Nationair',
    CO: 'Continental Airlines',
    CQ: 'Sunshine Express Airlines',
    CT: 'Civil Air Transport',
    CU: 'Cubana',
    CW: 'Air Marshall Islands',
    CX: 'Cathay Pacific',
    CY: 'Cyprus Airways',
    CZ: 'China Southern Airlines',
    D2: 'Severstal Air',
    D3: 'Daallo Airlines',
    D4: 'Alidaunia',
    D6: 'Inter Air',
    D7: 'Airasia X',
    D9: 'Aeroflot-Don',
    DB: 'Brit Air',
    DC: 'Golden Air',
    DD: 'Nok Air',
    DE: 'Condor',
    DG: 'South East Asian Airlines',
    DH: 'Asia Sahand Airlines',
    DI: 'DBA',
    DJ: 'Virgin Blue',
    DL: 'Delta Air Lines',
    DN: 'Air Deccan',
    DO: 'Air Vallee',
    DR: 'Air Link',
    DT: 'Taag',
    DU: 'Hemus Air',
    DV: 'Jsc Aircompany Scat',
    DX: 'Danish Air Transport',
    DY: 'Norwegian Air',
    DZ: 'Djibouti Air',
    E0: 'Eos Airlines',
    E3: 'Domodedovo Airlines',
    E4: 'Eastok Avia',
    E5: 'Samara Airlines',
    E8: 'JSC Semeyavia',
    EA: 'European Air Express',
    EC: 'Avialeasing',
    EE: 'Aero Airlines',
    EF: 'Far Eastern Air',
    EG: 'Japan Asia Airways',
    EI: 'Aer Lingus',
    EJ: 'New England Airlines',
    EK: 'Emirates',
    EL: 'Air Nippon',
    EN: 'Air Dolomiti',
    EO: 'Hewa Bora Airways',
    EP: 'Iran Aseman Airlines',
    EQ: 'TAME Linea Aerea del Ecuador',
    ET: 'Ethiopian Airlines',
    EU: 'Chengdu Airlines',
    EW: 'Eurowings',
    EY: 'Etihad Airways',
    EZ: 'Sun Air Of Scandinavia',
    F2: 'SafariLink',
    F5: 'Fly540 S.A',
    F7: 'Flybaboo',
    F9: 'Frontier Airlines',
    FB: 'Bulgaria Air',
    FC: 'Finncomm Airlines',
    FD: 'Thai Airasia',
    FE: 'Far Eastern Air Transport',
    FG: 'Ariana Afghan Airlines',
    FI: 'Icelandair',
    FJ: 'Air Pacific',
    FL: 'Airtran Airways',
    FM: 'Shanghai Airlines',
    FN: 'Regional Air Lines',
    FO: 'Felix Airways',
    FP: 'Freedom Air',
    FQ: 'Brindabella Airlines',
    FR: 'Ryanair',
    FS: 'ItAli Airlines',
    FT: 'Siem Reap Airways Intl',
    FV: 'GTK Rossia',
    FW: 'IBEX Airlines',
    FY: 'Firefly',
    FZ: 'Flydubai',
    G0: 'Ghana Intl Airlines',
    G3: 'Gol Transportes Aereos',
    G4: 'Allegiant Air LLC',
    G8: 'Go Air',
    G9: 'Air Arabia',
    GA: 'Garuda Indonesia',
    GE: 'Transasia Airways',
    GF: 'Gulf Air',
    GI: 'Itek Air',
    GJ: 'Eurofly',
    GL: 'Air Greenland',
    GQ: 'Big Sky Airlines',
    GR: 'Aurigny Air',
    GS: 'TianJin Airlines',
    GT: 'GB Airways',
    GU: 'Aviateca',
    GV: 'Grant Aviation, Inc.',
    GW: 'Kuban Airlines',
    GY: 'Gabon Airlines',
    GZ: 'Air Rarotonga',
    H2: 'Sky Airline',
    H3: 'Harbour Air',
    H4: 'Heli Securite',
    H7: 'Eagle Air',
    H8: 'Dalavia',
    H9: 'Pegasus Airlines',
    HA: 'Hawaiian Airlines',
    HB: 'Homer Air',
    HD: 'Hokkaido International Airlines',
    HE: 'LGW',
    HF: 'Hapagfly',
    HG: 'Niki',
    HH: 'Taban Air',
    HI: 'Papillon Airways',
    HM: 'Air Seychelles',
    HO: 'Juneyao Airlines',
    HR: 'Hahn Air',
    HS: 'Svenska Air',
    HT: 'Aeromist-Kharkov',
    HU: 'Hainan Airlines',
    HV: 'Transavia.com',
    HW: 'North-Wright Airways Ltd.',
    HX: 'Hong Kong Airlines',
    HY: 'Uzbekistan Airways',
    HZ: 'SAT Airlines',
    I2: 'Munich Airlines',
    I3: 'ATA Airlines',
    I4: 'International AirLink',
    I5: 'Compagnie Aerienne Mali',
    I7: 'Paramount Airways',
    I8: 'Izhavia',
    I9: 'Air Italy',
    IA: 'Iraqi Airways',
    IB: 'Iberia',
    IC: 'Nacil Indian Airline',
    IE: 'Solomon Airlines',
    IF: 'Islas Airways',
    IG: 'Meridiana',
    IH: 'Falcon Air',
    IK: 'Imair Airline',
    IN: 'Macedonian Airlines',
    IP: 'Atyrau Aue Joly',
    IQ: 'Augsburg Airways',
    IR: 'Iran Air',
    IS: 'Island Airlines, Inc.',
    IT: 'Kingfisher Airlines',
    IV: 'Wind Jet',
    IX: 'Air India Express',
    IY: 'Yemenia Airways',
    IZ: 'Arkia',
    J0: 'Jetlink Express',
    J2: 'Azerbaijan Airlines',
    J3: 'Northwestern Air',
    J4: 'Jet For You',
    J5: 'Alaska Seaplane Service L.L.C.',
    J6: 'Avcom',
    J7: 'Centre-Avia Airlines',
    J8: 'Berjaya Air',
    J9: 'Jazeera Airways',
    JA: 'B&H Airlines',
    JB: 'Helijet International',
    JD: 'Beijing Capital Airlines',
    JE: 'Mango',
    JH: 'Fuji Dream Airlines',
    JJ: 'Tam Linhas Aereas',
    JK: 'Spanair',
    JL: 'Japan Airlines',
    JM: 'Air Jamaica',
    JN: 'Avia-Jaynar',
    JO: 'Jalways',
    JP: 'Adria Airways',
    JQ: 'Jetstar',
    JR: 'Joy Air',
    JS: 'Air Koryo',
    JT: 'Lion Air',
    JU: 'Jat Airways',
    JV: 'Bearskin Airlines',
    JX: 'Nice Helicopteres',
    JY: 'Air Turks ',
    JZ: 'Skyways Ab',
    K2: 'Eurolot',
    K3: 'Taquan Air Services',
    K5: 'Wings Of Alaska SeaPort Airline',
    K6: 'Bravo Air Congo',
    K7: 'Air KBZ',
    K8: 'Zambia Skyways',
    K9: 'TonleSap Airlines',
    KA: 'Dragonair',
    KB: 'Druk Air',
    KC: 'Air Astana',
    KD: 'KD Avia',
    KE: 'Korean Air',
    KF: 'Blue1',
    KG: 'Aerogaviota',
    KH: 'Kyrgyz Air',
    KI: 'Kuban Airlines',
    KJ: 'BMED',
    KK: 'Atlasjet Airlines',
    KL: 'KLM',
    KM: 'Air Malta',
    KN: 'China United Airlines',
    KO: 'KHors',
    KQ: 'Kenya Airways',
    KR: 'Comores Aviation',
    KS: 'Penair',
    KT: 'Katmai Air LLC',
    KU: 'Kuwait Airways',
    KV: 'Kavminvody Avia',
    KW: 'Wataniya Airways',
    KX: 'Cayman Airways',
    KY: 'Kunming Airlines',
    L3: 'LTU',
    L5: 'Lufttransport As',
    L6: 'Tbilaviamsheni',
    L9: 'Belle Air Europe',
    LA: 'Lan Airlines',
    LF: 'Flynordic',
    LG: 'Luxair',
    LH: 'Lufthansa',
    LI: 'Liat',
    LJ: 'Jin Air',
    LM: 'Livingston',
    LN: 'Libyan Airlines',
    LO: 'LOT Polish Airlines',
    LP: 'LAN Peru',
    LR: 'Lacsa',
    LS: 'Jet2.com',
    LT: 'LTU',
    LV: 'Albanian Airlines',
    LW: 'Pacific Wings',
    LX: 'Swiss',
    LY: 'El Al',
    LZ: 'Belle Air',
    M2: 'AIR MANAS',
    M3: 'North Flying As',
    M5: 'Kenmore Air',
    M6: 'Meta Linhas Aereas',
    M7: 'MAS AIR',
    M9: 'Motor-Sich JSC',
    MA: 'Malev',
    MD: 'Air Madagascar',
    ME: 'Middle East Airlines',
    MF: 'Xiamen Airlines',
    MH: 'Malaysia Airlines',
    MI: 'Silkair',
    MJ: 'Mihin Lanka',
    MK: 'Air Mauritius',
    ML: 'Air Mediterranee',
    MM: 'Soc Aero De Medellin',
    MN: 'Comair',
    MO: 'Calm Air International',
    MP: 'Martinair',
    MS: 'Egyptair',
    MU: 'China Eastern Airlines',
    MW: 'Maya Island Air',
    MX: 'Mexicana',
    MY: 'Maxjet Airways',
    MZ: 'Saereo S.A',
    N2: 'Dagestan Airlines',
    N3: 'Omskavia',
    N4: 'Trans Air Benin',
    N5: 'Norfolk Air',
    N6: 'Alpine Air Private Ltd.',
    N7: 'Lagun Air',
    N9: 'Kabo Air',
    NA: 'North American Airlines',
    NC: 'National Jet Systems',
    ND: 'Sky Wings Airlines',
    NF: 'Air Vanuatu',
    NG: 'Lauda Air',
    NH: 'All Nippon Airways',
    NI: 'PGA-Portug_lia Airlines',
    NK: 'Spirit Airlines',
    NL: 'Shaheen Air International',
    NM: 'Manx2',
    NN: 'VIM Airlines',
    NQ: 'Air Japan',
    NR: 'Max Air',
    NS: 'Hebei Airlines',
    NT: 'Binter Canarias',
    NU: 'Japan Transocean Air',
    NW: 'Northwest Airlines',
    NX: 'Air Macau',
    NY: 'Air Iceland',
    NZ: 'Air New Zealand',
    O2: 'Oceanic Airlines',
    O4: 'Antrak Air',
    O6: 'OceanAir',
    O7: 'Ozjet',
    OA: 'Olympic Airlines',
    OB: 'Boliviana de Aviacion - BoA',
    OC: 'Oriental Air Bridge Co., Ltd. (ORC)',
    OF: 'Air Finland',
    OG: 'One Two Go Airlines',
    OK: 'Czech Airlines',
    OL: 'Olt Ostfriesische Lufttr',
    OM: 'Miat Mongolian Airlines',
    ON: 'Our Airline',
    OP: 'Chalk Ocean Airways',
    OR: 'Arkefly',
    OS: 'Austrian',
    OT: 'Aeropelican Air Services',
    OU: 'Croatia Airlines',
    OV: 'Estonian Air',
    OX: 'Orient Thai Airlines',
    OY: 'Andes Lineas Aereas',
    OZ: 'Asiana Airlines',
    P0: 'Proflight Commuter Services',
    P2: 'AirKenya Express',
    P3: 'Passaredo',
    P4: 'Aero Lineas Sosa',
    P5: 'Aerorepublica',
    P6: 'Pascan Aviation Inc.',
    P8: 'Pantanal Linhas Aereas',
    P9: 'Perm Airlines',
    PB: 'Provincial Airlines',
    PC: 'Air Fiji',
    PD: 'Porter Airlines Inc.',
    PE: 'Peoples Vienna Line',
    PG: 'Bangkok Airways',
    PJ: 'Air Saint Pierre',
    PK: 'Pakistan International Airlines',
    PL: 'Southern Air Charter',
    PM: 'Pamir Airways',
    PN: 'China West Air',
    PR: 'Philippine Airlines',
    PS: 'Ukraine Intl Airlines',
    PU: 'Pluna',
    PV: 'Saint Barth Commuter',
    PW: 'Precision Air',
    PX: 'Air Niugini',
    PY: 'Surinam Airways',
    PZ: 'Tam Mercosur',
    Q2: 'Maldivian',
    Q3: 'Anguilla Air Services',
    Q4: 'Starlink Aviation',
    Q5: '40 Mile Air',
    Q6: 'Skytrans',
    Q7: 'SkyBahamas',
    Q8: 'Trans Air Congo',
    QB: 'Georgian National Air',
    QC: 'Air Corridor',
    QF: 'Qantas Airways',
    QG: 'Global Aviation',
    QH: 'Kyrgyzstan Air',
    QI: 'Cimber Air',
    QK: 'Air Canada Jazz',
    QL: 'LASER Airlines',
    QM: 'Air Malawi',
    QP: 'Airkenya Aviation',
    QR: 'Qatar Airways',
    QS: 'Smart Wings',
    QU: 'East African Airlines',
    QV: 'Lao Airlines',
    QW: 'Blue Wings',
    QX: 'Horizon Air',
    QZ: 'PT Indonesia Airasia',
    R2: 'Orenair',
    R3: 'Yakutia Air',
    R4: 'STC Russia',
    R6: 'Danu Oro Transportas',
    R7: 'Aserca',
    RA: 'Royal Nepal Airlines',
    RB: 'Syrian Arab Airlines',
    RC: 'Atlantic Airways',
    RE: 'Aer Arann',
    RG: 'VRG Linhas Aereas Sa',
    RH: 'Robin Hood Aviation',
    RI: 'Mandala Airlines',
    RJ: 'Royal Jordanian',
    RK: 'REGION-AVIA',
    RL: 'Royal Falcon',
    RO: 'Tarom',
    RQ: 'Kam Air',
    RT: 'Rak Airways',
    RU: 'TCI Skyking Ltd',
    RV: 'Caspian Airlines',
    RX: 'Regent Airways',
    RZ: 'SANSA Airlines',
    S0: 'Slok Air International',
    S2: 'Jet Lite',
    S3: 'Santa Barbara Airlines',
    S4: 'SATA International',
    S5: 'Shuttle America',
    S6: 'Sun Air',
    S7: 'S7',
    S9: 'Starbow Airlines',
    SA: 'South African Airways',
    SB: 'Aircalin',
    SC: 'Shandong Airlines Co., Ltd.',
    SD: 'Sudan Airways',
    SE: 'XL Airways France',
    SF: 'Tassili Airlines',
    SG: 'SpiceJet',
    SH: 'Sharp Airlines',
    SI: 'Blue Islands',
    SJ: 'Sriwijaya Air',
    SK: 'Scandinavian Airlines',
    SL: 'Solenta Aviation',
    SM: 'Spirit of Manila Airlines',
    SN: 'Brussels Airlines',
    SO: 'SALSA d',
    SP: 'SATA Air Acores',
    SQ: 'Singapore Airlines',
    SS: 'Corsair',
    SU: 'Aeroflot',
    SV: 'Saudi Arabian Airlines',
    SW: 'Air Namibia',
    SX: 'Skybus Airlines',
    SY: 'Sun Country',
    T3: 'Eastern Airways',
    T4: 'TRIP Linhas Aereas',
    T5: 'Turkmenistan Airlines',
    T6: 'Tavrey Aircompany',
    T7: 'Twin Jet',
    TA: 'Taca Intl Airlines',
    TC: 'Air Tanzania',
    TD: 'Atlantis European Airway',
    TE: 'FlyLAL',
    TF: 'Malmo Aviation',
    TG: 'Thai Airways Intl',
    TJ: 'Tradewind Aviation',
    TK: 'Turkish Airlines',
    TL: 'Airnorth Regional',
    TM: 'Lam Mozambique',
    TN: 'Air Tahiti Nui',
    TO: 'Transavia.com France',
    TP: 'TAP Portugal',
    TQ: 'Tandem Aero',
    TR: 'Tiger Airways',
    TS: 'Air Transat',
    TT: 'Tiger Airways Australia',
    TU: 'Tunisair',
    TV: 'Tibet Airlines',
    TW: 'T',
    TX: 'Air Caraibes',
    TY: 'Air Caledonie',
    TZ: 'ATA Airlines',
    U2: 'EasyJet',
    U3: 'Avies Air Company',
    U4: 'PMT Air',
    U5: 'USA 3000',
    U6: 'Ural Airlines',
    U7: 'Air Uganda',
    U8: 'Armavia',
    U9: 'Tatarstan Air',
    UA: 'United Airlines',
    UB: 'Myanma Airways',
    UD: 'Hex Air',
    UE: 'Nasair',
    UF: 'UM Air',
    UG: 'Sevenair',
    UH: 'US Helicopter Corp',
    UJ: 'Almasria Universal Airlines',
    UL: 'Srilankan Airlines',
    UM: 'Air Zimbabwe',
    UN: 'Transaero',
    UO: 'Hong Kong Express Airways',
    UP: 'Bahamasair',
    UQ: 'O Connor Airlines',
    UR: 'UT Air',
    US: 'US Airways',
    UT: 'UT Air',
    UU: 'Air Austral',
    UV: 'Helicopteros Del Sureste',
    UX: 'Air Europa',
    UY: 'Cameroon Airlines',
    UZ: 'Buraq Air',
    V0: 'Conviasa',
    V2: 'Vision Airlines',
    V3: 'Carpatair',
    V4: 'Vieques Air Link',
    V5: 'Danube Wings',
    V6: 'VIP S.A.',
    V7: 'Air Senegal',
    V8: 'Iliamna Air Taxi',
    VA: 'V Australia',
    VB: 'VivaAerobus',
    VC: 'Strategic Airlines Pty Ltd',
    VE: 'Avensa',
    VF: 'Valuair',
    VG: 'VLM Airlines',
    VH: 'Aeropostal',
    VK: 'Virgin Nigeria',
    VM: 'Viaggio Air',
    VN: 'Vietnam Airlines',
    VO: 'Tyrolean Airways',
    VQ: 'Viking Hellas Airlines',
    VR: 'Tacv Cabo Verde Airlines',
    VS: 'Virgin Atlantic',
    VT: 'Air Tahiti',
    VU: 'Air Ivoire',
    VV: 'Aerosvit Airlines',
    VW: 'Aeromar',
    VX: 'Virgin America ',
    VY: 'Vueling Airlines',
    VZ: 'Velvet Sky',
    W2: 'Canadian Western Air',
    W3: 'Arik Air',
    W4: 'LC Busre',
    W5: 'Mahan Airlines',
    W6: 'Wizz Air',
    W7: 'Sayakhat Airlines',
    W9: 'Air Bagan',
    WA: 'KLM Cityhopper',
    WB: 'Rwandair Express',
    WC: 'Islena Airlines',
    WF: 'Wideroe',
    WH: 'Webjet Linhas Aereas',
    WJ: 'Air Labrador',
    WK: 'Edelweiss Air',
    WL: 'Aeroperlas',
    WM: 'Windward Island Airways',
    WN: 'Southwest Airlines',
    WP: 'Island Air',
    WR: 'JSC Aviaprad',
    WS: 'Westjet',
    WT: 'Wasaya Airways LP',
    WU: 'Wizz Air Ukraine',
    WW: 'bmibaby',
    WX: 'Cityjet',
    WY: 'Oman Air',
    X3: 'TUIfly',
    X4: 'Air Excursions, LLC',
    X7: 'Air Service',
    X9: 'City Star Airlines',
    XC: 'KD Air',
    XE: 'Expressjet Airlines',
    XF: 'Vladivostok Air',
    XK: 'CCM Airlines',
    XL: 'LAN Ecuador',
    XM: 'Alitalia Express',
    XP: 'Xtra Airways',
    XQ: 'Sun Express',
    XR: 'Skywest Airlines',
    XU: 'African Express Airways',
    XV: 'BVI Airways',
    XW: 'Sky Express',
    XY: 'Al-Khayala',
    Y0: 'Yellow Airtaxi',
    Y1: 'Taymir',
    Y4: 'Volaris',
    Y5: 'Asia Wings',
    Y7: 'NordStar',
    Y8: 'Passaredo Linhas Aereas',
    Y9: 'Kish Air',
    YC: 'Yamal Air',
    YD: 'Mauritania Airways',
    YG: 'South Airlines',
    YI: 'Air Sunshine',
    YK: 'Cyprus Turkish Airlines',
    YL: 'Yamal Airlines',
    YM: 'Montenegro Airlines',
    YN: 'Air Creebec (1994) Inc.',
    YO: 'Heli Air Monaco',
    YQ: 'Polet Airlines',
    YR: 'Scenic Airlines',
    YS: 'Regional',
    YT: 'Yeti Airlines',
    YU: 'Euroatlantic Airways',
    YV: 'Mesa Airlines',
    YW: 'Air Nostrum',
    YX: 'Midwest Airlines',
    Z2: 'Zestair',
    Z3: 'PM Air LLC',
    Z4: 'Puma Air',
    Z5: 'GMG Airlines',
    Z6: 'Dnieproavia',
    Z8: 'Amaszonas',
    ZA: 'Interavia Airlines',
    ZB: 'Monarch Airlines',
    ZE: 'Lineas Azteca',
    ZF: 'Athens Airways',
    ZH: 'Shenzhen Airlines',
    ZI: 'Aigle Azur',
    ZJ: 'Zambezi airlines',
    ZK: 'Great Lakes Aviation',
    ZL: 'Regional Express',
    ZN: 'NAYSA',
    ZO: 'Central Air Transport Services (CATS)',
    ZU: 'Bashkortostan Air',
    ZV: 'Zagros Airlines',
    ZY: 'Sky Airlines'
  };
  return iataCodes[code];
};

module.exports = iataConvert;