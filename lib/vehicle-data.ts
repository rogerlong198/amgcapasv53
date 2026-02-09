// Variation types
export const T_PORTAS = ["2 Portas", "4 Portas"]
export const T_PORTAS_PAJERO = ["3 Portas (Short)", "5 Portas (Long)"]
export const T_CAMBIO = ["Câmbio Manual", "Câmbio Automático"]
export const T_CABINE = ["Cabine Simples", "Cabine Estendida", "Cabine Dupla"]
export const T_CABINE_SD = ["Cabine Simples", "Cabine Dupla"]

// Truck cab types
export const T_CAM_VW = ["Cabine Simples (Day)", "Cabine Estendida", "Cabine Leito Teto Baixo", "Cabine Leito Teto Alto"]
export const T_CAM_MB_ATEGO = ["Cabine Simples (Curta)", "Cabine Estendida", "Cabine Leito Teto Baixo", "Cabine Leito Teto Alto"]
export const T_CAM_MB_AXOR = ["Cabine Estendida (Teto Baixo)", "Cabine Leito Teto Baixo", "Cabine Leito Teto Alto"]
export const T_CAM_VOLVO_FH = ["Teto Baixo", "Globetrotter", "Globetrotter XL"]
export const T_CAM_VOLVO_VM = ["Cabine Simples", "Cabine Leito"]
export const T_CAM_SCANIA_ANTIGO = ["Cabine P (Baixa)", "Cabine R (Alta)", "Cabine T (Bicuda)"]
export const T_CAM_SCANIA_R = ["Cabine P", "Cabine G", "Cabine R (Normal)", "Cabine R (Highline)"]
export const T_CAM_SCANIA_NTG = ["Cabine P", "Cabine G", "Cabine R", "Cabine S (Piso Plano)"]
export const T_CAM_DAF = ["Space Cab (Teto Baixo)", "Super Space Cab (Teto Alto)"]
export const T_CAM_IVECO = ["Teto Baixo", "Teto Alto"]
export const T_CAM_FORD = ["Cabine Simples", "Cabine Leito"]
export const T_CAM_MAN = ["Cabine XL", "Cabine XLX", "Cabine XXL"]

export interface VehicleInfo {
  inicio: number
  fim: number | null
  vars: string[] | string | null
}

export interface VehicleDatabase {
  [brand: string]: {
    [model: string]: VehicleInfo
  }
}

