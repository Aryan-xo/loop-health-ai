export interface Hospital {
    "HOSPITAL NAME": string;
    "Address": string;
    "CITY": string;
}

export const searchHospitals = (city: string, keyword?: string): Hospital[] => {
    let results = HOSPITALS_DB;

    // 1. Filter by City (Fuzzyish with Aliases)
    if (city) {
        let normCity = city.toLowerCase().trim();
        // Handle common Indian city aliases
        if (normCity === 'bangalore') normCity = 'bengaluru';
        if (normCity === 'bombay') normCity = 'mumbai';
        if (normCity === 'calcutta') normCity = 'kolkata';
        if (normCity === 'madras') normCity = 'chennai';
        if (normCity === 'gurgaon') normCity = 'gurugram';

        results = results.filter(h => h.CITY.toLowerCase().includes(normCity));
    }

    // 2. Filter by Keyword (Multi-term, Cross-field)
    if (keyword) {
        const terms = keyword.toLowerCase().trim().split(/\s+/);

        results = results.filter(h => {
            const fullText = (h["HOSPITAL NAME"] + " " + h.Address).toLowerCase();
            // All terms must be present in the combined text
            return terms.every(term => fullText.includes(term));
        });
    }

    return results;
};

const HOSPITALS_DB: Hospital[] =
    [
        {
            "HOSPITAL NAME": "Sawan Neelu Angles Nursing Home",
            "Address": "J 293, Saket",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Jeewan Jyoti Hospital",
            "Address": "562,Sector-15",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Goyal Hospital And Urology Centre",
            "Address": "E-4/8, Lajpat Rai Chowk",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Swasthik Hospital",
            "Address": "14, Gopal Nagar,Opposite Ashok Nagar,Tilak Nagar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Hemraj Jain Hospital And Maternity Home",
            "Address": "1, Block, C - 1,Janakpuri",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Kapoor Medical Centre",
            "Address": "E 18, Naraina Vihar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Bhatia Nursing Home",
            "Address": "Punjabi Mohalla,Near Gupta Hotel,Mohna Road,Ballabhgarh",
            "CITY": "Ballabgarh"
        },
        {
            "HOSPITAL NAME": "Gupta Nursing Home",
            "Address": "160,Sector - 16 A",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Kesar Hospital",
            "Address": "Ah -11, Shalimar Bagh",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Aar Pee Hospitals",
            "Address": "1276, Sector-28",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Rlkc Hospital - Metro Heart Institute",
            "Address": "Naraina Road, Near - Shadipur Metro Station",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Eden Hospital Pvt Ltd.",
            "Address": "B-162, East Of Kailash",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Surya Ortho & Trauma Centre",
            "Address": "5R/5/1, Nit",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Shubham Hospital",
            "Address": "Dd-15, Kalkaji",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Nazar Kanwar Surana Hospital",
            "Address": "219/220, N K Surana Marg, Gulabi Bagh, Malka Ganj",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Bajaj Eye Care Centre",
            "Address": "101, Vikas Surya Plaza, 7 D.D.A. Community Centre Road No.44, Pitampura",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Ram Lal Kundan Lal Orthopaedic Hospital And R.K. Maternity Home",
            "Address": "Plot No. - 8, Patparhganj Road, Opposite Mother Dairy Pandav Nagar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Jain Hospital",
            "Address": "177-178, Jagriti Enclave",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Netrayatan (Dr. Grover S Eye Care And Microsurgery Centre)",
            "Address": "S-371, Greater Kailash-Ii",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Mohan Eye Institute",
            "Address": "11 B, Ganga Ram Hospital Marg",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "National Institute Of Medical Sciences",
            "Address": "Sector -23A",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Panchsheel Hospital Pvt. Ltd",
            "Address": "C-3/64A, Yamuna Vihar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Navjeevan Hospital",
            "Address": "A-12, Pushpanjali Enclave, Pitampura",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Lohan Children Hospital",
            "Address": "5C-14,B.P.,Nit",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Ganesh Orthotrauma & Medical Centre",
            "Address": "F.15/7, Hansraj Marg, Krishna Nagar Colony",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Vardaan Hospital",
            "Address": "3E - I, Nit",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Mamta Hospital",
            "Address": "877, Mata Mandir Road",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Bhatia Global Hospital (Bhatia Endosurgery Pvt. Ltd.)",
            "Address": "307 & 308, Ambika Vihar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Aarogya Hospital",
            "Address": "32, Chitra Vihar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Ayushman Hospital & Trauma Centre",
            "Address": "37 Mile Stone Hero Honda Chowk",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Tirath Ram Hospitals Pvt. Ltd.",
            "Address": "163/20, Basai Road",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Uma Sanjeevani Health Centre Pvt Ltd",
            "Address": "1,Dakshin Marg,Dlf City,Phase Ii",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Khanna Hospital",
            "Address": "C2/396,Janakpuri",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Sonia Hospital",
            "Address": "1,Gulsan Park,Main Rohtak Road,Nangloi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Bhardwaj Hospital",
            "Address": "Nh-1,Sec-29",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Monga Medical Centre",
            "Address": "J-10, Krishna Nagar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Shree Jeewan Hospital",
            "Address": "67/1, New Rohtak Road,Karol Bagh",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Metro Hospital And Cancer Institute",
            "Address": "21, Community Centre, Preet Vihar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Chandra Laxmi Hospital Limited",
            "Address": "Sector - 4,Plot No.- 337, Vaishali",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Kukreja Hospital And Heart Centre",
            "Address": "C-1, Vishal Enclave, Rajouri Garden",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Sharp Sight Centre (East)",
            "Address": "A-6 & 7, Swasthya Vihar, Opp.Metro Pillar No-83, Vikas Marg, Delhi-110092",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Eye Q Super Speciality Eye Hospital",
            "Address": "Plot No-522, Sec-27, Gurgaon-122009",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Astha Hospital",
            "Address": "Nh-05, Block - I, Sector Alpha - 2, Greater Noida",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Kukreja Hospital",
            "Address": "No.D-36, Acharya Niketan,Mayur Vihar Phase - 1",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Durga Hospital (P) Ltd.",
            "Address": "711,Mukherjee Nagar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Prime Hospital & Ortho Centre",
            "Address": "Site No. 1,Huda Market, Sector-30,Faridabad-121002",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Pentamed Hospital",
            "Address": "7, Local Shopping Centre, Phase - 4, Derawal Nagar, Gujrawala Town",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Gopal Nursing Home And Eye Hospital",
            "Address": "B-1, West Jyoti Nagar,Shahdara",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Icare Eye Hospital & P.G. Inst Glaucoma Research Centre",
            "Address": "E3A,Sector-26",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Visitech Hospital Pvt. Ltd",
            "Address": "R-13, Greater Kailash-I",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Satya Medical Centre",
            "Address": "A-98/A, Sector - 34",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Umkal Healthcare Pvt. Ltd.",
            "Address": "H Block,Opp.Chancellor Club, Palam Vihar",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Kalyani Hospital Pvt. Ltd.",
            "Address": "Government College, Mehrauli Road",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Sethi Hospital",
            "Address": "301-302/4, Model Town",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "M.G.S. Hospital",
            "Address": "Rohtak Road, West Punjabi Bagh",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Banarsidas Chandiwala Institute Of Medical Sciences",
            "Address": "Chandiwala Estate, Maa Anandmai Ashram Marg, Kalkaji",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Dr. Shroff S Charity Eye Hospital",
            "Address": "5027,Kedar Nath Road,Daryaganj",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Khandelwal Hospital & Urology Centre",
            "Address": "B-16,East Krishna Nagar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Sir Ganga Ram Hospital",
            "Address": "Sir Ganga Ram Hospital Marg, Old Rajinder Nagar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Medanta The Medicity",
            "Address": "Sector 38, Rajeev Chowk",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Shroff Eye Centre",
            "Address": "A-9, Kailash Colony",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Paras Hospitals",
            "Address": "C-1,Sushant Lok,Phase-I,Sec - 43",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Mata Chanan Devi Hospital",
            "Address": "C-1, Janakpuri",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Sunder Lal Jain Charitable Hospital",
            "Address": "Ashok Vihar, Phase Iii",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Sparsh Medicare & Trauma Centre",
            "Address": "Shakti Khand-Iii/54, Indirapuram",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Walia Nursing And Maternity Home",
            "Address": "G- 60, Vikas Marg, Laxmi Nagar, Delhi-110092, Opposite Metro Pillar No.40",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Neelkanth Hospital Pvt. Ltd.",
            "Address": "1 Nathupur Road",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Kamal Hospital",
            "Address": "Ka Block,Kaushambi Near Telephone Exchange/Metro Station,Kaushambi",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Samvit Healthcare",
            "Address": "1,Sohna Road,Islampur",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Jeevan Jyoti Hospital",
            "Address": "B 28 Kiran Garden Uttam Nagar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Talwar Medical Centre",
            "Address": "M 139, Greater Kailsh Ii",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Joy Nursing Home",
            "Address": "J 5/49F,Rajauri Garden",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Sant Parmanand Hospital",
            "Address": "18,Shamnath Marg, Civil Lines",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Sodhi Nursing Home And Ent Hospital",
            "Address": "455,Bhera Enclave,Paschim Vihar,New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Sama Hospital",
            "Address": "8, Siri Fort Road",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Bali Nursing Home",
            "Address": "20-B/3, D.B. Gupta Road,Karol Bagh",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Surya Hospital",
            "Address": "383/11-C, East Azad Nagar, Krishna Nagar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Med First Ent Centre",
            "Address": "D-3/14, Vasant Vihar Opp Vasant Vihar Club",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Delhi Hospital & Temple Nursing Home",
            "Address": "1, Ansari Road,Drya Ganj",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Aarogya Hospital Gzb",
            "Address": "Plot No. Nh-1, Sec-Vi Vaishali, Ghaziabad",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Dr Gupta Nursing Home & Hospital",
            "Address": "25, Raj Block,Naveen Shahdara",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Indraprastha Medical Corporation Limited",
            "Address": "Sarita Vihar Delhi Mathura Road",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Indraprastha Medical Corporation Limited",
            "Address": "E-2 Sector-26",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Jaipur Golden Hospital",
            "Address": "2, Institutional Area, Sector-3, Rohini",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Tirupati Eye Centre",
            "Address": "C-53C,Sector-33,Noida-201301",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "R.K. Hospital",
            "Address": "3C-59 B.P. E.S.I. Hospital",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Navjeevan Medical Centre",
            "Address": "T-655,Onkar Nagar Delhi-110035",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Dr Mehta Eye Care",
            "Address": "5E/08, B.P Railway Road, Near Neelam Chowk, Nit",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Krishna Hospital & Trauma Centre",
            "Address": "J, 85,Patel Nagar, I",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Aster Eye Care",
            "Address": "32, Ring Road, Lajpat Nagar - Iv,",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Apex Multispeciality And Laparoscopy Hospital",
            "Address": "3C-79,B.P.N.I.T Faridabad",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Shroff Eye Centre",
            "Address": "110-Commercial Plaza,Radisson Suites,B-Block,Sushant Lok Phase-I,Gurgaon,Haryana",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Spectra Eye",
            "Address": "E-82 A, Greater Kailash, New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "R.G Scientific Enterprises Ltd.(R G Stone Urological Research Institute)",
            "Address": "F-12, East Of Kailash",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "R.G. Stone Urology & Laparoscopy Hospital",
            "Address": "195, Deepali Chowk, Pitampura",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "R.G. Stone & Urology & Laproscopy Hospital Nd",
            "Address": "B-1, Vishal Enclave, Rajouri Garden",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "R.G. Stone Urology & Laparoscopy Hospital",
            "Address": "18,Gagan Vihar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Rg Stone Urology & Laparoscopy Hospital",
            "Address": "A-6,Nehru Ground Neelam Bata Road,Nit",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Trinity Sunrise Healthcare Pvt Ltd",
            "Address": "F1, Kalindi Colony, Near Maharani Bagh, New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Park Hospital",
            "Address": "J - Block, Sector - 10 Near Court Faridabad, Haryana",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Park Hospital (Delhi)",
            "Address": "12,Meera Enclave,Near Keshopur Bus Depot,Outer Ring Road",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Asian Institute Of Medical Sciences Fbd",
            "Address": "Sector 21 A,Main Badkal Road",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Park Hospital",
            "Address": "Q-Block,South City-Ii, Sohna Road, Main Sec-47, Gurgaon",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Manipal Hospitals",
            "Address": "Block - F Gol Chakkar,Palam Vihar",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Manipal Hospitals",
            "Address": "Nh-24, Opp. Bahmeta Village, Near Landcraft Golflinks",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Shanti Devi Memorial Hospital",
            "Address": "Sector - 89, Kheri More, Bhopani, Faridabad",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Bhagwati Hospital",
            "Address": "Cs/Ocf - 6, Sector-13, Rohini",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Khetarpal Nursing Home",
            "Address": "Gn-5, Shivaji Enclave, F N G Sector Raja Gardens, Rajouri Garden",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Bhatia Orthopaedic And Maternity Nursing Home.",
            "Address": "390 Sector- 7B",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Umkal Hospital And M.P. Heart Research Institute",
            "Address": "A-520,Sushant Lok1",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Jeewan Nursing Home And Hospital",
            "Address": "2-B, Pusa Road",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Ganesh Hospital",
            "Address": "Ii-C/3,Nehru Nagar",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Holy Family Hospital",
            "Address": "Okhla Road,New Delhi-110025 , Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "C.K. Memorial Kapoor Hospital",
            "Address": "3B/8A,Nit 3,Near Dav College Road",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Metro Hospital And Heart Institute (Metro Heart Institute)",
            "Address": "X-1, Sector - 12, Near Sahara Samay News Paper",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Aryan Hospital Pvt. Ltd.",
            "Address": "Old Railway Road",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Medicheck Hospital",
            "Address": "1 C76/53,Near I.O.B. Bank,Nit",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Handa Medical Centre",
            "Address": "Nh Site No 1,Sector 16, Opp Sagar Cinema",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Tarak Hospital India Pvt Ltd",
            "Address": "C-7,Jai Bharat Enclave,Dwarka More,Delhi-110059",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Mahindru Hospitals Pvt. Ltd",
            "Address": "E 1, Kiran Garden",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "East Delhi Medical Centre",
            "Address": "1/550,G.T. Road,Mansarovar Park,Shahdara",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Saroj Super Speciality Hospital",
            "Address": "Sector-14 Extn, Institutional Area, Madhubhan Chowk Rohini",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Lall Nursing & Maternity Home",
            "Address": "New Railway Road Opp Pawa Nursing Home",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Lall Eye Care Centre",
            "Address": "New Railway Road",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "K.K. Surgical & Maternity Centre",
            "Address": "B-37, East Jyoti Nagar, Loni Road, Shahdara",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Mata Roop Rani Maggo & Mahindru Hospital",
            "Address": "C 9, Om Vihar Phase 7, Uttam Nagar, Metro Pilas 708 , New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Fortis Memorial Research Institute",
            "Address": "Sec 44 Gurgaon , Gurgaon",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Fortis C Doc Healthcare Ltd",
            "Address": "B - 16, Chirag Enclave, Opp. Nehru Place, Devika Tower, New Delhi , New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Medicheck Ortho Superspeciality Hospital",
            "Address": "Site-2,Sec-46, Near Community Centre, Faridabad-121010 , Faridabad",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Felix Hospital",
            "Address": "Nh-01, Sector -137, G.B Nagar, Noida , Noida",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Maharaja Agrasen Hospital Dwarka",
            "Address": "Plot-1,Sec-1,Dwarka New Delhi , New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Amicare Hospital Pvt Ltd",
            "Address": "Plot No.15/16,Nyay Khand-I,Near Indira Puram Public School,Indirapuram,Ghaziabad-201014 , Ghaziabad",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Aashlok Fortis Hospital",
            "Address": "25 Ab Community Centre Safdarjung Enclave New Delhi-110029 , New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Noida Medicare Centre Ltd.",
            "Address": "16 C, Block - E, Sector-30",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Escorts Heart Institute Research Centre Ltd.",
            "Address": "Okhla Road",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Fortis Hospitals Limited Faridabad",
            "Address": "Neelam Bata Road,N.I.T.",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Fortis Flt Lt Rajan Dhall Hospital",
            "Address": "B-1, Pocket - 1, Aruna Asaf Ali Marg, Vasant Kunj",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Fortis Hospital Noida",
            "Address": "B-22,Sector-62",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Fortis Hospital Shalimar Bagh",
            "Address": "A - Block, Shalimaar Bagh, Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Vimhans Institute Of Mental Health And Neurosciences",
            "Address": "No. 1 Institutional Area, Nehru Nagar , New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Dr Sushma Jindal Hospital",
            "Address": "488/15, Dilshad Garden, (Near Radha Krishan Mandir), New Delhi-110095",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Universal Hospital",
            "Address": "Bye Pass Road,Molarband Extn. Badarpur New Delhi-110044 , New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Cygnus Mls Hospital",
            "Address": "Plot No 4 Main Kanjhawla Road Near Balaji Mandir Rama Vihar Delhi-110081 , New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Mahajan Eye Centre",
            "Address": "21A Ad Block, Pitampura Outer Ring Road Near Madhuban Chowk Pitampura Metro Station New Delhi-110034 , New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Bhagwan Mahavir Hospital",
            "Address": "Sector 14 Near Madhuban Chowk Rohini Delhi-110085 , New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Sarthak Medical Centre",
            "Address": "Rz-2C, Main Road, Palm Village",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Genesis Hospital Pvt Ltd",
            "Address": "C-1/130,Near Mata Chanan Devi Hospital,Janak Puri",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Metro Hospital And Heart Institute (Metro Multi Speciality Hospital)",
            "Address": "L-94, Sec.- 11",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Metro Hospital & Heart Institute",
            "Address": "14, Ring Road,Lajpat Nagar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Lotus Hospital",
            "Address": "Wz 409- A, Janak Park,Hari Nagar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Nayan Jyoti Eye Centre",
            "Address": "1A-251, First Floor, Nit- 121001, Neelam Bata Road Near Kotwali Police Station, Faridabad-121001",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Prakash Hospital",
            "Address": "Site No.2,Near Aggarwal Public School,Sector - 3",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Venu Eye Insititute",
            "Address": "1/13,Sheikh Sarai,Phase Ii , New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Rs Grover Memorial Hospital",
            "Address": "B-243, Priyadarshini Vihar, Delhi , New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Kailash Eye Care",
            "Address": "50-51 South Patel Nagar New Delhi-110008 , New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Qrg Health City A Unit Of Qrg Medicare Ltd",
            "Address": "Plot No.1,Sector-16,Faridabad-121002 , Faridabad",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Delhi Eye Centre",
            "Address": "C-120, New Rajinder Nagar,Shankar Road , New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Divya Prastha Super Multispeciality Healthcare Pvt Ltd",
            "Address": "Rz-37, Opposite Bagh Wala School, Main Road, Palam Colony-110045-New Delhi , New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Chandna Medical Centre",
            "Address": "52 & 85,Sector - 18A,Near Subzi Mandi,Old Faridabad",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Shivalik Hospital",
            "Address": "Huda Market, Sector-37",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Ibs Ashwani Hospital",
            "Address": "Plot No 8-D/1, Ymca Road, Sector 11, Faridabad , Faridabad Sector 8 , Ballabgarh , Haryana",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Yashoda Hospital",
            "Address": "Iii-M,Nehru Nagar",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Yashoda Super Speciality Hospital",
            "Address": "H-1,Kaushambhi",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Indian Spinal Injuries Centre",
            "Address": "Sector-C, Vasant Kunj",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Indo Gulf Diagnostics And Research Centre Pvt Ltd",
            "Address": "B - 498A, Sector - 19, Noida, Uttar Pradesh , Noida",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Sci International Isis Hospital Pvt Ltd",
            "Address": "M-4, Greater Kailash, Part -1 Near M-Block Market , New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Kartik Nursing Home And Urology Centre",
            "Address": "C-15, C-Block Community Centre (Behind Janak Cinema), Janak Puri, New Delhi-110058 , New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "B L Kapur Memorial Hospital",
            "Address": "Pusa Road",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Sehgal Neo Hospital",
            "Address": "B-364, Meera Bagh, Outer Ring Road",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Shanti Mukand Hospital",
            "Address": "2, Institutional Area, Dayanand Vihar, Vikas Marg Extension",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Zenith Hospital Pvt Ltd",
            "Address": "187/1 Yadav Colony Mohana Road,Near Punjabi Dharamshala Ballabgarh",
            "CITY": "Ballabgarh"
        },
        {
            "HOSPITAL NAME": "Raj Rishik Hospital Private Limited",
            "Address": "Site No-6, Near Aggarwal Public School,Sec-3, Faridabad",
            "CITY": "Ballabgarh"
        },
        {
            "HOSPITAL NAME": "Narinder Mohan Hospital And Heart Centre",
            "Address": "Mohan Nagar, Ghaziabad-201007",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Eye Care Centre",
            "Address": "1368-B Sector-14",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Aastha Eye Centre",
            "Address": "5R/5,N.I.T.",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Sukhmani Hospital",
            "Address": "B-7 Extn/126 A, Safdarjung Enclave",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Sarvodaya Hospital And Research Centre",
            "Address": "Ymca Road, Near Esi Hospital,Sector - 8",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Drishti Eye Centre - Faridabad",
            "Address": "20-21F, Fruit Garden, Nit Nh-5",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "B.M Gupta Nursing Home Pvt.Ltd.",
            "Address": "H-11-15 Arya Samaj Road,Uttam Nagar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Jeewan Hospital And Nursing Home Pvt. Ltd.",
            "Address": "Gate No. - 1,Jeewan Nagar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Shreya Eye Centre",
            "Address": "D 163,Surajmal Vihar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Batra Hospital And Medical Research Centre",
            "Address": "1, Tughlakabad Institutional Area",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Vision Eye Hospital",
            "Address": "F- 24/136,Sector - 7,Rohini",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Artemis Medicare Services Ltd.",
            "Address": "Sector- 51",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Narang Eye Institute",
            "Address": "B-8 Derawal Nagar Near Model Town Metro Station",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Bharti Eye Foundation",
            "Address": "1/3, East Patel Nagar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Bharti Eye Hospital",
            "Address": "E-52, G.K.-1, New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Vision Eye Centre",
            "Address": "12/27, West Patel Nagar, Near Arya Samaj Mandir,",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Agrawal Eye Institute",
            "Address": "A - 235,Shivalik,Malviya Nagar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Ayushman Hospital",
            "Address": "Plot No.2, Sector - 12,Dwarka",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "M.D. Eye Care & Laser Centre",
            "Address": "M-165 Greater Kailash Part - 2",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Bansal Hospital (A Unit Of Namedi Hospital Pvt. Ltd)",
            "Address": "A-1, New Friends Colony",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Tirath Ram Shah Charitable Hospital",
            "Address": "2, Battary Lane, Rajpur Road, Near Tis Hazari Court",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Max Multispeciality Hospital A Unit Of Four Seasons Foundation",
            "Address": "Plot No. 4A, Sector Institutional Green, Near Crown Plaza Hotel, Greater Noida",
            "CITY": "Greater Noida"
        },
        {
            "HOSPITAL NAME": "Max Smart Super Speciality Hospital",
            "Address": "Mandir Marg, Saket",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Max Hospital",
            "Address": "N- 110 , Panchsheel Park , New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Max Super Specialty, West Block Saket",
            "Address": "1, Press Enclave Road, Saket,",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Max Super Specialty, East Block Saket (Devki Devi Foundation",
            "Address": "2, Press Enclave,Saket",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Max Hospital",
            "Address": "Block B, Sushant Lok",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Balaji Medical & Diagnostic Research Centre",
            "Address": "108-A I.P. Extension,Patparganj",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Max Super Speciality Hospital",
            "Address": "W - 3, Sector - 1, Vaishali",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Max Super Speciality Hospital, Shalimar Bagh",
            "Address": "Fc - 50, C & D Block, Shalimar Bagh, New Delhi - 88",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Sarvodaya Hospital",
            "Address": "Gopi Colony,Sector-19,Faridabad-121006",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Amit Nursing Home",
            "Address": "A-3, Manak Vihar Ext. Near Beriwala Bagh,Tihar,New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Bhagat Chandra Hospital",
            "Address": "Rz F-1/1,Mahavir Enclave,Dwarka",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Bhagat Hospital",
            "Address": "D-2/48-49, Janakpuri",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Jeewan Hospital And Nursing Home (Gate No. - 2)",
            "Address": "150, Gate No. - 2,Jeewan Nagar, Opp. Maharani Bagh",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Ahooja Eye & Dental Institute",
            "Address": "560/1,Daya Nand Colony,New Railway Road",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Shivmani Hospital",
            "Address": "5E/9, Nit",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Santom Hospital Pvt. Ltd.",
            "Address": "D - 5, Prashant Vihar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Vinayak Hospital",
            "Address": "Nh-1,Sector-27,Atta Market",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Ghai Hospital",
            "Address": "Plot No. 29,Sector - 9",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Amar Leela Hospital Pvt. Ltd",
            "Address": "B - 1/6 Janak Puri",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Navjyoti Eye Centre",
            "Address": "90, Darya Ganj",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Kailash Hospital & Heart Institute",
            "Address": "H- 33, Sector 27, Noida",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Chugh Hospital",
            "Address": "5L/164,K.C.Road,N.I.T,Faridabad-121001",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Sunetram Eye Care",
            "Address": "5E/22 Bp,First Floor, B K Chowk,Nit-5 ,Faridabad-121001",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Visitech Eye Center",
            "Address": "Plot No.-2. Pocket 1, Jasola Vihar, New Delhi- 110025",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Foresight Eye Clinic Super Speciality Eye Care",
            "Address": "106, Rps Dda, Sheikh Sarai Phase - 1, Opp. Apeejay School, Malviya Nagar, New Delhi 110017",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Rosewood Hospital",
            "Address": "5, Jl Block, Roshan Garden, Najafgarh, New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Neo Hospital A Unit Of Muskan Medical Centre Pvt Ltd",
            "Address": "D-170A,Sector-50,Noida-201301",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Chopra Eye Hospital And Laser Centre",
            "Address": "House No.3,Pocket C-8,Sector-7,Rohini,Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Eye Health Clinic Noida",
            "Address": "E - 1, Sector - 61, Noida",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Sunetra Eye Laser And Dental Care Centre",
            "Address": "K C - 120, C- Blockkavi Nagar Ghaziabad",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Jeevan Jyoti Clinic And Nursing Home",
            "Address": "M - 131, Vikas Puri, New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Sinha Hospital",
            "Address": "Plot No 3-A, Roshan Mandi,Near Pnb Atm, Tuda Mandi,Najafgarh,New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Chaudhary Eye Centre And Laser Vision",
            "Address": "4802, Bharat Ram Road(Ansari Road),24,Darya Ganj",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Handa Nursing Home",
            "Address": "57, Raja Garden",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Primus Super Speciality Hospital",
            "Address": "2 Chandragupt Marg, Chanakyapuri",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Suman Super Speciality Hospital",
            "Address": "Plot No. 14,Pocket 04,Sector 7,Bindapur,Dwarka",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Prakash Hospital",
            "Address": "D-12 12-A,B Sector- 33, Opposite Ntpc Eoc",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Neera Eye Centre Laser Vision",
            "Address": "B-99, Bharat Ram Road, Opp. Commercial School, Daryaganj-110002",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Ballabhgarh Nursing Home",
            "Address": "64-65 Mukesh Colony,Ballabhgarh",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Paras Hospital",
            "Address": "Sec -4/130, Vaishali",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Khetarpal Hospital",
            "Address": "F-95,Bali Nagar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Vision Plus Eye Centre",
            "Address": "Kisan Tower Ff & Sf, Golf Marg, Hoshiarpur, Sector-51,Noida , Uttar Pradesh , 201307",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Surbhi Hospital Pvt Ltd",
            "Address": "Kh-232, Golf Course Road, Village Morna,Sector-35,Noida-201301",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Khanna Eye Centre",
            "Address": "E368, Nirman Vihar , Vikas Marg",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Santosh Multispeciality Hospital",
            "Address": "Shop No. 3F/139, Metro Rd, New Industrial Twp 3A, New Industrial Town, Faridabad, Haryana-121001",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Venkateshwar Hospital",
            "Address": "Sector 18A, Dwarka, New Delhi-110075",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Hope Oncology Clinic",
            "Address": "A-22, Hauz Kahs, New Delhi-110066",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Apollo Spectra Hospitals Kailash Colony",
            "Address": "A-19/A,Kailash Colony,New Delhi-110048",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Apollo Spectra Hospitals Karol Bagh",
            "Address": "66A/2,New Rohtak Road Karol Bagh, New Delhi-110005",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Green City Hospital",
            "Address": "N.H. 17 Delta- I, Greater Noida",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Manav Hospital & Laser Eye Centre",
            "Address": "B Block , Near Sbi Bank Kavi Nagar, Ghaziabad-201002",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Visitech Eye Center South Ex",
            "Address": "A-10, South Extension Part-2, New Delhi-110049",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Sanjeevan Medical Research Centre (P) Ltd.",
            "Address": "4869/24, Ansari Road, Darya Ganj",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Kesar Hospital",
            "Address": "C-480 Chawala Colony,Ballabhgarh,Faridabad,Haryana",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Vinayak Hospital",
            "Address": "Plot No-2 Main Road, Opposite Shakti Nagar Telephone Exchange, Derawal Nagar, Opposite Model Town",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Ayushman Hospital And Health Services",
            "Address": "Sec-10, Dwarka",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Atlanta Mediworld Multispeciality Hospital & Research Centre (Unit Of R R M Services)",
            "Address": "Plot No-Nh-01, Sector-14, Atal Chowk Vasundhara",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Malik Radix Healthcare Pvt Ltd",
            "Address": "C 218, Nirman Vihar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Meenakshi Hospital",
            "Address": "B - 13 Kaushambhi",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Rajiv Gandhi Cancer Inst. And Research Centre",
            "Address": "D-18, Sector - 5 Rohini, Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Makkar Medical Centre",
            "Address": "A 1, Priyadarshini Vihar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Action Cancer Hospital",
            "Address": "H-2/Fc-34,A-4,Paschim,New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Kailash Hospital Limited",
            "Address": "23, Institutional Area, Greater Noida",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Rana Eye Centre",
            "Address": "C-8/28 , First Floor , Sector 7 , Sai Baba Chowk , Rohini , Opp Metro Pillar 394 , Rohini Sector-7 , North Delhi-110085",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Dev Eye Centre A Unit Of Skiffle Healthcare Services Ltd",
            "Address": "R - 10, Vakil Colony, Sector - 12, Pratap Vihar, Ghaziabad",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Itek Vision Centre",
            "Address": "B-1A/22, Sector 51, Noida-201301",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Jeewan Mala Hospital Pvt. Ltd.",
            "Address": "67/1,New Rohtak Road,Karol Bagh",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Goyal Eye Institute",
            "Address": "1/10 East Patel Nagar Main Patel Road , Delhi , Central Delhi , Delhi-110008",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Hitech Eye Centre",
            "Address": "A-12, 1St Floor, Main Najafgarh Road Vikas Puri, Opposite Metro Pillar No.632 , Delhi , West Delhi-255080",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Satyabhama Hospital Pvt Ltd",
            "Address": "Rz - 10, Naresh Park, Near Water Tank, Najafgarh Road, Nangloi, New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Dr. Pattnaik'S Laser Eye-Institute-N Delhi.",
            "Address": "C-2, Ground Floor, Lajpat Nagar-3, New Delhi-110024",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Shri Ram Singh Hospital And Heart Institute",
            "Address": "B-25-25, 26-A, East Krishna Nagar, Swarn Cinema Road,",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Pushpanjali Medical Centre",
            "Address": "A-14-15, Pushpanjali",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Delhi Heart And Lung Institute",
            "Address": "3-Mm Ii, Panchkuian Road",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Aakash Healthcare",
            "Address": "Hospital Plot, Road No-201, Sector-3, Dwarka, New Delhi-110075",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Delhi Eye Care",
            "Address": "4/17, 2Nd Floor, Balraj Khanna Marg, Opp. Jaypee Sidharth Hotel East Patel Nagar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Ahuja Eye Centre",
            "Address": "Ag-11, Shalimar Bagh, Main Ring Road, Delhi-110088",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Save Sight Centre",
            "Address": "A-14,G.T.Road, Adarsh Nagar,Opp.Adarsh Metro Station,Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Shanti Gopal Hospital",
            "Address": "Plot No. Nh-1,Ahinsa Khad-Ii,Indirapuram",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "I Create Hospital",
            "Address": "A-3/24,3Rd Floor,Janakpuri,New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Narayana Superspeciality Hospital",
            "Address": "Plot No-3201,Block-V, Dlf Phase-Iii,Sector-24.",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Viaan Eye And Retina Centre",
            "Address": "Vg4 Besateck Square Mall,Sector 57, Gurgaon Haryana-122413",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Drishti Eye And Ent Care",
            "Address": "Plot No-8,Sectpr-5 Vaishali",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Tewari Eye Centre",
            "Address": "Hospital Cum Resi 699,Sector-5 Vaishali",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Konarc Hospital",
            "Address": "9A/1,Naresh Park,Near Water Tank, Main Najafgarh Road, Nangloi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Jagmohan Multispeciality Hospital",
            "Address": "E-10, Rajeshwari Park, Loni, Ghaziabad-201102",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Navin Medicare Pvt Ltd",
            "Address": "N.H.- 3, Pocket - F , Sector - Alpha - Ii Greater Noida Uttar Pradesh-201301",
            "CITY": "Greater Noida"
        },
        {
            "HOSPITAL NAME": "Central Hospital",
            "Address": "A 142,Ganesh Nagar,Near Tilak Nagar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Manipal Hospitals",
            "Address": "Adjoing Mtnl Bulinding,Main Road,Sec-6,Dwarka,New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Pawan Hospital",
            "Address": "Samaypur Road Rajiv Colony Near Sec-56 Ballabhargh Faridabad-121004",
            "CITY": "Ballabgarh"
        },
        {
            "HOSPITAL NAME": "Sharda Hospital",
            "Address": "32 34 Knowledge Park Iii Greater Noida",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Yatharth Wellness Superspecility Hospital & Heart Centre",
            "Address": "Plot No-01 Sector-110, Noida-201304",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Dashmesh Hospital",
            "Address": "C-141, Shiv Nagar Ext.,Jail Road, New Delhi-110058",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Jain Eye Hospital And Laser Centre",
            "Address": "Ag - 152, Shalimar Bagh, New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Mayom Hospital",
            "Address": "D - Block, South City - I, Gurgaon",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Dr Bajaj Eye Hospital Pvt Ltd",
            "Address": "A-1/1, Ist Floor Nathu Colony Chowk,Shahdara,New Delhi-110093",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Dr Aggarwals Eye Clinic",
            "Address": "F - 17, Moti Nagar, New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "I Clinix Advanced Eye Care",
            "Address": "27/171 Vikram Vihar, Near Moolchand Station Lajpat Nagar-4",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Shree Aggarsain International Hospital",
            "Address": "Sector-22,Rohini,Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Vikas Hospital Pvt Ltd",
            "Address": "1629-H, Thana Road, Najafgarh",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Goyal Hospital",
            "Address": "Site No. 2 Sec -8",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Surya Kiran Hospital",
            "Address": "31, Roshan Mandi, Najafgarh, New Delhi-110043",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Pushpawati Singhania Research Institute For Liver Renal And Digestive Diseases.",
            "Address": "Press Enclave Marg, Sheikh Sarai,Phase - Ii",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Suraksha Eye Surgery Centre",
            "Address": "B-15,Ground Floor,Rana Pratap Bagh,Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Shankar Medicare Centre",
            "Address": "3/184 Sector 28 Link Road Near Anupam Sweets Faridabad",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Shri Mool Chand Kharaiti Ram Hospital And Ayurvedic Research Institute",
            "Address": "Lajpat Nagar- 3",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Maharaja Agrasen Hospital",
            "Address": "Road Number-35, New Rohtak Road,Punjabi Bagh",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Shri Ram Singh Multi Speciality Hospital",
            "Address": "Sector 70 Noida Gb Nagar Up",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Gandhi Nursing Home",
            "Address": "C-50,51,Om Vihar,Uttam Nagar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Healing Tree Hospital",
            "Address": "30/1 Shakti Khand Indirapuram Ghaziabad",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Dr Dilip Hospital",
            "Address": "765 Sec-28 Faridabad",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Lyf Hospital",
            "Address": "Nh-4,Gyan Khand -1 Indirapuram",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Apurva Hospital Faridabad",
            "Address": "2N/74,Bp Near 2-3 Gole Chakkar Nit Faridabad",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Promhex Multispeciality Hospital A Unit Of Promhex Plus Healthcare Pvt Ltd",
            "Address": "Plot No Nh-34 Sec-P2 Omega-1 Greater Noida",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Shishu Sadan Multispeciality Children Hospital",
            "Address": "A-1/169-A, Janakpuri Opp. Metro Pillar No -616",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Param Jyoti Eye Centre (A Unit Of M. S Medicare Pvt. Ltd)",
            "Address": "16A/CP-2155,Vasundhara,Ghaziabad-201012",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Ishan Hospital",
            "Address": "Plot No.1,Pocket No-8B,Sector-19,Rohini,Delhi-89 Rohini Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Dr. Kapurs The Healing Touch Eye Centre",
            "Address": "D 8, D Block,Vikaspuri",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Madhukar Rainbow Childrens Hospital",
            "Address": "Fc-29, Plot No.5, Near Malviya Nagar Metro Station Geetanjali",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Doctor Today Healthcare",
            "Address": "5C-2BP, RAILWAY ROAD, NIT FARIDABAD-121001",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Metro Heart Institute With Multispeciality",
            "Address": "Sector-16A",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Dharamshila Cancer Hospital And Research Centre",
            "Address": "Dharamshila Marg, Vasundhara Enclave",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Shivalik Hospital",
            "Address": "SEHATPUR,OPP SEC 91,FBD HARYANA",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "K K Health Care Centre",
            "Address": "238, SEC-5, URBAN ESTATE, GURGAON",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Diyos Mens Health Center Pvt Ltd",
            "Address": "A1/26, SAFDARJUNG Enclave New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Kalra Hospital S R C N C Pvt Ltd",
            "Address": "A - 5- 6, Kirti Nagar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Samyak Hospital",
            "Address": "BM-7 East Shalimar Bagh",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Navin Hospital (A Unit Of Navin Meditech Pvt Ltd )",
            "Address": "Nh-1, Sector-3 Vaishali",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Sumitra Hospital",
            "Address": "A 119A, Sector - 35",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Kedar Hospital",
            "Address": "3B/3 BP NIT Faridabad-121001",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Aakash Hospital",
            "Address": "90/43, Malviya Nagar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Jaypee Hospital",
            "Address": "Sector - 128, Gautam Budh Nagar, Noida, Uttar Pradesh",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Sri Balaji Action Medical Institute",
            "Address": "FC-34 A-4, Paschim Vihar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "SSB Heart And Multispecialty Hospital",
            "Address": "69 Sector-20A,Near Neelam Fly Over,Ajronda Chowk",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Prayag Hospital And Research Centre",
            "Address": "J-206/A-1, Sector-41",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Dayal Eye Centre",
            "Address": "SCO NO 11 Friends Colony,Main Jharsa Road Opp Housing Board Colony",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Institute Of Brain And Spine",
            "Address": "73,Ring Road,Lajpat Nagar-3, New Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Netram Eye Centre",
            "Address": "I -1791, C R Park ,Near IDBI Bank, New Delhi, Delhi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Sardana Eye Institute",
            "Address": "A2/19, RAJOURI GARDEN",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Kalyani Hospital",
            "Address": "RZ-30A,Rati Ram Park Naya Bazar,Najafgarh",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Shri Balajis Multispeciality Hospital",
            "Address": "Sector 9-10 Basai Road",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Manas Hospital",
            "Address": "A93, Block A, Sector 34, Noida",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "SJM Hospital",
            "Address": "SJM Chowk, NH-24, Plot No. 2 Chhijarsi, Sector 63",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Supreme Hospital",
            "Address": "Charmwood Village,Surajkund Road",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "The Signature Hospital",
            "Address": "Sector 37 D (BPTP) ,Dwarka Expressway",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "W Pratiksha Hospital",
            "Address": "Golf Course Ext Rd, Sushant Lok-II, Shushant Lok 2, Sector 56",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "The Healing Touch Eye Centre",
            "Address": "C-2/390,Pankha Road,Janakpuri",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Virmani Hospital",
            "Address": "Plot no 8,9,10 ,Block B SC ,Commercial Complex,Mayur Vihar,Phase 2",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "YatharthSuperspeciality Hospital",
            "Address": "Sector Omega-1,Greater Noida",
            "CITY": "Greater Noida"
        },
        {
            "HOSPITAL NAME": "Yatharth Superspeciality Hospital",
            "Address": "HO-01, Noida Extension, Sector 1, Greater Noida",
            "CITY": "Greater Noida Ext"
        },
        {
            "HOSPITAL NAME": "Kriti Hospital",
            "Address": "Plot No. 13,Sector 56,In front of Kendriya vihar",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Jeewan Moti Khera Hospital",
            "Address": "495,Main Najafgarh Road,Near Krishna Mandir,Nangloi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Mansaram Hospital",
            "Address": "B-5, Aman Puri Extension,Main Najafgarh Road,Nangloi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Sahdeo Hospital",
            "Address": "NH-33,SECTOR OMEGA 1,Greater Noida",
            "CITY": "Greater Noida"
        },
        {
            "HOSPITAL NAME": "Vedanta Netralaya",
            "Address": "C-16,RDC,Rajnagar,Opposite Yes BANK,",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Ahuja Laser Eye Centre",
            "Address": "212,Parmanand colony,,ain road",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Kapil Multispeciality Hospital",
            "Address": "A-1,Shastri park,Nathupura mor, burari",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Polaris Hospital",
            "Address": "Opp. Raheja mall,sohna road, sector 48",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Apollo Spectra Hospital",
            "Address": "Near Dronacharya Govt. College,New Railway Road,",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Apollo Cradle",
            "Address": "Plot No. 15-A,Shivaji Marg,Najafgarh Road,Near Motinagar Metro station",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Apollo Cradle",
            "Address": "NH-1,Shakti khand 2,",
            "CITY": "Indirapuram"
        },
        {
            "HOSPITAL NAME": "Apollo Cradle",
            "Address": "R-2,Nehru enclave,Near Nehru Place Flyover",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Indus Valley Hospital",
            "Address": "232,kh no. 19/1(1-12),Laxmi Garden,Tuda Mandi,Tehsil Road,Najafgarh",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Life Hospital",
            "Address": "Opposite Hanuman Mandir,Sector-8",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Sharma Medicare",
            "Address": "NH-19/A,L Block,Delta- II,Greater Noida",
            "CITY": "Greater Noida"
        },
        {
            "HOSPITAL NAME": "Saroj Medical Centre",
            "Address": "Plot no 9 ,Pocket 8-B,Sector 19,Jail Road,Rohini",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "M D City Hospital",
            "Address": "4C Institutional area,Northex,Model Town",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Rathi Hospital",
            "Address": "2,3 Pratap vihar,Nangloi Najafgarh road,Ranhola",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "New Vision Eye Centre",
            "Address": "A-55/233,Pashchim Vihar,",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Eye Mantra",
            "Address": "A-1/10,Paschim Vihar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Clio Eye Centre",
            "Address": "1SP,Golf Course road,Sector 28",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Savitri Hospital",
            "Address": "142/91,Extended Lal Dora,Near petrol Pump,Karala-Kanjhawala road",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Yashoda Superspeciality Hospital & Cancer Institute",
            "Address": "B 1 &B 2, Sector 23,Sanjay Nagar",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Motherhood Hospital",
            "Address": "B- 206 A,Sector 48,Gautam Budh Nagar",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Shakuntala Hospital",
            "Address": "Bank colony,GT Road,modinagar",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "Kailash Hospital & Neuro Centre",
            "Address": "NH-1,SECTOR 71",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "Centre for Sight",
            "Address": "B2/6, Ashok Vihar, Phase II",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Centre for Sight",
            "Address": "Plot No 9, Sector - 9, Dwarka",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Centre For Sight",
            "Address": "A3 Vikaspuri, Opp. Metro pillar no. 627, Najafgarh Road",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Centre For Sight",
            "Address": "J-12/30, Rajouri Garden",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Centre For Sight",
            "Address": "SCO Complex \u2013 317, Sector \u2013 29",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Centre For Sight",
            "Address": "F 7,DHANAK BASTI -2 ,\n SUDARSHAN MANDIR, NEW RAILWAY ROAD",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Centre For Sight",
            "Address": "C-6, Ground Floor, Explore Tower, Shakti Khand-4, Near Bharat Petrol Pump",
            "CITY": "Indirapuram"
        },
        {
            "HOSPITAL NAME": "Centre For Sight",
            "Address": "Plot No. 1, Huda Market No.1, Beside Hanuman Mandir, Sector-16A, Near Old Faridabad Metro Station",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Centre For Sight",
            "Address": "B-5/24,Safdarjung Enclave,Opp. Dear Park",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Centre For Sight (Preet Vihar)",
            "Address": "F-19, Preet Vihar, Main Vikas Marg",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Centre For Sight (Rohini)",
            "Address": "304-309, Ring Road Mall, Sector-3,Rohini",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Manavata Hospital",
            "Address": "Plot No. 494,Near Women College,Uncha Gaon,Mohna Road,Ballabhgarh",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "Dharamveer Solanki Hospital",
            "Address": "B-2,Lakhi Ram park,100 Feet Road,Near NDPL Office,Opp Sec-22,Rohini",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "C M Patel Hospital",
            "Address": "E-7,100 Foot Road,West Jyoti Nagar Extension,Shahdara",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "C D Global Hospital",
            "Address": "Plot No. 897/4,Opp. Metro Pillar No. 492,Main Rohtak Road,Mundka",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "AIRMID Hospital",
            "Address": "Samaypur,New Delhi - 110042",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Medlife Hospital",
            "Address": "KH No. 346 , Main Road, Lal Dora, Burari",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "CLOUDNINE HOSPITAL",
            "Address": "C-9, Gali Number 1, Hoshiarpur Village, Sector 51",
            "CITY": "Noida"
        },
        {
            "HOSPITAL NAME": "CLOUDNINE HOSPITAL",
            "Address": "94, 4, Mehrauli-Gurgaon Rd, Anamika Enclave, Sector 14",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "CLOUDNINE HOSPITAL",
            "Address": "MSJ House, Plot No. A-2, Vikas Marg, beside SS Plaza, Mayfield Garden, Sector 47",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "INDIRA GANDHI EYE HOSPITAL",
            "Address": "Sector-62, Ullawas",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "COMPLETE EYE CARE",
            "Address": "301 B, Eros City Square,Sector 49",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "GUPTA HOSPITAL ( A UNIT OF RAJNI GUPTA HOSPITALS)",
            "Address": "A-56,Main Kanjhawala Road, Budh Vihar,Phase-1",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "GOYAL HOSPITAL",
            "Address": "B-33, LIC Colony, Pashchim Vihar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "AVANTIKA MULTISPECIALITY HOSPITAL",
            "Address": "A-3/8,Sector 3, Rohini,Opposite Jaipur Golden Hospital",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "AASHIRWAAD NURSING HOME",
            "Address": "A-29/3, Lions Enclave, Marble Block,Opp. DDA Park,Vikas Ngar,Uttam Nagar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "LAL SUPERSPECIALITY HOSPITAL",
            "Address": "Veer Nagar, Main madanpuri road,Near Pataudi Chowk",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "AASTHA HOSPITAL,NEW DELHI",
            "Address": "L-2/50, New Mahavir Nagar, Outer Ring Road",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "ARSH HOSPITAL",
            "Address": "Opposite ERA Redwood residency, Tigaon Road, Sector 78",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "SANJEEVANI HOSPITAL",
            "Address": "Sector 66, Opp. Moga Colony, Sohna Road",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "SR KRISHNA HOSPITAL",
            "Address": "Plot No. 23,24, Jain Park, Opp. Metro Pillar 722,723,Uttam Nagar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "RADIUM EYE CENTRE",
            "Address": "A-1/11, 3rd Floor,Sector -8 ,Rohini",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "PAWAN HOSPITAL, UNIT -2",
            "Address": "Plot No. 10, Gurudwara Road,Jawahar Colony, NIT",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "SRG MULTISPECIALITY HOSPITAL",
            "Address": "E-2/241,Shastri Nagar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "TOMAR MULTISPECIALITY HOSPITAL",
            "Address": "Plot No. 35,36,36A, Gali No. 2 , Pratap Vihar -1, Kirari,Nangloi",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "JAIN EYE CENTRE",
            "Address": "Plot No. 111,Ground Floor, Shakti Khand -2,Near Omaxe Plaza,Indirapuram",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "REVIVE HOSPITAL",
            "Address": "5A/2,Tilak Nagar,Opp. Metro Pillar No. 491",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "AVANTIKA HOSPITAL",
            "Address": "137, Niti Khand -II, Indirapuram",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "NAMOKAR EYE CENTRE",
            "Address": "13A, Pocket A,Ashok Vihar,Phase-3",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "NIRMLA HOSPITAL",
            "Address": "RZ-E-20, Jai Vihar, Near D.K Depot,Najafgarh",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "U K NURSING HOME",
            "Address": "M-1 ,Vikas Puri",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "JEEVAN JYOTI HOSPITAL",
            "Address": "M-62,Sector 12, Santosh Medical Road, Pratap Vihar",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "SAI EYE CARE",
            "Address": "H-98/1,Sector 12, Pratap Vihar",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "CHOWDHARY MORAL HOSPITAL",
            "Address": "C-1/1A & C-1/2A,Yamuna Vihar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "BANSAL GLOBAL HOSPITAL",
            "Address": "C-10 ,Ramgarh Colony,G.T Karnal Road, Near Jahangirpuri Metro Station",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "DIVINE MULTISPECIALITY HOSPITAL",
            "Address": "102/2,Main Jagatpur Road,Near Street No. 14,Wazirabad",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "SARVODYA HOSPITAL",
            "Address": "1031/1, Railway Road,Near mata chintpurni Mandir",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "SATYAM HOSPITAL",
            "Address": "173/27,Gali No. 3,Near Hanuman Mandir, Madanpuri",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "SUKHDA HOSPITAL",
            "Address": "Gali No. 7 ,Kadipur Industrial Area, Main Pataudi Road",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "SRI GOBIND HOSPITAL, GURUGRAM",
            "Address": "753/21, Main Madanpuri Road,Near Pataudi Chowk",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "SUNRISE HOSPITAL",
            "Address": "Plot No. 1, Pocket 8-B, Sector 15,Rohini",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "APEX CITI HOSPITAL",
            "Address": "D-440, West Vinod Nagar, Near Ras Vihar,I.P Ext., Patparganj",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "CHINMAYA VISION",
            "Address": "18,Bhera Enclave,Outer Ring Road,Pashchim Vihar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "GEO HOSPITAL",
            "Address": "Plot No. 3, Madhu Vihar,Khora Colony, Opp. Mayur Vihar Phase-III",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "RAVI EYE FOUNDATION",
            "Address": "B-8, Ganesh Nagar, Main Najafgarh Road, Near Metro Pillar No. 543",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "SAI SIDDHI UROLOGY & MULTISPECIALITY HOSPITAL",
            "Address": "80-P,Sector 46",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "KAMLA HOSPITAL, GURUGRAM",
            "Address": "Main Pataudi Road,Sector 37D,Near Kadipur Chowk",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "TRIPATHI HOSPITAL & TRAUMA CENTRE, GHAZIABAD",
            "Address": "E-14,Sector 9,New Vijay Nagar",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "CRONUS MULTISPECIALITY HOSPITAL, NEW DELHI",
            "Address": "D-91 A, Main 100 Feet Road,SSN Marg, Chattarpur",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "ONCOPLUS (A UNIT OF DEEPCHAND ONCOLOGY SERVICES PVT. LTD. )",
            "Address": "A-288,289, Defence Colony",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "KALRA HOSPITAL, NEW DELHI",
            "Address": "No. 3A,25,26, Sewak Park Extention,Near Metro Pillar No. 761",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "SPES HOSPITAL, GURUGRAM",
            "Address": "Shanti Nagar,Beriwala Baag Road,Near Rajiv Chowk",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "Dr. KAPOOR\u2019s THE HEALING TOUCH",
            "Address": "D-8,Vikaspuri",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "CHANDRALAXMI HEALTHCARE, GHAZIABAD",
            "Address": "NH-03, GYAN KHAND -1,Indirapuram",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "OM SAI HOSPITAL",
            "Address": "Panchsheel colony,Near Bank of Baroda,Main Lal Kuan,Gautam budh nagar",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "MANGALAM MEDICAL & SURGICAL CENTRE",
            "Address": "154/81, Main Bawana Road, Poonth Khurd,Near Sector 35, Rohini",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "KATHURIA HOSPITAL",
            "Address": "19/8, Model town,opp. SD School,Khandsa road",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "SHYAMA EYE CARE CENTRE",
            "Address": "B-139A,West vinod nagar,opp. Press apartment,patparganj",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "SHANTIKUMUD HOSPITAL",
            "Address": "A-8,Adarsh nagar, Near Metro station",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "GAMBHIR HOSPITAL",
            "Address": "H-74,Rajouri Garden",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "SINGHAL HOSPITAL",
            "Address": "C-40,Street No. 9 ,Sadh Nagar, Palam Colony",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "B H SALVAS HOSPITAL",
            "Address": "Plot No. 6 & B6, Vill. Haibat pura,Jharoda Road,Najafgarh",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "SWASTIK HOSPITAL",
            "Address": "Mohna road, opposite SBI Bank, Ballabhgarh",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "GLOBAL HOSPITAL",
            "Address": "Opposite revoli garden, Near sheetla mata mandir",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "PEARL HOSPITAL",
            "Address": "RZ-40,Gali No. 2,A-Block, Deenpur extension,Gurgaon road, Najafgarh",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "ORTHOPLUS HOSPITAL",
            "Address": "RZ -B-28, Goapl Nagar, Najafgarh",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "EYE SIGHT LASER CENTRE",
            "Address": "52A,DDA,Pocket- 2, Behind Sec-6 main market, Dwarka",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "MAHAJAN HOSPITAL",
            "Address": "A-4,Milap Nagar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "Dr. RAKESH MULTISPECIALITY HOSPITAL",
            "Address": "2001,Street No. 31-32 B, Main road, Swatanter nagar,Narela",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "VEDIC HOSPITAL",
            "Address": "Sec 10/10A Chowk, Main Pataudi Road",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "J R HOSPITAL",
            "Address": "NH-07,Block -B, Beta-1, Gautam Buddha Nagar",
            "CITY": "Greater Noida"
        },
        {
            "HOSPITAL NAME": "UTTAM HOSPITAL",
            "Address": "E-230,Sector-9,New Vijay Nagar,Near PS Vijay Nagar",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "APOLLO SPECTRA & CRADLE",
            "Address": "Pocket -7,Opposite Mitra Society",
            "CITY": "GREATER NOIDA"
        },
        {
            "HOSPITAL NAME": "TIRUPATI STONE CENTRE",
            "Address": "6,Gagan Vihar,Near Karkadi Mor Flyover",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "NULIFE HOSPITAL",
            "Address": "1616,Outram Lines,GTB Nagar",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "KUMAR HOSPITAL",
            "Address": "NH-10,G Block,Sector Beta -II",
            "CITY": "GREATER NOIDA"
        },
        {
            "HOSPITAL NAME": "GARGI HOSPITAL",
            "Address": "R-9/182,Raj Nagar, (Near ALT Centre)",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "PRAGATI EYE CENTRE",
            "Address": "H-15,Krishna Nagar",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "YASHROOP HOSPITAL",
            "Address": "12-P, Sector 9",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "SHRI DAYA DUTT VASHISTH HOSPITAL",
            "Address": "J-34,Ganga Ram vatika,Near Raj cinema,Tilak Nagar",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "LOTUS HOSPITAL",
            "Address": "Plot No.2, Jeevan Nagar, Opp. Lal Kothi, Main Ballabhgarh Sohna Road",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "JYOTI HOSPITAL",
            "Address": "Plot No. 28,Ganpati Enclave,Jharsa Road",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "SANT SOHAM HOSPITAL",
            "Address": "Khasra No. 304/305, Khanjhawala Road,Bawana",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "FLORES HOSPITAL",
            "Address": "Block G,Sector 11,Pratap Vihar",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "LALL 20/20 EYE CARE PVT. LTD.",
            "Address": "50SP, Sector 45",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "NIVARAN MULTISPEC. HOSPITAL",
            "Address": "Plot No. 13A,Noble Enclave,Opp. Maruti Udyog,Old Delhi Road",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "ROSEWALK HEALTHCARE PVT. LTD.",
            "Address": "N-88,Panchsheel park,",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "SHANTI NURSING HOME",
            "Address": "RZ-13,New Uttam Nagar",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "ASHA HOSPITAL",
            "Address": "B-68,Phase -II,Vikas Nagar, Budh Bazaar Road, Uttam Nagar",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "ANKUR HOSPITAL",
            "Address": "Manohar Nagar, Basai Road",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "GOYAL EYE CENTRE, SAFDARJUNG",
            "Address": "A-1/3 Safdurjung enclave",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "KOSMOS HOSPITAL",
            "Address": "C-60, Anand Vihar(Vikas Marg)",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "OM MEDICAL CENTRE",
            "Address": "B-209,Ashok Nagar,(opp DDPS)",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "JINDAL EYE CARE",
            "Address": "60,Block H-5, Sector -11, Rohini",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "NIMMS HOSPITAL",
            "Address": "Bisrakh Road, Haldoni",
            "CITY": "GREATER NOIDA"
        },
        {
            "HOSPITAL NAME": "Dr. CHAUHAN SANJEEVANI HOSPITAL",
            "Address": "NH-14, C- Block ,Gamma-1",
            "CITY": "GREATER NOIDA"
        },
        {
            "HOSPITAL NAME": "SHIVALIK MEDICAL CENTRE PVT. LTD.",
            "Address": "Main Road, Hoshiyarpur, Sector-51",
            "CITY": "NOIDA"
        },
        {
            "HOSPITAL NAME": "ROOPCHAND HOSPITAL",
            "Address": "Main Mubarikpur Dabas",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "ASIAZ HOSPITAL",
            "Address": "Plot No. 140, Sector 15,Part -II, Near Mother Dairy",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "EYE 7 CHAUDHARY EYE & LASER VISION,INDIRAPURAM",
            "Address": "18-19,First Floor, Shipra Vista Plaza,Ahinsa Khand-1,Indirapuram",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "EYE 7 CHAUDHARY EYE & LASER VISION, JANAK PURI",
            "Address": "A-1/173,Ground Floor, Metro Pillar No. 614,Najafgarh Road, Janakpuri",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "EYE 7 HOSPITAL PVT. LTD.,LAJPAT NAGAR",
            "Address": "34,Ground Floor, Main Ring Road, Lajpat Nagar-4",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "SHREE KRISHNA HOSPITAL",
            "Address": "H. NO. B-62,Ground Floor, Surya Vihar,Near Sector-4",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "LIFELINE HOSPITAL",
            "Address": "A-13, Priyadarshini Vihar,Laxmi Nagar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "ANAND HOSPITAL & CHHIDHA SINGH YADAV TRAUMA CENTRE",
            "Address": "Lal Kuan, GT Road, Near Reliance Petrol Pump,",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "MAHARAJA AGRASAIN MULTISPECIALITY HOSPITAL",
            "Address": "Plot No. 6,7,7A,9,9A &9B, Bawana Road ,Narela",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "PRAKASH MULTISPECIALITY HOSPITAL",
            "Address": "Plot No. 9A,Pocket -P2,Sector Omega 1,Builders Area",
            "CITY": "Greater Noida"
        },
        {
            "HOSPITAL NAME": "MEDSTAR HOSPITAL",
            "Address": "Om Enclave, Part -1, Near Toll Tax,Agwanpur Road",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "SMS HOSPITAL",
            "Address": "Clinic No. 9 , Sector 3, Ballabhgarh",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "DRISHTI EYE CENTRE",
            "Address": "47,Ground Floor, Pana Udyan, Narela",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "GOYAL EYE CENTRE (A UNIT OF GOYAL MEDICARE CENTRE), SHAHDARA",
            "Address": "3/51,Ram Gali,Vishwas Nagar, Shahdara",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "DEV HOSPITAL",
            "Address": "Near Govt. Senior Secondary School, Sector 103, Daulatabad",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "AASTHA HOSPITAL",
            "Address": "SCF-2,Ashoka Enclave main, Sector -35",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "SADHNA HOSPITAL",
            "Address": "NZA-635,Rajnagar-1,Main Road, Palam Colony,Dwarka",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "AGARWAL HOSPITAL, PITAMPURA",
            "Address": "B-1, Rohit Kunj, Pitampura",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "GNH EXCEL MEDICAL CENTRE",
            "Address": "BN-56, East Shalimar Bagh",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "PURANG EYE CENTRE",
            "Address": "A-114,VISHAL ENCELAVE ,RAJOUI GARDEN",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "DR DHAWAN\u2019S NETRA EYE HOSPITAL",
            "Address": "WZ-99,DAYAL SAR ROAD, UTTAM NAGAR",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "SHAKUNTALA HOSPITAL",
            "Address": "RZ 1-81A,Sagarpur",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "PT. RRM HOSPITAL",
            "Address": "Grounf Floor, Plot no-3,KH-27/1,Near Vats Market,VPO Bakkarwala,Mundka",
            "CITY": "West Delhi"
        },
        {
            "HOSPITAL NAME": "ALFAA HOSPITAL",
            "Address": "Main Farrukh Nagar,Near Canara Bank , Vill Basai",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "SPES SUPERSPECIALITY HOSPITAL",
            "Address": "Plot No-A2 Omega IINRI city complex,Near Pari Chowk",
            "CITY": "Greater Noida"
        },
        {
            "HOSPITAL NAME": "SHIVALIK HOSPITAL",
            "Address": "Plot No-5,,Gangapuram,,Main Hapur Road ,Opp Govindpuram Bharat Petrol Pump",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "SARASWATI HOSPITAL",
            "Address": "299/2,Delhi Road",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "R S MAITRI HEALTHCARE",
            "Address": "j-278, Patel Nagar 1st ,Near Old Bus Stand",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "ASIAN FIDELIS MULTISPECIALITY HOSPITAL",
            "Address": "RPS Savana,RPS city,Sector-88",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "KESAR NURSING HOME",
            "Address": "WZ -61A/3B, Vashisht Park,Pankha Road (Opp institutional area Block-D) ,Janakpuri",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "ACCORD SUPERSPECIALITY HOSPITAL",
            "Address": "Sec-86,Greater Faridabad",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "SATNARAYAN HOSPITAL",
            "Address": "Budh Vihar,Phase-1,Main Kanjhawala,Opp Shree RAM Dharam Kanta",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "JAIN CHILD & MATERNITY HOSPITALS(P) LTD.",
            "Address": "AE-7,Shalimarbagh",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "OKHLA EYE & LASER CENTRE",
            "Address": "D-247,Abul Faizal Enclave,Jamia Nagar,Near Okhla Vihar Metro Station",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "CLEARMEDI HOSPITAL &CANCER CENTRE",
            "Address": "15 H C-1,Vasundhara",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "I CARE CENTRE",
            "Address": "C-6/9, safdarjung Development Area, Behinde Hauz Khas Telephone Exchange",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "SURYA HOSPITAL",
            "Address": "47, Knowledge Park 3",
            "CITY": "Greater Noida"
        },
        {
            "HOSPITAL NAME": "KASHVI MULTISPECIALITY CENTRE",
            "Address": "Plot No-85,Iteda Ek Murti Gol Chakkar",
            "CITY": "Greater Noida"
        },
        {
            "HOSPITAL NAME": "KRISHNA FAMILY HOSPITAL & INFERTILITY CENTRE",
            "Address": "G-34, SECTOR 11, PRATAP VIHAR",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "CARE & CURE MULTISPECIALITY HOSPITAL",
            "Address": "NH-1,Abhay Khand-3,Indirapuram",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "NAGAR HOSPITAL",
            "Address": "NH B-1 , Lohia Nagar",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "VASUNDHARA HOSPITAL",
            "Address": "15/NH-1, Near Atal Chowk , Vasundhara",
            "CITY": "Ghaziabad"
        },
        {
            "HOSPITAL NAME": "CHIRANJIVI HOSPITAL",
            "Address": "Sec: 31-32, Main Jharsa Road",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "SOCH EYE CENTRE",
            "Address": "B-6, Ashoka Niketan",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "BARMAN EYE CARE CENTRE",
            "Address": "4307, Ground Floor , Dlf Phase-4 , Sec-27 , b/h Galleria Market",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "JAI SAI RAM HOSPITAL PVT. LTD.",
            "Address": "T-262 , Opposite Church , Sec-109 , 40 feet Road , New Palam Vihar , Phase-2",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "VIJAY NURSING HOME",
            "Address": "F-24/24,25,43,44 , Sec-3",
            "CITY": "Rohini"
        },
        {
            "HOSPITAL NAME": "BENSUPS HOSPITAL",
            "Address": "Bensups Avenue, Sec-12, Dwarka",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "TULSI MULTISPECIALITY HOSPITAL",
            "Address": "B1 Jyoti Nagar (wset) , Durga Puri Chowk , Loni Road , Shahdara",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "THE SIGHT AVENUE",
            "Address": "Plot No-243 P, Sec-38",
            "CITY": "Gurugram"
        },
        {
            "HOSPITAL NAME": "KHANNA MEDICARE CENTRE",
            "Address": "W-6 , Main Patel Road, West Patel Nagar,Shadipur Metro Station , Pillar No -234",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "VINOD EYE CENTRE",
            "Address": "A-67 , Gate No-7 , Sec-46",
            "CITY": "NOIDA"
        },
        {
            "HOSPITAL NAME": "GAYATRI HOSPITAL",
            "Address": "NH B-2 , Lohia Nagar",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "CRYSTAL VISION EYE CENTRE",
            "Address": "A-1503,Greenfield colony A-1503,Greenfield colony",
            "CITY": "Faridabad"
        },
        {
            "HOSPITAL NAME": "LOTUS HOSPITAL",
            "Address": "Plot NO-11, NH-9 , Mehrauli",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "CENTRE FOR SIGHT",
            "Address": "E2/228 Ambedkar Road Nehru Nagar",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "GUPTA MULTISPECIALITY HOSPITAL",
            "Address": "Dhandhu Ram Market, Near Main Bus Stand , Bawana",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "RAMLAL KUNDANLAL ORTHOPAEDIC HOSPITAL",
            "Address": "Bunglow No-8, Pandav Nagar , Patpar Ganj road",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "KK SURGICAL& MATERNITY HOSPITAL",
            "Address": "B-37,East Jyoti Nagar, Loni road",
            "CITY": "Delhi"
        },
        {
            "HOSPITAL NAME": "RAJIV GANDHI CANCER INSTITUTE",
            "Address": "Sector-5 , Rohini",
            "CITY": "Delhi"
        },
        {
            "HOSPITAL NAME": "VASUNDHARA EYE CLINIC",
            "Address": "B-219,RAMPHAL CHOWK , SECTOR-7,DWARKA",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "SILVERSTREAK MULTISPECIALITY",
            "Address": "Sector-87, OPP DLF Skycourt",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "GARG HOSPITAL",
            "Address": "8-9, A.G.C.R Enclave (opposite karkardoma court )",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "JYOTI NURSING HOME",
            "Address": "C-234 , Vikaspuri .",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "ASHIRWAD HOSPITAL",
            "Address": "33,Fr Road ,Near Bohara Public School , Bhagat Singh Colony ,Ballabgarh",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "VARDMAN HOSPITAL HEART CNTRE",
            "Address": "9, Sanjay Nagar Districk Centre , Sector -23 , Near Hotel Fotrne inn",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "MEDICURE HOSPITAL",
            "Address": "A-10, Rahul Vihar- 1st , NH-24 road , Behrampur",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "IAS MEDICARE HOSPITAL",
            "Address": "Khandsa Road",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "V CARE MULTISPECIALITY",
            "Address": "Plot No V7 , Near Police station, BPTP Park land , Sec-76",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "SHIVALAYA HOSPITAL",
            "Address": "Plot No 137, Near SPR Society , Sec-82 , Tigaon Road , village Bhatola",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "ARIHANT HOSPITAL",
            "Address": "Plot No 14P , Urban Estate , Sec-52",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "ANSARI HOSPITAL",
            "Address": "RZ -20 F/B , Kailash Puri Road , Main Sagar Pur",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "V CARE HOSPITAL",
            "Address": "NH-2, Rajendra Nagar Sec-2 , Sahibabad",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "CARING TOUCH NURSING HOME",
            "Address": "R-721 , New Rajinder Nagar",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "NEONEST HOSPITAL",
            "Address": "A-1/3, Prashant Vihar , Rohini",
            "CITY": "New Delhi"
        },
        {
            "HOSPITAL NAME": "VRANDAVAN",
            "Address": "Vrandavan Garden , Main Crossing , Road Shahberi , Noida Ex",
            "CITY": "NOIDA"
        },
        {
            "HOSPITAL NAME": "LE CREST HOSPITAL",
            "Address": "Plot No INS -13, Sec-4 (Near Budh Chowk ) ,Vasundhara",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "KHATRI NURSING HOME",
            "Address": "Sec-9, New Vijay Nagar",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "SUSHILA MULTISPECIALITY",
            "Address": "A-43, Patel Nagar -2",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "NIRMAL HOSPITAL",
            "Address": "KHASRA NO -52/1/1/1 ,Main Burari Road , Bakhtawarpur",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "SARGAM HEALTH CARE",
            "Address": "Khasra No-77 , Opp Indian Bank , Old Delhi Gurugram Road , Samalkha",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "SUNAND HOSPITAL",
            "Address": "G-17, Kiran Garden , Uttam Nagar",
            "CITY": "New DELHI"
        },
        {
            "HOSPITAL NAME": "NAYAN - THE MODERN EYE CARE CENTRE",
            "Address": "Block C, Pocket 11, Plot 9 & 10 , Sect -3",
            "CITY": "Rohini"
        },
        {
            "HOSPITAL NAME": "DR.MEHTA EYE CARE",
            "Address": "5E/5 B.P , RAILWAY ROAD , OPP MANDIR DARGHA, NEELAM CHOWK, N.I.T",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "PARMANAND SPCL. SURGERY HOSPITAL",
            "Address": "PLOT NO 1,2& 3 , PARK AREA, JAMUNA BAZAR",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "ACU VISION CENTRE",
            "Address": "MANUSHI SADAN , PLOT NO 3 A , POCKET -B (NEAR ST.GIRI PUBLIC SCHOOL) MAHARAJ AGARSEN MARG , SARITA VIHAR",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "PARMESHWARI DEVI HOSPITAL",
            "Address": "BLOCK-B , PLOT NO-18 , MASOODPUR , MAIN ROAD MARKET , OPP LIG FLAT , VASANT KUNJ",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "SAMAR HOSPITAL",
            "Address": "PLOT NO -18 DWARKA GOYLA DAIRY ROAD, OPP ST THOMAS SCHOOL , GOYLA VIHAR , SEC-19, DWARKA",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "MARK HOSPITAL & TRAUMA CENTRE",
            "Address": "KHASRA NO 227 , MAMURA SEC-66(OPP FIRE STATION SEC-71), G.B NAGAR",
            "CITY": "NOIDA"
        },
        {
            "HOSPITAL NAME": "SGS MULTISPECIALITY HOSPITAL",
            "Address": "RZC-118-118 A , 50FEET ROAD , NIHAL VIHAR , NANGLOI",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "KAYAKALP HOSPITAL",
            "Address": "12 , JHARODA MAJRA , PART-2 , NEAR POLICE CHOWK",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "SHIVA HOSPITAL",
            "Address": "287-A , MATA ROAD ,SECTOR 12 , A NEAR SINGHA CHOWK",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "VARDHMAN NURSING HOME",
            "Address": "S-48,SHALIMAR GARDEN , EXTN 1 ,NEAR JAIN MANDIR , SAHIBABAD",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "MEDIWIN HOSPITAL",
            "Address": "R-12/73,RAJ NAGAR, NEAR ALT CENTRE",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "IRENE HOSPITAL",
            "Address": "DD-23 , KALKAJI",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "HAKEEM ABDUL HAMEED CENTENARY HOSPITAL",
            "Address": "GURU RAVIDAS MARG , BLOCK-D , HAMDARD NAGAR",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "CENTRE HOSPITAL",
            "Address": "204-205 , YADAV COLONY ,MOHANA ROAD , BALLABGARH",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "FORTIS LA FEMME",
            "Address": "S-549 , PART-2 , GREATER KAILASH",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "JYOTI NURSING HOME",
            "Address": "B-32 EAST JYOTI NAGAR, LONI ROAD",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "NOIDA MULTISPECIALITY HOSPITAL",
            "Address": "M-31, VILL MAMURA , SEC-66 ,GAUTAM BUDDHA NAGAR",
            "CITY": "NOIDA"
        },
        {
            "HOSPITAL NAME": "DENVAX NURSING HOME",
            "Address": "84,POORVI MARG , VASANT VIHAR",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "ARIHANT EYE CENTRE",
            "Address": "SHOP NO-4,NANDINI BHAWAN,MAIN BURARI ROAD, SANT NAGAR , BURARI",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "JIVISHA ADVANCED MEDICAL CENTRE",
            "Address": "NAV2DX MEDICARE PRIVATE LIMITED , 29 PASCHIM VIHAR EXTN ,UPPER GROUND FLOOR, OPPSITE PILLAR NO-197",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "AARVY HOSPITAL",
            "Address": "530/18,CIVIL LINES , OPP NEHRU STADIUM,NEAR MOR CHOWK",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "GEM HOSPITAL",
            "Address": "OPP STREET NO-3, MADANPURI MAIN ROAD",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "AARVY HEALTHCARE PVT. LTD.",
            "Address": "SEC-90, NEW GURUGRAM",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "GIRRAJ JI HOSPITAL LLP",
            "Address": "PLOT NO 249, BADSHAPUR, NEAR RADHA KRISHNA MANDIR",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "KESAR HOSPITAL",
            "Address": "I-1242 , MAIN MUBARAK ROAD, PN-2ND , KIRARI",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "SHROFF EYE CENTRE",
            "Address": "509, KM TRADE TOWER , SEC-14 , KAUSHAMBI,ADJACENT TO RADISSON BLU",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "RAHEJA HEALTHCARE CENTRE",
            "Address": "16/142 , GEETA COLONY , NEAR GOGIA SWEETS",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "AMRITA INSTITUTE OF MEDICAL SCIENCES AND RESEARCH CENTRE",
            "Address": "MATA AMRITANANDAMAYI MARG, SEC-88",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "SKG HOSPITAL",
            "Address": "415/9, GOPAL MANDIR GALI , OPP CITY PARK ,BALLABGARH",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "ARISE HOSPITAL",
            "Address": "SCO: C 3 179 , GREEN FIELD COLONY",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "ARTI HOSPITAL & TRAUMA CENTRE",
            "Address": "PLOT NO PKA -11- 12 , PARTHLA , KHANJARPUR , SEC -122 , G.B NAGAR",
            "CITY": "NOIDA"
        },
        {
            "HOSPITAL NAME": "SWASTHYA HOSPITAL",
            "Address": "D2/11 , KRISHNA NAGAR",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "PREM DHARAM HOSPITAL & DIAGNOSTICS",
            "Address": "10D-180, NEAR NAGAR NIGAM OFFICE ,VASUNDHARA",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "ACE HOSPITAL",
            "Address": "NH-1 , M-BLOCK,BPTP , PARKLAND , SEC-83",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "SHIVPRIYA HOSPITAL",
            "Address": "MAIN BAZGHERA CHOWK , NEW PALAM VIHAR PHASE-1",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "MAPLE CARE HOSPITAL",
            "Address": "PLOT NO -10, SEC-23 MBR ENCLAVE, OPP RANJIT VIHAR PHASE-2, POCHANPUR,DWARKA",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "NUMEDISURE GAURAV HOSPITAL",
            "Address": "RAJEEV COLONY,SAMAYPUR ROAD , BALLABGARH",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "PASRICHA HOSPITAL",
            "Address": "NEAR BHUTESHWAR MANDIR , BASAI ROAD",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "METRO LYF HOSPITAL",
            "Address": "A-45A, PATEL NAGAR-2nd",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "EYE MED HOSPITAL",
            "Address": "5E/48 B.P . NIIT",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "MOTHERHOOD HOSPITAL",
            "Address": "PLOT NO H55,56,57, MAYFIELD GARDENS COLONY",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "VISTA EYE CARE",
            "Address": "GN-12, 3RD FLOOR , SHIVAJI ENCLAVE , SUKHCHAIN MEHTA CHOWK, ABOVE PNB",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "SARVODAYA SUPERSPECIALITY HOSPITAL & HEART CENTRE",
            "Address": "PLOT NO D-3 , SEC-17 , KAVI NAGAR INDUSTRIAL AREA , NEAR DIAMOND FLYOVER",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "ABHINAV BALAJI SUPRSPECIALTY HOSPITAL",
            "Address": "F-33,GANGA BANQUET ROAD , SEC-5 , RAJENDER NAGAR",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "CITY HOSPITAL & TRAUMA CENTRE",
            "Address": "626/2 East Gokulpur Main Loni Road Gole Chakkar, Near Police Check Post",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "UROCARE APOLO MULTI & SUPER SPECIALITY HOSPITAL",
            "Address": "PLOT NO. 44, A & B, TIRKHA COLONY, BEHINDH. NO.N78, SEC 2",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "EPITOME KIDNEY UROLOGY INSTITUTE & LIONS HOSPITAL",
            "Address": "A-321,NEW FRIENDS COLONY , KHIZARABAD",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "AASHLOK HOSPITAL (MANAGED BY HEALTHREACH MANACARE PVT. LTD.)",
            "Address": "25 A , BLOCK-AB ,COMMUNITY CENTRE , SAFDARJUNG ENCLAVE",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "DR RAM SINGH ARYA MEDICAL CENTRE",
            "Address": "PLOT NO B-6,8 , ASHOKA ENCLAVE-2 , SEC-37",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "FIRST EYE CARE",
            "Address": "PLOT NO-609, MAINKARAL ROAD",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "SHASHIKANTA EYE & LASER CENTRE",
            "Address": "24/46,CHAJJUPUR, DURGAPURI CHOWK",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "VIVA VISION",
            "Address": "A-92 , FREEDOM FIGHTERS ENCLAVE , IGNOU ROAD",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "CDAS SUPERSPECIALITY HOSPITAL",
            "Address": "PLOT NO 1 , MALIBU TOWN , SEC-47",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "TYAGI NURSING HOME",
            "Address": "METRO STATION, 66/3 & 66/4 , NEAR TILAK NAGAR , BLOCK 66, ASHOK NAGAR",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "OJUS HOSPITAL",
            "Address": "RH-7 , SECTOR-2 , RAJENDER NAGAR , SAHIBABAD",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "SUNRISE HOSPITAL",
            "Address": "3C-63, BP , NIT",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "IPSC PAIN AND SPINE HOSPITAL",
            "Address": "PLOT NO 453, SEC-19 , DWARKA",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "VIBRANT HOSPITAL PRIVATE LTD",
            "Address": "PLOT NO-1, SEC-100, NEAR HUDA W.T.P , BASSAI",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "MEDHA HOSPITAL & TRAUMA CENTRE",
            "Address": "BLOCK-E , SEC-11 , PRATAP VIHAR",
            "CITY": "GZB"
        },
        {
            "HOSPITAL NAME": "RK & NARENDRA PRAKASH HOSPITAL",
            "Address": "PLOT NO 1, CHITRA VIHAR",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "CLOUDNINE HOSPITAL",
            "Address": "PLOT NO 1B , 213/214, NH-1 , BLOCK-B , NEW INDUSTRIAL TOWNSHIP 1.",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "AB LASER EYE CENTRE",
            "Address": "3RD FLOOR , EMBARK PLAZA , NOIDA EXTN SEC-4",
            "CITY": "GREATER NOIDA"
        },
        {
            "HOSPITAL NAME": "RAM RATAN HOSPITAL(OPERATED & MANAGED BY FORTIS HOSPITALS PVT. LTD.),GR. NOIDA",
            "Address": "BLOCK-D, INDUSTRIAL AREA , SURAJPUR SITE 4",
            "CITY": "GREATER NOIDA"
        },
        {
            "HOSPITAL NAME": "JIWAN DHARA HOSPITAL, GURUGRAM",
            "Address": "OPP RADHA KRISHNA MANDIR , SOHNA ROAD ,BADSHAPUR",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "VINAYAK HOSPITAL, GURUGRAM",
            "Address": "KHANDSA ROAD , NEAR SBI",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "BALAJI CARE HOSPITAL, NEW DELHI",
            "Address": "PLOT NO-1169 , UTSAV VIHAR , RAMA VIHAR , BUS STAND ,MAIN KANJHAWALA ROAD",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "KAILASH DEEPAK HOSPITAL, NEW DELHI",
            "Address": "5,VIKAS MARG KARKARDOOMA , EAST DELHI",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "CLOUDNINE HOSPITAL, PUNJABI BAGH, DELHI",
            "Address": "PLOT NO-1 , NORTH WEST AVENUE ,PUNJABI BAGH",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "LYF HOSPITAL(A UNIT OF SUBURBAN HOSPITALS PVT. LTD. )",
            "Address": "GC-4 ,GAUR CITY -1, GRAETER NOIDA WEST , GAUTAM BUDH NAGAR",
            "CITY": "GREATER NOIDA"
        },
        {
            "HOSPITAL NAME": "YASHODA HOSPITAL & CANCER INSTITUTE",
            "Address": "15 , HC-1 , SEC-15 , VASUNDHRA.",
            "CITY": "GZB"
        },
        {
            "HOSPITAL NAME": "RAINDEW HOSPITAL, FARIDABAD",
            "Address": "MOHANA ROAD, NEAR PNB BANK , BALLABGARH",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "UP STONE & UROLOGY CENTRE",
            "Address": "J-276 , PATEL NAGAR 1, OPP LOHIA NAGAR MARKET ,NEAR OLD BUS STAND",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "AM VISION EYE & CHILD CARE",
            "Address": "8 , GROUND FLOOR , EAST AND ENCLAVE , LAXMI NAGAR",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "CENTRE FOR SIGHT",
            "Address": "SPECTRUM MALL, FIRST FLOOR , PLOT C & D , OPP SEC 50 METRO STATION ROAD, SECTOR-75",
            "CITY": "NOIDA"
        },
        {
            "HOSPITAL NAME": "ARYA HOSPITAL",
            "Address": "C-1/101, PANKHA ROAD , JANAKPURI",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "RAJIV GANDHI CANCER INSTITUTE & RESEARCH CENTRE",
            "Address": "SQUADRON LEADER MOHINDER KUMAR JAIN MARG ,BLOCK-K , NITI BAGH",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "SHARP SIGHT CENTRE, R K PURAM, NEW DELHI",
            "Address": "5 , BASEMENT & GROUND FLOOR, ARADHANA ENCLAVE , SEC-13 , R.K PURAM",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "SHARP SIGHT CENTRE, INDIRAPURAM, GZB.",
            "Address": "ADITYA GOLD CREST , 101,102, 103 , 1ST FLOOR , PLOT C/GH3 , ABOVE NATHU SWEETS ,VAIBHAV KHAND, INDIRAPURAM",
            "CITY": "GZB."
        },
        {
            "HOSPITAL NAME": "SHARP SIGHT CENTRE, PUSA ROAD, NEW DELHI",
            "Address": "7 B , BASEMENT , MAIN PUSA ROAD , OPPOSITE RAJENDRA PLACE , METRO PILLAR 153",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "SHARP SIGHT CENTRE, SHAHDARA, NEW DELHI",
            "Address": "B 2/1 , NORTH CHAJJU PUR , 100 FUTA ROAD , DURGA PURI ,SHAHDARA",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "RAVI WOMEN & CHILD HOSPITAL, GHAZIABAD",
            "Address": "NEAR BHARAT PETROL PUMP , SEC-35 , NOIDA",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "SARVODAYA HOSPITAL( A UNIT OF ANSHU HOSPITALS LTD.)",
            "Address": "POCKET-2 , GH-03, SECTOR 16 C , GAUR CITY 2",
            "CITY": "GREATER NOIDA WEST"
        },
        {
            "HOSPITAL NAME": "SHIVAM HOSPITAL, NEW DELHI",
            "Address": "A-4, 63,64,65 , SEC-16 , ROHINI",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "DR AGGARWAL\u2019S WELLNESS MULTISPECIALITY HOSPITAL",
            "Address": "C-3/56 A , YAMUNA VIHAR",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "MANGALAM HOSPITAL",
            "Address": "1-A/22, LAXMI GARDEN, PATUDI ROAD",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "JAGDAMBA MEDICAL CENTRE",
            "Address": "246/28, JYOTI PARK , LANE NO 5 , MAIN ROAD",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "DELHI IVF & FERTILITY CLINIC",
            "Address": "29 RING ROAD , LAJPAT NAGAR 4",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "GENESIS HOSPITAL",
            "Address": "SIKANDARPUR BADHA , OPPOSITE DPS SCHOOL, SECTOR-84",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "NARENDER PRAKASH MEDICAL CENTRE",
            "Address": "B-9 , LAXMI NAGAR , OPP CHANAKYA SHOPPING CENTRE",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "SHREYA HOSPITAL",
            "Address": "PLOT NO -837 , SHALIMAR GARDEN MAIN ROAD , BLOCK -C",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "JAIN HOSPITAL",
            "Address": "P-1499 , SECTOR-46",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "DIPAKSHI NURSING & MATERNITY HOME PVT. LTD.",
            "Address": "C-53 A , SEC 33",
            "CITY": "NOIDA"
        },
        {
            "HOSPITAL NAME": "JEEVAN JYOTI CLINIC & HOSPITAL",
            "Address": "G.T.B CHOWK , DILSHAD GARDEN",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "RBS HOSPITAL",
            "Address": "U-37 ROAD, RAO BALBIR SINGH MARKET , DLF PHASE 3 , NATHUPUR",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "TRIVENI HOSPITAL",
            "Address": "2N 67, BP NEAR YADAV TOUR & TRAVELS & 2-3 GOL CHAKKAR, N.I.T",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "BAJAJ FRACTURE CLINIC & NURSING HOME",
            "Address": "NEW RAILWAY ROAD (GURGAON VILLAGE MORE)",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "CLOUD NINE HOSPITAL",
            "Address": "COMMUNITY CENTRE, PLOT , STREET NO 6 B , FAZALPUR , I.P EXTENSION , MANDAWLI",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "M G EYE CENTRE , NEW DELHI",
            "Address": "A-2, 118-119 , SEC-16 , ROHONI",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "SUNSHINE HOSPITAL, BALLABGARH",
            "Address": "NEAR SANSKRITI CONVENT SCHOOL,SAHUPURA ROAD, SEC-64 , UCHA GAON ,BALLABGARH",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "LEELAVATI HOSPITAL",
            "Address": "1 A/104 , NEAR PHAWRA SINGH CHOWK , NIT",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "SHREE KESHAV HOSPITAL",
            "Address": "458, JAGDISH COLONY, MOHNA ROAD, OPP AKASH CINEMA , BALLABGARH",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "PRAYAG MULTISPECIALITY HOSPITAL",
            "Address": "67/NH-5, RAILWAY ROAD , NEAR NIT-5 , POLICE STATION",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "AROGAYA HOSPITAL",
            "Address": "MILAK LACHI MAIN ROAD , SEC-G3 , GREATER NOIDA WEST GAUTAM BUDH NAGAR",
            "CITY": "NOIDA"
        },
        {
            "HOSPITAL NAME": "SANAR INTERNATIONAL HOSPITAL",
            "Address": "GOLF COURSE ROAD , SEC-53",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "TEWARI EYE CENTRE PVT. LTD.",
            "Address": "C-2C , SEC-55",
            "CITY": "NOIDA"
        },
        {
            "HOSPITAL NAME": "PRAKASH HOSPITAL, GURUGRAM",
            "Address": "PLOT NO. 03-04 , MAIN MADANPURI JYOTI PARK ROAD , GALI NO -5 , JYOTI PARK SEC-7",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "KANT MULTISPECIALITY HOSPITAL",
            "Address": "PLOT NO-167 , MAIN KHERI ROAD GREATER,NEAR KHERI PUL BRIDGE, SEC-87",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "MAX MULTISPECIALITY CENTRE",
            "Address": "A-364, SECTOR-19",
            "CITY": "NOIDA"
        },
        {
            "HOSPITAL NAME": "MAX MULTISPECIALITY CENTRE, PANCHSHEEL PARK",
            "Address": "N-110, PANCHSHEEL PARK",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "MAX INSTITUTE OF CANCER CARE",
            "Address": "A-26, SECONF FLOOR , RING ROAD ,LAJPAT NAGAR",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "VAISHNAVI NURSING HOME",
            "Address": "SEC-33 , EXIT 11 NH8 , NEAR HERO HONDA CHOWK",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "ACCURA EYE CENTRE",
            "Address": "GATE NO :1 ,S-347 , PANCHSHEEL PARK , NEAR PANCHSHEEL PARK METRO STATION",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "DALCO HEALTHCARE & WELLNESS CENTRE",
            "Address": "LAXMI NAGAR METRO STATION , GATE NO 3- 4 , U- 135/B , UPHADHYAY BLOCK , SHAKARPUR",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "MET HOSPITAL",
            "Address": "NH-48 , RAMPURA",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "AROGYA HOSPITAL",
            "Address": "KANJHAWALA , LADPUR ROAD",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "RETICURE EYE CENTRE",
            "Address": "33A , GROUND FLOOR , BA BLOCK , PHASE 1 , ASHOK VIHAR",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "NAV DRISHTI EYE CENTRE",
            "Address": "B-5/351 , NEAR B5 MARKET ,OPP MAHARAJA AGERSEN PARK ,YAMUNA VIHAR",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "CANWINN AROGYA DHAM",
            "Address": "NEAR DSD COLLEGE , NEW RAILWAY ROAD",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "VIVEKANAND AAROGYA KENDRA",
            "Address": "466-P , SECTOR 12 A ,NEAR MADHAV BHAWAN",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "PUSHPANJALI HOSPITAL",
            "Address": "RR-30, MIANWALI NAGAR",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "SWASTIK MATERNITY & MEDICAL CENTRE",
            "Address": "75 & 78 H , VIJAY PARK , NEAR LAXMI NAGAR , MAIN MADAN PURI ROAD",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "JANAK HOSPITAL",
            "Address": "INDIRA COMPLEX, GALI NO 3 , NEHAR PARK , KHERI ROAD , OLD FARIDABAD",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "MADHUP MEDICARE PVT. LTD.",
            "Address": "PLOT NO -379 , NITI KHAND-3 , INDIRAPURAM",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "ANANTA HOSPITAL",
            "Address": "NH-1 , BLOCK-C, BPTP , ASTAIRE GARDENS , SECTOR 70 A",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "SEEMA EYE CENTRE",
            "Address": "116-A , POCKET-A , DILSHAD GARDEN , NEAR GTB CHOWK",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "APRASU AYURVEDA PANCHKARMA CENTRE",
            "Address": "B-1087-88, ROHINI SECTOR-1 , AVANTIKA CHOWK",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "CENTRE FOR SIGHT,BHIWANI",
            "Address": "A/1,2,CIRCULAR ROAD,OPP OLD BUS STAND , PANCHAYAT POCKET,NAYA BAZAR HOUSING BOARD COLONY",
            "CITY": "BHIWANI"
        },
        {
            "HOSPITAL NAME": "CENTRE FOR SIGHT, REWARI",
            "Address": "A-4 , CIRCULAR ROAD, NEAR HERO AGENCY , SECTOR-5",
            "CITY": "REWARI"
        },
        {
            "HOSPITAL NAME": "CENTRE FOR SIGHT, PALWAL",
            "Address": "HOUSE NO 6671-A & 6671-B OPP ICIC I BANK , NEW COLONY",
            "CITY": "PALWAL"
        },
        {
            "HOSPITAL NAME": "CENTRE FOR SIGHT, MORADABAD",
            "Address": "KANTH MARG, HARTHALA",
            "CITY": "MORADABAD"
        },
        {
            "HOSPITAL NAME": "CENTRE FOR SIGHT, AGRA",
            "Address": "1st & 2nd FLOOR , ASHOKA PLAZA,BYE PASS ROAD ,NH-2",
            "CITY": "AGRA"
        },
        {
            "HOSPITAL NAME": "UMANG SUPERSPECIALITY HOSPITAL",
            "Address": "BUILDING NO -306 , OPP RADHA SWAMI SATSANG BHAWAN,PATAUDI ROAD",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "EYE HUB VISION CARE",
            "Address": "41,GROUND FLOOR , LINK ROAD , SECTOR 28",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "AS KIDNEY HOSPITAL & STONE CENTRE PVT. LTD.",
            "Address": "RZ A 70 , DASHRATH PURI, ADJOINING JINDAL PUBLIC SCHOOL",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "SCI INTERNATIONAL HOSPITAL",
            "Address": "PLOT NO 7 , SECTOR-43 , GOLF COURSE ROAD",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "VERIEZON HOSPITAL",
            "Address": "PLOT NO 164P & 165P , VIKAS MARG , SECTOR 52",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "NAVIN HOSPITAL (A UNIT OF ADVANCE LIFECARE VT. LTD. )",
            "Address": "A-13/1 , INDUSTRIAL AREA , MEERUT ROAD",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "NARAIN EYE CARE CENTRE",
            "Address": "NL-02 , SECTOR-104 , NEAR FIREFOX SHOP",
            "CITY": "NOIDA"
        },
        {
            "HOSPITAL NAME": "OM EYE & GYNAE CENTRE",
            "Address": "5/622 (OPP RAMPRASTHA GREEN GATE NO 4)NEAR MOHAN DHABA , SEC-5, VAISHALI",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "ADARSH MULTISPECIALITY HOSPITAL & TRAUMA CENTRE",
            "Address": "A-12 , SARAI PIPAL THALA , ADARSH NAGAR EXTENSION MAIN ROAD ,OPPOSITE METRO PILLAR",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "MAVI HOSPITAL PVT. LTD.",
            "Address": "B-2/11 , NEHRU VIHAR , KARAWAL NAGAR",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "GANDHI EYE CENTRE",
            "Address": "SHOP NO-118 , HOUSING BOARD , SECTOR-10",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "ARUNODAYA DESERT EYE HOSPITAL",
            "Address": "PLOT NH4( NURSING HOME-4), SECTOR-55",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "NARAYANA NETRADHAMA",
            "Address": "WZ-1390/ 4-A , PANKHA ROAD , OPPOSITE BLOCK-D , BUS STOP , JANAKPURI",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "KRM AYURVEDA",
            "Address": "77,TARUN ENCLAVE , GATE NO-2 , PARWANA ROAD,PITAMPURA",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "AYUR KARMA AYURVEDA",
            "Address": "108,SILOKHRA ,ADJACENT UNIWORLD CITY EAST GATE , SEC-41",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "DR. SUNDERLAL MEMORIAL HOSPITAL",
            "Address": "C-201, JAWAHAR PARK, DEVLI ROAD , KHANPUR",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "JIVODAYA HOSPITAL",
            "Address": "Ashok Vihar, Phase 1 RD , NEAR DEEP MARKET , WAZIRPUR VILLAGE , ASHOK VIHAR",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "THE HOPE HOSPITAL AND HEALTHCARE PVT. LTD",
            "Address": "NURSING HOME 20, DELTA 2,",
            "CITY": "GREATER NOIDA"
        },
        {
            "HOSPITAL NAME": "VISION EYE CENTRE, SIRI FORT ROAD",
            "Address": "19,SIRI FORT ROAD , SEC-3 , SADIQ NAGAR",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "MOGA HOSPITAL",
            "Address": "Clinic No. 9 , Sector 3, Ballabhgarh",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "MASSH HOSPITAL",
            "Address": "B-18 , NEHRU PLACE FLYOVER, CHIRAG ENCLAVE",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "SHREE RADHE KRISHNA HOSPITAL",
            "Address": "238 , KAILASHPURI TO NASIRPUR ROAD , NEAR JBM PUBLIC SCHOOL , PALAM",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "AARNA EYE CENTRE",
            "Address": "6 , INDER ENCLAVE , OPP METRO PILLAR NO 314 , MAIN ROHTAK ROAD",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "IVORY HOSPITAL PVT. LTD.",
            "Address": "NH-25, POCKET E , SECTOR-36(RHO-1),GREATER NOIDA, G.B NAGAR",
            "CITY": "GREATER NOIDA"
        },
        {
            "HOSPITAL NAME": "NUMED SUPER SPECIALITY HOSPITAL (A UNIT OF APY MEDISERVICES PVT. LTD.)",
            "Address": "H-2, SECTOR-3 , NOIDA EXTENSION, GAUTAM BUDH NAGAR",
            "CITY": "GREATER NOIDA"
        },
        {
            "HOSPITAL NAME": "AAYU HOSPITAL",
            "Address": "PLOT NO -140 , NEAR VISHAL MEGA MART , HARI NAGAR , KHANDSA ROAD",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "PRABHA MEDICAL CENTRE",
            "Address": "SB-25, SECTOR-117",
            "CITY": "NOIDA"
        },
        {
            "HOSPITAL NAME": "HEALING HANDS PG GYNAECOLOGY & UROLOGY CENTRE",
            "Address": "BF-94, LAL SAI MANDIR MARG , OPP DELHI HAAT , JANAK PURI",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "ARTEMIS LITE , NEW FRIENDS COLONY",
            "Address": "A-1 , C V RAMAN MARG , NEAR INDIAN OVERSEAS BANK NEW FRIENDS COLONY",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "SATYA MULTISPECIALITY HOSPITAL",
            "Address": "PEEPAL ROAD , BHAGWATI GARDEN , BLOK E , NAWADA",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "NARAYANA MOTHER & CHILD CARE CENTRE",
            "Address": "5-6, HOUSING BOARD COLONY , JHARSA ROAD , PATEL NAGAR",
            "CITY": "GGN"
        },
        {
            "HOSPITAL NAME": "SILVERCREST HOSPITAL",
            "Address": "4/9 , RATTAN GARDEN , NEW COLONY MOR",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "SD MULTISPECIALITY HOSPITAL",
            "Address": "PLOT NO-4 , SHANTI KUNJ , PART-2 , MARUTI KUNJ ROAD , BADSHAPUR",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "GTK HOSPITAL",
            "Address": "A-9-10-11 , SARAI PIPAL THALA EXTENSION , ADARSH NAGAR , MAIN GTK ROAD , OPP METRO PILLAR NO -99",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "OCEAN MEDICITY MULTISPECIALITY HOSPITAL",
            "Address": "MAIN BANDH ROAD , NEW SEHATPUR PULL , NEAR SECTOR-91",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "PARK HOSPITAL",
            "Address": "BLOCK -H , PALAM VIHAR",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "BATRA HEART & MULTISPECIALITY HOSPITAL",
            "Address": "HEALTH SITE , SPRING FIELD COLONY , SECTOR 31,32",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "AKROPOLIS SUPERSPECIALITY HOSPITAL",
            "Address": "NEAR VATIKA CHOWK , SECTOR 69",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "MEDHARBOUR HOSPITAL",
            "Address": "PLOT -222, SECTOR-51",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "JAIN HOSPITAL & RESEARCH CENTRE",
            "Address": "M966+M2W,BLOCK A , SECTOR 14 A/636 , 626 , OPPOSITE SAHIBABAD , SABZI MANDI , VASUNDHARA",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "KMC HEALTHCARE MULTISPECIALITY HOSPITAL",
            "Address": "RZ-11-P-174, PURAN NAGAR, NEAR FLYOVER, PALAM,(Opposite Palam Metro Station, Gate No. 3)",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "GUPTA MULTISPECIALITY HOSPITAL",
            "Address": "VIVEK VIHAR PHASE 1 VIVEK VIHAR",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "AKSHOM HOSPITAL & RESEARCH CENTRE",
            "Address": "HOSPITAL SITE NO-2 , HUDA MARKET , SECTOR-7",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "CANCEL CANCER BY INTERNATIONAL CANCER CARE PRIVATE LIMITED",
            "Address": "66-67, GF, POCKET - C5 , ROHINI SEC -6",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "ARTEMIS LITE HOSPITAL",
            "Address": "TOWNSEND AVENUE VATIKA INDIA NEXT , SECTOR 82 A",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "RAMANUUJ HOSPITAL",
            "Address": "158, RAJNAGAR EXTENSION, NEAR AGARWAL HEIGHTS, KDP GOL CHAKKAR",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "PREM CHARITABLE MULTISPECIALITY HOSPITAL",
            "Address": "C-251 , SARAL PIPALTHALA, ADARSH NAGAR",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "WANSHIKA MEDICARE, NEW DELHI",
            "Address": "B4/44 , SAFDARJUNG ENCLAVE ,",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "VARDHMAN HOSPITAL (A UNIT OF VARDHMAN HEALTHCARE)",
            "Address": "H.NO-164 , KH NO-182, GF , BLOCK-U, LAMPUR ROAD , NARELA",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "DM HOSPITAL",
            "Address": "89-A, N.H-5, RAILWAY ROAD , NEAR POLICE THANA (N.I.T) FARIDABAD",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "SAMARPAN HOSPITAL",
            "Address": "SCF-13 , ASHOKA ENCLAVE ,PART -2 , MARKET NEAR KANISHKA TOWER , SEC -35",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "RAGHAV HOSPITAL",
            "Address": "MAIN KHERI ROAD , KARNEL VIHAR (NEAR BHARAT COLONY), SEC-87",
            "CITY": "GREATER FARIDABAD"
        },
        {
            "HOSPITAL NAME": "SANJEEVANI HOSPITAL",
            "Address": "PLOT NO -284 , PLOT-5, JASOLA VIHAR",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "SWASTIK IMAGING & EYE CARE",
            "Address": "3C-70 BP , OPP ESI MEDICAL COLLEGE AND HOSPITAL , NIT-3",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "DRISHTI EYE CENTRE, SECTOR 17",
            "Address": "CLINIC SITE-2 , MAIN MARKET , SECTOR-17",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "ANJULI NURSING HOME",
            "Address": "PLOT-2 , BLOCK-J , SECTOR 84",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "BR HOSPITAL -A LAPAROSCOPIC & MULTISPECIALITY HOSPITAL",
            "Address": "H-130,DLF SECTOR-10",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "SAMARTH HOSPITAL (APB SAMARTH HOSPITAL OPC PVT. LTD.)",
            "Address": "1441/35, OLD MATA ROAD , NEAR SEC 5 POLICE STATION",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "SAI HOSPITAL (A UNIT OF AGRANYAI HEALTHCARE PVT. LTD.)",
            "Address": "PLOT NO-2, SECTOR-30, HUDA MARKET",
            "CITY": "FARIDABAD"
        },
        {
            "HOSPITAL NAME": "INSIGHT EYE CLINIC (A UNIT OF GOYAL EYE GROUP OF EYE CENTERS)",
            "Address": "J-9/5 , OPP SARASWATI BALMANDIR SCHOOL ,RAJOURI GARDEN",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "CENTRE FOR SIGHT, M2K",
            "Address": "GF-M2K, CORPORATE PARK , 22TO25 , BLOCK -N , MAYFIELD GARDEN , SEC-51",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "MAHARAJA AGARSAIN HOSPITAL",
            "Address": "BLOCK-D, ASHOK VIHAR , PHASE-1",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "AALOK HOSPITAL",
            "Address": "PLOT NO -136 , KH.NO -103/14, RAJEEV NAGAR , MAIN KANJHAWLA ROAD ,SEC-38 , ROHINI",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "INDIAN CANCER INSTITUTE",
            "Address": "R-57,HANSRAJ GUPTA,GREATER KAILASH, PART-1",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "NIRAMAY HOSPITAL",
            "Address": "RZ-23, INDRA PARK ,PANKH ROAD ,INSID TILAK PUL , UTTAM NAGAR",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "METRO CITY HOSPITAL & LAPROSCOPIC CENTRE",
            "Address": "KHASRA NO-1746, PLOT NO -2 , BALAJI ENCLAVE , BEHTA HAJIPUR , LONI",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "GIRRAJ JI CHILD HOSPITAL",
            "Address": "MG ROAD , NEAR GIRLS COLLEGE",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "VARDAYANI MULTISPECIALITY CHARITABLE HOSPITAL",
            "Address": "C-33, NEW ACHARYA , KRIPLANI MARG , ADARSH NAGAR",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "SHEKHAR EYE CENTRE",
            "Address": "KD-182 , NEAR KOHAT ENCLAVE METRO STATION ,OPP PILLAR NO 342 , BLOCK KD , DAKSHINI PITAMPURA",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "JEENA SIKHO LIFECARE LTD.",
            "Address": "A-1/11, SAFDARJUNG ENCLAVE",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "JEENA SIKHO LIFECARE LTD.",
            "Address": "H-63 , BLOCK-H , SOUTH CITY 2 , SECTOR 50 , BEHIND BAANI SQUARE , MANDIR ROAD",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "VBM HELIX HOSPITAL",
            "Address": "PARAM TOWER-26/2, HERO HONDA ROAD, BASAI ENCLAVE, SECTOR-37C,NEAR ALPINE",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "VAANI HEALTHCARE",
            "Address": "PLOT NO 57/2538, NEAR KABOOTAR CHOWK , SEC-57",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "AAROGYA HOSPITAL",
            "Address": "MAYUR KUNJ , OPP GALO NO -6 , NEAR DPS SCHOOL",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "KAILASH MEDICARE & RESEARCH CENTRE",
            "Address": "13,PREM ENCLAVE,MEERUT ROAD (OPP DPS), GHAZIABAD",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "VISION CARE CENTRE",
            "Address": "E-16/389,392 , SECTOR-8 , ROHINI",
            "CITY": "NEW DELHI"
        },
        {
            "HOSPITAL NAME": "BHARAT MULTISPECIALITY HOSPITAL",
            "Address": "PLOT NO-5, MAIN ROAD FNG , NEAR BY SECTOR-112, OPP BARAT GHAR",
            "CITY": "NOIDA"
        },
        {
            "HOSPITAL NAME": "SANTOM HOSPITAL, SECTOR 24",
            "Address": "CS/OCF - 4, POCKET-10, Sector-24, ROHINI",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "B R HEALTHCARE ROHINI HOSPITAL",
            "Address": "Plot No. 13, Shahabad Extension, Bawana Road, Sector-17,Rohini",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "CENTRE FOR SIGHT",
            "Address": "FLOOR-3 , VINAYAK AASHIRWAD,36/28 , TASHKENT MARG , PVR CHAURAHA , CIVIL LINES",
            "CITY": "PRAYAGRAJ"
        },
        {
            "HOSPITAL NAME": "CENTRE FOR SIGHT",
            "Address": "MUGLAHA CHAURAHA , MEDICAL COLLEGE ROAD , MUGLAHA , OPP VISHAL MEGA MART",
            "CITY": "GORAKHPUR"
        },
        {
            "HOSPITAL NAME": "SIGHT & SMILE CENTRE, PATEL NAGAR",
            "Address": "3/29, WEST PATEL NAGAR",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "KUNJ EYE HOSPITAL, SANGAM VIHAR",
            "Address": "C-1/270,SANGAM VIHAR, NEW HOLI CHOWK , DEVLI HIGH SCHOOL ROAD",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "YASHODA SUPERSPECIALITY HOSPITAL & CANCER INSTITUTE",
            "Address": "B-1& 2 , SEC-23 , SANJAY NAGAR",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "SHRI RAM HOSPITAL",
            "Address": "B-14,SHANKER GARDEN , VIKAS PURI",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "CK BIRLA HEALTHCARE PVT. LTD",
            "Address": "Block- J , Mayfield Garden , Sector-51",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "CK BIRLA HEALTHCARE PVT. LTD.",
            "Address": "57/41,WEST PUNJABI BAGH",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "MAX SUPERSPECIALITY HOSPITAL",
            "Address": "Plot No-1 , Sector-10",
            "CITY": "DWARKA"
        },
        {
            "HOSPITAL NAME": "S G HOSPITAL",
            "Address": "Plot No-18 A , Dadri Road , Tilapta Karanwas , Opposite Denso Company",
            "CITY": "GREATER NOIDA"
        },
        {
            "HOSPITAL NAME": "RUMEDIC HOSPITAL",
            "Address": "RZ-52-4/3 , RAJ NAGAR PART 1 , STREET NO 9 , OLD MEHRAULI ROAD , SHIV SHAKTI MANDIR ,PALAM",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "AVEE HOSPITAL ( A UNIT OF KASTURA MEDICOS LTD.)",
            "Address": "SECTOR-6 , VAISHALI",
            "CITY": "GHAZIABAD"
        },
        {
            "HOSPITAL NAME": "SHIVAM HOSPITAL,",
            "Address": "NH-1 , NEAR JAL VAYU VIHAR SOCIETY , SECTOR-30",
            "CITY": "GURUGRAM"
        },
        {
            "HOSPITAL NAME": "MAHARAJA AGRASEN SATNARAIN GUPTA HOSPITAL",
            "Address": "Nuna Majra",
            "CITY": "BAHADURGARH"
        },
        {
            "HOSPITAL NAME": "LIFE CARE HOSPITAL",
            "Address": "E-1, SECTOR-61 , NEAR SAI MANDIr",
            "CITY": "NOIDA"
        },
        {
            "HOSPITAL NAME": "SIGNATURE HEART & MULTISPECIALITY HOSPITAL",
            "Address": "C-2/41A ,SERVICE LANE , YAMUNA VIHAR",
            "CITY": "DELHI"
        },
        {
            "HOSPITAL NAME": "Abhaya Hospital",
            "Address": "17 Dr. M.H. Mari Gowda Road(Hosur Road), Opp. Park Area Wilson Garden Bangalore - 560027",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Bangalore Hospital",
            "Address": "No.202. R.V. Road, South End Circle Jayanagar, Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Healthcare Global Enterprises (HCG)",
            "Address": "44-45/2 2nd Cross, R R Mohan Roy Ext, Bengaluru, Bengaluru, Karnataka, 560027",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Chaitanya Hospital",
            "Address": "80, P & T Colony, Rt Nagar, Bangalore-32",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Chord Road Hospital",
            "Address": "#100 Bhimajyothi, Lic Colony, Woc Road, Basaveshawaranagar, Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Citi Hospital",
            "Address": "25/91 Chord Road 11 Block Rajajinagar Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Devi Super Speciality Eye Hospital Private Limited",
            "Address": "#434, 18th Main, 80 Feet Road, 6th Block, Koramangala Bus Depot, Koramangala.",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "D G Hospital",
            "Address": "No. 274/275, M.K. Puttalingaiah Road, Padmanabhanagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Dr Zamindars Microsurgical Eye Centre",
            "Address": "# 1013, 3rd Cross, 1st Block, Hrbr Layout, Kalyan Nagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Gayathri Hospital Pvt Ltd",
            "Address": "# 91 Magadi Chord Road Vijayanagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Hosmat Hospital",
            "Address": "45 Magrath Road Off Richmond Road Bangalore, Off Richmond Road",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Karthik Netralaya Institute Of Ophthalmology Pvt Ltd",
            "Address": "89 7th Cross, Nr Colony Ashok Nagar, Nr Colony, Ashok Nagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Koshys Hospital",
            "Address": "Ramamurthy Nagar Extn, Raghavendra Nagar, Tambuchetty Palya Main Road",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "M S Ramaiah Hospitals",
            "Address": "M S Ramaiah Memorial Hospital, M.S.R. Nagar, Msr It Post, Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Mallya Hospital",
            "Address": "No 2 Vittal Mallya Road",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Manipal Hospital",
            "Address": "#98 Rustom Bagh, Hal Airport Road",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Manipal North Side Hospital",
            "Address": "# 71 11th Main Road, Opp To Railway Station, Malleswaram, Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Narayana Health",
            "Address": "Hosur Road Anekal Taluk, No. 258 / A Bommasandra Industrial Area Anekal Taluk Bangalore - 562158, Hosur Road, Anekal Taluk",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Nu Hospitals Pvt Ltd",
            "Address": "C.A.6, 15th Main, 11th Cross, Padmanabhanagar, Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "P D Hinduja Sindhi Hospital",
            "Address": "Sampangiramanagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Prabha Eye Clinic And Research Centre",
            "Address": "# 504, 40th Cross, 8th Block, Jayanagar, Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Pristine Hospital And Research Centre Pvt Ltd",
            "Address": "#877 Modi Hospital Road West Of Chord Road, Rajajinagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sagar Hospitals",
            "Address": "# 44 / 54 30th Cross Tilaknagar, Jayanagar Extn Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Shaker Nursing Home",
            "Address": "No.260, Sampige Road, Near 17th Cross, Malleshwaram",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Shirdi Sai Hospital Pvt Ltd",
            "Address": "No. 519, 2nd Main, Nethravathi St, Devasandra, New Bel Road",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "St Marthas Hospital",
            "Address": "Nrupatunga Road, Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sudharsana Nethralaya",
            "Address": "452, R S Plaza 1st Floor(Above Kids Kingdom), Between 6th & 7th Cross, Sampige Road, Malleswaram",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sunayana Eye Hospital",
            "Address": "# 1156, 26th Main, 4th T Block, Jayanagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sunetra Eye Hospital",
            "Address": "No. 519/34, 10th Main B.S.K. I Stage, Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Dr Solanki Eye Hospital Pvt Ltd",
            "Address": "# 191/1, 2nd Cross, Link Road Malleswaram. Bangalore-03",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Trinity Hospital And Heart Foundation",
            "Address": "Near Rv Teacher College Circle, Basavanagudi",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Vijaya Nethralaya",
            "Address": "#5, 20th Cross, Malgala Underpass, Ring Road, Nagarbhavi 2nd Stage.",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Vinayaka Hospital",
            "Address": "# 110 Ist Main 80 Ft. Road S.B.M Colony B.S.K. I St Stage Hanumanthanagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Vittala International Institute Of Ophthalmology",
            "Address": "No 1 2nd Cross, 2nd Main, Bsk 3rd Stage, 2 Main, Bsk 3 Stg",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Nayak Hospital",
            "Address": "3367, 5th Cross, Gayathrinagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Shreya Hospital",
            "Address": "73, 3rd Main, 6th Cross, Behind Icici Atm, Kengeri Satellite Town, Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Mediscope Hospital Pvt Ltd",
            "Address": "#11 , Pillanna Garden , Iii Stage",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Manipal Hospitals (originally incorporated with the name of Columbia Asia Hospital group)",
            "Address": "Hebbal Kirloskar Business Park Bellary Road, Hebbal, Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Shekhar Hospital",
            "Address": "NO. 81 BULL TEMPLE ROAD",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Udhbhava Hospital",
            "Address": "No. 114, 100 Feet Ring Road, Banashankari 3rd Stage, Bangalore - 560085",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Lakshmi Hospital",
            "Address": "402, 2nd Cross, Judges Colony Ganganagar, 402, 2nd Cross, Judges Colony Ganganagar, Bangalore - 560032",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Prasad Eye Hospital",
            "Address": "No. 11, Krinshan Nagar Indistrial Layout, D.R.C. Post, Near Christ College, Hosur Main Road, Bangalore - 560 029.",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sri Jayadeva Institute Of Cardiovascular Sciences And Research",
            "Address": "Jayanagar 9th Block, Bannerghatta Road, Bangalore - 560069",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Shushrusha Hospital",
            "Address": "B B Road Yelahanka, Bangaloer 560064",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "B W Lions Superspeciality Eye Hospital",
            "Address": "#5, Lions Eye Hospial Road (Off. J.C Road ), Bangalore 560002",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Gangothri Hospital",
            "Address": "# 27, Kuvempunagar, 100ft Ring Road, Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sri Lakshmi Hospital",
            "Address": "5, 6 & 7, Nagappa Reddy Layout,Kaggadsapura, C V Ramannagar Post",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sanjeevini Hospital",
            "Address": "# 760, Last Bus Stop, Mahalakshmi Layout, Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Apollo Hospital",
            "Address": "# 154/11, Opp. Iimb., Bannergahtta Road, Bilekahalli",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sukruthi Eye Care Microsurgical Centre",
            "Address": "148, Vyalikaual, Malleswaram 11th Cross, Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Vinayaka Nethralaya",
            "Address": "#66/A, 7th main road, N.S. Palya, BTM 2nd Stage, BTM Layout, Bangalore- 560076.",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Deepa Hospital",
            "Address": "# 27, Old Madras Road, K R Puram",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sri Maruthi Hospital",
            "Address": "# 50 Kondappa Garden, Kogilu Road, Maruthi Nagar, Yelahanka, Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Cloudnine Jayanagar",
            "Address": "# 1533, 9th Main, 3rd Block, Jayanagar, Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Healthcare Global Enterprises (HCG)",
            "Address": "Hcg Tower, No. 8, P Kalinga Rao Road, Sampangiramnagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Lakshmi Maternity Home",
            "Address": "# 95 & 96, 15th Cross, Margosa Road, Malleswaram Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Jayashree Nursing Home",
            "Address": "# 4, 4th Cross, 4 Block, Kumara Park W, Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Kumar Nethralaya",
            "Address": "# 562, 41st Cross, 3rd Main, 2nd Block Rajajinagar.",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Navashakti Nethralaya",
            "Address": "#1803, Outer Ring Road, HBR Layout, 5th Block, 1st Stage, near Nagawara Flyover",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sundar Hospital",
            "Address": "#01&02, Hennur Main Road, Lingaraja Puram",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Hcg Msr Cancer Centre",
            "Address": "M S Ramaiah Memorial Hospital, M.S.R. Nagar, Msrit Post",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Narayana Nethralaya 2",
            "Address": "#258/A, Hosur Road, Bommasandra",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Pradnya Nethralaya",
            "Address": "#04, 6th Cross, Ganesh Block, Dinnur Road, Rt Nagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Premier Sanjeevini Hospital",
            "Address": "# 6/2, Tumkur Road, T.Dasara Halli",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Gurushree Hi-Tec Multi Speciality Hospital",
            "Address": "# 1558, Opp-Chandra Lay Out Bus Stand, Chandra Lay Out, Vijayanagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "T R Hospital",
            "Address": "# 1 To 7, Kothnur Dinne Main Road, J.P.Nagar 8th Phase",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Basavangudi Medical Centre",
            "Address": "# 84/1, R.V.Road, Basavanagudi",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Bgs Global Hospital",
            "Address": "Bgs Health And Education City, # 67, Uttara Halli Road, Kengeri",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Raksha Multi Speciality Hospital",
            "Address": "# 141/ 142, 1st Main, Krishnananda Nagar, K.H.B.Colony, Police Quarters, Nandini Layout",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Poornima Hospital",
            "Address": "No. 200/A, Hmt Layout, Rt Nagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Mahanth Hospital",
            "Address": "# 8, 1-St Cross, N.G.R.Lay Out, Roopena Agrahara",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Prashantha Hospital",
            "Address": "# 90/D, Bommana Halli Circle",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Akshaya Nethralaya",
            "Address": "#227/A, Bcehbcs Layout, Vidyagiri Layout, Nagarbhavi Circle",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Manipal Hospitals (originally incorporated with the name of Columbia Asia Hospital group)",
            "Address": "#26/1, Dr.Rajkumar Road, Malleswaram West",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Rangadore Memorial Hospital",
            "Address": "1st Cross, Shankarapuram, Basavanagudi",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Dr Malathi Manipal Hospital",
            "Address": "45/1, 45th Cross, 9th Block, Jayanagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Nethradhama Hospitals Pvt Ltd",
            "Address": "# 256/14, Kanakapura Mn Rd, Jayanagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Nrr Hospital",
            "Address": "393a, Hesarghatta Main Road, Chikkasandra, Near Chikkabanavara Railway Station",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Divine Speciality Hospital",
            "Address": "#110, 6th Main Iti Layout Benson Town Post, Bangalore-560046",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Apple Hospital",
            "Address": "No.17/B, 18-20,'C' Sector, Yelhanka-Dodaballapura Main Road Opposite. Railway wheel factory , Yelahanka New Town",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sagar Hospitals",
            "Address": "Behind Dayanand Sagar Institutions, Shavige Malleshwara Hills, Kumarswamy Layout",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Bharathy Hospital",
            "Address": "# 4, Prasanthnagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Rangalakshmii Netralaya",
            "Address": "#2054 13th B Main, 3rd Phase , Mother Dairy Cross, Yelahanka New Town",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Springleaf Health Care Pvt ltd",
            "Address": "#60/3, Konapana Agrahara, Opp. Infosys Convention Centre, Hosur Main Road, Electronics City.",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "V Care Hospital",
            "Address": "#29, Ist Main Road, 1st A Block, Deve Gowda Road, Rt Nagar, Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Fortis Hospitals Ltd",
            "Address": "# 14, Cunnigham Road",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Fortis Hospitals Ltd",
            "Address": "# 23, 80 Feet Road, Gurukrupa Layout, 2nd Stage Nagarbhavi, Near Nagarbhavi Circle",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Fortis Hospitals Ltd",
            "Address": "No 154 / 9, Bilekahalli, Bannerghatta Road",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Unity Lifeline Hospital",
            "Address": "#193.2nd Block, 2nd Stage, Nagarbhavi, Near Bda Complex, Nagarbhavi",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Axon Specialty Hospital",
            "Address": "No 321, 6th Main Hal 2nd Stage Indira Nagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Shanthi Hospital And Research Center Pvt Ltd",
            "Address": "No 307, 40th Cross 8th Block Jayanagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Padmashree Nuring And Maternity Home",
            "Address": "1108/30, 10TH MAIN",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Vasan Eye Care Hospital",
            "Address": "#389 New 46, 19th Main 1st Block Rajajinagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Nethradhama Hospital Pvt Ltd - Rajajinagar.",
            "Address": "#30, 19th Main Road, 2nd Block Rajajinagar, Land Mark: Navarang Theatre",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Nethradhama Hospital Pvt Ltd",
            "Address": "#66, Indiranagar Double Road, Hal 2nd Stage",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Chanre Rheumatology And Immunology Centre And Research",
            "Address": "#149, 15th Main, 3rd Stage, 4th Block, Water Tank Road, Basaveshwaranagar 15th Main",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "South City Hospital",
            "Address": "53/1(45), Shalini Susheela Road, Lalbagh Upparahalli, Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Vagus Superspeciality Hospital",
            "Address": "18th Cross, 4th Main, Malleshwaram",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Excelcare Hospital",
            "Address": "3/2, 27th Cross, Industrial Layout, Banshankari 2nd Stage",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Motherhood",
            "Address": "No 324, Cmh Road, Indiranagar 1st Stage",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Arunodaya Hospitals",
            "Address": "18, 23, Mallasandra Main Road, 4th & 5th Cross, Bagalagunte Hesaraghatta Road",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Vasan Eye Care Hospital",
            "Address": "# 28 & 29, 7th Main Diagonal Road, Opp To Maiyas Hotel & Vinayak temple, Jayanagar 4th block , Bangalore-560011.",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Vasan Eye Care Hospital",
            "Address": "# 205-4c, 4th Cross, 3rd Block, Hrbr Layout, Near Hennur Bus Depot, Banaswadi, Bangalore-560043",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Dr Agarwals Eye Hospital",
            "Address": "Salarpuria Zest Building, No.16, Bannergatta Road, Opp to Shoppers Stop",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Saptagiri Hospital",
            "Address": "# 15 Chikkasandra Hesaraghatta Main Road",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Manipal Hospitals Pvt Ltd (earlier Vikram Hospital Millers Road)",
            "Address": "# 71/1, Millers Road",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Aayug Multi Specialty Hospital",
            "Address": "# 477 1st Main, B Block Aecs Layout, Kundanahalli",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sri Sai Ram Hospital",
            "Address": "# 6, J.C Industrial Area, Yelachenahalli Near Metro Kanakpura Main Road",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sparsh Hospital For Advanced Surgeries",
            "Address": "# 146, Infantry Road, Opp To Police Commissioners Office",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Vasan Eye Care Hospital",
            "Address": "#25/5-D, Outer Ring Road, Doddanekundi, Marathalli",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Jayashree Multispeciality Hospital (No cashless for Deluxe Wards and Suite)",
            "Address": "No 25, 26, 27 1st Cross \u201cB\u201d Block Vishwapriyanagar Begur",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Vasan Eye Care Hospital",
            "Address": "Seetha Complex, No.483, 16th Cross, 18th Main Rajarajeshwari Nagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Dr Agarwals Eye Hospital",
            "Address": "#2557, Hig Sector B, 16th B Cross, 3rd Stage, Yelahanka New Town",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Cloudnine Hospital Pvt Ltd - old airport rd",
            "Address": "#115, Kodihalli, Old Airport Road",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Narayana Netralaya Unit 3",
            "Address": "#1/1, 1st main road, Binnamangala layout, Defence colony, HAL 2nd stage, 100 feet road, Indiranagar.",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Narayana Super Speciality Hospitals",
            "Address": "No 24 9th Cross Margosa Road Malleshwaram",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Dr Agarwals Eye Hospital",
            "Address": "#33, Coles Road, Frazer Town",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Cloudnine Malleshwaram",
            "Address": "# 47, 17th Cross, 11th Main , Malleshwaram",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "H K Hospital",
            "Address": "# 106/2, Bangalore Mysore Road, Near Rainbow Bridge, Kengeri",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Vijayashree Hospital",
            "Address": "#3 , Gottigere, Bennarghatta Main Road",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sri Shankara Cancer Hospital And Research Centre.",
            "Address": "1st Cross, Shankarapuram, Basavangudi",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Apollo Cradle",
            "Address": "No. 58.5th Cross, 18th Main Dhanlakshmi Bank Building 6th Block, Kormangla",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Vasan Eye Care Hospital",
            "Address": "Sri Murthy Complex, No.43, Garvey Bhav Palya Hongasandra Village Begur, Hobli, Hosur Main Road, Bommanahalli",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Vasan Eye Care Hospital",
            "Address": "# Vijayalakshmi Arcade, No 533, Ganga Nagar, R T Nagar, Opp Bmtc Bus Stop",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Vasan Eye Care Hospital",
            "Address": "# 1127/A, 7thsector, Near Bda Complex, Hsr Layout",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Apollo Speciality Hospital",
            "Address": "No.21/2 (2) 14th Cross 3rd Block, Jayanagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Apollo Cradle",
            "Address": "# 25, 46th Cross, 5th Block, Jayanagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Nandana Health Care Servicespvt Ltd",
            "Address": "# 320/C 321/A, 1st Stage, 2nd Phase, West Of Chord Road, Manjunathnagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Nelivigi Eye Hospital And Surgical Centre",
            "Address": "# 446/21, Above Vijaya Bank, Opp. Amba Bajaj Showroom, Diagonally Opp. To Bangalore Central Mall, Bellandur",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sailaja Superspeciality Eye Hospital",
            "Address": "33/1 NEAR GANDHI STATUE BEHIND DAFFODILS APPARTMENT HORAMAVU MAIN ROAD BENGALURU",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Mazumdar Shaw Medical Centre Unit Of Narayana Health",
            "Address": "Nh Health City No. 25a/A Bommasandya Industrial Area Hosur Road",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sri Ram Nethralaya",
            "Address": "No.2, 1st Floor (Adjoining Brdcc Bank), Opp Ganesha Temple, Near Old Police Station, K R Puram, K R Puram Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Chiraayu Hospital",
            "Address": "NO. 1 PEMMEGOUDA ROAD, MUNIREDDY PALYA",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Belaku Eye Hospital",
            "Address": "#769&770, I CROSS RING ROAD KENGERI UPANAGARA",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Narayana Multispeciality Hospital HSR layout",
            "Address": "Basant Health Center Building, Site No. 1. Opp To Hsr Club, Hsr Layout",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Brindhavan Areion Hospital",
            "Address": "#17, 4TH MAIN ROAD CHAMRAJPET",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Aveksha Hospital",
            "Address": "#122, Varadarajaswamy Layout, Singapura Main Road, Near M.S Palya",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Eye Foundation Ltd",
            "Address": "79/5, Outer Ring Road, Bellandur",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Maruthi Hospital.",
            "Address": "2374/26 Platinum Plaza Vijayanagar Club Road Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Vasan Eye Care Hospital",
            "Address": "Shivam Arcade, 41st Main Road, Kanakapura Main Road, Sarraki Gate",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Kusuma Hospital",
            "Address": "237/37 10th Main 50ft Road Nagendra Block Srinagar Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sakra World Hospital",
            "Address": "52/2 & 52/3 Devarabeesanahalli, Verthur Hoobli",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "SMILES Institute of Gastroenterology (Previously incorporated as Family Hospital)",
            "Address": "No. 423/2, 60 Feet Road, 1st Main, 1st Stage, 1st Phase Behind Sbm Gokula",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "People Tree Hospitals",
            "Address": "#2, Tumkur Road, Goraguntepalya",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Vasan Eye Care Hospital",
            "Address": "Dps Tower No 40 1st Floor Above Icici Bank Ltd Banner Ghatta Road Arekere Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "People Tree Hospitals at Meenakshi",
            "Address": "No. 979, 25th Main Road Hanumanthnagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "International Hospital Ltd",
            "Address": "#111&112, West Of Chord Road, Opp. 1st Block Rajajinagarjunction, Mahalakshmipuram",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Athreya Hospital",
            "Address": "6/2 B, Chandapura, Opp. Suryanagara Phase 1",
            "CITY": "Bangalore Rural"
        },
        {
            "HOSPITAL NAME": "Bgs Gims Hospital",
            "Address": "# 67, Bgs Global Health & Education City, Uttra Halli Main Road, Kengeri",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Punya Hospital India Pvt Ltd",
            "Address": "# 52, 53/10, 80 Feet Road, Mig Khb Colony, Basaveshwarnagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Motherhood",
            "Address": "No 514/1-2-3, Kaikondara Village Opp. Total Mall, Sarjapur Road",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Manipal Hospitals (originally incorporated with the name of Columbia Asia Hospital group)",
            "Address": "Sy. No. 10p & 12p, Ramagondanahalli Village, Varthur Hobli, Whitefield, Bangalore East Taluk",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Navachethana Hospital",
            "Address": "17/A2 A-Sector , Opp Railwheel Factory Yelahanka , New Town Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sankalp Nethralaya And Polyclinic",
            "Address": "85/1, 19th Main Hsr Layout Sector 1, Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Akshara Eye Hospital",
            "Address": "S.V. Arcade, Devarachikkana Halli Road",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Nano Hospitals",
            "Address": "#79, DLF City, Near Arekere Sai Baba Temple, Narayanappanahalli, BTM 6th Stage, 2nd Block",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Eskay Healthcare",
            "Address": "#274,3RD CROSS,BRINDAVAN LAYOUT,SHETTIHALLI",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sri Venkateshwara Nethralaya",
            "Address": "#120, SS COMPLEX, 9TH MAIN ROAD, RR NAGAR",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Specialist Health System Pvt Ltd",
            "Address": "No. 216, 7th Main, 80 Feet Road, 1st Block, Hrbr Layout, Kalyannagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Siddhi Eye Care",
            "Address": "229, 7TH CROSS, INDIRANAGAR, 1ST STAGE",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Motherhood",
            "Address": "No. 2266/17/18, G Block, Sahakara Nagar, Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Aster Cmi Hospital",
            "Address": "No. 43/2, Bellary Road, Nh 7, Sahakarnagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Cloudnine Whitefield",
            "Address": "Cloudnine, 2nd Floor, Nagarjuna Sai Signet, Plot 11, Part (Ca) Of Ediz Industrial Area, Sadaramangala Village, Kr Puram, Hobli, Whitefield Main Road",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Dr Agarwals Eye Hospital",
            "Address": "No 30, 80 Ft Road, R.K Layout, Padmanabha Nagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Apollo Spectra Hospitals",
            "Address": "# 143, 5th Block, 1st Cross, Kormangala",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Nu Hospital Pvt Ltd",
            "Address": "#4/1, West Of Chord Road, Rajajinagar, Next To Iskcon Temple",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Apollo Cradle Brookefield",
            "Address": "#101/209 ITPL MAIN ROAD KUNDALHALLI BROOKEFIELD",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Premier Health Care",
            "Address": "NO. 164, 1ST CROSS,1ST MAIN ISRO LAYOUT",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Prolife Multispeciality Hospital",
            "Address": "#249/248/284/101 INTERNATIONAL AIRPORT ROAD BYATARAYANAPURA",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Rainbow Childrens Medicare Pvt Ltd",
            "Address": "SURVEY NO 8/5, DODDANEKUNDI VILLAGE, MARATHAHALLI, KR PURAM, OUTER RING ROAD",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sathya Sai Orthopaedic And Multispeciality Hospital",
            "Address": "#20/1 BHATTARAHALLI, OLD MADRAS ROAD NEAR RTO",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Comfort Multispeciality Hospital",
            "Address": "Srr Arcade, 23 & 24 Cross, Kaggadasapura Main Road, C V Raman Nagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Vasavi Hospital",
            "Address": "#15, 70th cross, 14th main, 1st stage, kumaraswamy layout",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sagar Chandramma Hospitals",
            "Address": "No. 1, Vani Vilas Road, V. V Puram",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Fortis La Femme",
            "Address": "#62 RICHMOND ROAD, SACRED HEART CHURCH ENTRY FROM MOTHER TERESA ROAD RICHMOND TOWN",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sri Maruthi Nethralaya",
            "Address": "18, 1ST FLOOR, ABOVE AIRTEL OFFICE,17TH CROSS, MRCR ROAD, BEHIND MARUTHI MANDIR, VIJAYANAGAR",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Narayana Nethralaya Unit 4",
            "Address": "NO.63, NEXT TO ROYAL MEENAKSHI MALL, BANNERGHATTA ROAD, HULIMAVU,",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sun Orthopaedic",
            "Address": "NO. 24 BRINDAVAN NAGAR",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Bangalore Institute Of Gastroenterology",
            "Address": "No. 34, 100 feet road (ashoka pillar road), 2nd block, jayanagar, bnagalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Krishna Nethralaya",
            "Address": "Mathura Arcade, above sbi,beside post offcice yelahanka new town",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Svastha Hospital",
            "Address": "site no.3, narayanappa garden main road, whitefield, bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Dharma Kidney Care",
            "Address": "No.909, 47th Cross, Near BSNL Compound,, 5th Block, Jaya Nagar, Bengaluru, Karnataka 560041",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Rainbow Childrens Hospital & Birthright - Bg Road",
            "Address": "Road: No 178/1 & 178/2, Opposite Janardhan Towers, Bilekahalli, B G Road",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Omega Multispeciality Hospital",
            "Address": "#1236, WARD NO. 4 B SECTOR HIG 1&2 PHASE yelahanka new town",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sri Eye Care",
            "Address": "NO. 118, 80 FEET ROAD, 1ST STAGE, 1ST BLOCK HBR LAYOUT, (OPP. SHIRDI SAI MANDIR & MINI ISKCON)",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Rajashri Grandhim Speciality Hospital",
            "Address": "No.349, 5TH MAIN, 11TH CROSS, BILEKAHALLI AYAPPA TEMPLE ROAD,VIJAYA BANK LAYOUT",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Janapriya Hospital",
            "Address": "no.2, 5th A cross, subbiahnapalya Banaswadi main road",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Bhagwan Mahaveer Jain Hospital",
            "Address": "NO 1.2, BANASHANKARI 3RD PHASE,AVALAHALLI, BDA 2ND LAYOUT,DEEPANJALI NAGARA",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sparsh Hospital, Rajarajeshwari Nagar",
            "Address": "no. 8 ideal homes township,NEAR ICON INTERNATIONAL SCHOOL RR NAGAR, HBCS LAYOUT",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Kids Clinic India Pvt Ltd (Cloudnine)",
            "Address": "#1/79/4, BELLANDUR VILLAGE VARTHUR HOBLI",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Kangaroo Care U/O Surabhi Health Care And Research",
            "Address": "#89, 17TH CROSS MC LAYOUT, NEAR METRO STATION VIJAYANAGAR",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Abhayahasta Multispeciality Hospital",
            "Address": "#347/247 2ND CROSS, KAGADASAPURA MAIN ROAD,CV RAMAN NAGAR",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Manipal Hospitals Pvt Ltd",
            "Address": "143, 212-2015 KR Puram Hobli, Off Hoodi Village, EPIP, Industrial Area, Whitefield, Bengaluru,",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Swastik Eye Hospital",
            "Address": "NO. 76 VANI VILAS ROAD BASAVANGUDI",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Manjunatha Nethralaya",
            "Address": "NO.44, 1ST FLOOR BHUVANESHWARI NAGAR, T-DASARAHALLI AMMAJI COMPLEX, HESARAGHATTA MAIN ROAD",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sachethana Eye Clinic",
            "Address": "#32, 9TH CROSS 1ST MAIN",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Best Hospital",
            "Address": "Sy.No.76/1,# 413,hosur main road,chandapura,bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Raghavendra People Tree Hospital",
            "Address": "#13/4 T DASARAHALLI",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Samruddhi Eye Hospital",
            "Address": "NO.2 NEAR FORTUNA VISTA APARTMENT KODIGEHALLI MAIN ROAD THINDLU,VIDYARANYA PURA POST",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Pavan Hospital",
            "Address": "#110, JJ TOWERS GANDHI NAGAR",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Cytecare Cancer Hospitals Pvt Ltd",
            "Address": "Near Banglore Cross ,Banglore hyderabad HWY Venkatala Yelamanka",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Kanva Sri Sai Hospital",
            "Address": "227, RAJIVGANDHI NAGAR",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Medcare Hospital",
            "Address": "NO.12, S S TEMPLE STREET,VV PURAM",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Dr. Agarwals Eye Hospital",
            "Address": "No.41, 80 feet Road, HAL 3rd Stage, Opposite Empire Restaurant, Bangalore - 560038",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Dr. Agarwals Eye Hospital",
            "Address": "No. 3, NARAYANAPPA CHAMBERS",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sreenagar Hospital",
            "Address": "855/856, RAMANJENEYA MAIN ROAD SRINAGAR",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Digvijaya Hospital",
            "Address": "No 124 7th Block, Jaya Nagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Tathagat Heart Care Centre",
            "Address": "NO.31/32 CRESENT ROAD MALLIGE MEDICAL CENTRE PREMISES OPP. SUVARNA NEWS, SHIVANAND CIRCLE",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Drishti Nethralaya",
            "Address": "#30/A, 11th Main Road, 50 Feet Road, Raghavendra block, Srinagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "THE LIFE PLUS HOSPITAL ( A UNIT OF ASHRITHA HEALTHCARE)",
            "Address": "266/C INDIRANAGAR, 80 FEET ROAD, SIR CV RAMAN HOSPITAL ROAD, NEAR CMH HOSPITAL",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Shekar Super Speciality Eye Centre",
            "Address": "No. 704, 3Rd Block",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Bangalore Orthopaedic And Surgical Hospital",
            "Address": "NO. 426, 3RD CROSS, HRBR LAYOUT,KALYAN NAGAR",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Mtb Orthopaedic And Trauma Hospital",
            "Address": "#2&3, OPP. PHOENIX MALL",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Manipal Hospitals (originally incorporated with the name of Columbia Asia Hospital group)",
            "Address": "Survey No 46/2, Ward No 150, Ambalipura Sarjapur Road",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Motherhood Hospital",
            "Address": "N0 5, 914, 1ST BLOCK KALYAN NAGAR",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Aaxis Hospital",
            "Address": "NO. 786, NO. 29-1 AND 30 BELLATHUR VILLAGE",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Nuo Garden City Eye Hospital",
            "Address": "NEAR HYPER BAZAAR",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Shivashakti Multispeciacity Hospital.",
            "Address": "12/2/B, Kenchanapura cross, nagadevanahalli. kengeri hobli.bangalore-560056",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Astra Super Speciality Hospital",
            "Address": "21/7 VASANTHPURA MAIN ROAD",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Motherhood - Banagirinagar",
            "Address": "4/19, 13TH MAIN ROAD, BANASHANKARI 3RD STAGE",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Ndr Hospital",
            "Address": "NO.4 B SECTOR, OPP. YELAHANKA NEW TOWN BUS STAND",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Leelavatti Multispeciality Hospital",
            "Address": "#7.2ND MAIN ROAD, CHAMARAJPET BENGALORE",
            "CITY": "Bangalore Rural"
        },
        {
            "HOSPITAL NAME": "Lakshmi Eye Hospital",
            "Address": "NO. 290, 15TH CROSS OPP. KANTI SWEETS",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Hbs Hospital",
            "Address": "NO. 58 COCK BURN ROAD",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Prakriya Hospital",
            "Address": "NO. 41, RAJA REDDY LAYOUT",
            "CITY": "Bangalore Rural"
        },
        {
            "HOSPITAL NAME": "Atreum Hospitals Private Limited",
            "Address": "916, 80FEET ROAD IDEAL HOMES TOWNSHIP",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Vijayanagar Hospital",
            "Address": "No. 46, 17th Cross, Mc Road, Viajayanagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "K I M S Hospital And Research Centre",
            "Address": "K.R.Road, V.V.Puram",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Aster Rv Hospital( A Unit Of Aster Dm Health Care Ltd)",
            "Address": "CA 37, 24TH MAIN",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Ovum Woman And Child Speciality Hospital (Cahless only for PVT insurers)",
            "Address": "NO. 216/A 100FEET OUTER RING ROAD",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Ovum Birthing Center (Cashless only for PVT insurers)",
            "Address": "#916 5TH A CROSS",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Dr Agarwals Eye Hospital",
            "Address": "No.50, 100 Ft Road,",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Pooja 3d Hospital & Diabetes Centre",
            "Address": "# 103, Bansawadi Main Road, Next To BATA Show Room & Flyover, Subbaiahanapalya Bangalore.",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "City Hospital",
            "Address": "205/1, Prakash Complex, B.S.A. Road, Frazer Town",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sree Lakshmi Multi Speciality Hospital",
            "Address": "#94/2, NEAR HONGASANDRA BUS STOP, BEGUR MAIN ROAD",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Bhagwan Mahaveer Jain Hospital",
            "Address": "17, Millers Road, Vasanthnagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Suguna Hospital (No Cashless for Ophthalmology Procedures)",
            "Address": "# 1/A, 87, Dr. Raj Kumar Road, 4th N Block, Rajajinagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Devi Super Specialty Eye Hospital Pvt. Ltd.",
            "Address": "157/A SECTOR 5, HSR LAYOUT",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Srusthi Hostpital ,",
            "Address": "#30, KODICHIKKANAHALLI MAIN ROAD, NEAR BWSSB KAVERI WATER TANK",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Nethra Eye Hospital",
            "Address": "#8,POOJARY LAYOUT,80FT ROAD,R.M.V.2ND STAGE",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sai Thunga Health Care",
            "Address": "# 187/209/ 186 RING ROAD AGARA HSR LAYOUT NEAR JAGHANATH TEMPLE",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Femiint Health(A Unit Of Chaithanya Integrated Healthcare Ltd)",
            "Address": "#34. NEXT TO FORUM VALUE MALL",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Slv Prasad Hospital",
            "Address": "(prasad slv hospital), SITE NO. 4/31, 1ST MAIN",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Retina Institute Of Karnataka",
            "Address": "122, 5th Main, Chamrajpet",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sankara Eye Hospital",
            "Address": "Varthur Road, Kundalahalli Gate",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "P M Santhosha Hospital",
            "Address": "WARD NO 198,NEAR MAHAVEER LAKES APARTMENT",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Dr Tulip S Obesity And Diabetes Surgery Centre",
            "Address": "no 640, 12th main 80 feet road, 4th block, koramangala bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sri Sai Ram Hospital",
            "Address": "33 BANNERGATTA MAIN ROAD BTM LAYOUT 2ND STAGE `",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Kauvery Hospital (Bengaluru) Pvt Ltd",
            "Address": "92/1A, KONAPPANA AGRAHARA, ELECTRONIC CITY",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Shankar Super Speciality Hospital",
            "Address": "No.68/5,Ganigarapalya Mani Road,Vajarahalli,Pipeline Road,Kanakapura Main Road",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Rainbow Childrens Medicare Private Limited(Hebbal)",
            "Address": "SURVEY NO. 17/4",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Cloudnine Hospital,Kids Clinic",
            "Address": "636/1,Horamavu village, K R Puram Hobli,Bengaluru south taluk. Bengaluru",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Devi Eye Hospital",
            "Address": "bus stop, No. 185 ,opp. Thubarahalli, Varthur Rd, Kumarapalli, Whitefield, Bengaluru, Karnataka",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sri Sai Eye Hospital",
            "Address": "#311, 4th B Cross, Rammurthy Nagar Main Road, Kasturi Nagasr",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sreenivasa Hospital",
            "Address": "# 12 Parkroad, Balepet",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Apoorva Hospitals & Diagnostics Centre",
            "Address": "548/1,CMH Road,Indiranagar,1st Stage",
            "CITY": "Bangalore Rural"
        },
        {
            "HOSPITAL NAME": "New varalakshmi hospital",
            "Address": "#2, MAHAKAVI KUVEMPU ROAD",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Bms Hospital",
            "Address": "618 oppsite bms engineering college bull temple road basavanagudi bengaluru",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Saralaya Hospitals Pvt Ltd",
            "Address": "#3/1/B saralaya layout shree krishna gardens kattigenahalli bagalur main road yelahanka",
            "CITY": "Bangalore Rural"
        },
        {
            "HOSPITAL NAME": "Aster Hospital ( A Unit Of Aster Dm Healthcare Limited),",
            "Address": "PLOT NO. 20 SURVEY NO. 76 SADARAMANAGALA INDUSTRIAL AREA OF ITPL MAINROAD KADUGODI",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sri Vinayaka General And Maternity Hospital",
            "Address": "#961, 1st Cross, Chanakeshavanagar Off Hosur Main Road Electronic City Post",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Zion Hospital And Research Center Pvt Ltd",
            "Address": "No. 83/1, Kammanahalli Main Road",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Telerad RXDX Healthcare, grnd floor , opp graphite india, whitefield.",
            "Address": "#7G, GR FLOOR,BROOKFIELDS ROAD,OPPGRAPHITE INDIA,NEXT TO MAPPLE HOTEL ITPL",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "BW lions eye, JP nagar",
            "Address": "Site No.2,9th cross,RBI layout,JP nagar ,7th phase kothanur",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Hosmat Hospital Pvt. Ltd. Kalyannagar",
            "Address": "1, Hennur Road, Hbr Layout Kalyannagar,",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Maruthi Multispeciality Hospital",
            "Address": "No. 111, Radhakrishna main road, Near Deepa complex, Vishal mart, Mallathahalli, Bengaluru",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "SWASTIK HOSPITAL",
            "Address": "Dommasandra Circle ,Sarjapura Main Road , Bangalore, Dommasandra",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "MOTHERHOOD HOSPITAL",
            "Address": "#8312 /164, Survey No.164, Neeladri Nagara, Electronic City Phase 1, Bengaluru 560100",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "St Philomenas Hospital",
            "Address": "No: 4, Campbell Road,",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Nephrocare Health Services Private Limited",
            "Address": "1St Floor,Pranav Bearing No 331, 3Rd Stage , 4Th Block, West Of Chord Road (Siddaiah Puranik Road). Basaveshwaranagara. Bengaluru Karnataka - 560079",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Cloudnine kids hospital, doddakallasandra, kanakpura rd",
            "Address": "766&767 Narayana Nagar 1st Block Doddakallasandra Village Kanakapura Road",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "A V Eye Hospital & Diagnostics",
            "Address": "711, Modi Hospital Road, 2Nd Stage, Mahalakshmipuram, Bangalore-560086",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Cloudnine kids electronic city",
            "Address": "No 3 survey no 152/1, 152/4 doddathoguru village electronic city phase 1 neeladri road bengaluru south taluk",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Cloudnine kids sahakaranagar",
            "Address": "Khata no 2667/1/2501/1 sahakaranagar ward no 7 kodigehalli main road",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Abhishek Nethradham",
            "Address": "# Hig 2024, 3rd Cross B Sector Icici Bank Road Near Sbi Yelahanka New Town",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "SRI VENKATESHWARA EYE HOSPITAL",
            "Address": "#2, 6Th Main, Ramaiah Enclave",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Mallige Medical Centre",
            "Address": "# 31/32 Cresent Road, Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Spandana Heart & Super Speciality Hospital",
            "Address": "239/206/34A, Sompura Gate, Sarjapura Main Road",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Blue Bliss Hospital",
            "Address": "No 65 1St Main Seshadripuram Bangalore - 560020",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Eesha Multispeciality Hospital",
            "Address": "#11 & 30, Ward No 06 Ramaiah Complex, Bhuvaneswarinagar Main Road, Bengaluru-560024",
            "CITY": "Bangalore Rural"
        },
        {
            "HOSPITAL NAME": "Jayadev Memorial Rashtrotthana Hospital And Research Centre",
            "Address": "Rajarajeshwari Nagar BEML 5th Stage Bengaluru",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Ibbani Nethralaya",
            "Address": "No 34, Mchs Layout, Jakkur Main Road, Jakkur,Bangalore-560064",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Pathway hospital, blore",
            "Address": "#1280, UTTARAHALLI KENGERI MAIN ROAD, CHANNASANDRA",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "GM hospitals nagarbhavi (earlier Panacea nagarbhavi) (275392, Gm Hospitals, 611 612 Nagarabhavi main road 2nd stage vinayaka layout nagarabhavi bengaluru 560072, Bengaluru, Karnataka-560072)",
            "Address": "611 612 Nagarabhavi main road 2nd stage vinayaka layout nagarabhavi bengaluru 560072",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "GM hospitals basaweshwarngr (earlier Panacea basaweshwarngr) (347220, Gm Hospital, 335 3rd Stage 4th Block Siddaiahpuranik Road Basaveshwaranagar Bangalore, Bengaluru, Karnataka-560079)",
            "Address": "335 3rd Stage 4th Block Siddaiahpuranik Road Basaveshwaranagar Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "360775, Nikhil nethralaya , Number 44 first floor hesaragatta main road mallassandra opposite to dominos pizza store , bengaluru, Karnataka-560057",
            "Address": "Number 44 first floor hesaragatta main road mallassandra opposite to dominos pizza store",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "314352, Kinder Womens Hospital And Fertility Centre (A Unit Of Kindorama Healthcare Private Limited), No : 40F Doddanekundi Industrial Area, Graphite India Main Road, Hoodi Village K R Puram Bengalore, Bengaluru, Karnataka-560048",
            "Address": "No : 40F Doddanekundi Industrial Area, Graphite India Main Road, Hoodi Village K R Puram Bengalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "379008, Carewell Superspeciality Hospital, 91 bharath nagar ms palya bengluru, bengaluru, Karnataka-560097",
            "Address": "91 bharath nagar ms palya bengluru",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Prashanth hospital, sbm colony",
            "Address": "#8/45,80 Feet Road SBM Colony Bsk 1st Stage",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sai jyothi netra seva, halasuru",
            "Address": "11, Ulsoor Tank Road, Opp Ulsoor Lake, Near Mahaganapathy Temple, Bangalore",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Vinay multisplty hosp, HBR lyt",
            "Address": "50/2954/74 1st stage 1st block hbr layout",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Trustwell Hospital",
            "Address": "NO. 5 CHANDRIKA TOWER JC ROAD",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Altius sripada hospital, hbr lyt",
            "Address": "No 511. Outer Ring Road 4Th Block Hbr Layout Kalyan Nagar Post Bangalore:560043",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Shreyas Maternity home, hoskote",
            "Address": "#356, 2ND MAIN ROAD, SWAMY VIVEKANANDA NAGARA",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Akshaya nursing home, yelahanka",
            "Address": "#33-34 BALAJI AVENUE 2ND STAGE ATTUR MAIN ROAD ATTUR LAYOUT YELAHANKA NEW TOWN",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sahasra Gastro Enterology And Obesity Clinic(Sahasra Hospitals)",
            "Address": "27/b.new no 30.39th cross 8th block jayanagar Bangalore-560082",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Apollo cradle rajajinagar",
            "Address": "25/5, 1St Main Road, E Block, Subramanya Nagar, 2Nd Stage, Rajajinagar",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Nano hospital uttarahalli",
            "Address": "47 12/1 Uttarhalli main road, bengaluru",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Belenus Champion Hosp",
            "Address": "Sarjapur Marathanhalli Rd , Decathlon Carmelaram",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Samprathi Eye Hospital And Squint Centre",
            "Address": "# 111, Railway Parallel Road, 7th Cross, Kumara Park East",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Cans multispeciality hospital",
            "Address": "#2, Gbm&Sons Layout, Byrappa Gardens,",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Rainbow Childrens Medicare Limited,",
            "Address": "No,16,Sy.No.3/3 ,3/4 Ambalipura Village, Arthur Hobli, Sarjapura",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Milann (A Unit Of Bacc Health Care Pvt Ltd)",
            "Address": "7 East Park Road Kumara park East",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Brains Superspeciality Hospital, # 192, T Mariappa Road, Lalbagh Siddapura,, bengaluru",
            "Address": "# 192, T Mariappa Road, Lalbagh Siddapura,",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Sparsh Hospital Yelahanka",
            "Address": "No.1474/138, International Airport Road, Kogilu Cross, Yelahanka, Bangalore-560064",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "Lifecare Hospital, BB road, yelahanka",
            "Address": "Near Vidhyanagar Cross , Opposite Reliance Jio Petrol Bunk , Bb Road , Bangalore - 562157",
            "CITY": "Bengaluru"
        },
        {
            "HOSPITAL NAME": "A. M. R. I. HOSPITALS LTD. [DHAKURIA]",
            "Address": "P- 4 & 5, CIT Scheme- LXXII Block-A, Gariahat Road",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "A.M.R.I. HOSPITAL LIMITED [BYEPASS]",
            "Address": "230, Barakhola lane, Jadavpur east",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "A.M.R.I. Medical Centre [Dhakuria]",
            "Address": "97,A, Southern Avenue, Kolkata -700029",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "A.M.R.I.HOSPITALS LTD",
            "Address": "AMRI SALTLAKE JC-16&17,Salt lakeCity",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "ALL ASIA MEDICAL INSTITUTE",
            "Address": "8,B,Garcha First Lane,Kolkata 700019",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "ALO EYE CARE (NEW TOWN)",
            "Address": "DG -20/1, Premises No 07/0327, I(D), Action Area 1",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "AMULYAJYOTI EYE FOUNDATION",
            "Address": "105.MANOHAR PUKUR ROAD",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "APEX INSTITUTE OF MEDICAL SCIENCES",
            "Address": "1219, PG Survey Park Road, Sammilani Park Rd, near Big Bazar, Hiland Park, Survey Park, Santoshpur, Kolkata, West Bengal 700075",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Apollo Gleneagles Hospitals Ltd.",
            "Address": "58 CANAL CIRCULAR ROAD, KOLKATA WEST BENGAL 700054",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "APOLLO MEDICAL CENTRE (KOLKATA)",
            "Address": "48/1F, Leela Roy Sarani, Ballygunge,",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Arogya Maternity & Nursing Home",
            "Address": "71, Tollygung Circular Road",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "ARTI NURSING HOME & DIAGONOSTIC CENTRE",
            "Address": "539, M.G.ROAD, BUDGE BUDGE CHOWRASTA",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "ASG HOSPITAL PVT LTD (KOLKATA)",
            "Address": "403/1 Alcove Gloria, Avove Big Bazaar, Dakshindari",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "ASMII EYE FOUNDATION",
            "Address": "204(172)KALI TEMPLE ROAD NIMTA kol-700049\\n , Kolkata , North 24 Parganas , West Bengal",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "ASTHVINAYAK HEALTHCARE LIMITED(DREAMLAND NURSING HOME)",
            "Address": "2 NAYARATNA LANE",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Aurobindo Netralaya",
            "Address": "4A,Rajendra Deb Road",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "B. M. Birla Heart Research Centre",
            "Address": "1/1 National Library Avenue",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Baine Hospital",
            "Address": "123/1 GOPAL LAL TAGORE ROAD,",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "BARRACKPORE CITY HOSPITAL PVT LTD",
            "Address": "161(86) EAST GHOSH PARA ROAD BARRACKPORE TITAGARH",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Behala Balananda Brahmachari Hospital & Research Centre",
            "Address": "151 & 153, Diamond Harbour Road, Behala, Kolkata,",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "BELLE VUE CLINIC",
            "Address": "9, LOUDON STREET, KOLKATA-700017",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "BELLONA NURSING HOME & DIAGNOSTIC CENTRE",
            "Address": "51A, DIAMOND HARBOUR ROAD,",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Bhagirathi Neotia Woman & Child Care Centre",
            "Address": "Premises No 27- 0327, Action Area 1d, Street No 327, New Town,",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Bhattacharyya Orthopaedics & Rech. Centre P.Ltd.",
            "Address": "NARAYANPUR, P.O. : RAJARGHAT-GOPALPUR, KOLKATA-",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "BINAYAK IMAGING AND DIAGNOSTIC PRIVATE LIMITED",
            "Address": "59, KALICHARAN GHOSH ROAD, SINTHEE, KOLKATA",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Bindu Basini Nursing Home",
            "Address": "76,MADHUSUDAN BANERJEE ROAD,BIRATI",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "BMRC HOSPITALS LIMITED",
            "Address": "6/6, B.T. ROAD, TALPUKUR, KOLKATA.",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "BMRI HOSPITAL PVT LTD",
            "Address": "8A, D. H. ROAD, 3A BUS STAND, THAKURPUKUR",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "CALCUTTA EYE RESEARCH FOUNDATION",
            "Address": "(SUNETRA EYE CARE) 1050/1SURVEY PARK,SANTOSHPUR",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "CALCUTTA HEART CLINIC & HOSPITAL",
            "Address": "HC BLOCK- 4, SECTOR -3 , SALTLAKE ,BIDHAN NAGAR",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Calcutta Lions Netra Niketan",
            "Address": "18/2/A/2,UDAY SANKAR ARANI,GOLFGREEN",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "CANCER CENTRE WELFARE HOME AND RECH . INSTITUTE (THAKURPUKUR)",
            "Address": "MAHATMA GANDHI ROAD, THAKURPUKUR",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "CARE & CURE HOSPITAL [BARASAT]",
            "Address": "S.N.Road, Nabapally, Barasat, 24 Pgs (N)",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "CENTRE FOR SIGHT (MADHYAMGRAM)",
            "Address": "Shreegopal 106, (N) Near Madhyamgram Crossing, Jessore Rd, Madhyamgram, Kolkata, West Bengal 700129",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "CENTRE FOR SIGHT( AJC BOSE RD)",
            "Address": "1A, A.J.C.BOSE ROAD",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "CHARNOCK HOSPITAL",
            "Address": "JUNCTION OF VIP ROAD AND NEW TOWN APPROACH ROAD,OP",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "CHARRING CROSS NURSING HOME PVT LTD",
            "Address": "2C, MOTILAL BASAK LANE",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "COLUMBIA ASIA [KOLKATA]",
            "Address": "BLOCK - IB ,193 SEC -III SALTLAKE CITY",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "D M Hospital",
            "Address": "113 JAMES LONG SARANI",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "DAFFODIL NURSING HOME [KOLKATA]",
            "Address": "276, CANAL STREET, LAKE TOWN, NEAR VIP LAKE TOWN , Sreebhumi , 24 Pgs North , West Bengal",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "DEBDOOT SEBAYAN",
            "Address": "51 CHARU AVENUE",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "DESUN HOSPITAL & HEART INSTITUTE ( A UNIT OF P N MEMORIAL NEURO CENTRE & RESEARCH CENTRE P LTD)",
            "Address": "DESAN MORE, E M BYPASS, KASBA GOLPARK",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "DEWAN MEDICARE",
            "Address": "48.AMBAGAN.B.T.ROAD",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "DISHA EYE HOSPITALS (BARASAT)",
            "Address": "1090,KRISHNANAGAR RD NH 34,11 NO RLY GATE,BARASAT",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "DISHA EYE HOSPITAL (BEHALA)",
            "Address": "620 DIAMOND HARBOUR ROAD",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "DISHA EYE HOSPITAL [GARIAHAT]",
            "Address": "169, Rashbehari Avenue, Gariahat, Kolkata",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "DISHA EYE HOSPITAL AND REASEARCH CENTRE PRIVATE LIMITED",
            "Address": "88(63A) Ghoshpara Road",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "DISHA EYE HOSPITAL PVT. LTD. [BAGUIHATI]",
            "Address": "17/201, RAGHUNATHPUR NORTH, OPP: TEGHORIA MINI BUS",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "DISHA EYE HOSPITALS PRIVATE LTD",
            "Address": "277/4 B T ROAD",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Divine Nursing Home Pvt Ltd.",
            "Address": "11-A, Abinash Chandra Banerjee Lane Beliaghata",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "DR AGARWALS HEALTH CARE LIMITED (KOLKATA)",
            "Address": "RENE TOWER, 1st Floor, Plot No. - AA-1, 1842, Rajdanga Main Road. Kasba. , E.K.T , Kolkata , West Bengal",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "DR NIHAR MUNSI EYE FOUNDATION (KOLKATA)",
            "Address": "1/3, DOVER PLACE",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "DR S S CHATTERJEE HEART CENTRE",
            "Address": "11/5 DR BIRESH GUHA STREET",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Dr. B. K. Memorial Hospital",
            "Address": "75, Madhusudan Banerjee Road, Nimta,",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "DRISHTI EYE CARE CENTRE (Behala)",
            "Address": "6,Narayan Roy RdMajher bari, SAKHER BAZAR,",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "ECO HOSPITAL & DIAGNOSTICS",
            "Address": "111/1,JESSORE ROAD ,BARASAT",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Ekbalpur Nursing Home Pvt Ltd.",
            "Address": "9, Ibrahim Road",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "ESKAG SANJEEVANI",
            "Address": "P-48, KSHIROD VIDYAVINOD AVENUE, BAGHBAZAR, GRISH",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "EYE CARE & RESEARCH CENTRE",
            "Address": "12A, DR.BIRESH GUHA STREET, KOLKATA-700017",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "EYE CARE NURSING HOME(KOLKATA)",
            "Address": "A/13 AMARABATI,SODEPUR",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Fortis Hospital &Kidney Institute",
            "Address": "111-A, Rashbehari Avenue , Kolkata , Kolkata , West Bengal",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "FORTIS HOSPITAL LTD.",
            "Address": "730, ANANDAPUR, E.M.BYPASS ROAD, KOLKATA",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "FORTIS MEDICAL CENTRE (KOLKATA)",
            "Address": "2/7,Sarat Bose Road",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "GD Hospital & Diabetes Institute",
            "Address": "139 A LENIN SARANI, KOLKATAKOLKATA700013WEST BENGA",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "GENESIS HOSPITAL",
            "Address": "1470, Rajdanga Main Road, NEAR KASBA GOLPARK",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "GREENVIEW NURSING HOME (SODEPUR)",
            "Address": "DHANKAL,PANIHATI,BT ROAD,SODEPUR KOLKATA700114",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "H M DIWAN EYE FOUNDATION",
            "Address": "58, Bankim Mukherjee Sarani, Block C, New Alipore, Kolkata, West Bengal",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "HCG EKO CANCER CENTRE",
            "Address": "PLOT NO DG 4 PREMISES 03 358 NR DPS NEW TOWN",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Health Care & Research Centre",
            "Address": "21, Prannath Pandit Street",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "HEALTH CURE NURSING HOME [LAKE TOWN]",
            "Address": "BLOCK A , PLAT NO 677 LAKE TOWN",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Hindustan Health Point [GARIA]",
            "Address": "2406,GARIA MAIN ROAD",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "ILS HOSPITAL",
            "Address": "Jeewansatya DD- 6, Salt Lake City Sector -1",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "ILS HOSPITALS DUMDUM",
            "Address": "1 KHUDIRAM BOSE SARANI",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "IMPLANTS BETTER SIGHT CENTRE PVT LTD",
            "Address": "13A.COLONE BISWAS ROAD",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "INSTITUTE OF NEUROSCIENCES",
            "Address": "185/1 A J C BOSE ROAD",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "IRIS HOSPITAL",
            "Address": "82/1, RAJA S. C. MULLICK ROAD, KOLKATA",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "JAGANNATH GUPTA INSTITUTE OF MEDICAL SCIENCE AND HOSPITAL",
            "Address": "KP Mondal Road, Buita, Budge Budge, Kolkata, West",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "JAMES LONG CLINIC (P) LIMITED",
            "Address": "33, JAMES LONG SARANI",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "JOINT & BONE CARE HOSPITAL",
            "Address": "DD-35, 2nd Avenue, DD Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "K P C MEDICAL COLLAGE &HOSPITAL (KOLKATA)",
            "Address": "1F,RAJA S.C.MALLICK ROAD.",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Kasturi Das Memorial Super Speciality Hospital (Dishari Health Point)",
            "Address": "Mollargate Hospital Road, Santoshpur Govt Colony, Sanpa, Santoshpur,",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Kasturi Medical Research Centre (P) Ltd (KOLKATA)",
            "Address": "3A,BUS STAND,DIAMOND HARBOUR ROAD,P.O.#JOKA,24 Par",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "KOTHARI MEDICAL CENTRE",
            "Address": "8/3,Alipore Road,",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "KUMAR SURGICAL & LAPAROSCOPIC CLINIC",
            "Address": "348/47,Netaji Subash Chandra Bose Road",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "LIFE LINE NURSING HOME",
            "Address": "4A,WOOD STREET,KOLKATA",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "LOTUS HOSPITAL (RAJARHAT)",
            "Address": "KANJIAL PARA INDIRA NAGAR,RAJARHAT",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "M B NURSING HOME PVT. LTD. [PARK CIRCUS]",
            "Address": "55B/1 DILKHUSHA STREET",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "MEDICA SUPERSPECIALTY HOSPITAL [KOLKATA]",
            "Address": "127 MUKUNDAPUR,E M BYE PASS",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Mediview Nursing Home Pvt. Ltd.",
            "Address": "74, BROAD STREET, NEAR LOHAPOOL",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "MEGACITY NURSING HOME (P) LTD",
            "Address": "12, JESSORE ROAD CHAMPADALI BARASAT NORTH 24 PARGA",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Microlap",
            "Address": "24 Bipin Pal Road",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Midland Nursing Home Pvt Ltd",
            "Address": "33, Anupama Road",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Mission of Mercy Hospital &Research Centre",
            "Address": "125/1, PARK STREET, KOLKATA-700017",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "MOHAN CLINIC (KOLKATA)",
            "Address": "46, LAKE TEMPLE ROAD",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "MOTHER NURSING HOME [SUKANTANAGAR]",
            "Address": "52,SUKANTA NAGAR,3RD SARANI,MADHYAMGRAM",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "NABAJIBAN HOSPITAL PVT LTD (KOLKATA)",
            "Address": "5, SHIBDAS BHADURI STREET, KOLKATA",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "NARAYAN MEMORIAL HOSPITAL",
            "Address": "601 Diamond Harbour Road near, Manton, Behala,",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "NARAYANA HRUDAYALAYA HOSPITAL (RNT)",
            "Address": "124 MUKUNDAPUR , E.M. BYPASS,",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "NARAYANA MULTISPECIALITY HOSPITAL (BARASAT)",
            "Address": "78, Jessore Road , Barasat , North 24 Parganas , West Bengal",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "NAYAN JYOTI EYE CARE CENTRE",
            "Address": "9 JESSORE RD",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "NEHRU MEMORIAL TECHNO GLOBAL HOSPITAL",
            "Address": "6 BARAST RD LALKUTHI BARRACKPORE",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "NETAJI SUBHAS CHANDRA BOSE CANCER HOSPITAL",
            "Address": "3081, Nayabad Ave, New Garia, Pancha Sayar, Kolkata, West Bengal",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "NETRADEEP KHAN EYE CARE PVT LTD",
            "Address": "47, DIAMOND HARBOUR ROAD, SAKHER BAZAR",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "NEW AVENUE NURSING HOME",
            "Address": "NEW TOWN, LOKENATHPARK, JHOWTALA, KOLKATA-700157",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "New Life Nursing Home (Kolkata)",
            "Address": "Saha Bagan, Rajarhat Road,Kol-59",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "NEW TOWN NURSING HOME",
            "Address": "RAJARHAT ROAD TILJALA",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "NH RABINDRANATH TAGORE SURGICAL CENTRE (KOLKATA)",
            "Address": "D - 52, SAMMILANI PARK, KOLKATA",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "NORTH CITY HOSPITAL (Bagmari RD)",
            "Address": "73, Bagmari Road",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "OHIO CARDIOLOGY ASSOCIATES INDIA PVT. LTD",
            "Address": "PLOT NO - DG6, NEWTOWN , RAJARHAT",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "PANACEA NURSING HOME",
            "Address": "32, BARASAT ROAD, NEAR 15 NO. RAIL GATE",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "PARK CLINIC [KOLKATA]",
            "Address": "4, GORKY TERRACE",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "PARKVIEW SUPERSPECIALITY HOSPITAL",
            "Address": "HB 36-A/4 & HB 36-A/5/1, HB BLOCK, SALTLAKE , Bidhan Nagar IB Market , Saltlake , West Bengal",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Peerless Hospital & B.K. Roy Research Centre",
            "Address": "360,Panchasayar,kolkata",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "PEERLESS HOSPITAL CITY DIAGNOSTIC CENTRE",
            "Address": "223,C R AVENUE (NEAR GIRISH PARK METRO STN)",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Phoenix Hospital & Diagnostic Centre Pvt.Ltd.",
            "Address": "2, Motilal Colony , Nirmal Sengupta Sarani",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "POORVA EYE CARE",
            "Address": "72 HEMCHANDRA NASKAR ROAD",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "PRIYAMVADA BIRLA ARAVIND EYE HOSPITAL (KOLKATA)",
            "Address": "10, LOUDON STREET, U.N. BRAHMACHARI STREET",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "PROBAL EYE INSTITUTE",
            "Address": "34 SATISH MUKHERJEE ROAD KOLKATA",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "PROVA EYE FOUNDATION",
            "Address": "66/1/1 & 2 S N BANERJEE ROAD ,BARRACKPORE",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "R.G. SCIENTIFIC ENTERPRISES LTD (GARIHAT)",
            "Address": "33,GARIAHAT ROAD (SOUTH)JODHPUR PARK",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "RED PLUS NURSING HOME",
            "Address": "22, Baghajatin Station Rd, Baghajatin Place, West Rajapur, Baghajatin Colony,",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "REMEDY HOSPITAL (GARIA)",
            "Address": "GARIA STATION ROAD,KALITALA, NEAR PRANAB NAGAR MET",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "RENAISSANCE HOSPITAL PVT.LTD",
            "Address": "NAZRUL ISLAM AVENUE (VIP ROAD) TEGHORIA KOLKATA-70",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "RENUKA EYE INSTITUTE",
            "Address": "25/3 JESSORE ROAD",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Revive Nursing Home",
            "Address": "Baguiati,Baguipara, ASWNI NAGAR",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "ROTARY NARAYAN NETRALAYA (DUMDUM)",
            "Address": "87 DUMDUM ROAD",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "ROTARY NARAYANA NETRALAYA [SALT LAKE]",
            "Address": "CN-5,SECTOR-V,SALT LAKE",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "RSV HOSPITAL",
            "Address": "40, DESHPRANSASHMAL ROAD, KOLKATA-33",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "RUBY GENERAL HOSPITAL [KOLKATA]",
            "Address": "KASBA GOLPARK,E.M.BYPASS",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "S V S MARAWARI HOSPITAL (KOLKATA)",
            "Address": "118 RAJA RAMMOHAN ROY SARANI",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "SAHID KHUDIRAM BOSE HOSPITAL",
            "Address": "12, B.T.ROAD, RATHTALA, BELGHARIA",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Salt Lake City Medical Centre & Research Institute",
            "Address": "DD 10 Sector 1",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Salt Lake EYE FOUNDATION",
            "Address": "IA-173, Saltlake Sec-III",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "SAMARITAN CLINIC (P) LTD.",
            "Address": "4,RAY MANSION,ELIGN ROAD,(10/4D,LATA LAJPAT RAI SA",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "SANA NURSING HOME",
            "Address": "5/1A, NURULLA DOCTOR LANE, KOLKATA-700017",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Sankara Jyoti Eye Research Institute",
            "Address": "#42125, MSM Road, Khardah , Kolkata , North 24 Par",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "SANKARA NETHRALAYA [KOLKATA]",
            "Address": "SANKARA NETHRALAYA,147, MUKUNDAPUR, E.M. BYPASS, K",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Sankara Nethralaya(Newtown)",
            "Address": "DJ 16, Action Area I, New Town,",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "SENGUPTA HOSPITAL DEVELOPER AND SOLUTION PVT. LTD.",
            "Address": "4,HARI MOHAN DUTTA ROAD,KOLKATA",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "SHRADDHA HEALTH CARE PVT LTD",
            "Address": "15, S.N ROY ROAD",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "SHREE NETRA EYE FOUNDATION",
            "Address": "73, CHAKRABERIA ROAD (NORTH), KOLKATA-700020",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Shusrusha Nursing Home Pvt Ltd",
            "Address": "P-290,C.I.T. Scheme VI-M,U.C.Banerjee Road",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "SILVER LINE EYE HOSPITAL",
            "Address": "396,PRINCE ANWAR SAH ROAD,KOLKATA",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "SPANDAN HOSPITAL (TEGHORIA)",
            "Address": "VIP ROAD , TEGHORIA",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "SPECTRA EYE FOUNDATION",
            "Address": "108,108/1,JESSORE ROAD,CHOWMATHA,MADHYAMGRAM, NORT",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "SRIJONI HEALING HOME",
            "Address": "56,HEM CHANDRA NASKAR ROAD",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "STERLING HOSPITAL",
            "Address": "55/1 BHUPEN BOSE AVEBUE ,KOLKATA.",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Super Nova Care Home",
            "Address": "122A, Hemchandra Naskar Road",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "SUSRUT EYE FOUNDATION [SALT LAKE]",
            "Address": "HB - 36/A/1, SEC.-III, SALT LAKE CITY",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Swasti Eye & Super Speciality Nursing Home (Taltala)",
            "Address": "AA-2/2, Rajarhat Road ,Taltala, Baguiati",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "TATA MEDICAL CENTER",
            "Address": "14, MAJOR ARTERIAL ROAD, NEW TOWN, RAJARHAT",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "TECHNO INDIA DAMA HEALTHCARE",
            "Address": "306, Eastern Metropolitan Bypass, LB Block, Kulia, Beleghata",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "THE CALCUTTA MEDICAL RESEARCH INSTITUTE",
            "Address": "7/2, Diamond Harbour Road, Alipore, Kolkata, West",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "THE SUNFLOWER NURSING HOME (HEDUA)",
            "Address": "1/1A,MANMOHAN PANDEY ROAD",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "UMA MEDICAL RELATED INSTITUTE (P) LTD.",
            "Address": "VIP ROAD, TEGHORIA, KOLKATA - 700157",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "UPKAR NURSING HOME",
            "Address": "30D COLLEGE ST",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "V.I.P. APEX MEDICAL CENTRE PVT LTD",
            "Address": "V.I.P ROAD.JORAMANDIR BUS STOP,BAGUIATI",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "VIVEKANANDA EYE CARE CENTER",
            "Address": "51C/2G CHAUL PATTY ROAD, BELEGHATA",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "Woodland Hospital",
            "Address": "8/5 , ALIPORE ROAD",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "ZENITH SUPER SPECIALIST HOSPITAL",
            "Address": "9/3 FEEDER ROAD BELGHORIA, RATHTALA",
            "CITY": "Kolkata"
        },
        {
            "HOSPITAL NAME": "7 Orange Hospital",
            "Address": "74, Pawana Nagar, Chinchwad, Chinchwadgaon, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Aadhar Hospital",
            "Address": "Off Bank Of India,Bombay Pune Highway,Dehuroad",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Aarogyam Multispeciality Hospital",
            "Address": "Chakan Talegaon Road, Opp Marathi Shala, Ranubai Mala, Chakan",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Accord Hospital",
            "Address": "Sant Nagar, Sector No 4, Public Amenity, Moshi Pradhikaran, Pune-Nashik Highway, Moshi",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Ace Hospital",
            "Address": "32/2A, Erandwane, Opp. Hotel Abhishek, Gulwani Maharaj Road,Erandwane",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Aditi Eye Care And Laser Center",
            "Address": "Shop No 302/303, Hawares'grand heritage, Opp Hotel Ambience, Kaspate Wasti, Wakad",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Aditya Birla Memorial Hospital",
            "Address": "Aditya Birla Memorial marg chinchwad",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Aditya Eye Clinic",
            "Address": "M G Road Camp J A Kumar Plaza, Next To Wonderland",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Aegis Multispeciality Hospital",
            "Address": "Office No 1-12 , First Floor, Tapswi Plaza, Kalbhornagar, Near Khandoba Mandir Chowk, Akurdi",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Aims Hospital & Research Centre",
            "Address": "Sr/No 154 Near Marutrao Gaikwad Garden Aundh",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Amrut Hospital",
            "Address": "613,614 Sonkar Building, Behind Nav Maharashtra Vidyalaya, Pimpri-Waghere",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Amrut Hospital & Research Centre",
            "Address": "Markal Road Alandi Devachi In front of TJSB Tal Khed",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Anand Hospital",
            "Address": "Balaji Tower M.Phule Chowk",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Anand Hospital Bhosari",
            "Address": "Opp. PMT Bus Stop, Bhosari Main CHowk, Bhosari",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Anand Multispeciality Hospital",
            "Address": "Dehuphata Alandi,Tal Khed,Dist Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Ankur Multispeciality Hospital",
            "Address": "Sr No 40, Keshavnagar, Mundhwa, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Ankur Nursing Home",
            "Address": "Plot No 11 Tanaji nagar, Link Road, Opp Hearitage Plaza",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Apex Hospital",
            "Address": "Sr No. 13/12, Pawar Nagar, Kalewadi Phata, Aundh-Ravet Road, Thergaon, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Argade Hospital & Maternity Home",
            "Address": "Ambethan Chowk Pune Nashik Highway Chakan Near ICICI Bank Chakan",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Asg Eye Super Speciality Hospital",
            "Address": "Ground Floor, Cello Platina, FC Road, Shivaji Nagar, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Ashraya Hospital",
            "Address": "S.NO.129/1/A/7, Chamunda Heritage, Kala Khadak,Bhumkar Chowk, Wakad",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Asian Eye Hospital",
            "Address": "Sakar 10, 3rd Floor, Above Fab India, Sassoon Road, Opp Jehangir Hospital",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Attharva Accident Hospital",
            "Address": "Chakan Wadgaon Highway Near Bharat petrol Pump Talegaon Station TalegaonDabhade",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Axis Eye Clinic",
            "Address": "Kumar Millenium, Ground Floor, Shop no 11 and 12, Shivteerth Nagar, Paud Road, Kothrud, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Ayush Multispeciality Hospital",
            "Address": "Harsh Viraj Building Main Road, Near Seva Vikas Bank, Nehru Nagar, Pimpri",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Bhagawati Netralaya",
            "Address": "1st floor,siddhi arcade,manik chowk,chakan,pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Bharati Hospital & Research Centre",
            "Address": "Katraj- Dhankawadi Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Bliss Hospital",
            "Address": "Gat No 284,Dehurasta,Moshi,Haveli,Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Brahmchaitanya Superspeciality Hospital",
            "Address": "Bhoir Colony, Near Ramkrishna More Sabhagruha, Opp Tata Moters Gate",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Care Multispeciality Hospital",
            "Address": "Kolte Arcade, Pune Nagar Road, Awalwadi Phata, Wagholi",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Chakan Criticare Hospital Pvt Ltd",
            "Address": "Gat No. 1152, Chakan Shikrapur Road, Opp Vishal Garden, Chakan",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Chavan Hospital",
            "Address": "Plot No.54 Near Vastu Udyog Corner, Stadium Road,",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Chellaram Diabetes Hospital",
            "Address": "Lalani Quantum, NH 4 Highway, Next To Crystel Honda, Bavdhan, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Chetna Hospital",
            "Address": "GP-116, Vrundavan Society Area, Near Rotary Club, MIDC, G Block, Chinchwad",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Chiranjivi Balrugnalay Hospital",
            "Address": "Sai Rachana Complex, 2nd Floor, Near S T Stand, Chakan",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Cimets Inamdar Multispeciality Hospital",
            "Address": "Survey No-15,Fatima Nagar Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Cloud Nine Hospital",
            "Address": "Plot # 65, CTS No. 3175, Shri Shivaji Co., Op Housing Society, JW Marriott Hotel, Senapathi Bapat Road, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Cloudnine Hospital (kids Clinic India Private Limited)",
            "Address": "Waves, Survey No. 212/1B, Plot no. 59 C, Prathamesh Society, Kalyani Nagar, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Ct Nursing Home",
            "Address": "Shree Ram Pride, Madhav Nagar, Dhanori, \n Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Dada Laser Eye Institute",
            "Address": "Office no 202, 2nd floor, Gulmohar apartment, East Street, Camp, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Deenanath Mangeshkar Hospital & Research Centre",
            "Address": "Near Mhatre Bridge, Erandawane",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Deoyani Multispeciality Hospital",
            "Address": "Plot No 121 Lane No 4, Dahanukar Colony Kothrud",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Deshpande Eye Hospital And Laser Centre",
            "Address": "3/4,Anamika,Near Kothrud Depot,Paud Road,Left Bhusari Colony,Kothrud,Pune - 411038. , Bhusari Colony , Pune City , Maharashtra",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Dhakne Hospital",
            "Address": "Shop No 6 ,7, Near Bank Of India, Shantai City Centre, Station Road, Talegaon Dabhade",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Dhanashree Hospital",
            "Address": "GP-66, G Block, MIDC, Opp. Kamalnayan Bajaj School",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Dr Agarwal Eye Hospital",
            "Address": "No.127, Plot No.7, Lotus Court Iti Road Aundh Near Tanishq At, Iti Road, Sahil Park, Sanewadi, Aundh, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Dr Chakne Eye And Children Hospital",
            "Address": "204, Ganeshame, Near Gold Gym, Pimple Saudagar.",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Dr D Y Patil Medical College Hospital & Research Centre",
            "Address": "Sant Tukaram Nagar Pimpari",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Dr Gaikwad Diabetes Centre",
            "Address": "Ananda Heights Pune Nashik Highway Bhosari",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Dr Gogate Eye Clinic",
            "Address": "Tadiwala road Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Dr Khade Superspeciality Hospital",
            "Address": "Bija Complex, 1st Floor, Manik Chowk, Near ST Stand, InOpposite Hotel Savera, Talegaon Chowk, Chakan",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Dudhabhate Netralaya And Retina Center",
            "Address": "Kudle Patil Estate,Flat No.09,S.No 15/2/A,First/Still Floor,Sinhgad Road,Hinge Khurd,Manikbag, Pune-411051",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Eon Hospital",
            "Address": "52/1/1, Shreeram Nagar Society, Kharadi, Chandan Nagar, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Eras Bharti Hospital",
            "Address": "Ganesham Commercial A Building 1St,3Rd 4Th Floor, Near Govind Yashada Chowk, Brt Link Road,",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Flora Multi-specialityhospital",
            "Address": "Janhavi Residency, Plot No 7A/2,Near Ravet Dmart, Sector No. 29, Ravet , Pradhikaran,Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Fortune Hospital [ A Unit Of Jeevanjyoti Health Services Pvt. Ltd.]",
            "Address": "Fortune Spaces, Near Maharishi School, Link Road, Rahatani, Kalewadi.",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Galaxy Care Laparoscopy Institute",
            "Address": "#25-A, Karve Road, Campus of Ayurved Ras-Shala, Near Garware College, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Ganga Nursing Home",
            "Address": "Pingle Wasti, Mundhawa Road, Near Munshi Chamber, Mundhawa, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Global Hospital",
            "Address": "577/2, Nr Dattawadi Police Chowly Off. Sinhagad Road, Dattawadi Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Gold Rush Hospital",
            "Address": "Sr. No. 11/9, Chandan Nagar, Hadapsar Bypass Road, Near Reliance Mart, Kharadi",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Golden Care Hospital",
            "Address": "S. NO. 117/3, Bhumkar wasti, Hinjewadi Road, Wakad",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Gunjkar Multispeciality Hospital",
            "Address": "Plot No.315, Sector No-18, Spine Road, Chikhali, Pimpri, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Hardikar Hospital",
            "Address": "1160/61, Ganeshkhind Road, Shivajinagar",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Harsh Hospital",
            "Address": "A-III Floor, Todkar Garden, Above South Indian Bank, Bibwewadi-Kondwa Road",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Healing Hands Clinic",
            "Address": "4th Floor Millenium Star Extension, dhole patil road, adjacent to ruby hall clinic, Pune-01 , Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Healing Hands Clinic Pvt Ltd",
            "Address": "101/102, Girme Heights, B Wing, Salunkhe Vihar Road, Wanowari, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Healing Hands Clinic Pvt Ltd",
            "Address": "1st floor, Crystal Empire Building, Opposite Hotel Sadanand, Baner, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Healing Hands Clinic Pvt Ltd",
            "Address": "1st Floor, Gokul Complex, Near HDFC Bank, Wage Vasti, Nashik - Pune Hwy, Nashik Road, Chakan, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Healing Hands Clinic Pvt Ltd",
            "Address": "Wing A, 2Nd Floor, Shop No-201, Premier Plaza, Above Mcdonald, Adjacent To Big Bazaar, Chinchwad, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Helios Bharti Hospital",
            "Address": "Sr No. 111 CTC No 7891 Main road kalewadi, Near Jyotiba Mangal Karyalaya & PCMC Bank.",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Hi Tech Eye Surgery & Laser Centre",
            "Address": "Office No 1 & 2, 1st Floor, Parmar Pawan, Opp. Rupee Bank, Main Kondhwa Road, Kondhwa",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Icon Hospital",
            "Address": "Tower line Corner, Talawade Road, Triveninagar",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Imax Multispeciality Hospital",
            "Address": "Opp Kesnand Phata Sant Tukaram Nagar Wagholi",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Imperial Multispeciality Hospitals",
            "Address": "Pingale Pride, Near Radha Swami Asham, Chikhali, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Indrayani Hospital",
            "Address": "Indrayani Nagar Talegaon Varale Road,Varale Ta Maval,Dist Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Indrayani Hospital & Cancer Institute",
            "Address": "Alandi Chakan Road, Alandi Devachi, Tal-Khed, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Inlaks And Budhrani Hospital",
            "Address": "7-9 Koregaon Park",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Jaihind Hospital",
            "Address": "2293/1/3, Abhishek Building, Chakan Shikrapur Road, Chakan",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Jeevan Jyoti Hospital",
            "Address": "Mhaske Complex, Opposite Shivratna Hotel, Kalewadi, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Jeevan Jyoti Hospital",
            "Address": "GK Saphire,Konkane Chouk,Rahatani,Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Jeevan Rakshak Hospital",
            "Address": "S.N.1041/2335, Khandave Nagar, Pune Nagar Road, Wagholi, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Jeevan Sparsh Eye Hospital",
            "Address": "Guruganesh Society, Gangadham Chowk, Market Yard Road, Bibvewadi, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Jehangir Hospital",
            "Address": "32, Sasson Road",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Jivanrekha Multispeciality Hospital",
            "Address": "Sr.28 Prabhu Complex,In front of Repulic School, Old Mumbai Pune Highway, Dehu Road",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Joshi Hospital",
            "Address": "778, Shivajinagar Opp Kamala Nehru Park",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Jupiter Hospital",
            "Address": "Near Prathamesh Park, Baner Pimple Nilakh Road, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "K E M Hospital",
            "Address": "489 Sardar Moodliar Road",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "K K Care Hospital",
            "Address": "A/p- Charholi Bk, Vadmukhwadi, Padmavati Nagri, Padmavati Complex, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Karne Hospital Pvt Ltd",
            "Address": "Opp Laxminarayan Theatre Nr. Swargate",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Kedarnath General Hospital",
            "Address": "Sr No 42/43, Tirupati Complex, 1st Floor, Vishrantwadi, Opp Mahalaxmi Vihar, Pune-Alandi Road, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Kg Anand Hospital",
            "Address": "Survey No.2,Office No.15 Mandar Society, Main Road, Dhankawadi, Near Dhankawadi Bus Stop , Pune , Pune , Maharashtra",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Khaire Hospital",
            "Address": "Chapekar Chowk, Station Road, Chinchwad",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Kohakade Hospital",
            "Address": "Plot no 21, Sr no 49/2, C/o Dr Kohakade Next to Reliance fresh rupee bank, Pune-ahmednagar road",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Krishna General Hospital",
            "Address": "2, Anjanwel, Prashant Soc, Poud Road",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Life Point Multispeciality Hospital Pvt Ltd",
            "Address": "S No 145/1 Mumbai Bangalore Highway Near Hotel Sayaji Wakad",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Lifecare Hospital",
            "Address": "Bank of Maharashtra Opposite , Mahalunge-Ingle Chakan Talegaon Road, Tal -khed,Mahalunge Ingale,Khed",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Lifecare Multispecility Hospital",
            "Address": "3rd floor D wing , 18 Longitude , Near 18 Latitude Mall Latitude Road , Punawale , Thathawade , Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Lifeline Hospital",
            "Address": "Gat No 648/2 Near Shrensh Garden Keshnand Phata Pune Nagar Road Wagholi",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Lokmanya Hospital",
            "Address": "Unit 2- Sec. No. 24 PCNTDA, Pradikaran, Nigdi",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Lokmanya Hospital",
            "Address": "Unit 1 - Gawade Colony, Chinchwad",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Lokmanya Hospital - Special Surgery",
            "Address": "CTS, 970, FP 402/A TP Scheme no.1, Senapati Bapat Road, Gokhgalenager, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Lokmanya Hospital Pvt Ltd",
            "Address": "484/6, Mitramandal Co Op Society, Aranyeshwar Road Parvati",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Madrewar Hospital",
            "Address": "Shubh Complex, Sector 1, Near Bank of Maharashtra & Vaishnomata Mandir, Above Axis Bank, Indrayaninagar, Bhosari",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Mahesh Smruti Multispeciality Hospital",
            "Address": "SR.No.77, Annasaheb Magar, Near Bhaji Mandai, Pune -Solapur Road, Manjari.",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Mai Mangeshkar Hospital",
            "Address": "117/1, Waraje, Next to BAIF, Mumbai- Bangalore Highway",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Manipal Hospital",
            "Address": "22/2A , Near Nyati Empire, Kharadi",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Manipal Hospital Pvt. Ltd",
            "Address": "Sr. No 111/11/1 Baner Mahalunge Road, Baner Pune,Baner Gaon,Pune City,Maharashtra",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Mankikar Hospital",
            "Address": "DM Chamber, Above Rupee bank, Pune Nashik Road",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Mauli Hospital",
            "Address": "Shantai City Centre, Near Nagar Parishad, Talegaon Dhabade, Tal- Maval",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Max Neuro Hospital Private Limited",
            "Address": "Opp Alfalaval Mumbai Pune Highway Kasarwadi",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Medicover Kle Hospital",
            "Address": "Sector No: 1, Indrayani Nagar,Bhosari Pimpri Chinchwad,Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Medilife Multispeciality Hospital & Icu",
            "Address": "New Jotiba Temple Alphoosa School Road, Nijay nagar Kalewadi Petrol Pump",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Metro Hospital",
            "Address": "Surve No. 42/2, Dwarka Sai Commercial Building, Godambe Chowk, Rahatni , Pimpari, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Metro Superspeciality Hospital And Trauma Centre",
            "Address": "Shantai Heights, Shivaji Putalyajaval,Wagholi Tal-Haveli, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Moolanis Eye Care Centre",
            "Address": "103 Pundol Apartment 160 Mg Road",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Moraya Hospital",
            "Address": "Gauri Appartment Pimple Gurav Dapodi Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Moraya Multispeciality Hospital",
            "Address": "Power House Chowk, Opposite PMT Bus Stop, Chinchwad",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Morya Multispeciality Hospital",
            "Address": "62/4A, Anudatta Commercial Complex, Opp. Abhiruchi City-Pride Mall, Sinhgad Road, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Motherhood Hospital ( A Unit Of Rhea Healthcare Pvt Ltd)",
            "Address": "S.No. 13/1A/1E/2 Mundhwa Kharadi Bypass Road, Ground Floor, Near Hyundai Showroom, Kharadi, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Motherhood Hospital Lullanagar Pune ( A Unit Of Rhea Healthcare Pvt Ltd)",
            "Address": "Sr. No.3491 ,Plot 80 ,Munjeri, Near Bharat Petrol Pump ,Opposite Mount Carmel School ,Lullanagar, Wanowarie, Pune.",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "N M Wadia Institute Of Cardiology",
            "Address": "32, Sassoon Road",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "National Hospital",
            "Address": "Big D building, Opposite To Konark E square, Kondhwa Main Road, Khondhwa KH, Pune City",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "National Institute Of Ophthalmology",
            "Address": "1187/30, Off Ghole Road, Nr Phule Museum,",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "National Institute Of Ophthalmology",
            "Address": "376 Sindh Society, Bremen Square, Ganesh Khind Road, Aundh",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Neo Vision Eye Care And Laser Center",
            "Address": "202, 2nd Floor, Lingfield Plaza Clover Village, Above Reliance Fresh, Salunkhe Vihar Road, Wanowarie, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "New Life Child Care Clinic & Hospital",
            "Address": "Opposite Mm School, Above Shagun Plywood, Main Road, D Mart, Kalewadi",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Niramaya Hospital",
            "Address": "S No 4742, Behind Jaihind Petrol Pump, Next to Chinchwad (E) Post Office, Chinchwad Post",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Noble Hospital",
            "Address": "153, Magarpatta City Road",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Ojas Multispecialty Hospital",
            "Address": "Sr No. 203/1 D.Y. Patil College Ravet Road, Near Bhondave Corner, Ravet",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Ojas Womans Superspeciality And Fertility Centre",
            "Address": "730/01,Plot No. 2,Bakori Road,Opp. BJS Foundation.",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Om Hospital",
            "Address": "Vetalbaba Chowk, Shivajinagar",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Om Hospital",
            "Address": "Hutatma Chowk, Alandi Road,Bhosari",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Omkar Accident Hospital",
            "Address": "Pune naik Highway talegaon chowk Chakan taluka khed",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Omkar Eye Hospital",
            "Address": "2nd Floor, Navkar Commerce Centre, Behind Kalika Mata Mandir, Above Bank of Baroda, Link Road,Tanaji Nagar, Chinchwad.",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Onp Leela Hospital",
            "Address": "Rose Icon, Survey No. 72, BRT Road, Pimple Saudagar",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Orchid Speciality Hospital",
            "Address": "L-square, Porwal Road, Sr.No.282/3/3, Off Dhanori Jakat Naka, Dhanori, Lohgaon",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Oyster & Pearl Hospital Pvt Ltd Run By Phadnis Clinic Pvt Ltd",
            "Address": "1671-75, Ganeshkhind Road, Behind Hotel Pride Executive",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Panortho Multispeciality Hospital",
            "Address": "01- Bldg, Riddhi Capita, Plot No. F11, Sect. No.26 A.D.C.PCNTDA, Nigdi, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Paranjpe Eye Clinic & Surgery Center",
            "Address": "894, Venkatesh Apt, Off F C Road, Deccan Gymkhana, Goodluck Chowk",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Pataskar Hospital",
            "Address": "Jay Ganesh Samrajya, C Wing, 12, Near Panjarpol, Pune Nashik Highway, Bhosari",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Patil Eye Hospital",
            "Address": "1st Floor, C-Wing, Jai Ganesh Samarajya, Panjarpol, Pune Nashik Road",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Patil Hospital",
            "Address": "Main Road Vitthalwadi Akurdi Pune Laxman Sondkar Path",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Pawana Hospital",
            "Address": "Somatane Phata Near Old Pune Mumbai Highway Tal Maval",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Pawar Hospital",
            "Address": "49/22, Balaji Nagar,Dhankawdi",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Pbmas H V Desai Eye Hospital",
            "Address": "H V Desai Eye Hospital,S. No.93,Tarwade vasti Mohammadwadi",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Pharande Eye Hospital",
            "Address": "1St Floor Anant Appt Near Santosh Hall Anandnagar Singhgad Road Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Phoenix Hospital",
            "Address": "Opp Rhythm Society Kalewadi Phata Near Suzuki Shoroom Tergaon Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Pioneer Hospital",
            "Address": "Somatane Phata Diamond Commercial Complex NR Old Mumbai Pune Highway",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Pooja Hospital",
            "Address": "Alandi Road, Opp HP Petrol Pump Bhosari",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Poona Eye Care",
            "Address": "Lajwanti Apt, Opp. Sonal Hall, Next to Sonchapha Jewellers, Karve Road, Deccan Gymkhana, Pune.",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Pulse Multispeciality Hospital",
            "Address": "S. No. 66/1, Lande Building, Tathawade Chowk, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Pulse Multispeciality Hospital",
            "Address": "Sr. No 51/7/B/1 1st Floor Vishwa Arcade, Opp Deccan Pavillion Hotel, Mumbai Bangalore Highway, Narhe Ambegaon",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Punawale Multispeciality Hospital",
            "Address": "Alpha Hieghts,Surve No 11/2,Punawale,Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Pune Netralaya",
            "Address": "Flat No. 3, Krishnai Appartment, Opp. Lee Showroom, Near Monginis, Parihar Chowk, Aundh, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Ranka Hospital",
            "Address": "157/5, Mukund Nagar, Opp. Nirman Bhavan, CPWD",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Rao Nursing Home",
            "Address": "RNH Aaranyeshwar Corner Bibvewadi Near Big Bazar",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Remedy Hospital",
            "Address": "228, Ramanand Complex, Poona Sholapur, Road, Near Jenaseva Bank , Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Rising Medicare Hospital",
            "Address": "Survey No 4, Goodwill Icon, Hissa No 1, Behind Radission Hotel, Kharadi Bypass Road, Kharadi",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Rode Hospital",
            "Address": "Sai Park, Sr No.84, Dighi Bhosari Road, Dighi, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Ruby Hall Clinic",
            "Address": "40, Sassoon Road",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Ruby Hall Clinic Hinjwadi",
            "Address": "Plot No 33, Phase 1, Rajeev Gandhi Infotech Park",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Ruby Hall Wanowarie",
            "Address": "Wanowarie Azadnagar Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Sabales Superspeciality Hospital",
            "Address": "Saivenkata Trade Centre, Pune Nashik Highway, Bhosari.",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Sahyadri Hospital",
            "Address": "Survey No 148/4A B Opposite Vanaz Eng. Paud Road,Kothrud",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Sahyadri Hospital",
            "Address": "Plot no 13, S No 573, City No 281, Swami Vivekanand Marg, Next to Suhaag Mangal Karyalay, Bibvewadi, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Sahyadri Speciality Hospital",
            "Address": "Plot No 30, C, Lane No 1, Prabhat Road,erandawane,Deccan",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Sahyadri Speciality Hospital",
            "Address": "Sr.No. 185A,199,200A-B,201 Shashri Nagar Yerawada Pune Nagar road",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Sahyadri Super Specialty Hospital",
            "Address": "S N 163, Bhosale Nagar, Hadapsar",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Sai Ananya Eye And Heart Care Center",
            "Address": "310, 404 Fortune Building, Shivar Chawk, Opp. Rainbow Plaza, Pimple Saudagar, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Sai Jeevan Hospital",
            "Address": "Plot no. 13, gate no. 323, Shirgaon road, Somatane, Tal. Maval, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Sai Shradha Health Care Center",
            "Address": "Silvar Mist Housing Soc,Porwal Road,Lohgaon Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Sai Shree Orthopaedic Super Speciality & Joint Replacement Center",
            "Address": "251/252, Opp BSNL Tel Exchange, Near Parihar Chowk, Near DAV Public School, Aundh",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Sai Sneh Hospital & Diagnostic Centre Pvt Ltd",
            "Address": "S.No. 2711, Pune Satara Road, Opp PMT Bus Stand, Katraj, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Sai Spandan Hospital",
            "Address": "Shivam Complex, Near Sadhana Bank, Hadapsar, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Sai Speciality Hospital",
            "Address": "Shivam Market No 3 Akurdi Chikhli Rd Sane Chouk,Chinchwad,Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Saidham Hospital",
            "Address": "Opp Maharashtra Bank, Landewadi Chowk, Bhosari, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Sainath Hospital",
            "Address": "S 4 Pune Nashik Highway Moshi Pradhikaran Opp Gandharva Nagari",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Saiseva Hospital",
            "Address": "1st Floor, Kazi Complex, Mahatma Phule Chowk",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Samarth Hospital",
            "Address": "Shantai City Centre, Near Nagar Parishad, Talegaon Dabhade",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Sancheti Institute For Orthopaedics & Rehabilitation",
            "Address": "16,Thube Park ShivajiNagar",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Sant Tukaram Maharj Multispeciality Hospital",
            "Address": "SR.No:128, Malwadi, Dehugaon, Near Krushnakunj Society, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Sarvadnya Multispeciality Hospital",
            "Address": "Sable Heights ,Gate No-284, Bhartmata Chowk, Dehu Road, Moshi, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Sayali Nursing Home",
            "Address": "NDA Road, Near Uttamnagar Telephone Exchange,Kondhwade Dhawade, Uttamnagar",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Seva Hospital",
            "Address": "Priyadarshaninagar,Old Sangvi,Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Sevadham Hospital",
            "Address": "Samsan Nagar, Talegaon Station",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Shaishav Childrens Hospital And Research Centre Pvt Ltd",
            "Address": "695, A, Sadashiv Peth, Budhi Vikash Building, Opp.",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Shashwat Hospital Shashwat Health Services Pvt Ltd",
            "Address": "22, Happy Colony, Kothrud",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Shivam Multispeciality & Accident Care Centre Pvt Ltd",
            "Address": "Near DSK Dream City, Opp. Manali Resort, Next to Loni Kalbhor Toll Naka, Pune Solapur Highway, Fursungi, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Shivkrupa Multispeciality Hospital",
            "Address": "Chatrapati Shivaji Chowk, Near Bus Stand, Dehu Alandi Road, Chikhali",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Shree Balaji Eye Hospital",
            "Address": "114 Adinath Soc- Pune-Satara Road",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Shree Hospital",
            "Address": "Sidharth Mension Opp Agakhan Palce Nagar road Yerawada",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Shree Hospital Criticare & Trauma Center Pvt Ltd",
            "Address": "S.No.7/3/B, Gulmohar Society, Kharadi",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Shree Minerva Hospital And Research Centre",
            "Address": "NDA Road, 13/1, Ingale Colony, Shivane, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Shree Multispeciality And Icu",
            "Address": "Gat No 284, Dehuroad, Moshi, Tal Haveli, Dist Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Shree Samarth Hospital",
            "Address": "227, Rasta Peth, Omkar Apartment, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Shreekalyani Nursing Home",
            "Address": "S. No. 281, Opp. Khalsa Dairy, Lohagaon-Dhanori Road, Lohagaon",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Shri Nageshwar Surgical And General Hospital",
            "Address": "Office no-103,105-109, Deep Rachana Complex, Near New PCMC School, Moshi Chowk, Moshi, Pune, Markal, Khed",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Shwas Multispeciality Hospital",
            "Address": "A/P Chakan Meelan Karwadi Balajinagar Above Ratnakar Bank Mega Center Complex, Medankarwadi,Tal Khed",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Silver Birch Multispeciality Hospital",
            "Address": "S.No.74/6, Near Maruti Mandir Last Bus Stop, Raykarmala, Dhayri, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Sparsh Hospital",
            "Address": "Sr No 353, Emerald Building, Parandwadi Road, Somatane Phata, Maval, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Sudarshan Eye Hospital",
            "Address": "M. No. 2507, Bramhan Ali, Manik Chowk, Chakan , Khed.",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Surya Hospital",
            "Address": "Om Sai Market, B Wing, Sector 20, Krishnanagar Chowk, Akurdi Chikhli Road, Chinchwad, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Surya Mother And Child Superspeciality Hospital",
            "Address": "Sr No 8, Devi Yash, Near Wakad Octroi Naka,Hinjewadi Fly Bridge, Wakad",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Surya Sahyadri Hospital",
            "Address": "1317 Kasba Peth Agarwale Road",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Unicare Hospital",
            "Address": "Dehu Alandi Road, Near Jain Mandir, Dehu, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Unicare Hospital",
            "Address": "Chakan Talegaon road Nanekarwadi Chakan Tal- Khed",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Ushakiran General Hospital",
            "Address": "S.No. 229/1st, Kamdhenu Estate, Hadapsar",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Varad Hospital & Critical Care",
            "Address": "Shakuntal, Maalwale Nagar no. 2, Kiwale-nigdi BRT road, Kiwale, PCMC PUNE , Ravet , Haveli , Maharashtra",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Vatsalya Hospital",
            "Address": "khinvsara trade centre, 1st and 2nd floor, datta mandir rd, wakad , Thergaon , Pune City , Maharashtra",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Vatsalya Mother And Child Care Hospital",
            "Address": "Vatsalya Hights, Near Shivaji Chowk, Landewadi, Bhosari",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Vedant Multispeciality Hospital",
            "Address": "GP/83, G Block, Opp. to Rotary Club, MIDC, Chinchwad, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Vighnaharta Hospital (unit Of Nirvighnam Healthcare & Research Centre)",
            "Address": "Plot no 5, Mahesh Society Chowk, Opposite Petrol Pump, Bibwewadi, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Vimal Multispeciality Hospital And Research Center",
            "Address": "Suyal Palace, S. No. 281, No 3/5, Lohgaon, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Vinod Memorial Multispeciality Hospital",
            "Address": "CTS No 28, S No 113 Alandi Road Vishrantwadi",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Vishwaraj Hospital",
            "Address": "Pune- Solapur Road, Near Loni Railway Station, Rajbaug, Loni Kalbhor, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Vital Multispeciality Hospital",
            "Address": "Plot No 127, CTS No 6392, Udyam Nagar,Near Anna Saheb MagarStadium, New Telco Road, Pimpri",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Wachasunder Hospital",
            "Address": "161-A, Modibaug, Shivasagar Housing Society, Ganehskhind road, Shivajinagar",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Yash Hospital",
            "Address": "Sr.No. 168/10+11, Behind Sadhana girls high school, Keshav chowk, D.P. Road, Malwadi, Sadesatara Nali, Hadapsar",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Yashorahi Multispeciality Hospital",
            "Address": "NDA Road, Shivane, Pune",
            "CITY": "Pune"
        },
        {
            "HOSPITAL NAME": "Aadhar Multispeciality Hospital & Icu",
            "Address": "1st Floor, Gurusharnam Complex, Vishrali Naka, Market Yard Road, Old Panvel",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Aakanksha Maternity & Nursing Home",
            "Address": "301/401/501, Navkar Bhavan, CTS 2532/1, Near Ram Mandir,Road No.7, Daulat Nagar, Borivali (E), Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Aarav Eye Care And Retina Centre",
            "Address": "No 5 And 14 Bhairav Residency, Kanakia Road, Near Cinemax Theatre , Mira Road East, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Aarogya Multispeciality Hospital And Trauma Center",
            "Address": "Herambh Heights, Old Mumbai Pune Highway, Kharegaon Naka, Kalwa",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Aarogyadhan Hospital",
            "Address": "Rajdhani Apartment, Kishan Nagar Road 2, Wagle Estate, Thane (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Aarogyam Multispeciality Hospital",
            "Address": "Renuka Apt Opp Mangala High School, Near Thane railway Station Kopari (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Aarogyam Multispeciality Hospital & Icu",
            "Address": "Shripat Smruti Bulding 1st Floor star Colony In front of bank of baroda Dombivali (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Aarush Ivf And Endoscopy Centre",
            "Address": "Prathmesh Harmony, Gautam Buddha lane, Opp Orlem Church, Off Marve Road, Malad west, Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Aashapuri Hospital",
            "Address": "A-101 To 104, Chamunda Apartment, Sangodkar Nagar, Ravalpada, Off.Western Express Highway, Dahisar (E) Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Aashirwad Hospital",
            "Address": "pune link road ,tisgoan,kalyan",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Aastha Health Care",
            "Address": "Mulund Colony, Off LBS Rd, Opp Chheda Petrol Pump",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Aastha Hospital",
            "Address": "65, Balasinor Society, S.V.Road, Opp Fire Brigade, Kandivali W",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Aastha Maternity And Nursing Home",
            "Address": "101, 1st Floor, Bhoomi Residency, Vaishat Pada-2, Kurar Village, Malad (E), Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Aastha Nursing Home",
            "Address": "10, Narsimha Niwas, 2nd Floor, Near Daud Baug, 126 JP Road, above Punjabi Ghasitaram Halwai, Andheri West , Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Aayush Hospital",
            "Address": "Bldg No. E-2, 2nd & 3rd Floor, Radha Nagar Shopping Complex, Radha Nagar, Opposite Police Chowki, Khadakpada, Kalyan (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Aayush Multispecialty Hospital & Advanced Laparoscopy Centre",
            "Address": "1st Floor, Marigold Apt. Opp Nitin Co & Honda Showroom, Panchpakhadi, Thane (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Abhinav Maternity & Nursing Home",
            "Address": "A-01, Ground Floor, Chawre Arcade, Station Road, Nalasopara (W), Palghar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Abhishek Nursing Home",
            "Address": "Jagriti CHS, Nr Maratha Mandir Co-op Bank, Bhatwadi",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Abhyuday Maternity Home",
            "Address": "Prerna Building No.1, Opposite Octroi Naka, Virat Nagar, Virar (W), Palghar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "A-care Orthopedic & General Hospital",
            "Address": "G-1,Giriraj Tower,Sai Baba Nagar,Opp.Indian Oil Petrol Pump,Bhayander Mira Road Highway,Mira-road(E).",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Acharya Shri Nanesh Hospital",
            "Address": "Plot No 34 37, Sector 8A, Artist Colony, CBD Belapur",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "ACME Hospital",
            "Address": "3RD AND 4TH FLOOR, SIGNATURE BUSINESS PARK, POSTAL COLONY, NEAR MONO RAIL STATION, CHEMBUR",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Aditi Hospital",
            "Address": "1st Floor, Param Ratan, Opp. Post Office, Jakeria",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Aditi Hospital",
            "Address": "185 - R, Alhad, P.K Road, Above Corporation Bank Mulund (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Aditya Nursing Home",
            "Address": "Plot No.27, Kansai Section, Near Gajanand Maharaj Mandir, Ambernath",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Adityavardhan Hospital",
            "Address": "Sadichha Tower, 1st Floor, Old Bombay Agra Road, Next to Royal, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Advanced Eye Hospital & Institute",
            "Address": "30 the abbaires Sector 17 palm beach road sanpada",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Advanced Orthopaedic & Joint Replacement Centre",
            "Address": "Pasaydan,near TMC Building,Panch Pakhadi,Thane(W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Aggarwal Eye Hospital",
            "Address": "102/5, Ketayun Mansion, Shahaji Raje Marg, Above T",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Agrawal Eye Hospital",
            "Address": "1st floor, maharaja apt, Malad (W), S V Road, opp. malad telephone exchange",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "All Cure Super Speciality Hospital",
            "Address": "1st Floor, Near State Bank of India, Kesar Plaza, Caves Road, Station Road, Jogeshwari (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "All For Eyes Eye Hospital",
            "Address": "B2/18/1, Sector 16, Vashi, Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Am Pm 24 Hrs Hospital",
            "Address": "2nd Floor, Om Supreme, Near D Mart, Above Dominos, Old Bail Bazar, Opp Hp Petrol Pump, Kalyan(W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Amey Multispeciality Hospital",
            "Address": "1st Floor,Skylon Building, Chakki Naka, Netavali Village, Kalyan (E), Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Amrut Hospital & Endoscopy Clinic",
            "Address": "Dr Rajendra Prasad Road, Tilak Nagar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Amruta Nursing Home",
            "Address": "206/ 207, Landmark Arcade, Louiswadi Service road, Thane (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Anand Maternity And Nursing Home",
            "Address": "135 new Link Road, Near Sharda Gram, Dahisar Subway, Dahisar (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Anand Netralaya",
            "Address": "Office No. 2, Charbhuja Apartment, Opposite disha hotel, Kharodi Naka, Bolinj, Virar (W), Palghar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Ananda Hospital",
            "Address": "1st & 2nd Floor, Krimson Amboli Park Bldg, Next to Corporation bank, Andheri (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Anideep Eye Hospital And Institite Pvt Ltd",
            "Address": "Plot no. 414, Next to Golden Tobacco Compound,",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Anil Eye",
            "Address": "The signature, Ganesh Mandir Road , opp Dedhia Bhavan Dombivli ( East )",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Anish Hospital",
            "Address": "3/4 Grd Floor Piyush Co Op Hsg Pandurang Wadi 1st Lan Manpada Road Dombivali (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Ankur Multispeciality Hospital",
            "Address": "Patel Plaza, Ground floor, Near Ajit Scan Center, Kalyan (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Ankur Paediatric Hospital & Nicu",
            "Address": "#204, Thakur Tower, Raja CS Marg, Virar (W), Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Ansh Hospital",
            "Address": "Shop No1T07,1 St Floor,Visheshwar Tower, Annapurna Estate Indralok Phase-10, A-Wing, Navghar, Bhaiandar(East)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Anu Nursing Home",
            "Address": "1St Floor,Royal Residency Park,Next To Commissioner Bunglow, Santoshi Mata Road Nsyndicate Kalyan West Thane.",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Apex Hospital",
            "Address": "Janki Smruti Building, Gupte Road, Dombivali W, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Apex Hospital",
            "Address": "Shiv Tirtha Apartment parnaka Kalyan",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Apex Hospitals",
            "Address": "Vaishali Heights, Near Standard Chartered & Thane Sahakari Bank, Chandavakar, Borivali (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Apex Hospitals Mulund",
            "Address": "Veena Nagar Phase -II, Near swapna nagari, Model town and tulsi pipe line, mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Apex Kidney Care",
            "Address": "101 Eden Rose Complex Beverly Park Opp Cinemax Prime Multiplex Mira Road (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Apex Kidney Care",
            "Address": "Gaurav Plaza Annex 1st Floor RRT Road Mulund (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Apex Kidney Care",
            "Address": "C/o Sushrut Hospital Swastik Park 2nd Floor 365 Chembur ( E )",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Apex Multispeciality Hospital",
            "Address": "1st Floor, Krishna Aracade, Plot No, 3, Sector 11, Taloja, Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Apex Multispeciality Hospitals",
            "Address": "Off Western Express Highway, Dattapada Road, Next to Susawat Restaurent , Borivali East - 400066",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Apex Superspeciality Hospitals Pvt Ltd",
            "Address": "Babhai Naka, L T Road, Besides Punjab and Sindh Bank Opp Damodar Chemist, Near Babhai Fish Market, Borivali (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Apollo Childrens Hospital",
            "Address": "Jay-Vijay Nagar, Opp Saraswat Bank, 100 ft link Road, Nalasopara (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Apollo Hospital Enterprise Limited",
            "Address": "Plot no.13, Parshik Hill Road, Off uran Road, Sector 23, Opp Nerul Wonders Park",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Apollo Spectra Hospitals A Unit Of Apollo Specialty Hospitals Pvt Ltd",
            "Address": "156 Famous Lab, M M Malviya Road Behind Everest Bldg,Tardeo",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Apollo Spectra Hospitals A Unit Of Apollo Specialty Hospitals Pvt Ltd",
            "Address": "Near Sunder Baug Opp Panal Bus Depot Borla Village",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Apple Hospital",
            "Address": "Shree Gurudutta Complex Co-op Society, Plot NO.44,45 and 46 , Sector 8, Airoli",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Apple Hospital",
            "Address": "GROUND FLOOR SANVI CHS GHANSHAM GUPTE RD DOMBIVLI WEST",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Apple Hospital Nx",
            "Address": "SPECIA ARACDE 1ST AND 2ND FLOOR ABOVE TIP TOP PLAZA DOMBIVLI EAST",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Arihant Eye Care Hospital",
            "Address": "B - 104, Gomti Apts, Above Mandpeshwar Hospital, Borivali (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Arogyadham Multispecilaity Hospital",
            "Address": "Ground Floor, Janki Tower, Mumbai Pune Road, Kalwa(W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Arth Hospital",
            "Address": "Rashmi Villa No.1, Near Agarwal Circle, Vasai-Nallasopara Link Road, Vasai (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Aryan Child Care And Nursing Home",
            "Address": "RNA Complex, Borad Way Avenue, Near Jagged Circle, Next to Jammu Kashmir Bank, Mira Road East.",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Aryan Eye Clinic & Day-care Surgery Centre",
            "Address": "202, Vinita Aptt, Nr Malhar Theatre, Nr Vodafone Office, Gokhale Road, Naupada, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Asha Hospital",
            "Address": "1st Floor, Rajlaxmi Complex, Thane Bhiwandi Road, Opp Jai Mata Di Compound, Kalher",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Asha Hospital & Iccu",
            "Address": "101 to 103, Ground Floor, A Wing, Asiatic Society, Plot No. 134, Near Sahakar Bazaar, Sector 4, Airoli",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Asha Multispeciality Hospital",
            "Address": "Plot No. 10, Sector -16, Near D-Mart , Roadpali Kalamboli -Panvel",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Ashirwad Critical Care Unit & Multispeciality Hospital",
            "Address": "1st floor Meghdoot apartment, Opposite Kaidas Auditorium, Junction of PK Road and Ambedkar Road Mulund West 400080",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Ashirwad Critical Care Unit And Multispeciality Hospital",
            "Address": "Tilok Heights, 1st and 2nd floor, Above kotak Mahindra Bank, L. T. Road, Mulund (E), Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Ashirwad Heart Hospital",
            "Address": "1, Vivke, Tilak Road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Ashirwad Maternity & General Hosital",
            "Address": "Samir Apartment, Sector K-7, (A), Jesal Park, Bhayander (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Ashirwad Maternity & Nursing Home",
            "Address": "E-5, HIGHLAND PARK, GGS ROAD, MULUND COLONY, MULUND (w), MUMBAI-400082",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Ashirwad Nursing Home",
            "Address": "Rajgir sadan ground Floor laxmi bag Opp Sion railway St. Sion W",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Ashirwad Nursing Home",
            "Address": "C Wing, Seema Complex, Tulinj Road, Moregaon Talao",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Ashok One Hospital",
            "Address": "Sadguru Heights -1, Ashok One Dahisar East, Above TJSB Bank, Dahisar (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Ashtavinayak Hospital",
            "Address": "Plot - 10, Sector 6, Khanda colony, opp khandeshwar lake",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Ashwini Hospital",
            "Address": "Arm, Arcade, Sector-7, Nerar Kendriya Vihar Kharghar Navi Mumbai , Kharghar , Panvel",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Ashwini Hospital & Iccu",
            "Address": "Lalan Building (Annexe), 1st Floor, P. K. Road, Mulund (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Asian Eye Institite And Laser Center",
            "Address": "Puspa Plaza, First floor, Above Snehanjali electronics, Opp Raliways Station , Virar East",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Asian Eye Institute & Laser Centre Pvt Ltd",
            "Address": "101, Satya Narayan Apt, Opp. G H School, Opp MG Road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Asian Institute Of Medical Science",
            "Address": "Plot no. 72 milap nagar, MIDC Dombivli, Milap nagar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Atharva Hospital",
            "Address": "1 Floor Saiprasad Bldg, Namdev Koli Marg",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Avadhoot Hospital & Iccu",
            "Address": "Plot No.29, Sec-19, Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Axon Hospital",
            "Address": "A-Wing, 5th Floor, Pranik Chembers, Sakinaka Junction, Andheri (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "B & J Multispeciality Hospital And Research Center",
            "Address": "Mhalsa Residency, Plot No. 6, Sector 36, Above state bank of india, Kamothe",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Badar Multispeciality Hospital",
            "Address": "339, Nesco House, Nawayat Nagar, Near Burhan Chowk, Nalasopara (W, Palghar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Badwaik Maternity General Hospital",
            "Address": "LBS Marg, Jain mandir , Bhandup (west)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Balajee Hospital",
            "Address": "Shah Arcade 3, Rani Sati Marg, Near Passport Office, Malad (E), Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Balaji Ent & Eye Hospital",
            "Address": "Bhagwatiashish appt, 1st floor, Murbad road ,Sindhigate, Near Janata bank Kalyan west",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Balaji Heart Hospital And Diagnostic Centre Pvt Ltd",
            "Address": "Victoria Road, Cross Lane III, Byculla (E), Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Balaji Hospital",
            "Address": "Ground floor, Shop No 1, Plot No 84, Sector 5, Near Canara bank, Ulwe, Raigad",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Balaji Hospital",
            "Address": "Sai Dham Apt, First Floor, Katemanavali, Near Ideal English School, Kalyan(E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Balaji Hospital",
            "Address": "Sonam Ekata tower 1st Floor, Golden Nest Phase VI, Mira-Bhayandar Rd",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Bethany Hospital",
            "Address": "Lok Upvan Phase II, Smt. Gladys Alvares Marg opp MA Niketan",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Bhagat Nursing Home Conducted By Sun Superspeciality Hospital",
            "Address": "Ganesh Nivas, 2nd Floor, Pai Nagar, Ganjawala Lane, Borivali(W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Bhagwati Healthcare Private Limited",
            "Address": "Plot No.2, Rameshwadi Badlapur (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Bhakti Vedanta Hospital",
            "Address": "Shristi Complex, Bhakti Vedanta Swami Marg, Near Dalmia School & Royal College,",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Bhalanetra Superspeciality Eye Hospital",
            "Address": "Commercial Unit 5-8, Sachdeva Complex, Jangal Mangal Road, Opp Old Post Office, Bhandup (W), Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Bhandup Criticare Hospital",
            "Address": "1St Floor, Sahjeevan Heights, Near Kokan Nagar Bus Stop, Beside Dmk Jaoli Bank, Kokan Ngr , Bhandup West , Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Bhanu Jyot Hospital Pvt Ltd",
            "Address": "Khushi Heights, 1st Floor,Pune Link Road, Opp, Nitinraj Hotel, Katemanivali, Kalyan (E), Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Bhavsar Nursing Home & Iccu",
            "Address": "Shop No 27/ 31, Ground Floor, Sky City Retail , Lake Road, Opp Bhandup Police Station, Bhandup (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Bijankur Multispeciality Hospital",
            "Address": "Near Anand Park, Navare Nagar Road, Ambernath ( E )",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Bilal Hospital & Icu",
            "Address": "First floor, A Wing, Royal Garden, Shimla Park, Kausa Mumbra Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Bombay Hospital & Medical Research Centre",
            "Address": "12 Marine Lines",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Cardinal Gracias Memorial Hospital Trust (dir Mailer)",
            "Address": "Bangali Naka Chandur P O Vasai West Dist Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Care Hospital",
            "Address": "1st Floor, A Wing, Annur Chs Ltd, Mhada Malwani, Malad West, Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Care Point Hospital",
            "Address": "Plot No 45 Sector-29 Dronagiri Node, Uran, Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Cellcure Cancer Centre Pvt Ltd",
            "Address": "S S House, 1st floor, Nehru Road, Vile Parle East. Mumbai 400057",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Cellcure Cancer Centre Pvt Ltd",
            "Address": "8th Floor, Silverpoint, Opp Sukhshanti Hospital, LBS Marg, Ghatkopar West. Mumbai 400086",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Cellcure Cancer Centre Pvt Ltd/ Mumbai Oncocare Centre Vile Parle",
            "Address": "A-4-5-6, Majatha Apartments, 2nd Floor, Gods Gifts Premises, S.V. Road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Cellcure Cancer Centre Pvt Ltd/ Mumbai Oncocare Centre Vile Parle",
            "Address": "2nd Floor Majithia Apartment, God\u2019s Gift Premises, S.V. Road, Vile Parle W, Mumbai-400056",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Chandraganga Spandan Hospital",
            "Address": "Chandraganga Apartments, VB Phadke Marg, Near Subway, Mulund (E) , Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Chirayu Children Hospital",
            "Address": "4th Floor, Neel Enclave Sector-9, Khanda Colony",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Chirayu Medical Foundation",
            "Address": "Ground Floor, Vimal Deeep ,Sarvoday paradies, Behind Balaji Hospital, Mira Bhayander Road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "City Criti Care Hospital",
            "Address": "First Floor, Subham Apartment, Above Bata Showroom, near Commissnor Bunglow, Kalyan West",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Cloudnine (kids Clinic India Pvt Ltd)",
            "Address": "Siddhachal building, Link Road, Malad(W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Cloudnine Hospitals (kids Clinic India Pvt Ltd)",
            "Address": "Plot no 17, Sector -19D, Palm Beach Galleria Mall, Vashi, Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Contacare Eye Hospital",
            "Address": "Ground Floor, Behind Reliance Trendz, Neptune Uptown Building, Opp Mulund Post Office , Netaji subhashchandra Road, Mulund (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Contacare Eye Hospital",
            "Address": "Mahavir Ratan Building, Plot no 13, Sec 12, Vashi, Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Contacare Eye Hospital",
            "Address": "Jaykul Arcade, Above Raymond Showroom, Second Floor, Dombivali (E), Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Contacare Eye Hospital",
            "Address": "Hariniwas Circle, Next to Giriraj Heights, LBS Road, Naupada, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Contacare Eye Hospital",
            "Address": "Ambrosia Building, DeviPada, Western Express Highway , Near Magathane Bus Depot, Borivali (E), Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Criti Care Iccu Multispeciality & Trauma Centre",
            "Address": "Plot No 2A Swami Sainath Complax Sector 16 Airoli New Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Criticare Asia Hospital",
            "Address": "Kohinoor City, Kirol Road, off LBS Marg,Kurla (west)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Criticare Lifeline Hospital",
            "Address": "Sector-19, Plot No-85, Near White Flag Building, Kamothe, Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Criticare Multi Speciality Hospital & Research Centre",
            "Address": "Plot No 38/39, Opp. Copper Chimney, Opp Juhu Supreme shopping centre,main gulmohar road, JVPD scheme,andheri",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Criticare Multispecialty Hospital & Research Center",
            "Address": "CTS 516, Telly Gally, Near SBI SME Branch, Andheri (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Criticare Superspeciality Hospital",
            "Address": "Opp: Nitin Company, E E Highway, Thane (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Crystal Care Hospitals",
            "Address": "Asangaon Shahapur Dist.Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Crystal Hospital Ltd",
            "Address": "Wamanrao Sawant Road, Near Ram Krishna Hotel, Maratha Colony, Dahisar (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Cuddles N Cure Children Hospital",
            "Address": "1st Floor, Janam Ashish Bldg, DD Road, Opp Mukhi Raj Hospital- Mulund (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Currae Gynaec Ivf Birthing Hospital - Patni Healthcare Ltd",
            "Address": "Rosa Vista Building, Opp Suraj Water Park,Ghodbunder Road, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Currae Speciality Hospital ( Unit Of Patni Healthcare)",
            "Address": "Near Big Bazar, Kapurbhudi Junction Thane (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dalvi Nursing Home",
            "Address": "Aditya Heritage Apartments Frist Floor Shop 1Bv.N Puran Marg, Chunabhatti(E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dandekar Hospital",
            "Address": "B-135, Kasturi Plaza, Manpada Road, Dombivali (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dandekar Hospital Panvel",
            "Address": "1st floor, Commercial premises, Vasant kunj Hsg. Society, Dr Ambedkar Road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dattatreya Nursing Home",
            "Address": "Opposite Bandhutva CHS, Datta Mandir Road, Near Patuck College, Vakola Bridge,",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Deepak Orthopedic & General Hospital",
            "Address": "Holy Complex, Near Sai Petrol Pump, Opposite White House Hotel, Mira-Bhayandar Road, Mira Road (E), Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dhanashri Hospital",
            "Address": "Sidhivinayak Tower, Natakwala Lane, Near Collector Office, Borivali (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dhange Hospital",
            "Address": "29, Thana Road, Near Mandai, Auto Stand, Bhiwandi, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dhanvantari Hospital",
            "Address": "Lal Chakki Chowk, Station Road, Ulhasnagar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dhanvantari Hospital",
            "Address": "Radha Govind park, Near Police Station Bhayander West",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dhanvantri Hospital Pvt Ltd",
            "Address": "Thakkar Plaza, Ground Floor, Opp:Swami Vivekanand, Badlapur (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dhanwantary Hospital & Iccu",
            "Address": "545, Netaji Subhash Rd Mulund (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Disha Diabetes & Kidney Care Hospital",
            "Address": "2Nd Floor, Sonal Business Park, Above Mc Donald'S Restaurant, Gharda Circle, Dombivli East",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Disha Nursing Home",
            "Address": "A Wing, Amul Commercial Premises,1st Road, Chembur(E), Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Disha Nursing Home Pvt Ltd",
            "Address": "Om Shree Saidham CHS, Jamblipada, Asalpha Village, A-Link Road, Ghatkopar(W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Divine Multispeciality Hospital",
            "Address": "Plot no 21, Sector 6, Navi mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dna Multispeciality Hospital",
            "Address": "Whispering palms shopping center lokhandwals township next to lokhandwala sales office akurli road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Agarwals Healthcare Ltd",
            "Address": "Diwadkar Commercial Complex,CTS No-2878-A,2nd floor, Shivaji Chowk, Agra Road, Kalyan West",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Amar Karkhanis Superspeciality Hospital",
            "Address": "Soham Plaza, Tikuji Ni Wadi Rd, Manpada Flyover, Manpada, Thane West, Thane, Maharashtra 400607",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Aphale Eye Hospital",
            "Address": "B Wing 2nd Floor Thakkar House Castle Mill",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Balabhai Nanavati Hospital",
            "Address": "S V Road Ville Parle (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Bhanushali Hospital",
            "Address": "Kaushalya Shivaji Path",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Bhatia Multispecilaity Hospital",
            "Address": "Shraddha Bhandup Village Road, Bhandup (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Bhatias Ruby Hospital",
            "Address": "1st Floor, Arunoday Tower, SPS Marg, Kokannagar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Bothras Hospital",
            "Address": "Ramkrishna Apartments, Gadhav Naka, Bhandup (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr C B Vaidya Memorial Hospital",
            "Address": "Opp City Post Office, Tilak Chowk, Kalyan (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Choudhary Stone & Multispeciality Hospital",
            "Address": "Rainbow Society, F7, B2+C1 , Sector, 10, vashi Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr D Y Patil Hospital and Research Centre",
            "Address": "Sector 5, Dr D Y Patil Vidyanagar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Das Hospital & Iccu",
            "Address": "2/3/4th Floor, Gagangiri, 18th Road(Near Dr Ambedkar Garden)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Dipak Desais Ent Hospital",
            "Address": "206 Gayatri Dham M G Road Ghatkopar (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Dragos Life Line Health Hospital",
            "Address": "P-4, 101/102, Siddharth Nagar, Building No 8, Opp Snehanjali Electronic Showroom, Mira Road (E), Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Gadgil Eye Hospital",
            "Address": "Ground Floor, Shreyas Apts, Ramchandra Nagar No 1",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Godboles Heart Care Centre Pvt Ltd",
            "Address": "M G Road Navpada Opp Sarasvati Marathi School",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Goyal Children & General Hospital",
            "Address": "B-1, B-2, B-3, EC-36, Sai vatika co op hsg soc Aangan, Evershine City,",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Harne Hospital",
            "Address": "2nd Floor Everest Shopping Centre Opp Rly Stn",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Jadhav Hospital",
            "Address": "Near Durgamata Mandir, Sector-4, Airoli-Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Kamdars Nursing Home",
            "Address": "Rizvi Nagar Junction of S V Road, Milan Subway Santacruz W",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Kelshikars Hospital",
            "Address": "4th floor, Beauty Arcade, Opposite Pratap Cinema, Khopat, Thane (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr L H Hiranandani Hospital",
            "Address": "Hillside Avenue, Hiranandani Garden, Powai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Malwankars Romeen Nursing Home",
            "Address": "Gr. Floor, Goutam Dham, Gaodevi road, Bhandup (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Meenas Multispeciaity Hospital",
            "Address": "10/B Miniland Tank Road Near Shivaji Talav, Bhandup(W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr More Eye Centre",
            "Address": "7, Yogesh Society, Ground Floor, Near ICICI Bank, Ram Maruti Road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr More Hospital",
            "Address": "First Floor, Vimal Paradise Bldg, Opp Ramdev Xerox, Sainath Nagar Road, Nalasopara (E), Palghar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Mukhis Raj Hospital",
            "Address": "Devidayal Road ,Opp Hdfc Bank, Mulund (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Prabhakar Patwardhan Smruti Rugnalaya",
            "Address": "196/1, Dr Babasaheb Ambedkar Marg, Near Maitri Diagnostic Centre, Near Life Line Hospital , Panvel",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr R N Patil Suraj Hospital",
            "Address": "Opp. Palm Beach Marg , Plot No 1 & 1 & 1A, Sun Palm View Building Sector No-15,",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Rane Hospital (p) Ltd",
            "Address": "37, Dhan Laxmi Appt. Road No. 2, Pestom sagar Road, Chembur shopper stop",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Shah Eye & Laser Centre",
            "Address": "Aasra Appartment, Plot No. 33, Next to Rupee Co-op Bank, Near Station Road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Shahs Unique Smile & Visioncare Clinic",
            "Address": "1, Priyadarshni Apt, Near AK Joshi Bedekar English High school, Mahatma Phule Road,",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Shetty Ent Hosptial",
            "Address": "9, Lavkush, Above Hotel Kriti Mahal, M.G. Road, Panch Rasta, Mulund (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Singh City Hospital & Medical Research Centre Pvt Ltd",
            "Address": "Plot no- 32, Sector-4, Kalamboli, Near Shiv Mandir",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Sonagra Medical & Surgical Centre",
            "Address": "Shiv plaza, Opp Telephone Exchange, LBS road, Ghatkopar (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Talele Shree Ashirwad Hospital",
            "Address": "Shree Complelx, Opposite Mahavir Nagar, Manpada Road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Thakurs Ent Clinic",
            "Address": "100-A, R.R.Realty, Tank Road, off LBS Marg, Opp Dream Mall, Bhandup (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Thakurs Shree Hospital",
            "Address": "Sukh Laxmi Buld,Opp Tata fision,shreenagar ,wagale estate",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Thakurs Vedant Ent Hospital",
            "Address": "#102, Panchratna Tower, Opposite Cinemax, Khadakpada , Kalyan w , Thane 421301",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Veer Hospital",
            "Address": "First floor, Saikripa CHS, Near Yashodhan Nagar Bus Stop, Savarkar Nagar, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Vora Premature Critical Care & General Hospital",
            "Address": "2-4/A. Kokil Kunj, Behind Patel Nagar, M G X Road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Wankhade Fracture & Accident Hospital",
            "Address": "Murbad Road, Opp. ICICI Bank Nr. Hero Honda showroom Purnima theatre area",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr Yewale Multispeciality Hospital For Children",
            "Address": "Plot No 6B Sector 9, Vashi, Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr. Agarwals Healthcare Ltd. (Name changed-Aayush Eye clinic)",
            "Address": "1st Floor, Signature Business Park, Postal Colony Road, Chembur,Mumbai-400071",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dr. Ajayan Multispeciality Hospital",
            "Address": "Plot no. 6 Sector 9, Kopar Khairane near Kopar Khairane, Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Drashti Eye Hospital",
            "Address": "4-5 Keystone Elita, D Mart Road, Nr. Karnataka Bank Sector- 15, Plot No.- 49 Kharghar Navi Mumbai- 410210",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Dsouza Hospital",
            "Address": "Opp. Ramedi Church School. Ramedi, Vasai (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Eye Essential Hospital",
            "Address": "3, milan 169 Garodia 90- feet road opp. Lavender bough ghatkopar east Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Eye heal Hospital",
            "Address": "NEAR JAIN MANDIR,SARVODAY NAGAR,MULUND WEST,MUMBAI-400080",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Eyemax Super Speciality Eye Centre",
            "Address": "104, Neelkant Plaza, Opp Dmart, Sector 40, Nerul Seawoods, Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Family Care Hospitals",
            "Address": "Opp Seven Square Academy, Ideal Park Road, Mira Bhayander Road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Fauziya Hospital",
            "Address": "209, Solanki Apts, L.B.S. Marg kurla (West)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Fortis Hiranandani Hospital",
            "Address": "Mini Sea Shore Road, Sector 10 A, Vashi",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Fortis Hospital Ltd Kalyan",
            "Address": "Aadheshwar Park,BailBazaar,Kalyan Shill Road,Kalyan(W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Fortis Hospitals Ltd Mulund",
            "Address": "Sector-44, Mulund Goregaon Link Rd,",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Fortune Plus Icu & Multispeciality Hospital",
            "Address": "1st Floor, Fenkin Belleza, Opp. Hyper City Mall, Kasarvadavali, G.B. Road, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Four Care Hospital",
            "Address": "Vishnukrupa Building Mahant Road Near Utkarsh Mandal Vile Parle East Mumbai 400057",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Furia's Eye Clinic",
            "Address": "B-301/302, BHAVESHWAR PLAZA, LBS MARG, NEAR SHREYAS CINEMA, GHATKOPAR (W), MUMBAI - 400086",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Galaxy Criticare Hospital",
            "Address": "1st Floor, Deepti palace, above prestige Hotel, G.G.Road, near GOPI Mall, Bhori Chowk, Dombivali(W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Galaxy Hospital",
            "Address": "Vasudev Acrade, Kanakia Road, Ahead of Cinemax, Off Mira Bhayandar Road, Mira Road , Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Galaxy Multispeciality Hospital",
            "Address": "B- Wing, Anand Heights, S.M.D Road, Antop Hill, Wadala",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Gandhi Hospital",
            "Address": "142 MCCH Society, Near Kohinoor Tech Institute",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Ganesh Memorial Hospital And Endoscopy Center",
            "Address": "5-Tulip C, Flower Vally Complex,Khadakpada Circle, Kalyan (West)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Garden View Nursing Home Pvt Ltd",
            "Address": "Garden View SOC, Tulinj Road, Nallasopara E",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Gastrocare Hospital",
            "Address": "Regency Avenue, Besides Reliance Webworld, Syndicate",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Gayatri Maternity & Ent Hospital",
            "Address": "101,102,103, A-4, Sector 4, Shanti Nagar, Mira Roa",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Gem Superspecialty Hospital",
            "Address": "C wing, Gokul Heights, Mathuradas Road, Kamala Nagar, Bhagat Colony, Kandivali West, Mumba",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Global Eye Clinic",
            "Address": "305-306/, Shopzone Complex, M.G.Road, Ghatkopar West",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Global Hospital",
            "Address": "Ground Floor, Yashwant Siddhi, Y K Nagar, Star Planet Hotel, Virar (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Global Hospital Super Speciality & Transplant Centre ( A Unit Of Centre For Digestive & Kidny Diseases (india) Pvt Ltd)",
            "Address": "35 35 Dr E Borges Road Opp Shirodkar Higschool Parel",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Global Multispeciality Hospital",
            "Address": "Stanley Regency, Kanakia Beverly Park, Nr. Cinemax, Mira Road (E), Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Godrej Memorial Hospital",
            "Address": "Pirojshanagar, Vikhroli (W), Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Gokhale Orthopedic Centre",
            "Address": "Globe Arcade, RP-112, Near Ganesh Mandir Road, MIDC, Dombivali(E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Gokul Nursing Home & Iccu",
            "Address": "1st Floor Munshi Estate, M G Road Mulund (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Golden Park Hospital",
            "Address": "Behind Parvati Cinema Vasai Road (W), Vasai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Gungeet Hospital & Polyclinic",
            "Address": "A/823 R No.1645, G R D Complex, Gandhi Road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Gurukrupa Hospital",
            "Address": "Poonam Arcade, 1st Floor, Sheetal Naka, Near SK Stone Police Chowky, Mira Road(E), Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Gurukrupa Hospital & Polyclinic",
            "Address": "Savitri Apt, B P Road, Opp. Khashi Bhavan, Bhayander (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "H J Doshi Ghatkopar Hindu Sabha Hospital",
            "Address": "Shradhanand Road Opp Railway Station Ghatkopar (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Hande Hospital",
            "Address": "1st floor, Vasant Kunj CHS, Ambedkar Road, Panvel 410206",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Hayyat Multispeciality Hospital",
            "Address": "Unit No 1 And 2,Savera Heights Building Madhav Apartments Gate No 5 Malvani Malad West.Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Hcg Apex Cancer Hospital",
            "Address": "Holy Cross Road, Borivali -Dahisar Link Road , Opp Caf\u00e9 Coffee day, IC Colony, Borivali (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "HCG ICS KHUBCHANDANI CANCER CENTRE",
            "Address": "Maharshi Karve Rd, Nariman Point",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Hdl Lifecare Plus Multispecialty Hospital",
            "Address": "B1/B2, Green Lawn Apt, Opp St Pius College Aarey Road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Healing Touch Eye Hospital",
            "Address": "Satyam Heights, Plot No 81, Sector 19, Kamothe, Near Neelkant Sweets",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Health Hi Tech Orthopedic And Surgical Hospital",
            "Address": "Sai Krupa Plot No.51, Datamandir Road, Dhanukarwadi, Mahavir nagar Kandivali West",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Heritage Hospital",
            "Address": "PLOT NO 6A ,SEC 6,AIROLI,",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Hi Tech Urology Center",
            "Address": "Sushubhan, Sarojini Naidu Road, Bhura-Bhai Hall, Kandivali (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Highland Super Speciaity Hospital",
            "Address": "3rd Floor, Highland Park, Above D Mart, Dhokali, Kolshot Road, Ghodbunder Road,Thane(W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Highway Hospital",
            "Address": "Dev Ashish-Building, Eastern Express Highway, Marathon Square",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Hira Mongi Navneet Hospital",
            "Address": "Valji Ladha Road Mulund (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Hitankshi Hospital",
            "Address": "Block No 401/402/403/404 Raj Oaks Building Near Donbosco School Mtnl Road, Shanti Park Miraroad, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Holy Cross Hospital",
            "Address": "1/Karnik Road, Kalyan (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Horizon Hospital",
            "Address": "Malti Mohan Bungalow Opp Naupada Telephone Exchange M G road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Horizon Prime Hospital",
            "Address": "Vibgyor, B- Wing, Patlipada, Ghodbunder Rd, Near Hiranandani Estate, Behind Ritu Nissan Showroom, Thane West, Maharashtra 400607",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Iasis Hospital",
            "Address": "Evershine City, Near Hormony Bludg, Vasai (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Icon Hospital Pvt Ltd",
            "Address": "Manpada Road, Mahaveer Nagar Corner",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Icon Multispeciality Hospital & Icu",
            "Address": "Gala No-5, Ground Floor, Jitendra Co-op Housing Society, Near Hariniwas Circle, Naupada, Thane(W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Indravati Hospital",
            "Address": "Sec-3, Near Bus Stop",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Indu Diabetes Specilaity Diabetic Footcare Hospital",
            "Address": "953-1, J.C.House ,Plot No.20, Near K.T. Wadi Hall, Diwanman, Vasai West, Bassein Road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Infigo Eye Care Hospital",
            "Address": "Shop No-10, 12-20, Building No-9, Twin Tower, Tirupati Nagar, Phase 2, Virar (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Infigo Eye Care Hospital",
            "Address": "1001, First Floor, C-Wing Janaki Heritage, Opp. Maxus Mall, Bhayander (W), Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Infinity Medisurge Centre",
            "Address": "Shop No 1, Below Wavikar Eye Hospital, Ambar Aracade, Majiwada, Thane (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Inlaks General Hospital",
            "Address": "Inlaks Hospital Road, Chembur Colony",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Isha Netralaya",
            "Address": "Dosti Imperia, Sho No 2, Near R Mall, Ghodbander Road, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Isha Netralaya A Unit Of Dr Shahs Laser Eye Institute",
            "Address": "Ground Floor, Radhakrishna Sankul, Opp Holycross Hospital, Karnik road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Ishaan Urology Centre",
            "Address": "Gr. Floor Surya-Sagar Bldg, Behind Gurudwara, Near Railway Station Vasai (W) Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Ishwar Hospital",
            "Address": "1st flr, Sunder apt., Dr. R.P.Road Ramnagar, Dombivli (East)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "J K Women Hospital",
            "Address": "Maitri Raghukul, Bhagat singh path, Opp Saraswat Bank, Dombivli (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Janaki Global Hospital",
            "Address": "Anmaol Garden, Malaga Road, Pisavali",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Jankalyan Multispeciality Hospital",
            "Address": "Ram Niwas Apt, Opp Kalyan Janta Sahakari Bank, Nr. Ashish Restaurant, Shree Malang Road, Kalyan E, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Janseva Healthcare Llp",
            "Address": "1st Floor, Dattani Prism - 1, Behind Dattani Square Mall, Papdy, Vasai (W), Palghar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Jaslok Hospital And Research Centre",
            "Address": "15 G Deshmukh Marg Peddar Road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Jay Polyclinic Maternity & Nursing Home",
            "Address": "Amarshi Road, Malad (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Jeevan Jyot Hospital",
            "Address": "Shubh Avenue Bldg. Ground & 1st Floor,Plot No-59-C, Sector-21 Kamothe",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Jeevan Jyoti Multispeciality Hospital",
            "Address": "Near Axis ATM, Chindran Road, Devichapada Taloja MIDC, Panvel, Raigad",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Jeevan Jyoti Trust Hospital",
            "Address": "Sitaram commercial Complex , Santosh Bhuvan Naka , Nallasopara (E) Palghar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Jeevan Jyot Hospital",
            "Address": "Shubh Avenue Building, Ground & 1st Floor, Plot No.59-C, Sector-21, Kamothe-410209",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Jijai Womens Hospital",
            "Address": "303B-Wing Near Hypercity Anand Nagar Kasalwadawali Ghodbunder Road Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Jivdani Hospital Pvt Ltd (alliance Hospital)",
            "Address": "Attmavallabh Society, Achole Road, Nalasopara (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Jiyas Multispeciality And Maternity Hospital",
            "Address": "Fernandes Castle, Opp. Fatima High School, Ambernath West Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Jupiter Lifeline Hospital Ltd",
            "Address": "Eastern Express Highway , Near Cadbury Company",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "K J Somaiya Hospital & Research Center",
            "Address": "Somaiya Auyrvihar, Opp Eastern Express Highway , Sion E",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Kaizen Super Speciality Hospital",
            "Address": "Ranka Chambers ,Ramchandra Nagar Near Nitin Company Thane West 400604",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Kalpana Lifeline Hospital",
            "Address": "Plot No 16, Opp Akshaya Hotel, Ambadi Road, Vasai (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Kalsekar Hospital",
            "Address": "Near Bharat Gear Company, Dawle Village, Near Old Mumbai bypass road, Kausa-Mumbra, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Kalyan Cancer Canter",
            "Address": "At.Bapgaon ,Po.Lonad,Tal.Bhiwandi,Dist.Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Kamla Eye And Maternity Home",
            "Address": "A, G-4 Indra Complex, 60 Feet Road, Bhyander (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Kapadia Multispeciality Hospital",
            "Address": "M G Road, Opp. Raga Restaurant, Goregaon (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Kashiben Mangaldas Trust Hospital",
            "Address": "Harihar Niwas, Besant Street, Santacruz ( West ), Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Kataria Eye Clinic",
            "Address": "102/103, Kartar Bhawan, Above Central Bank of India",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Kaushalya Medical Foundation Trust Hospital",
            "Address": "Ganeshwadi, Panchpakhadi, Behind Nitin Company",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Kevalya Hospital",
            "Address": "Sidhi apartment, near vijay garden,opp. Suraj water park,G.B.Road, Thane (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Khadakpada Multispeciality Hospital",
            "Address": "Swami Prasad, First floor, Building no 3, Shelar Park, Above TJSB Bank, Khadakpada Circle Kalyan west",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Khandwalas Eye Hospital & Hem Polyclinic",
            "Address": "D-31, Navmangal CHS Ltd, 1st Floor, Above Venilal Saree Shop, Next to Golden Tabacoo Factor, S V Road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Kharghar Multispeciality Hospital",
            "Address": "The Crown, First Flooor Plot No :15/16, Sec 15 Near ; D Mart Kharghar Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Khushal Hospital & Maternity Home",
            "Address": "102/103, Karmavihar Bldg, Station Road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Kiran Care & Cure Pvt. Ltd.",
            "Address": "Sankalp (Ground Floor), Mistry Complex, Nr. Jankal, Andheri (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Kirti Nursing Home",
            "Address": "Kedarnath, Plot No 7, Sector-7, Near Charkop Bus Depo, Kandivali (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Kkasturi Medicare Pvt Ltd",
            "Address": "1 Harshniketan, Gaondevi Road, Behind Navrang, Bhayander (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Kohinoor Hospitals Private Limited",
            "Address": "Kohinoor City kirol road of LBS marg ,Kurla(W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Kokan Hospital",
            "Address": "Areshwar Building, Opposite Dhiraj Darshan, Kokan Nagar, Shivneri Vasahat Road, Jogeshwari East , Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Kokilaben Dhirubhai Ambani Hospital",
            "Address": "Four Bunglows, Lokhandwala",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Kolekar Hospital And Icu",
            "Address": "2nd and 3rd Floor, Onparkash Arcade, Ambedkar Garden , Chembur",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Kolekar Nursing Home",
            "Address": "N.G Acharya Marg Mukti Nagar Ghatla Chembur",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Koparde Hospital",
            "Address": "1st Floor, Ashutosh Apt, Kalyan Road, Dombivli (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Krishna Hospital",
            "Address": "Prabhu Niwas, Meena Nagar, Ambadi Road, Vasai (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Krishna Leela Hospital",
            "Address": "Vishwakarma Plaza, First floor, Near PMG Bank, Malang Road, Kalyan (E), Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Krishna Nursing Home",
            "Address": "Neha Apts., LBS Marg, Bhandup (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Kusum Maternity Childrens & General Hospital",
            "Address": "Sadguru Arcade, 1st Floor, Near HDFC Bank, Opposite Modern Cafe, Phadke Cross Road , Dombivli (E), Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Lakecity Hospital",
            "Address": "2&3 Jai Siddhi Vinayak Premises, Near Cadbury Junction, Khopat, Thane (West)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Laxmi Eye Institute",
            "Address": "Near State Bank of India, Panvel, Hamid Mulla Road, Uran Road, raigad",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Laxmi Health Care Centre & Iccu",
            "Address": "210/3042, Near Sangali Sahakari Bank, Tagor Nagar No 1, Vikhroli (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Laxmi Jyot Eye Hospital",
            "Address": "A-101, Dharamveer Building, Opposite Municipal School No 7",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Laxmi Multispeciality Hospital & Icu",
            "Address": "Ghanshyam Bhuvan, Sector-3, Near Bank Of India, Ghansoli, Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Leela Eye Institute",
            "Address": "Patel Plaza, 1 floor, Near Ajit scan centre Murbad road Kalyan",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Life Care Hospital",
            "Address": "First floor, Radhika Apartment, Above HDFC Bank, Poona Link Road, Chakki Naka, Kalyan (E), Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Life Care Hospital",
            "Address": "M.S. Manzil, A-block road, Near Gurudwara , Shahad Station road(E), Ulhasnagar-01 (E) Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Life Care Hospital",
            "Address": "S-1, 1st Floor, Vedant Complex, Above ICICI Bank, Vartak Nagar, Thane West",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Life Era hospital",
            "Address": "Granduer CHS. Shop No.16 , Plot No.33/34, Sector 20",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Life Line Hospital",
            "Address": "Sai Arcade, Shivaji Road, Amit Appts., Opp.ST Stand",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Life Line Hospital",
            "Address": "A/1 st floor, Shiv tower, Khopat, Thane W",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Life Line Hospital",
            "Address": "Vishal Complex, A Wing, S V Road, Malad (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Life Line Multispeciality Hopsital",
            "Address": "CTS 618/1-3, Neal Malad Subway Malad (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Life Line Multispeciality Hospital",
            "Address": "1St Floor, Jyoti Apertment, Opp. Tata Amantra, Kalyan-Bhiwandi Bypass Road, Bhiwandi",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Lifecare Charitable Hospital",
            "Address": "C Wing, Martin Commercial Complex, New Link Road, Opp Mother Mary English High School, Nallasopara(E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Lifecare Multispeciality Hospital And Nursing Home",
            "Address": "Shop No, 1,2,18, Om Ajaili Apartment, Near policy Chowky, Vichume Village",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Lifeline Medicare Hospital",
            "Address": "1st Floor, Takur Complex, Above Saraswath Bank, Asha Nagar Road, Near Wellness Forver, Kandivali (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Lifeline Medicare Hospital",
            "Address": "A-1, Gagan Chembers, Gokuldham, Goregaon (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Lifeline Medicare Hospital Pvt Ltd",
            "Address": "DLF Park, MTNL Signal ,S.V. Road, Goregaon West",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Lifewave Hospital",
            "Address": "A-5, Sukh Sagar Mahal Chs, Bachani Nagar, Near Childrens Academy, Malad (E), Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Lions Service Centre Hospital",
            "Address": "Plot Number 101, Sector 7, Kopar Khairane, Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Lotus Multispeciality Hospital",
            "Address": "Shop No.1, 2 & 3, Sathyam Apartment Dutta Mandhir Road, Village Road, Bhandup West, Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Lotus Multispeciality Hospital & Icu",
            "Address": "Balagi Sadan, Plot 20-D, Sec-15, Near Modern College, Vashi",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Lotus Mutispeciality Hospital",
            "Address": "Ground floor, Vinayak Apartment, M.G.Road, Opp Vaishali Bhuvan, Kandivali (W), Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Lotuss Hospital",
            "Address": "B-4-5, / C1-2, Dev Paradise, Beveraly Park, Above IDBI Bank, Mira Road (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Maa Nursing Home And Netrajyoti Eyecare Centre",
            "Address": "Himachal Bldg,Opp.Sunder Nagar,S.V.Road,malad(w)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Maa Vaishnavi Multispeciality Hospital",
            "Address": "Next to Kopari, Telephone Exchange, Gurudwara Station road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Madhu Polyclinic & Nursing Home",
            "Address": "Mini Apts Opp Sarvodaya Nagar J M Road, Bhandup(W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Mahaganpati Hospital",
            "Address": "Plot No. 75/75, Radhanagar, Near Saibaba Temple, Titwala E",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Mahavir Hospital",
            "Address": "ARIHANT Bunglow, MB Estate, Ram Mandir Road, Virar, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Mahavir Maternity &general Hospital",
            "Address": "Rushabh Apartment, Near JainTemple, Kurar Village, Malad (E) Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Mahesh Hospital",
            "Address": "Balaji Apartments, 1st Floor, Above Bank Of Baroda",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Mallika Hospital",
            "Address": "Sharma Estate S.V. Road, Jogeshwari (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Manasvi Spine And Ortho Care",
            "Address": "First floor, Sai Plaza, Near Tilak Post office, Dr.R P Road, Dombivali (E), Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Mangal Prabhu Nursing Home",
            "Address": "Mangal Prabhu Polyclinic Plot No 27 Sector 24 Sanpada-Juinagar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Manisha Universal Multispeciality Hospital",
            "Address": "2nd Floor, Manisha height, vaishali Nagar, Near HP Petrol Pump, LBS Road, Mulund (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Manishas Sparshad Nursing Home",
            "Address": "D-wing, 1st & 2nd Floor, Saishrutsti Bldg, Adj Shangrila Biscut Company, Opp Bharat Pertrol Pump, L.B.S.Marg, Bhandup West",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Manorama Nursing Home Unit-II",
            "Address": "SHREE OMKAR CHS LTD, PRINCE PARK, BLDG NO 05, VIRAR ROAD",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Manorma Nursing Home",
            "Address": "Sai Sadan, Building No 3, Ambawadi Opp, Divine School, Nalasopara (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Masina Hospital Trust",
            "Address": "Sant Savta Mali Marg, Near Gloria School, Near Byculla Railway Station (East), Mumbai- 400027, Maharashtra",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Matoshree Multispeciality Hospital Advance Affordable Ethical",
            "Address": "Shop No-10/11/ 14/15, Trupati Icon, Plot No 425, Sector 20, Near Central Bank, Kamothe, Raigad",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Matrix Multi Speciality Hospital",
            "Address": "Opp Andhra Bank, Near Ambedkar Chowk, TV Tower, Badlapur (E), Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Mauli Accident & General Hospital",
            "Address": "Neelkanth Height , Plot NO.104A/ first floor, Sector 14, Kamothe Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Mauli Hospital",
            "Address": "Shop No.2, Mauli Medical, Mauli Builuding Balkum Pada 2, Thane (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Max Care Hospital",
            "Address": "1st & 2nd, Floor Near N.H.School Road, Opp. Asmita College, Mira Road (E), Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Max Vision Advance Eye Care Centre",
            "Address": "216-A, 2nd Floor, Soham Plaza, Manpada Bus Stop, G B Road, Chitalsar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Medicare Hospital",
            "Address": "MAROL METRO STATION, SIR M.V.ROAD, MAROL, ANDHERI EAST, MUMBAI-400059",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Medicover Hospital (A Unit of Sahrudaya Healthcare Private Limited)",
            "Address": "Plot No 1, Sector 10, Opp. Elite Enclave CHS.Near Bank of India. Kharghar. Panvel, Navi Mumbai.",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Medihope Hospital",
            "Address": "Ground Floor, Radha Krishna Sankul, Near Nutan Vidayalaya, Karnik Road, Opp Holy cross hospital, Kalyan (West)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Meditech Hospital",
            "Address": "Classic Country, Behind New Shahi Hotel, Mira Bhayandar Rd, opp. Old Petrol Pum, Mira Road East, Mumbai, Maharashtra",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Meher Ambe Hospital",
            "Address": "Rajsneha Bldg S N Road, Opp Rationing Office, Mulund (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Mehta Eye Clinic Pvt Clinic",
            "Address": "3RD, FLOOR, JAYANT ARCADE, M. G. ROAD, GHATKOPAR (E), MUMBAI - 400077",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Mehta Hospital & Fertility Center",
            "Address": "Rushabh Plaza, B-wing, Pleasant Park, Near Brand Factory, Mira Road (E), Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Mehta Nursing Home",
            "Address": "101, Rite Golden Creast, Opp Hanuman Temple, Daulat Nagar, Borivali (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Metropol Multispeciality Hospital",
            "Address": "202, 2nd Floor, Soham Plaza, G B Road, Manpada Naka, Thane (west)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "MGM Hospital",
            "Address": "PLOT NO.35,SECTOR NO.3,VASHI,NAVI MUMBAI-400703",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "MGM Hospital",
            "Address": "KALYAN SHILL ROAD,NEAR KATAI NAKA,DOMBIVALI (E )",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Mgm New Bombay Hospital",
            "Address": "Plot No.35, Sector 3, Near Vashi Police Station",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Mhatre Accident Hospital",
            "Address": "Shivaji Road Opp Oanvel ST Depot",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Mira Bhayander Institute For Reproductive Assistance",
            "Address": "Plot No 568/1 Near Sacasar Susiness Park 150 Feet Cross Road Bhayander",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Mitr Health Care Hospital",
            "Address": "Eden Garden CHS,Sector - 5, Ploto No. 37, Kharghar, 410210,Maharashtra",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "MOC - Cellcure Cancer Centre",
            "Address": "1st Floor, Blue Nile Building, Charai Chandanwadi Signal, junction of Almeida Raod and LBS Road, Thane west 400601",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "MOC Cellcure Cancer Centre Pvt Ltd.",
            "Address": "1st Floor, Shreepati Arcade, Nana Chowk, Kemps Corner, August Kranti Road, Grant Road West. Mumbai 400036",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Moc Hospital",
            "Address": "1st floor, Khodiyar Apartments, Daulat Nagar, Road No. 6, Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Modi General Hospital & Icu",
            "Address": "237/3258, Opposite municipal market, Tagore nagar, Vikhroli (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Modi Hospital",
            "Address": "Shreenagar, Wagle Estate, Thane (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Mody Hospital & Icu",
            "Address": "Plot No. 1, 2 & 3, Sector 2, Airoli",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Mohit Hospital",
            "Address": "C-Koyna, Shantivan Complex, Near National Park, Bo",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "More Hospital & Icu",
            "Address": "A / 101,102, Shop No. 1,2,Shree Sai Shardhha Soc, Plot No12, Sec17, Khanda Colony New Panvel East, Panvel",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Motherhood Hospital Unit Of Reha Healthcare Pvt Ltd",
            "Address": "Fountain Square,Plot no.5,Sector-7,kharghar, Navi Mumbai-410 210",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Mpct Hospital",
            "Address": "Plot No 7, Sector 4, Near Swami Vivekanand college and School, Sanpada (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Mukund Maternity & Surgical Nursing Home",
            "Address": "Mukund Nagar CHS, Marol, Andheri-Kurla Road, Andheri",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Mumbai Eye Care Cornea And Lasik Center",
            "Address": "101/102, Sai Vaibhav CHS, Vikrant Circle, Rajawadi, Tilak Road, Ghatkopar (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Nahar Multispeciality Hospital",
            "Address": "KASURI-ASHISH 2ND FLOOR, NEAR VYANKATESH PETROL PUMP",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Nairs Eye Clinic",
            "Address": "plot no.68,mihir villa ,opp.juma masjid,sec.-4,panvel",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Nakoda Hospital",
            "Address": "Nageshwar Park, Devchand Nagar, 60 Feet Road, Bhayander (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Nakshatra Multispeciality Hospital Llp",
            "Address": "Grace Plaza, Opp Arena House, Road No.12, MIDC,Opp Gold finch Hotel, Andheri (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Namita Polyclinic And Hospital",
            "Address": "Ganga Shalimar building,Navyug nagar,S.V.Road,Dahisar(E),",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Narendra Hospital",
            "Address": "Kasturba Road 5, Borivali (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "National Hospital",
            "Address": "Matru ashish Bldg , Next To Madhav Hall, M.G. Road, Borivali (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "National Hospital & ICCU",
            "Address": "Vikas Paradise, 1st Floor, Bhakti Marg, Off LBS Ro, Mulund (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Navjeevan Hospital & Iccu",
            "Address": "Archana jyoti 1st floor plot no-18, sector 17,Near Central Park, DBC vashi Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Navkaar Hospital",
            "Address": "Lal Bahadur Shastri Marg, next to Varanda banquets, Bhandup, Bhandup West, Mumbai, Maharashtra 400078",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Neel Orthopedic Superspeciality Hospital",
            "Address": "1st floor Sheetal Niketan Co-op Hsg School Opp Hum video NR Sai baba hospital,Bhayander,",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Neon Hospital",
            "Address": "1St And 2Nd Floor Mukta Arcade, Kalyan Shill Road, Above Regent Honda Showroom, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Neptune Superspeciality Hospital",
            "Address": "Jai Hanuman Plaza Opp DNS Bank Shankara Nagar Kalyan- Shill Road Sonarpada",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "New Bombay Hospital",
            "Address": "First floor, B-Wing, Mahavir Plaza, Sector 19, Near Gaidevi Maidan, Airoli, Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "New Life Maternity And Children Hospital",
            "Address": "Bapu Daji Niwas, Plot No. 84/85, 1St Floor, Station Road Ghansoli, Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "New Life Maternity And Childrens Hospital",
            "Address": "Enkay Square Chs, Shop No. 06, Plot No. 21, Sector 06, Koparkhairane, Navi Mumbai.",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "New Life Nursing Home",
            "Address": "Tirupati Tower, Thakur Complex, Op Mahindra and Mahindra, Western Express Highwary, Kandivali (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "New Medanta Hospital",
            "Address": "Plot No 04/A, Sector-1, Near Airoli Naka, Airoli, Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "New Milliennium Multispeciality Hospital",
            "Address": "Plot No 17 C, Sector 5, Sanpada",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "New Pulse Multispeciality Hospital",
            "Address": "DHARTI HIGHT'S, PLOT NO, 28 SEC 21,KAMOTHE NAVI MUMBAI",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "New Saiganga Hospital",
            "Address": "101, Pandurang Krupa ,Near Hanuman Temple, Navghar Road, Bhayander (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Neway Hospital",
            "Address": "Plot No.34, sector -6, Sanpada",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Nidhi Nursing Home & Iccu",
            "Address": "Neelyog Apartments, Ground Floor, M G Road, Opposite Patel Nagar, Kandivali (W), Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Nimai's Borneo Mother & Child Care Hospital",
            "Address": "1st and 2nd floor,Larkins 315 ,Namdeo Wadi Marg,Panch Pakhadi ,Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Niramay Hospital",
            "Address": "Plot No.148, Vasudev Balwant Phadak Road, MCCH Society Panvel , Old Panvel, Raigad",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Niramaya Holistic Health Services Pvt Ltd",
            "Address": "Plot No.-5 A,Sector 4 ,kharghar,Near bal Bharti School",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Nirmal Nursing Home",
            "Address": "Gokul, First Floor, 93 Ranade Road, Shivaji Park,dadar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Noble Hospital",
            "Address": "First Floor, Sant Sawata Mali, Bhaji mandai, Opp Pooja Madhuban Theater, Dombivali(E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Nulife Hospital",
            "Address": "Balkrishna Apt, Rajandraprasad Road, Opp. Tilak Nagar Post office , Dombivli (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Nulife Hospital",
            "Address": "A1, HARE KRISHNA BUILDING, 1st & 2nd FLOOR, L. B. S.MARG, GHATKOPAR WEST, MUMBAI - 400086",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Ojas Nursing Home",
            "Address": "Plot No 8-3, Sector 8, Nerul, Phase-II, Behind M G M School",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Om Hospital",
            "Address": "Shreepant Nagari, Opp Shani Mandir, Azad Road, Paraki Remedi Vasai west",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Om Hospital",
            "Address": "B/9 , Poonam Nagar, Phase III, Opp. Sector 7, Shanti Park , Mira Road (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Om Hospital & Polyclinic & Icu",
            "Address": "1st Floor Commerce Centre, Above United Western Bank, Ram Nagar, Tandon Road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Om Navjeevan Hospital Pvt Ltd",
            "Address": "Plot no 2, Sec 21, Kharghar,Tata Hospital Road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Om Sairam Nursing Home",
            "Address": "Veer Spendor Building, No. 1, Nallasopara Station Rd, Yashvant Viva Twp, Nalasopara East",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Omkar Hospital & Icu",
            "Address": "first floor, Om Sai Apartment, Balkum Pada No 2, Balkum, Thane(W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Omkar Orthopaedic Hospital",
            "Address": "B 102/103, Prathmesh Vihar Co Operative Housing Society, Virar Agashi Road, Virar (W) , Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Optilife Hospital Nx",
            "Address": "Sai Paradise Build, First Floor, G. Gupte Road, Dombivali (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Optilife Multispeciality Hospital",
            "Address": "Opp Shivaji Udyog nagar Police Chowky, GB Patharli, Near Manpada Road, Dombivali(E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Orange Hospital",
            "Address": "A-205, Telipada, Near Dhamankar Naka, Near City Center Mall, Bhiwandi, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Orange Hospital",
            "Address": "Garden Plaza Near Ideal Park Seven Square School Lane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Orbit Eye Hospital",
            "Address": "1 st Floor Aftab Classic , opp city hospital , S.v Road, Jogeshwari (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Orbit Superspeciality Hospital",
            "Address": "Opp Amar Palav Hotel, Western Express highway, Mira Road (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Orchid Multispeciality Hospital",
            "Address": "1st floor, Marvel Building, Sanghvi Complex, Opp. A.J. Diagnostice, Payyade Hotel Lane, Kanungo Estate Road, Mira Road (E), Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Orchid Multispeciality Hospital",
            "Address": "Silver Star CHS, 1st Floor, B-wing, Shop No.3,4,5- Plot No. 50, 63, 64, 65 Sector- 18, Kamothe",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Orion Multispeciality Hospital",
            "Address": "Nirmal Chhaya Chs, Opp Agarwal Hall, Dombivali, Kalyan",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Ortho Centre Hospital",
            "Address": "Ananya, First floor, Gantali Devi Road, Near Ghantali Devi mandir Road, Naupada, Thane W",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Orthocare Hospital",
            "Address": "1st Floor, Gautam Chambers, Near Punjani Industrial Estate Near TMC School No.13",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Orthonova Hospital",
            "Address": "201-205 Soham Plaza Soham Gardens Opp Manpada PetrOL PUMP Manpada Junction, Ghodbunder Road,",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Oscar Hospital",
            "Address": "Nr Kasarvadavali Signal, Opp Jain Mandir G. B Rd, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Oscar Multispeciality Hospital",
            "Address": "Near Manpada Signal, Tikujiniwadi Road, Off Ghodbunder Road, Manpada",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Oscar Multispeciality Hospital",
            "Address": "Pooja Enclave, 15-22, D & E Wing, ganesh nagar, Kandivali West",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Oscar Superspeciality Hospital",
            "Address": "SHEPHERD ROYAL BLDG, A & B WING, 1ST , 2ND & 3RD FLOOR , OPP. DIVINE DIAGNOSTIC CENTRE, NR. BANGUR NAGAR METRO STATION, GOREGAON WEST. MUMBAI - 400104.",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Ozone Multispecilaity Hospital",
            "Address": "Ground Floor, Gagan Supreme Bldg, Next to fire Brigde Office , Vasai -Virar New Link Road- Vasai (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Padalkar Hospital & Sicu",
            "Address": "105 Neel Enclave, Sec 10, Khanda Colony, New Panvel, Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Padmani Nursing Home & Iccu",
            "Address": "110 First Floor, R.R.Realty, Above Axis Bank, Tank road. LBS Marg, Bhandup (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Padmawati Maternity & Nursing Home",
            "Address": "215/216, Oswal Oronote, 2nd Floor, Opp Jain Temple, Jesal Park, Bhayander (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Panacea Hospital",
            "Address": "Plot no.105/106, Sector -8, New Panvel (E) Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Panvel Hospital",
            "Address": "101/102, Plot No 260 A, Riddhi Siddhi Plaza, Uran Naka, Old Panvel",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Parakh Hospital Pvt Ltd",
            "Address": "Khokhani Lane, Opp Ghatkopar Railway Station, Ghatkopar(E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Paramount Clinic & Medical Research Centre",
            "Address": "Paramount House, Near Rupali Theatre, Shivaji Road, Panvel",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Paramount General Hospital & Iccu",
            "Address": "1st & 2nd FLOOR Laxmi Commerical Premises Saki Naka Junction",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Parvatibai Chavan Charitable Trust",
            "Address": "Yashwant Hospital Bldg, Dattamandir Cross Road No.1, Dhanukarwadi, Kandivali (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Patel Clinic",
            "Address": "Kuber Apartment, Joshi Ali, Panvel City Police Station",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Patel Nursing Home",
            "Address": "B, Vishal Apartment, Sir M V Road, Andheri (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Patoria Eye Clinic",
            "Address": "301, Mahavir Niwas, Sector - 21",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Phadke Hospital",
            "Address": "Gaurav Prasad Parnaka Opp Gajanan Maharaj Mandir",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Phoenix Hospital And Icu",
            "Address": "First Floor, Siddhivinayak Annesx, Shruti park Bus Stop, Dhokali Naka, Thane (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Phoenix Hospital Pvt Ltd",
            "Address": "Block No 895/1789, Near Guru Nanak High School, Kurla camp Road, Ulhasnagar(E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Phoenix Hospitals",
            "Address": "1st Floor, Poonam Residency 2 CHSL, Holy Cross Road, IC Colony, Borivali (W), Mumbai 400092",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Phoenix Hospitals Pvt Ltd",
            "Address": "CTS 374 B21 Padma nagar Chikuwadi Borivali W",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Pinnacle Orthocenter Llp",
            "Address": "First Floor, Blue Nile, Chandanwadi Signal, Panchpakdi, LBS Marg, Thane(W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Pkc Hospital",
            "Address": "Plot No 57, Sector -15 A, Vashi, Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Platinum Hospital",
            "Address": "colours space shopping mall, G-103,D D upadhyay marg , mulund Check naka ,Mulund",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Platinum Hospital Pvt Ltd",
            "Address": "Shree Sanklap siddhi complex Opp Range Office Vasai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Platinum Multispeciality Hospital",
            "Address": "Sai Priya Building, 1st Floor, Star Colony Manpada Road, Nr.Saibaba Mandir, L.B.Yende Compound, Dombivali \u20ac",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Polaris Hospital (unit Of Emr Healthcare Services Pvt Ltd )",
            "Address": "2nd Flor, Plot no.19-C, Opposite Shah Kingdom, Sector- 20, Kharghar, Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Pooja Nursing Home",
            "Address": "1st Floor, Shridhar Smruti, Behind Deodhar Hospital, Gokhale Road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Powai Polyclinic And Hospital",
            "Address": "19/A, Opp I.I.T. Main Gate, Powai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Prachin Healthcare Hospital",
            "Address": "Plot No 69/2 Behind Hotel Garden Panvel",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Pragati Hospital And Icu",
            "Address": "Ground Floor, Rajshree Sahu Maharaj Complex, Near RSM School, Rajiv Gandhi Nagar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Pragati Multispeciality Hospital",
            "Address": "Sai Vaibhave Bldg, First Floor, Near Mulgaonkar Hospital, R.J. Road, Dahisar (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Prakash Eye Care Centre",
            "Address": "Unit No 203, Link Lotus Bldg, Mith Chowky Signal, Opp Zenith Hospital, Link Rd Marve Rd Junction, Malad (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Prakruti Care Hospital & Iccu",
            "Address": "Siddheshwar Arcade, 2nd Floor, Opp. Manisha Nagar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Pranjali Maternity Surgical & General Hospital",
            "Address": "Veer Savarkar Nagar, Opp R J Thakur College",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Prathamesh Hospital",
            "Address": "Namdev Vihar, D-wing, 1st Floor, Don Bosco pre School, Chikanghar Rambhag No. 4, Kalyan (W) Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Prime Criticare Hospital",
            "Address": "Hasnain Tower, Kausa Mumbra, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Prism Eye Institute & Research Centre Llp",
            "Address": "Pl No 63 Sector 1 (S), Behind CIDCO Office New Panvel",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Priyadarshani Nursing Home",
            "Address": "1st,2nd & 3rd floor M-Baria Estate Kargil Nagar Road Opp- Manvel Pada Talao Virar East,Palghar-401305",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Purnima Hospital",
            "Address": "Road No.8, Daulat Nagar, Borivali East , Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Purohit Clinic",
            "Address": "Plot 78, MCCH Society Near BAMS High School,Panvel",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "R G Stone In Collaboration With Bhakti Vedanta Hospital",
            "Address": "Bhakti Vedanta Hospital, Shristi Complex, Bhakti Vedanta Swami Marg, Near Dalmia School & Royal College,",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "R G Stone Urological Research Institute",
            "Address": "21-A,Sita Bhuvan,14th A-Road,Ahimsa Marg,Khar West",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "R G Stone Urology & Laparoscopy ( Andheri (w)c",
            "Address": "C Wing Dhananjay APT , behind Balaji Studio Off Veera Desai road ,Andheri (W)400059",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "R G Stone Urology Centre (hira Mongi Navneet Hospital Mulund)",
            "Address": "Valji Ladha Road Mulund w",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "R R Hospital ( Unit Of Kagzi Hospital & Medical Research Centre )",
            "Address": "P 14 MIDC Phase Dombivali Milapnagar Opp Pendharkar college",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "R&R Eyecare Hospital",
            "Address": "01 Ground Floor 376 Sanjay Building 2, Telang Cross Rd Number 3",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Radha Krishna Hospital",
            "Address": "Satelite Garden, 1st Floor, Phase II, Film City Road, Hanuman Nagar, Bus Stop, Goregaon East",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Raghukamal Hospital Eye Care Centre",
            "Address": "Anthshil 66, 3rd Floor, Orlem Marve Road, Above Dena Bank, Opp. Garden Court Hotel, Malad (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Rajpal Hospital & Institute",
            "Address": "Plot No. 13, Sector 10, Near D-mart, Kopar Khairane, Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Raksha Multispeciality Hospital Pvt Ltd",
            "Address": "1st Floor, D-11, Asmita Jyoti Bldg, Near Atharva College, Charkop Naka, Marve Road, Malad (West), Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Ram Lok Ent Hospital",
            "Address": "Shree Sai Mahal Building, 1st Floor, Opposite Post Office, Fatak Road, Bhayander (W), Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Ranade Superspeciality Eye Centre",
            "Address": "103, Soham CHS, Above Karekar Jewellers, Opp. ShivSagar Hotel, Ram Maruti Road, Thane (w)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Rathod Hospital",
            "Address": "201 & 202, Motibhai Tower, Opp Badlapur West Railway Stn. Near Vaishali Theater, Badlapur (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Rathod Nursing Home",
            "Address": "Shiv Sagar Complex, Plot B, A Wing, T P Road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Ravi Surgical Nursing Home",
            "Address": "`B Kedarnath 60 Ft Road, Devchand Nagar, Opp : 52",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Reliance Hospital",
            "Address": "Plot No. X8 & X-8/1,MIDC TTC Industrial Area , Millenium Business Park, Kopar Khairane, Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Revival Bone And Joint Hospital",
            "Address": "Yojana Bld.,Off. Gokhale road near malhar cinema naupada thane west",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Riddhi eye clinic",
            "Address": "104/B.S.B. Apartment rai dongri, carter road: No.",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Riddhi Siddhi Hospital Pvt Ltd",
            "Address": "1st Floor ,Sheetal Plaza opp. Shivar Garden , Mira Bhayandar Road Bhayandar East Mumbai Maharashtra 401107",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Riddhi Vinayak Critical Care And Cardiac Centre",
            "Address": "Pushpachandra Apt., 559/1, Riddhi Vinayak Temple Lane, Nr N. L. High School, S. V. Road, Malad (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Riddhivinayak Multispeciality Hospital",
            "Address": "Plot 302, Near Railway Carshed, Ahead of Fun Fiesta Mall, Virar Nalasopara Road, Nallsopara West",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Risha Eye Hospital",
            "Address": "B-01/02, KRISHNA RETAIL SPACE, OPP. K.M.P.D. SCHOOL, TULINJ ROAD, NALLASOPARA EAST -401209",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Rohit Nursing Home",
            "Address": "Meher Co-operative Hsg Soc.,4 Shanti Nagar, S V Road, Dahisar(E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Romeen Medico Surgical Hospital",
            "Address": "Group No.1, Near BMC School, tagore Nagar -1, Vikhroli (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Royal Childrens Hospital",
            "Address": "Radha Krishna Sankool, Opp. Holy Cross Hospital, Karnik Road, Kalyan (W), Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Ruby Hospital",
            "Address": "Laxmi Shopping Centre, H.D Marg, Opp Ghatkopar Railway Station,(West) Mumba",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Ruby Medical Centre",
            "Address": "283/3633, Tagora Near Group No. 2, Near taxi Stand",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "S L Raheja Hospital",
            "Address": "Raheja Rugnalaya Marg, Mahim",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "S S Hospital And Research Center",
            "Address": "Pavanputra Enclave, Opp Jain Temple, Thane Bhiwandi Road -Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Saanvi Ent Hospital",
            "Address": "First floor, Shreeji Southern, Khadakpada Circle, Above Bikaner Sweets, Kalyan (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Saarth Netralaya",
            "Address": "102, Gautameshwar Dham, Ramnagar, Tandon road, Dombivli E, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Saarthi Hospital",
            "Address": "JAMUNA SADAN, 1ST FLOOR, M G ROAD, NR. PAANCH RASTA, MULUND WEST, MUMBAI - 400080",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sadguru Hospital",
            "Address": "Plot No. 170, Sector -25, Talavali Node, Ghansoli, Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Saee Children and Dental Hospital",
            "Address": "Ratnajyot Building, 1st Floor, Above Monginis Cake Shop, Near Vegetable Market, Lodha Heaven, Nilje, Dombivli (E), Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sahayog Hospital & Research Centre",
            "Address": "Yashwant Vihar Complex,Bolinj Virar (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sahil Hospital",
            "Address": "1st Floor, Tawde Niwas, Khopat, Thane (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sai Aashirwad Hospital",
            "Address": "Shivam, Sai Sadan, House No.1, Behind Rassaz Shopping Mall, Evershine Enclave, Mira Road (E), Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sai Aashirwad Hospital",
            "Address": "101/104, A wing, Ratnadeep building, navghar road, Bhayander (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sai Arogyam Multispecilaity Hospital And Iccu",
            "Address": "1st Avenue, Business Park, Near Durgadi Killa, Opp Fire brigade, Kalyan (W) 421301",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sai Child Care Clinic (dr Mohites Amrut Medical Foundation)",
            "Address": "Plot no 5-7, Vijay Marg, Opp fire Brigade, Sector 19, New Panvel (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sai Criticare Hospital",
            "Address": "Block C-1, Room No 2, Opposite Roshan Apartment, Ulhasnagar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sai Drishti Eye Hospital",
            "Address": "11, Natraj CHS, Plot 15, Sector-4, Sanpada, Sanpada Railway Station",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sai Hospital",
            "Address": "G 1st, 2nd, & 3rd Floor At Mashia Islampura CHS.Ltd. Behind Sion Hospaital Near Dharavi police Station, 90 Feet Road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sai Hospital",
            "Address": "VAIBHAV NAGARI KATAI NAKA 2ND 3RD AND 4TH FLOOR SURVEY 66 KALYAN SHIL PHATA DOMBIVALI EAST",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sai Hospital & Icu",
            "Address": "Hira Moti Shopping Centre, 2nd Floor, Near Checkna,Shivaji Nagar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sai Jyot Hospital",
            "Address": "Suchit Squere, 1st Floor, Besides Chiranjevi Hospital, Dr.R.P.Road, Dombivli (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sai Karuna Hospital",
            "Address": "101/102 FIRST FLOOR,VIVAAN HEIGHTS , Katemanivali , Kalyan , Maharashtra",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sai Kripa Hospital",
            "Address": "Ashish Co-op Hsg Soc, Rani Sati Marg Off. W E High, Malad (E), Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sai Seva Hospital & Iccu",
            "Address": "Row House B 1 Sec-4, Opp Cidco Wgt Tank, Airoli, Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sai Shraddha Hospital",
            "Address": "Klassik Arartment, Kopar Road, Dombivli (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sai Snehdeep Hospital",
            "Address": "Plot 12-13, Sector 20 Koparkhairne Next to Indian Oil Petrol Pump",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sai Swastik Multispeciality Hospital",
            "Address": "Shiv vaibhav Aprtment No 2, Near Vittal mandir, F-cabim , Vittalwadi, Kalyan (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sai Vedant Multispeciality Hospital",
            "Address": "Cabin Cross Road, Near East West Public Bridge, Opp Prem Sagar Baker, Bhayander East",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Saibaba Hospital & Polyclinic",
            "Address": "Shivshradha Complex, 1st Floor, B P Road, Bhayander (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Saidham Hospital",
            "Address": "Shiv Sai Aprt, Patil Wadi, Near Minatai thakre Udyan, Savarkar Marg, Wagale Estate",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Saijyot Hospital",
            "Address": "1st floor, Siddheshwar CHS, Plot No 105, Opp Punjab Nation Bank, Near Varishtha Hotel, Sector 2, Kopar Khairane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Saikripa Surgical & Maternity Hospital",
            "Address": "1st floor, E Wing, Shiv Shanti Complex, Next S.T. Depot, Badlapur (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sailee Hospital & Diagnostic Centre",
            "Address": "Prathmesh Horizon, New M.H.B. colony, New link road, Near Don Bosco School Borivali (W), Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Samarth Netralaya",
            "Address": "Siddhivinayak Residency, Office No 15 & 16, Plot No 18, Sector 20, Kharghar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Samartha Hospital",
            "Address": "Shop No 103 Ashadeep CHS Silver Park Mira Road (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sanchaiti Hospital Private Limited",
            "Address": "Near Big bazar Akurli Road Kandivili(E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sanjeevani Eye Hospital & Leser Vision Centre",
            "Address": "2ND Floor Alsinghani Chember, Near SBI bank, Kalyan Ambernath Road, Ulhasnagar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sanjeevani Eye Hospital Llp",
            "Address": "First Floor, Virandvan, Salasar CHS, Opp Maxus Mall, 150 Feet Road, Bhayander (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sanjeevani Mamta Hospital & Research Center",
            "Address": "11, Nityanand Nagar, Sahar Rd, Andheri -E,Mumbai - 69",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sanjeevani Nursing Home And Icu",
            "Address": "1st Floor, Neha Annexe, Khot Road, Near Madhuban Garden, Bhandup (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sanjeevani Surgical & General Hospital",
            "Address": "Bhavani Chambers, Kedarmal Road, Rani Sati Marg, Malad (E),",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sanjivani Hospital",
            "Address": "Rajkamal Bldg, 1st Floor, Opp Bus Depot, Sector -3 ,Airoli",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sapna Health Care Centre Pvt Ltd",
            "Address": "A Wing, Bhaveshwar Plaza, L.B.S. Marg, Ghatkopar (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sapphire Hospital Pvt Ltd",
            "Address": "kaveri Heights, Old Mumbai Pune Road, Kharegaon , Kalwa",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sarla Hospital & Icu (sarla Nursing Home)",
            "Address": "5 D, Dattatraya Road, Santacruz (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Satya Sai Platinum Hospital",
            "Address": "Gala no. G. -1, Floor, Seva Niktan Bldg, Near Aman Talkies, Ulhasnagar, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Satyam Multi Speciality Hospital & Trauma Centre",
            "Address": "F-5 Bldg sec-3E, opp fire station Kalamboli",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Satyam Multispeciality Hospital & Trauma Centre",
            "Address": "Plot No.12, Sector-14, Opposit D-Mart, Kopar Khairane , Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Satyam Nursing Home",
            "Address": "Bhaveshwar Plaza C Wing 2nd Floor, LBS Road, Ghatkopar (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sawant Hospital",
            "Address": "Ground Floor, Chamunda Villa Bldg, Dindayal Road, Near Samrat Hotel, Dombivli (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Seema Multispeciality Hospital",
            "Address": "Chawre Avenue, Nile more, near Fly over, Opp Snehanjali Electronices, Nalasopara-West",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Senses Eye & Ent Hospital",
            "Address": "2 nd Floor, Beauty Arcade, Opp Pratap Talkies,Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Seven Star Multispeciality Hospital",
            "Address": "Surbhi house, Dimple Arcade, Behind Sai Dham, Thakur Complex, Kandivali(E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sevenhills Healthcare Private Limited",
            "Address": "Marol-Maroshi Road, Andheri (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sfurti Hospital",
            "Address": "Station Road, Kulgaon Badlapur (E)Dist :- Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shah Children Hospital & New Born Care Centre",
            "Address": "A-Wing Arunoday Tower Kotan Nagar Opp Jaoli Bank J",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shahlife Line Hospital",
            "Address": "Geeta Nagar, Phase VII, Mira Bhayandar Road, Near flyover Bridge, Mira Road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shalom Medicare Pvt Ltd",
            "Address": "behind indralok phase vi,opp. Raj classic ,bhayander e thane 05",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shalyak Hospital",
            "Address": "S.K.Apartment, Bldg No.2, Dalwai Compound, Near Police Station, Jogeshwari (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shambharati Hospital",
            "Address": "1st Floor, Poonam Srushti, Above Pizza Hut, Opp S.K Stone, Mira-Bhyander Road,Mira Road (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shanti Nursing Home And Multispeciality Hospital",
            "Address": "First Floor, blue Flame Apartment, Above Kondor International, S.V.Road, Bandra (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shantiniketan Hospital",
            "Address": "E-Building, Ground Floor, L.BS Marg, Ghatkopar(W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sharan Nursing Home",
            "Address": "101 Dipti Solitaire, OppVanguard navnit Cloth Store Above Axis Bank, M G Road, Ghatkopar (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shelar Hospital & Icu",
            "Address": "Tulsi Perana CHS, Sector-1, Plot No-9, Khanda Colony, New Panvel, Raigad",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shettys Endoscopic Surgical Centre - Samarth Orthocare",
            "Address": "12A, Miniland, Tank Road, Bhandup West, Mumbai, Maharashtra",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shiv Om Hospital",
            "Address": "Shiv om towers mira bhayandar road,Mumbai,Opp. Golden Nest Complex,Poddar School",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shiv Polyclinic And Nursing Home",
            "Address": "16, Premnivas, Laxmi Colony, Mahul Road, Near Ashish Theater",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shivam Eye Foundation",
            "Address": "Sec - 25, Plot No.14, , Opp Seawood/Darave Railway Station",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shivam Hospital",
            "Address": "Shrenik,CHS Ltd Plot 106, Rsc 11 Sector - 2, Charkop, Kandivali (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shivam Hospital",
            "Address": "plot bno 57,crw ,chs,near MIDC-water tank,Kalyan Road,",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shivneri Hospital And Advanced Urology Center",
            "Address": "Near Vandana Cinema, Opp S.T.Mahamandal Depot, Panchpakhadi, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shraddha General Hospital",
            "Address": "1st floor, Vishal Marriage Hall Bldg, Hospital road,Near Nehru Chowk",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shraddha Hospital",
            "Address": "A, A2,B2, Ranjan Ritika, Near dahisar Police stan,",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shree Arihant Eye Care Centre",
            "Address": "101-102, Shree Shivam CHS,Raghunath Mhatre Road,Raghunath Mhatre Road,Dahisar(w), Mumbai-68.",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shree Childrens Hospital",
            "Address": "1st Floor, Harikrupa Apartment, Balai Road , Uran, Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shree Eye Hospital",
            "Address": "Sector 3 ,14, National CHS, Behind Airoli Bus Depot",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shree Ganesh Multi Speciality Hospital",
            "Address": "Bina Apt, Near Damodar Medical , L.T.Road, Vazira Naka, Borivali West",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shree Ganesh Nursing Home",
            "Address": "FF 001, Ship India, Vishwa Ganga Building, Bhagwati Hospital lane, Borivali (W), Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shree Hospital",
            "Address": "Ganeshbaug, Murbad Road, Opposite Saraswat Bank, Kalyan, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shree Krishna Hospital",
            "Address": "Plot No 161, Shree Krishna Nagar, Near Sona Theatre",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shree Maternity And General Hospital",
            "Address": "C-586, sector-25, Manera Road, Ulhasnagar, Near Welfare School, Ulhasnagar 421 004",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shree Multispeciality Hospital",
            "Address": "1st floor, Shree Avenue Building, Opp Muncipal Garden, Ramdev Park, Meera Road (E), Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shree Om Sai Hospital",
            "Address": "Suchak Appt, Pornima Bus Stop, Near Icici Bank, Kalyan (W), Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shree Ramkrishna Netralaya",
            "Address": "A 101/102/103 Shree Balaji Co-op, Hsg Society,1st Floor near Makhmali Talao, opp Risk care hospital LBS marg,",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shree Ramkrishna Netralaya",
            "Address": "Unit 1-4, Dosti Imperia Shopee, Opp R Mall, Manpada, Ghodbunder Road, Thane (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shree Ramkrishna Netralaya",
            "Address": "The Residency, Shop No.1/2,Sector 46 A / Plot No.4,Opp More Super Market.Seawoods Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shree Sadguru Krupa Accident And Fracture Hospital",
            "Address": "First floor, Mittal Heights, Near KDMC Ward, Gurudhan Hotel, Pune Link road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shree Sai Clinic",
            "Address": "Padmavati bldg.,unnat nagar road,no.-02,near patkar college, s.v. road,goregaon,west mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shree Sai Dutt Multispeciality Hospital",
            "Address": "Wada Bhiwandi Road Ambadi\\\\nTaluka Bhiwandi district Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shree Sai Multispeciality Hospital",
            "Address": "B101,A103,104, Plot No 3A, First Floor, Sinhgad Scociety, Sec 7 Kamothe",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shree Sai Multispeciality Hospital And Icu",
            "Address": "Grnd And 1 St Floor , Shantajyot Shopping Center, C.H.S Ltd, Manickpur Station Rd ,Vasai{ W} , Palghar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shree Siddhi Multispeciality Hospital",
            "Address": "Sai Kunj, Plot No. 120, Near Govandi Railway Station, Govandi (E), Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shree Siddhivinayak Hospital & Tanishka Polyclinic",
            "Address": "B/6, Prasanna Park Housing Society, Navghar Road, Behind Manish-Apartment, Near Venus Shiv Mandir, Bhayander (E), Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shree Siddhivinayak Urology & Multispeciality Hospital",
            "Address": "Unit no, 1 101/102, Parth Regency, Shivaji Path, Main Gate, Opp Nehru Maidan, Dombivali(E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shree Siddhivinyak Multispeciality Hospital",
            "Address": "A wing, 1st floor, Madhuvan Heights, Bldg 1, Mandhuvan Twonship, Nr. Evershine Gate, Gokhivare, Vasai (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shreedevi Hospital",
            "Address": "Aakash Arcade, Near Bhanu Sagar Theatre",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shreyas Hospital",
            "Address": "Dream House, Sainagar, Ambadi Road, Vasai (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shri Bal Chikitsalaya",
            "Address": "14-A, Miniland, Tank Road, Bhandup (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shri Ramkrishna Nursing Home",
            "Address": "Prajapati Cascade, 1st Floor, Sector-1, Road No.18, New Panvel, Raigad",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shripada Maternity & Paediatric Nursing Home",
            "Address": "C-wing, Regency Avenue, Near masjid, Syndicate Murbad Road, Near Masjid, Kalyan West, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shriyash Hospital",
            "Address": "BHALERAO APARTMENT KATERNANIVALI POONA LINK ROAD KALYAN EAST",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shubham Lifeline Multispeciality Hospital",
            "Address": "Makwana Complex, Veer Savarkar Marg, Near Ganpati mandir, Virar (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shushrusha Heart Care Centre & Speciality Hospital",
            "Address": "Plot no 22 A Phase III Plam Beach Road Sector 6 Nerul, Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shushrusha Suman Ramesh Tulsiani Hospital",
            "Address": "Plot No.356/A/2, Lt.Atamram Surve Marg, Vikhroili (E), Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Shushrusha Superspeciality Hospital",
            "Address": "5th-6th Floor, Old Sutika Gruha Building, Near Old Post Office, Pathvardhan Road, Old Panvel, 410206",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Siddh Pooja Hospital",
            "Address": "Plot No. 51, Sec. 1, Pam Beach Sanpada 4 , Sanpada",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Siddharth Hospital",
            "Address": "Rashmi Pink City, Near Don Bosco School, Naigaon (E), Palghar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Siddhi Nursing Home",
            "Address": "16/121, Anand Nagar, Near Vakola Bridge, Santacruz E, MUMBAI",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Siddhivinayak Multispeciality Hospital & Icu",
            "Address": "236 -263 , first and Second Floor, Vedant Complex, vartak nagar, Thane West",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Siddhivinayak Multispecilaity Hospital And Cardiac Care Center",
            "Address": "Bramin Society, Opp ICICI Bank, Murbad Road, Kalyan (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sir H N Reliance Foundation Hospital And Research Centre",
            "Address": "Padmasr, Raja Rammohan Roy Road, Prarthana Samaj",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Smt S R Mehta & Sir K P Cardiac Institute",
            "Address": "Plot No 96, Road No 31, Near Gandhi Market, King Circle",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Spandan Hospital & Icu",
            "Address": "Priyadarshani CHS, Fist floor, Above Allhabad Bank, Phule Road, Dombivali (W), Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sparsh Children Hospital",
            "Address": "Ganesh Lehar Villa, Opp. Nitin Raj Hotel, Near Katemanvli Fly over, Pune Link Road, Katemanavli Naka, Kalyan (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sparsh Children Hospital",
            "Address": "Krish Royale, 1st, 2nd, 3rd floor, Acharya Donde Marg, next to Dutta mandir, Opp Wadia Children Hospital, Parel Naka, Parel (E), Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sparsh Multi Speciality Hospital & Iccu",
            "Address": "First Floor, Sudama Arcade, Bld, R.P.Road, Tilak Nagar, Dombivali East",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sparsh Superspeciality Hospital",
            "Address": "141, Sai Arcade, Mission Compound, Line Ali, Opp Orion Mall",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Speciality Surgical Oncology And Research Centre",
            "Address": "6th Floor Silver Point,Lal Bahadur Shastri Rd,Maneklal Estate Ghatkopar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Spectrum Hospital",
            "Address": "Near BSNL Agra Road, Kalyan Road(w)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Srcc Children Hospital ( Unit Of Narayana Hrudalaya Ltd)",
            "Address": "1, Keshrao Kadam Marg, Haji Ali Govt Colony, Mahalaxmi, Opp Welligaton Club",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Srushti Orthotech Hospital",
            "Address": "R R Realty 1st Floor, Junction of LBS Road & Tank Road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Srv Hospital",
            "Address": "179/180, Kamala Charan Building, Jawahar Nagar, Road No 2, Goregaon(W), Mumbai 400062",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "SRV Hospital",
            "Address": "Opposite Lokmanya Tilak Terminus Dr. Mandakini Parihar Marg Tilak Nagar Chembur-400089",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Srv Mamta Hospital",
            "Address": "P-43, Phase -2, Next to ICICI Bank, MIDC, Dombivali (East), Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "St Marys Maternity & Surgical General Hospital",
            "Address": "Om Sai Darshan chs ltd, Above Malad Sahakari Bank, Kurar Village, Malad (E), Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Star City Multispeciality Hospital Pvt Ltd",
            "Address": "Anant Sudha Bhavan Gopal Chowk Chakki Naka Kalyan (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Star Hospital",
            "Address": "STAR HOSPITAL, BESIDES KRISH GARDEN BLDG, OPPOSITE SHANI MANDIR, LAXMIBEN CHHEDA MARG, PATANKAR PARK, NALLASOPARA (WEST), PALGHAR 401203",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "STH Hospitals Pvt Ltd",
            "Address": "G- ABHISHEK APARTMENTS JUHU VERSOVA LINK ROAD ANDHERI WEST MUMBAI",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sujay Hospital",
            "Address": "25, Gulmohar Park, Gulmohar Road,Juhu Scheme, Vile Parle( west)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sukham Hospital",
            "Address": "Ganesh Nagar , Behind Ganesh mandir, Karanjade, Panvel",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sulochan Eye Hospital",
            "Address": "7/6r.R. point Grount Floor Off LBS Marg opp dreams mall bhandup (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Suman Eye Clinic & Surgery Centre",
            "Address": "B/103, Suman Apartment, 3rd Cross Lane, Lokhandwala Complex, Andheri (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sumangal Hospital",
            "Address": "B-Mitnayan Chs Ltd, Old Link Road, Ganesh nagar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sun Hospital",
            "Address": "Excel House, Opp SNDT College, Near Libetry Garden, Malad(W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sunrise Multispeciality Hospital",
            "Address": "Shiv Kalpataru Arcade Plot No 01 Sec 17 Kamothe",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sunshine Eye Care Hospital",
            "Address": "F-4, B-2, Above Warna Dairy, Sector -9, Vashi, Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sunshine Hospital",
            "Address": "Plot No.3, Sector-16, Opp Sea Breeze Society, Nerul(W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sunshine Hospital",
            "Address": "Amita Apartment,C-Wing,1st floor,opp Rahul Electronics,Main Carter Road, & Carter Road No.5,Borivali-East. Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Surana Hospital & Research Centre",
            "Address": "Tank Road, shankar lane, near Skywalk Tower,near orlem church Malad (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Surana Sethia Hospital & Research Centre",
            "Address": "Suman Nagar Sion Trombay Rd , opp Corporate Park",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Surekha Criticare Hospital",
            "Address": "Ground & 1st Floor Doctor House Near Ashok Anil Multiplex, Ulhas Nagar, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Suruchi Eye Centre",
            "Address": "B-2, Asiatic Coop H Soc, Sec-4, Near Max Mall, Airoli",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Surya Childrens Hospital",
            "Address": "101,102 Mangle Ashirwad Junction of SV Road TPS 2, Dattatray Road",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Surya Children's Medicare Pvt Ltd",
            "Address": "Shrikant Chambers II, V N Purav Marg, Chembur East, Mumbai 400 071",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Surya Eye And Research Center Private Limited.",
            "Address": "104, Aroto House, P K Road, Saidham, Mulund (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sushrut Hospital",
            "Address": "Satyam Complex 1st Floor Station Road Opp Axis Bank Nallasopara (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sushrut Hospital & Research Centre",
            "Address": "365 Swastik Park, Chembur (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Sushrut Maternity And Surgical Nursing Home",
            "Address": "102, Bld No.5 Sidhartha Nagar, Mira Road (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Suvidha Hospital",
            "Address": "275, Ground Floor, Jawahar Nagar, Goregaon (W), Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Suyash Hospital",
            "Address": "51 Ugam complex Sector 40 Seawoods west Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Suyash Surgical & Maternity Home",
            "Address": "Flat no 101 / 102 Satyam Society , Above Trupti Hotel , Sec 2 E ,Kalamboli",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Swami Krupa Nursing Home",
            "Address": "Plot No.159, Sector 14, Kamothe Gaon Road, Near Krishna Hotel, Kamothe, Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Swami Sarvanand Hospital",
            "Address": "Near Old Bus Terminus, Ulhasnagar Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Swaraashi Netralaya",
            "Address": "Plot No. 16, Zone 5/199, Unit No. 2, Sector -28, Vashi, Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Swayam Hospitals",
            "Address": "Tiara Commercial Complex, Ground Floor, Pokhran Road No. 2, Vasant Vihar, Thane W",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Tanwar Hospital",
            "Address": "Tanwar Tower, P K Rd, Mira Road (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Tej Vedaant Healthcare Private Ltd",
            "Address": "Plot No. 84, Natasha Tower, Opp Gurudwara, Sector 17, Koparkhairne, Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Terna Sahyadri Speciality Hospital & Research Center",
            "Address": "Plot No 12, Sector-22, Phase-2, Nerul (W), Opp Nerul Railway Station, Navi Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Thane Noble Hospital Llp",
            "Address": "3A/308, Solitair, Cosmos Jwels, Kavasar, Ghodbunder Road, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "The Children Hospital",
            "Address": "Khandelwal layout, Linking Road, Malad West",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "The Kalyan Hospital",
            "Address": "Ground floor, Gagangiri Enclave, B-11, Near Godrej Hill, KhadakPada, Kalyan (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "The R Jhunjhunwala Sankara Eye Hospital",
            "Address": "PLOT NUMBER 13,SECTOR 5A, NEW PANVEL MAHARASHTRA- 410206",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Theji Hospital",
            "Address": "B-103, 1st Floor, Aniraj Tower CHS Ltd, LBS Marg, Bhandup(W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Thunga Healthcare Llp",
            "Address": "Goraswadi Road, Opp Nirman Diagnostic Center, Malad (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Thunga Hospital Pvt Ltd",
            "Address": "renuja dham,nearraymonds showroom,mira bhayander road,mira road east.",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Titan Hospital",
            "Address": "soham plaza(N-E),Manpada circle,ghodbandar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Tomar Nursing Home",
            "Address": "Prabhu Apartment, Near Union Bank of India",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Trident Hospital",
            "Address": "B-6/7/8, 1st Floor, Pooja Enclave, Opp Ganesh Nagar, Kandivali (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Trupti Hospital Maternity Surgical & General",
            "Address": "COSMOS PARADISE,DEVDAYA NAGAR, THANE (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Tulsi Memorial Hospital",
            "Address": "12/13/60/61, 1st floor,S-2, Vedant Commercial Complex, Vartak Nagar, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "United Multispeciality Hospital",
            "Address": "Paccha Plaza ,Samel Pada Nalasopara West.Dist - Palghar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "United Multispeciality Hospital",
            "Address": "Shop No. 1,2,3A,Kesar Ashish CHS, , Kandivali West , Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Universal Multispeciality Hospital",
            "Address": "1st Floor, Teejadeep Heights, Opp. Ginger Hotel, LBS Road, Gokul Nagar, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Unnati Hospital & Icu",
            "Address": "J K Plaza 1st Floor Opp Durgamata Mandir Shivaji Chowk",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Unnati Hospital And Bombay Spine Centre",
            "Address": "13 Om Tower, S V Road, Kandivali (W), Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "V Care Hospital & Icu",
            "Address": "App Bldg No 101 Nehru Nagar Kurla East",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Vaibhav Multispeciality Hospital",
            "Address": "102/103,Ground1St Floor, Mrunmayi Palace, Near Chattri Bunglow, Chikanghar, Kalyan (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Varad Hospital & Icu",
            "Address": "Vaity Villa, Janardhan Vaity Marg, Utalsar Naka, Thane (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Vardann Hospital",
            "Address": "C-2,D-2, Ground Floor, Sonal Link Residency Chsl, Mith Chowky Junction, Link Road, Malad (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Vardann Multispecialtiy Hospital",
            "Address": "Arch Gold , Next to Poisar Telephone exchange, S.V.Road, Kandivali West",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Vardhaman Hospital & Iccu",
            "Address": "Sheetal Apt B Wing J M Road Opp Shiv Sena Shakha Bhandup (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Varun Cardiac Clinic",
            "Address": "101-102, Gayatridham, Deresar Lane, Ghatkopar (E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Vatsal Eye Care & Laser Centre",
            "Address": "B/2 Panchal Nagar, Station Road, Vasai West",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Vatsalya Nursing Home",
            "Address": "1st Floor, Shri Sai Krupa Appt, Near Poornima Cinema, Santoshi Mata Road, Kalyan W, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Ved Hospital Superspeciality & Medical Research Pvt Ltd",
            "Address": "Vedant Chamber Kalyan Bhiwandi Road Kongaon Tal Bhiwandi",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Vedant Hospital",
            "Address": "Kasar vadavali Ghodbunder Road Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Vedant Kalyan Hospital",
            "Address": "RIVER VIEW EASTE, BULDG NO.5 ADHARWADI ROAD, NEAR K.M. AGARWAL ,OPP GANDHARI OCTROI NAKA,KALYAN (W)421301",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Vedant Multispeciality Hospital",
            "Address": "1st Floor, Safal Shopping Center, NNP, Off Filmcity Road, Goregaon (E), Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Vedant Multispeciality Hospital & Research Centre",
            "Address": "S 3 2nd Floor Vedant Commercial Complex Vartak Nagar",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Veer Hospital & Icu",
            "Address": "Neel Exclave Bldg 2nd Floor Plot no 1 sector 9 Khanda Colony New Panvel",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Venkatesh Hospital",
            "Address": "Plot No 7, Khadakpada, Barave Rd, Kalyan (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Venkatesh Multi Speciality Hospital",
            "Address": "A- 13, Silver Spring,Plot No. 6,Taloja Midc, Opp. Dena Bank Taloja, Navi Mumbai, Taloja , Panvel",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Venus Hospital",
            "Address": "Status Building,101 & 102, Aadharwadi Chowk, Kalyan (West)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Venus Hospital And Icu",
            "Address": "Near Amba Bhavani Mandir, Dombivali Kopar Road, Dombivli (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Vijay Vallabh Hospital And Research Center",
            "Address": "Tirupati Lifecare LLP Unit, Tirupati nagar, Phase 1, Bolinj, Virar (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Vijayalaxmi Maternity, Surgical & General Hospital",
            "Address": "A/101-104,Savita Appartment,near new kanchan school,nallasopara.",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Vin- R Eye Care & Laser Centre",
            "Address": "B/F-001, Sai Shraddha CHS. LTD,B/H Bus Depot, Hariyali Village, Vikhroli(E), Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Vinayaka Hospital",
            "Address": "Doctor House, Opp Anchor Park, Village Achole, Nallasopara (E), Vasai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Vithalkrupa Hospital",
            "Address": "B1-6, Ground Floor, Ram Apartment, Katemaniveli Chowk, Kalyan(E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Vivanta Hospital",
            "Address": "JP Residency, Chincholi Bunder Road, Malad (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Walvatkars Eye Care Centre",
            "Address": "110/ B, Krishna Tower, Kapurbawadi Junction, Above Sanman Restourant, Ghodbunder Road, Thane (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Wavikars Eye Institute",
            "Address": "4th & 5th Floor Level, Amber Arcade, Off Bhiwandi Bypass Road, Near Lodha Paradise, Majiwadi, Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Wellam Hospital And Diagnostics",
            "Address": "1St Floor, Tiara Commercial Complex , Pokharan Road No-2,Opp Gandhi Nagar Water Tank, Thane-400606",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Wockhardt Hospital Ltd",
            "Address": "Asmita Enclave Mira Road Thane",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Wockhardt Hospitals Ltd",
            "Address": "Dr Anandrao Nair Road, Mumbai Central, Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "World Gastroentrology Institute (wgi)",
            "Address": "Amboli Naka, Next to ICICI Prudential Andheri West",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Yashadaa Hospital",
            "Address": "119-125 Sky City Retail, First Floor, Opposite Bhandup Police Station Lake Road, Bhandup (W), Mumbai",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Yashoda Childrens & General Hospital",
            "Address": "B/10,Madhu Maitry Apartment.Above PMC Bank.Near Manvel Pada Talav,Virar -East, 401303",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Yashoda Hospital",
            "Address": "First Floor, Satyam Arcade, Plot 26, Sector 21, Kamothe",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Yashoda Maternity & Nursing Home",
            "Address": "First floor, Sanghavi Sai Dharshan, Near Silver Park, Opp Saibaba temple, Mira -Bhayander road, Mira Road East.",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Yashwant Hospital",
            "Address": "Tagore Nagar, Group No 8-B, Opp Tagore Nagar Post, Vikhroli(E)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Zen Multispeciality Hospital",
            "Address": "Plot No.425, 10th Road, Chembur",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Zenith Hospital",
            "Address": "Path Business Plaza Mith Chowki Link Road Malad (W)",
            "CITY": "Mumbai"
        },
        {
            "HOSPITAL NAME": "Zynova Hospitals Pvt Ltd",
            "Address": "Acme Elanza, CTS 1900 - 1917, LBS Marg, Ghatkopar (W), Mumbai - 400 086",
            "CITY": "Mumbai"
        }
    ];