export const dadosCarros: VehicleDatabase = {
  "BMW": {
    "116i / 118i (Série 1)": { inicio: 2004, fim: null, vars: T_PORTAS },
    "120i / 125i (Série 1)": { inicio: 2004, fim: null, vars: T_PORTAS },
    "316i / 318i (Série 3)": { inicio: 1991, fim: 2015, vars: null },
    "320i (Série 3)": { inicio: 1998, fim: null, vars: null },
    "325i / 328i (Série 3)": { inicio: 1991, fim: 2019, vars: null },
    "330i / 335i (Série 3)": { inicio: 2000, fim: null, vars: null },
    "420i / 428i / 430i (Série 4)": { inicio: 2013, fim: null, vars: ["Coupé", "Gran Coupé", "Cabrio"] },
    "528i / 530i (Série 5)": { inicio: 1996, fim: null, vars: null },
    "540i / 550i (Série 5)": { inicio: 1996, fim: null, vars: null },
    "745Li / 750Li (Série 7)": { inicio: 1990, fim: null, vars: null },
    "X1 sDrive18i / 20i": { inicio: 2010, fim: null, vars: null },
    "X1 xDrive25i / 28i": { inicio: 2010, fim: null, vars: null },
    "X2 sDrive18i / 20i": { inicio: 2018, fim: null, vars: null },
    "X3 xDrive20i / 30i": { inicio: 2004, fim: null, vars: null },
    "X4 xDrive28i / 30i": { inicio: 2014, fim: null, vars: null },
    "X5 xDrive30d / 45e": { inicio: 2000, fim: null, vars: null },
    "X6 xDrive35i / 40i": { inicio: 2008, fim: null, vars: null },
    "X7 xDrive40i / 50i": { inicio: 2019, fim: null, vars: null },
    "Z4 Roadster": { inicio: 2002, fim: null, vars: null },
    "i3 (Elétrico)": { inicio: 2013, fim: 2022, vars: null },
    "i4 (eDrive35/M50)": { inicio: 2021, fim: null, vars: null },
    "iX (xDrive40/50)": { inicio: 2021, fim: null, vars: null },
    "iX1": { inicio: 2023, fim: null, vars: null },
    "iX3": { inicio: 2021, fim: null, vars: null }
  },
  "Mercedes-Benz": {
    "A160 / A190 (Classe A Antigo)": { inicio: 1999, fim: 2005, vars: null },
    "A200 / A250 (Classe A Novo)": { inicio: 2013, fim: null, vars: null },
    "B200 (Classe B)": { inicio: 2005, fim: 2020, vars: null },
    "C180 (Classe C)": { inicio: 1994, fim: null, vars: null },
    "C200 (Classe C)": { inicio: 1994, fim: null, vars: null },
    "C250 / C300 (Classe C)": { inicio: 2010, fim: null, vars: null },
    "CLA 200 / 250": { inicio: 2013, fim: null, vars: null },
    "GLA 200 / 250": { inicio: 2014, fim: null, vars: null },
    "GLK 220 / 280 / 300": { inicio: 2008, fim: 2015, vars: null },
    "GLC 250 / 300": { inicio: 2015, fim: null, vars: ["SUV", "Coupé"] },
    "ML 320 / 350 (GLE)": { inicio: 1998, fim: null, vars: null },
    "SLK 200 / 250 (SLC)": { inicio: 1996, fim: 2020, vars: null },
    "Classe X 250d / 350d": { inicio: 2018, fim: 2020, vars: null },
    "Vito": { inicio: 2015, fim: 2019, vars: null },
    "Sprinter (Van/Furgão)": { inicio: 1997, fim: null, vars: null }
  },
  "Fiat": {
    "Strada": { inicio: 1998, fim: null, vars: "SPECIAL_STRADA" },
    "Strada Adventure": { inicio: 2001, fim: 2020, vars: "SPECIAL_STRADA" },
    "Toro": { inicio: 2016, fim: null, vars: T_CAMBIO },
    "Uno Vivace": { inicio: 2010, fim: 2016, vars: T_PORTAS },
    "Uno (Quadrado)": { inicio: 1984, fim: 2013, vars: T_PORTAS },
    "Palio (G1 a G4)": { inicio: 1996, fim: 2016, vars: T_PORTAS },
    "Palio Adventure": { inicio: 1999, fim: 2020, vars: T_CAMBIO },
    "Palio Weekend": { inicio: 1997, fim: 2020, vars: T_CAMBIO },
    "Novo Palio (G5)": { inicio: 2012, fim: 2018, vars: T_CAMBIO },
    "Grand Siena": { inicio: 2012, fim: 2021, vars: T_CAMBIO },
    "Argo": { inicio: 2017, fim: null, vars: T_CAMBIO },
    "Cronos": { inicio: 2018, fim: null, vars: T_CAMBIO },
    "Pulse": { inicio: 2021, fim: null, vars: T_CAMBIO },
    "Fastback": { inicio: 2022, fim: null, vars: null },
    "Fastback Abarth": { inicio: 2023, fim: null, vars: null },
    "Mobi": { inicio: 2016, fim: null, vars: null },
    "Fiorino": { inicio: 1980, fim: null, vars: null },
    "Idea": { inicio: 2003, fim: 2016, vars: T_CAMBIO },
    "Punto": { inicio: 2005, fim: 2018, vars: T_CAMBIO },
    "Linea": { inicio: 2007, fim: 2017, vars: T_CAMBIO },
    "500": { inicio: 2007, fim: null, vars: T_CAMBIO },
    "Doblo": { inicio: 2001, fim: 2021, vars: null },
    "Freemont": { inicio: 2011, fim: 2016, vars: null },
    "Titano": { inicio: 2024, fim: null, vars: null },
    "Stilo": { inicio: 2002, fim: 2010, vars: T_CAMBIO },
    "Bravo": { inicio: 2010, fim: 2016, vars: T_CAMBIO },
    "147": { inicio: 1976, fim: 1987, vars: null },
    "Tempra": { inicio: 1990, fim: 1999, vars: null },
    "Marea": { inicio: 1996, fim: 2007, vars: null },
    "Ducato": { inicio: 1998, fim: null, vars: ["Furgão", "Minibus"] },
    "Scudo": { inicio: 2022, fim: null, vars: null }
  },
  "Chevrolet": {
    "S10": { inicio: 1995, fim: null, vars: "SPECIAL_PICKUP" },
    "Onix": { inicio: 2012, fim: null, vars: T_CAMBIO },
    "Prisma": { inicio: 2006, fim: 2019, vars: T_CAMBIO },
    "Celta": { inicio: 2000, fim: 2015, vars: T_PORTAS },
    "Corsa Hatch": { inicio: 1994, fim: 2012, vars: T_PORTAS },
    "Classic": { inicio: 1996, fim: 2016, vars: null },
    "Cobalt": { inicio: 2011, fim: 2020, vars: T_CAMBIO },
    "Spin": { inicio: 2012, fim: null, vars: T_CAMBIO },
    "Cruze": { inicio: 2011, fim: null, vars: T_CAMBIO },
    "Tracker": { inicio: 2013, fim: null, vars: T_CAMBIO },
    "Equinox": { inicio: 2017, fim: null, vars: null },
    "Montana": { inicio: 2003, fim: null, vars: null },
    "Blazer": { inicio: 1995, fim: 2011, vars: null },
    "Trailblazer": { inicio: 2012, fim: null, vars: null },
    "Captiva": { inicio: 2008, fim: 2017, vars: null },
    "Astra": { inicio: 1998, fim: 2011, vars: T_PORTAS },
    "Vectra": { inicio: 1993, fim: 2011, vars: T_CAMBIO },
    "Silverado": { inicio: 1997, fim: 2001, vars: null },
    "D20": { inicio: 1985, fim: 1997, vars: T_CABINE_SD },
    "Agile": { inicio: 2009, fim: 2014, vars: null },
    "Opala": { inicio: 1968, fim: 1992, vars: T_PORTAS },
    "Chevette": { inicio: 1973, fim: 1994, vars: null },
    "Monza": { inicio: 1982, fim: 1996, vars: T_PORTAS },
    "Kadett": { inicio: 1989, fim: 1998, vars: null },
    "Omega": { inicio: 1992, fim: 1998, vars: null },
    "Meriva": { inicio: 2002, fim: 2012, vars: T_CAMBIO },
    "Zafira": { inicio: 2001, fim: 2012, vars: T_CAMBIO }
  },
  "Ford": {
    "Ranger": { inicio: 1994, fim: null, vars: "SPECIAL_PICKUP" },
    "Ranger Raptor": { inicio: 2024, fim: null, vars: null },
    "F-100": { inicio: 1957, fim: 1986, vars: null },
    "F-150": { inicio: 2023, fim: null, vars: null },
    "F-150 Raptor": { inicio: 2023, fim: null, vars: null },
    "Ka": { inicio: 1996, fim: 2021, vars: T_PORTAS },
    "Fiesta Hatch": { inicio: 1996, fim: 2019, vars: T_PORTAS },
    "Ecosport": { inicio: 2003, fim: 2021, vars: T_CAMBIO },
    "Focus": { inicio: 1998, fim: 2019, vars: T_CAMBIO },
    "Fusion": { inicio: 2006, fim: 2020, vars: null },
    "Edge": { inicio: 2008, fim: 2020, vars: null },
    "Territory": { inicio: 2019, fim: null, vars: null },
    "Bronco Sport": { inicio: 2020, fim: null, vars: null },
    "Maverick": { inicio: 2021, fim: null, vars: null },
    "Mustang": { inicio: 2018, fim: null, vars: null },
    "Transit": { inicio: 2009, fim: null, vars: ["Furgão", "Minibus"] },
    "Courier": { inicio: 1997, fim: 2013, vars: null },
    "F-250": { inicio: 1998, fim: 2011, vars: T_CABINE_SD },
    "Escort": { inicio: 1983, fim: 2003, vars: T_PORTAS },
    "Corcel": { inicio: 1968, fim: 1986, vars: null }
  },
  "Toyota": {
    "Hilux": { inicio: 1990, fim: null, vars: "SPECIAL_PICKUP" },
    "Corolla": { inicio: 1998, fim: null, vars: T_CAMBIO },
    "Corolla Cross": { inicio: 2020, fim: null, vars: null },
    "Etios": { inicio: 2010, fim: 2021, vars: T_CAMBIO },
    "Yaris": { inicio: 2018, fim: null, vars: T_CAMBIO },
    "SW4": { inicio: 1992, fim: null, vars: T_CAMBIO },
    "RAV4": { inicio: 2000, fim: null, vars: null },
    "Camry": { inicio: 1992, fim: null, vars: null },
    "Prius": { inicio: 1997, fim: 2022, vars: null }
  },
  "Volkswagen": {
    "Amarok": { inicio: 2010, fim: null, vars: "SPECIAL_PICKUP" },
    "Gol": { inicio: 1980, fim: 2022, vars: T_PORTAS },
    "Saveiro": { inicio: 1982, fim: null, vars: T_CABINE },
    "Polo": { inicio: 2002, fim: null, vars: T_CAMBIO },
    "Virtus": { inicio: 2017, fim: null, vars: T_CAMBIO },
    "Fox": { inicio: 2003, fim: 2021, vars: T_PORTAS },
    "Up!": { inicio: 2014, fim: 2021, vars: T_PORTAS },
    "Golf": { inicio: 1994, fim: 2020, vars: T_CAMBIO },
    "Jetta": { inicio: 1981, fim: null, vars: T_CAMBIO },
    "T-Cross": { inicio: 2018, fim: null, vars: T_CAMBIO },
    "Nivus": { inicio: 2020, fim: null, vars: null },
    "Taos": { inicio: 2021, fim: null, vars: null },
    "Tiguan": { inicio: 2007, fim: null, vars: null },
    "Fusca": { inicio: 1938, fim: 1996, vars: null },
    "Kombi": { inicio: 1950, fim: 2013, vars: null },
    "Voyage": { inicio: 1981, fim: null, vars: T_CAMBIO },
    "Parati": { inicio: 1982, fim: 2012, vars: T_PORTAS },
    "Santana": { inicio: 1984, fim: 2006, vars: T_PORTAS },
    "Passat": { inicio: 1974, fim: 2019, vars: null },
    "ID.4": { inicio: 2023, fim: null, vars: null },
    "ID.Buzz": { inicio: 2024, fim: null, vars: null }
  },
  "Mitsubishi": {
    "L200 Triton": { inicio: 2008, fim: null, vars: "SPECIAL_PICKUP" },
    "L200 (Antiga)": { inicio: 1998, fim: 2012, vars: T_CABINE_SD },
    "Pajero TR4": { inicio: 2002, fim: 2015, vars: T_CAMBIO },
    "Pajero Dakar": { inicio: 2009, fim: 2016, vars: T_CAMBIO },
    "Pajero Full": { inicio: 1999, fim: 2021, vars: T_PORTAS_PAJERO },
    "ASX": { inicio: 2010, fim: null, vars: null },
    "Outlander": { inicio: 2008, fim: null, vars: null },
    "Eclipse Cross": { inicio: 2018, fim: null, vars: null },
    "Lancer": { inicio: 2011, fim: 2019, vars: T_CAMBIO },
    "Pajero Sport": { inicio: 1999, fim: null, vars: T_CAMBIO }
  },
  "Nissan": {
    "Frontier": { inicio: 1997, fim: null, vars: "SPECIAL_PICKUP" },
    "Kicks": { inicio: 2016, fim: null, vars: T_CAMBIO },
    "March": { inicio: 2010, fim: 2020, vars: null },
    "Versa": { inicio: 2011, fim: null, vars: T_CAMBIO },
    "Sentra": { inicio: 2007, fim: null, vars: T_CAMBIO },
    "Livina": { inicio: 2009, fim: 2014, vars: T_CAMBIO },
    "Tiida": { inicio: 2007, fim: 2013, vars: T_CAMBIO }
  },
  "Honda": {
    "Civic": { inicio: 1998, fim: null, vars: T_CAMBIO },
    "Fit": { inicio: 2003, fim: 2021, vars: T_CAMBIO },
    "City": { inicio: 2009, fim: null, vars: T_CAMBIO },
    "HR-V": { inicio: 2015, fim: null, vars: T_CAMBIO },
    "WR-V": { inicio: 2017, fim: 2021, vars: null },
    "CR-V": { inicio: 2000, fim: null, vars: null },
    "Accord": { inicio: 1990, fim: null, vars: null },
    "ZR-V": { inicio: 2023, fim: null, vars: null },
    "Civic Type R": { inicio: 2023, fim: null, vars: null }
  },
  "Hyundai": {
    "HB20": { inicio: 2012, fim: null, vars: T_CAMBIO },
    "HB20S": { inicio: 2013, fim: null, vars: T_CAMBIO },
    "Creta": { inicio: 2016, fim: null, vars: T_CAMBIO },
    "Tucson (G1)": { inicio: 2004, fim: 2018, vars: T_CAMBIO },
    "ix35": { inicio: 2010, fim: null, vars: T_CAMBIO },
    "New Tucson": { inicio: 2017, fim: null, vars: null },
    "Santa Fe": { inicio: 2000, fim: null, vars: null },
    "Elantra": { inicio: 1990, fim: null, vars: T_CAMBIO },
    "Azera": { inicio: 2007, fim: 2018, vars: null },
    "i30": { inicio: 2007, fim: 2017, vars: T_CAMBIO },
    "HR": { inicio: 2005, fim: null, vars: null }
  },
  "Renault": {
    "Kwid": { inicio: 2017, fim: null, vars: null },
    "Sandero": { inicio: 2007, fim: null, vars: T_CAMBIO },
    "Sandero Stepway": { inicio: 2008, fim: null, vars: T_CAMBIO },
    "Logan": { inicio: 2007, fim: null, vars: T_CAMBIO },
    "Duster": { inicio: 2011, fim: null, vars: T_CAMBIO },
    "Oroch": { inicio: 2015, fim: null, vars: T_CAMBIO },
    "Captur": { inicio: 2017, fim: 2023, vars: T_CAMBIO },
    "Clio": { inicio: 1996, fim: 2016, vars: T_PORTAS },
    "Megane": { inicio: 1995, fim: 2010, vars: T_CAMBIO },
    "Megane E-Tech": { inicio: 2023, fim: null, vars: null },
    "Fluence": { inicio: 2011, fim: 2018, vars: T_CAMBIO },
    "Fluence GT": { inicio: 2012, fim: 2014, vars: null },
    "Master": { inicio: 1997, fim: null, vars: null },
    "Kangoo": { inicio: 1998, fim: null, vars: null }
  },
  "Caoa Chery": {
    "Tiggo 2": { inicio: 2018, fim: 2022, vars: T_CAMBIO },
    "Tiggo 3x": { inicio: 2021, fim: 2022, vars: null },
    "Tiggo 5x (Pro/Sport)": { inicio: 2019, fim: null, vars: null },
    "Tiggo 7 (Pro/Hybrid)": { inicio: 2019, fim: null, vars: null },
    "Tiggo 8 (Pro/PHEV)": { inicio: 2020, fim: null, vars: null },
    "Tiggo 8 Founder": { inicio: 2022, fim: null, vars: null },
    "Arrizo 5": { inicio: 2018, fim: 2021, vars: null },
    "Arrizo 6 (Pro)": { inicio: 2020, fim: null, vars: null },
    "QQ": { inicio: 2011, fim: 2019, vars: null },
    "Celer": { inicio: 2013, fim: 2018, vars: null },
    "Face": { inicio: 2010, fim: 2015, vars: null },
    "Cielo": { inicio: 2010, fim: 2012, vars: null },
    "iCar": { inicio: 2022, fim: null, vars: null }
  },
  "BYD": {
    "Dolphin": { inicio: 2022, fim: null, vars: null },
    "Dolphin Mini": { inicio: 2024, fim: null, vars: null },
    "Song Plus": { inicio: 2022, fim: null, vars: null },
    "Song Pro": { inicio: 2024, fim: null, vars: null },
    "Yuan Plus": { inicio: 2022, fim: null, vars: null },
    "Seal": { inicio: 2023, fim: null, vars: null },
    "Han": { inicio: 2020, fim: null, vars: null },
    "Tan": { inicio: 2020, fim: null, vars: null },
    "King": { inicio: 2024, fim: null, vars: null },
    "Shark": { inicio: 2024, fim: null, vars: null }
  },
  "GWM": {
    "Haval H6": { inicio: 2023, fim: null, vars: null },
    "Haval H6 GT": { inicio: 2023, fim: null, vars: null },
    "Ora 03": { inicio: 2023, fim: null, vars: null },
    "Tank 300": { inicio: 2024, fim: null, vars: null },
    "Poer": { inicio: 2024, fim: null, vars: null }
  },
  "Citroën": {
    "C3 (Novo)": { inicio: 2022, fim: null, vars: null },
    "C3 (Antigo)": { inicio: 2002, fim: 2021, vars: T_CAMBIO },
    "C4 Cactus": { inicio: 2018, fim: null, vars: T_CAMBIO },
    "C4 Pallas": { inicio: 2007, fim: 2013, vars: T_CAMBIO },
    "C4 Lounge": { inicio: 2013, fim: 2020, vars: T_CAMBIO },
    "C4 Hatch": { inicio: 2009, fim: 2014, vars: T_CAMBIO },
    "Aircross": { inicio: 2010, fim: 2021, vars: T_CAMBIO },
    "C3 Picasso": { inicio: 2011, fim: 2016, vars: null },
    "Xsara Picasso": { inicio: 2001, fim: 2012, vars: T_CAMBIO },
    "C5": { inicio: 2001, fim: 2012, vars: null },
    "Jumpy": { inicio: 2017, fim: null, vars: null },
    "Berlingo": { inicio: 1998, fim: 2019, vars: null },
    "DS3": { inicio: 2012, fim: 2016, vars: null },
    "DS4": { inicio: 2013, fim: 2016, vars: null },
    "DS5": { inicio: 2013, fim: 2017, vars: null }
  },
  "Peugeot": {
    "206": { inicio: 1998, fim: 2010, vars: T_PORTAS },
    "207": { inicio: 2008, fim: 2014, vars: T_PORTAS },
    "208": { inicio: 2013, fim: null, vars: T_CAMBIO },
    "2008": { inicio: 2015, fim: null, vars: T_CAMBIO },
    "3008": { inicio: 2010, fim: null, vars: null },
    "408": { inicio: 2011, fim: 2019, vars: T_CAMBIO },
    "Expert": { inicio: 2017, fim: null, vars: null },
    "Partner": { inicio: 1999, fim: 2021, vars: null },
    "Hoggar": { inicio: 2010, fim: 2014, vars: null },
    "RCZ": { inicio: 2011, fim: 2015, vars: null }
  },
  "RAM": {
    "Rampage": { inicio: 2023, fim: null, vars: null },
    "1500": { inicio: 2021, fim: null, vars: null },
    "2500": { inicio: 2005, fim: null, vars: null },
    "3500": { inicio: 2021, fim: null, vars: null },
    "Classic": { inicio: 2022, fim: null, vars: null }
  },
  "Jeep": {
    "Renegade": { inicio: 2015, fim: null, vars: T_CAMBIO },
    "Compass": { inicio: 2012, fim: null, vars: null },
    "Commander": { inicio: 2021, fim: null, vars: null },
    "Wrangler": { inicio: 1986, fim: null, vars: T_PORTAS }
  },
  "Kia": {
    "Soul": { inicio: 2009, fim: 2020, vars: T_CAMBIO },
    "Cerato": { inicio: 2006, fim: null, vars: T_CAMBIO },
    "Picanto": { inicio: 2006, fim: null, vars: T_CAMBIO },
    "Sportage": { inicio: 1995, fim: null, vars: null },
    "Sorento": { inicio: 2003, fim: null, vars: null },
    "Mohave": { inicio: 2008, fim: 2017, vars: null },
    "Bongo": { inicio: 2000, fim: null, vars: null },
    "Stonic": { inicio: 2021, fim: null, vars: null },
    "Carnival": { inicio: 1999, fim: null, vars: null }
  },
  "Foton": { "Tunland (Picape)": { inicio: 2013, fim: null, vars: T_CABINE_SD } },
  "Geely": { "EC7": { inicio: 2014, fim: 2016, vars: null }, "GC2": { inicio: 2014, fim: 2016, vars: null } },
  "Subaru": { "Forester": { inicio: 1997, fim: null, vars: null }, "XV / Crosstrek": { inicio: 2011, fim: null, vars: null }, "Impreza": { inicio: 1992, fim: null, vars: null }, "Outback": { inicio: 1994, fim: null, vars: null }, "WRX": { inicio: 1992, fim: null, vars: null } },
  "Suzuki": { "Jimny": { inicio: 1998, fim: null, vars: null }, "Jimny Sierra": { inicio: 2019, fim: null, vars: T_CAMBIO }, "Grand Vitara": { inicio: 1998, fim: 2016, vars: T_PORTAS }, "Vitara": { inicio: 2016, fim: null, vars: null }, "S-Cross": { inicio: 2015, fim: null, vars: null }, "Swift": { inicio: 1983, fim: 2015, vars: null } },
  "JAC Motors": { "J2": { inicio: 2012, fim: 2016, vars: null }, "J3": { inicio: 2011, fim: 2016, vars: null }, "J5": { inicio: 2011, fim: 2016, vars: null }, "J6": { inicio: 2011, fim: 2016, vars: null }, "T40": { inicio: 2017, fim: null, vars: null }, "T50": { inicio: 2018, fim: null, vars: null }, "T60": { inicio: 2019, fim: null, vars: null }, "T80": { inicio: 2019, fim: null, vars: null }, "V260": { inicio: 2017, fim: null, vars: null }, "E-JS1": { inicio: 2021, fim: null, vars: null }, "E-JS4": { inicio: 2021, fim: null, vars: null } },
  "Lifan": { "X60": { inicio: 2013, fim: 2019, vars: null }, "320": { inicio: 2010, fim: 2015, vars: null }, "530": { inicio: 2014, fim: 2018, vars: null }, "620": { inicio: 2010, fim: 2014, vars: null } },
  "Troller": { "T4": { inicio: 1997, fim: 2021, vars: T_CAMBIO } },
  "Audi": {
    "A1 (Sportback)": { inicio: 2010, fim: 2018, vars: T_PORTAS },
    "A3 Hatch (1.6/1.8T)": { inicio: 1996, fim: 2013, vars: T_PORTAS },
    "A3 Sedan (1.4/2.0)": { inicio: 2013, fim: null, vars: null },
    "A4 Sedan/Avant": { inicio: 1995, fim: null, vars: null },
    "A5 Sportback/Coupé": { inicio: 2007, fim: null, vars: null },
    "Q3 (1.4/2.0)": { inicio: 2012, fim: null, vars: null },
    "Q5 (2.0/3.0)": { inicio: 2008, fim: null, vars: null },
    "RS 3": { inicio: 2011, fim: null, vars: null },
    "RS 6": { inicio: 2002, fim: null, vars: null },
    "Q8 e-tron": { inicio: 2018, fim: null, vars: null }
  },
  "Volvo": { "XC60": { inicio: 2009, fim: null, vars: null }, "XC40": { inicio: 2018, fim: null, vars: null } },
  "Land Rover": { "Discovery": { inicio: 1990, fim: null, vars: null }, "Range Rover Evoque": { inicio: 2011, fim: null, vars: null }, "Defender": { inicio: 1990, fim: null, vars: null } }
}

export const dadosCaminhoes: VehicleDatabase = {
  "Ford Caminhões": {
    "F-350": { inicio: 1998, fim: 2019, vars: null },
    "F-4000": { inicio: 1998, fim: 2019, vars: null },
    "F-12000 / F-14000 (Sapo)": { inicio: 1993, fim: 2005, vars: null },
    "Cargo (Leve/Médio)": { inicio: 1985, fim: 2011, vars: null },
    "Cargo (Novo)": { inicio: 2011, fim: 2019, vars: T_CAM_FORD }
  },
  "Volkswagen Caminhões": {
    "Delivery (Antigo)": { inicio: 2007, fim: 2017, vars: null },
    "Delivery (Novo/Express)": { inicio: 2017, fim: null, vars: null },
    "Worker": { inicio: 2000, fim: 2019, vars: null },
    "Constellation": { inicio: 2006, fim: null, vars: T_CAM_VW },
    "Meteor": { inicio: 2020, fim: null, vars: ["Cabine Leito Teto Baixo", "Cabine Leito Teto Alto"] },
    "Titan": { inicio: 1995, fim: 2005, vars: ["Cabine Simples", "Cabine Leito"] },
    "VW 24.250": { inicio: 2006, fim: 2012, vars: T_CAM_VW },
    "VW 8.150": { inicio: 2000, fim: 2012, vars: null }
  },
  "Mercedes-Benz": {
    "Accelo (815/1016)": { inicio: 2003, fim: null, vars: ["Cabine Simples", "Cabine Estendida"] },
    "Atego": { inicio: 2004, fim: null, vars: T_CAM_MB_ATEGO },
    "Axor": { inicio: 2005, fim: 2020, vars: T_CAM_MB_AXOR },
    "Actros (MP4/Novo)": { inicio: 2010, fim: null, vars: ["Cabine StreamSpace", "Cabine BigSpace", "Cabine GigaSpace"] },
    "1620 / Atron (Bicudo)": { inicio: 1996, fim: 2016, vars: ["Cabine Simples", "Cabine Leito"] },
    "710 (Mercedinho)": { inicio: 1995, fim: 2012, vars: null },
    "1113 / 1313": { inicio: 1970, fim: 1988, vars: null },
    "1935 / 1941": { inicio: 1990, fim: 1998, vars: null },
    "Sprinter (Chassi)": { inicio: 1997, fim: null, vars: null }
  },
  "Volvo": {
    "VM (Semipesado)": { inicio: 2003, fim: null, vars: T_CAM_VOLVO_VM },
    "FH (Clássico/Chinezinho)": { inicio: 1994, fim: 2014, vars: T_CAM_VOLVO_FH },
    "New FH (Novo)": { inicio: 2015, fim: null, vars: T_CAM_VOLVO_FH },
    "FMX (Offroad)": { inicio: 2011, fim: null, vars: null },
    "NH (Bicudo)": { inicio: 1999, fim: 2006, vars: ["Cabine Leito", "Globetrotter"] },
    "NL 10 / NL 12": { inicio: 1989, fim: 1999, vars: null }
  },
  "Scania": {
    "Série 3 (113/143)": { inicio: 1991, fim: 1998, vars: null },
    "Série 4 (114/124)": { inicio: 1998, fim: 2007, vars: T_CAM_SCANIA_ANTIGO },
    "Série 5 (P/G/R)": { inicio: 2008, fim: 2018, vars: T_CAM_SCANIA_R },
    "NTG (Nova Geração)": { inicio: 2019, fim: null, vars: T_CAM_SCANIA_NTG }
  },
  "Iveco": {
    "Daily (Chassi/Furgão)": { inicio: 2000, fim: null, vars: null },
    "Tector": { inicio: 2008, fim: null, vars: ["Teto Baixo", "Teto Alto"] },
    "Stralis": { inicio: 2004, fim: 2020, vars: T_CAM_IVECO },
    "Hi-Way": { inicio: 2013, fim: null, vars: null },
    "S-Way": { inicio: 2023, fim: null, vars: null },
    "Vertis": { inicio: 2010, fim: 2017, vars: null }
  },
  "DAF": {
    "XF 105": { inicio: 2013, fim: 2020, vars: T_CAM_DAF },
    "Novo XF": { inicio: 2020, fim: null, vars: T_CAM_DAF },
    "CF": { inicio: 2017, fim: null, vars: ["Sleeper Cab", "Space Cab"] }
  },
  "MAN": { "TGX": { inicio: 2012, fim: 2022, vars: T_CAM_MAN } },
  "Agrale": {
    "Linha A (A8700/A10000)": { inicio: 2005, fim: null, vars: null },
    "6000 / 8500": { inicio: 1995, fim: 2012, vars: null }
  },
  "Foton": { "Aumark S": { inicio: 2018, fim: null, vars: null }, "Citytruck": { inicio: 2019, fim: null, vars: null } },
  "International": { "DuraStar": { inicio: 2012, fim: 2018, vars: null }, "9800i": { inicio: 1999, fim: 2017, vars: ["Teto Baixo", "Teto Alto"] } },
  "Sinotruk": { "A7": { inicio: 2012, fim: 2016, vars: null }, "Howo": { inicio: 2010, fim: 2014, vars: null } }
}

export function getOpcoesPorAno(modelo: string, ano: number): string[] | null {
  const nome = (modelo || "").toLowerCase()

  if (nome.includes("s10") || nome.includes("ranger") || nome.includes("hilux") || nome.includes("frontier") || nome.includes("amarok") || nome.includes("triton")) {
    let corte = 2012
    if (nome.includes("hilux")) corte = 2015
    if (nome.includes("frontier")) corte = 2016
    if (nome.includes("amarok")) corte = 2010

    if (ano > corte) return ["Cabine Simples", "Cabine Dupla (Manual)", "Cabine Dupla (Automático)"]
    return ["Cabine Simples", "Cabine Dupla"]
  }

  if (nome.includes("strada")) {
    if (ano >= 2020) return ["Cabine Plus (Simples)", "Cabine Dupla (Manual)", "Cabine Dupla (Automático)"]
    return ["Cabine Simples", "Cabine Estendida", "Cabine Dupla"]
  }

  return null
}

export function isPicape(modelo: string): boolean {
  const name = (modelo || "").toLowerCase()
  return (
    name.includes("strada") || name.includes("saveiro") || name.includes("s10") ||
    name.includes("hilux") || name.includes("ranger") || name.includes("amarok") ||
    name.includes("toro") || name.includes("oroch") || name.includes("montana") ||
    name.includes("f-250") || name.includes("l200") || name.includes("frontier")
  )
}

export function getVariationLabel(vars: string[] | string | null, tipo: string): string {
  if (vars === "SPECIAL_PICKUP" || vars === "SPECIAL_STRADA") return "Cabine & Câmbio"
  if (vars === T_PORTAS || JSON.stringify(vars) === JSON.stringify(T_PORTAS)) return "Quantas Portas?"
  if (vars === T_CAMBIO || JSON.stringify(vars) === JSON.stringify(T_CAMBIO)) return "Tipo de Câmbio"
  if (vars === T_CABINE || JSON.stringify(vars) === JSON.stringify(T_CABINE)) return "Tipo de Cabine"
  if (vars === T_PORTAS_PAJERO || JSON.stringify(vars) === JSON.stringify(T_PORTAS_PAJERO)) return "Tipo de Carroceria"
  if (tipo === "caminhao") return "Tipo de Cabine/Teto"
  return "Versão"
}
