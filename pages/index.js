import { useState, useEffect } from 'react';

const countryData = [
  { name: "Afghanistan", code: "AF" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "American Samoa", code: "AS" },
  { name: "Andorra", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Anguilla", code: "AI" },
  { name: "Antarctica", code: "AQ" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Aruba", code: "AW" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahamas", code: "BS" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Barbados", code: "BB" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" },
  { name: "Bermuda", code: "BM" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Brazil", code: "BR" },
  { name: "British Indian Ocean Territory", code: "IO" },
  { name: "Brunei", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
  { name: "Cape Verde", code: "CV" },
  { name: "Cayman Islands", code: "KY" },
  { name: "Central African Republic", code: "CF" },
  { name: "Chad", code: "TD" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Christmas Island", code: "CX" },
  { name: "Colombia", code: "CO" },
  { name: "Comoros", code: "KM" },
  { name: "Congo", code: "CG" },
  { name: "Cook Islands", code: "CK" },
  { name: "Costa Rica", code: "CR" },
  { name: "Croatia", code: "HR" },
  { name: "Cuba", code: "CU" },
  { name: "Cyprus", code: "CY" },
  { name: "Czech Republic", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Djibouti", code: "DJ" },
  { name: "Dominica", code: "DM" },
  { name: "Dominican Republic", code: "DO" },
  { name: "Ecuador", code: "EC" },
  { name: "Egypt", code: "EG" },
  { name: "El Salvador", code: "SV" },
  { name: "Equatorial Guinea", code: "GQ" },
  { name: "Eritrea", code: "ER" },
  { name: "Estonia", code: "EE" },
  { name: "Ethiopia", code: "ET" },
  { name: "Falkland Islands", code: "FK" },
  { name: "Faroe Islands", code: "FO" },
  { name: "Fiji", code: "FJ" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "French Polynesia", code: "PF" },
  { name: "Gabon", code: "GA" },
  { name: "Gambia", code: "GM" },
  { name: "Georgia", code: "GE" },
  { name: "Germany", code: "DE" },
  { name: "Ghana", code: "GH" },
  { name: "Gibraltar", code: "GI" },
  { name: "Greece", code: "GR" },
  { name: "Greenland", code: "GL" },
  { name: "Grenada", code: "GD" },
  { name: "Guam", code: "GU" },
  { name: "Guatemala", code: "GT" },
  { name: "Guinea", code: "GN" },
  { name: "Guinea-Bissau", code: "GW" },
  { name: "Guyana", code: "GY" },
  { name: "Haiti", code: "HT" },
  { name: "Honduras", code: "HN" },
  { name: "Hong Kong", code: "HK" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Iran", code: "IR" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Jamaica", code: "JM" },
  { name: "Japan", code: "JP" },
  { name: "Jordan", code: "JO" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Kenya", code: "KE" },
  { name: "Kiribati", code: "KI" },
  { name: "Kuwait", code: "KW" },
  { name: "Kyrgyzstan", code: "KG" },
  { name: "Laos", code: "LA" },
  { name: "Latvia", code: "LV" },
  { name: "Lebanon", code: "LB" },
  { name: "Lesotho", code: "LS" },
  { name: "Liberia", code: "LR" },
  { name: "Libya", code: "LY" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Madagascar", code: "MG" },
  { name: "Malawi", code: "MW" },
  { name: "Malaysia", code: "MY" },
  { name: "Maldives", code: "MV" },
  { name: "Mali", code: "ML" },
  { name: "Malta", code: "MT" },
  { name: "Marshall Islands", code: "MH" },
  { name: "Mauritania", code: "MR" },
  { name: "Mauritius", code: "MU" },
  { name: "Mexico", code: "MX" },
  { name: "Micronesia", code: "FM" },
  { name: "Moldova", code: "MD" },
  { name: "Monaco", code: "MC" },
  { name: "Mongolia", code: "MN" },
  { name: "Montenegro", code: "ME" },
  { name: "Morocco", code: "MA" },
  { name: "Mozambique", code: "MZ" },
  { name: "Myanmar", code: "MM" },
  { name: "Namibia", code: "NA" },
  { name: "Nauru", code: "NR" },
  { name: "Nepal", code: "NP" },
  { name: "Netherlands", code: "NL" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nicaragua", code: "NI" },
  { name: "Niger", code: "NE" },
  { name: "Nigeria", code: "NG" },
  { name: "North Korea", code: "KP" },
  { name: "North Macedonia", code: "MK" },
  { name: "Norway", code: "NO" },
  { name: "Oman", code: "OM" },
  { name: "Pakistan", code: "PK" },
  { name: "Palau", code: "PW" },
  { name: "Palestine", code: "PS" },
  { name: "Panama", code: "PA" },
  { name: "Papua New Guinea", code: "PG" },
  { name: "Paraguay", code: "PY" },
  { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Puerto Rico", code: "PR" },
  { name: "Qatar", code: "QA" },
  { name: "Romania", code: "RO" },
  { name: "Russia", code: "RU" },
  { name: "Rwanda", code: "RW" },
  { name: "Saint Kitts and Nevis", code: "KN" },
  { name: "Saint Lucia", code: "LC" },
  { name: "Saint Vincent and the Grenadines", code: "VC" },
  { name: "Samoa", code: "WS" },
  { name: "San Marino", code: "SM" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Senegal", code: "SN" },
  { name: "Serbia", code: "RS" },
  { name: "Seychelles", code: "SC" },
  { name: "Sierra Leone", code: "SL" },
  { name: "Singapore", code: "SG" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Solomon Islands", code: "SB" },
  { name: "Somalia", code: "SO" },
  { name: "South Africa", code: "ZA" },
  { name: "South Korea", code: "KR" },
  { name: "South Sudan", code: "SS" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Sudan", code: "SD" },
  { name: "Suriname", code: "SR" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Syria", code: "SY" },
  { name: "Taiwan", code: "TW" },
  { name: "Tajikistan", code: "TJ" },
  { name: "Tanzania", code: "TZ" },
  { name: "Thailand", code: "TH" },
  { name: "Timor-Leste", code: "TL" },
  { name: "Togo", code: "TG" },
  { name: "Tonga", code: "TO" },
  { name: "Trinidad and Tobago", code: "TT" },
  { name: "Tunisia", code: "TN" },
  { name: "Turkey", code: "TR" },
  { name: "Turkmenistan", code: "TM" },
  { name: "Tuvalu", code: "TV" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States", code: "US" },
  { name: "Uruguay", code: "UY" },
  { name: "Uzbekistan", code: "UZ" },
  { name: "Vanuatu", code: "VU" },
  { name: "Vatican City", code: "VA" },
  { name: "Venezuela", code: "VE" },
  { name: "Vietnam", code: "VN" },
  { name: "Yemen", code: "YE" },
  { name: "Zambia", code: "ZM" },
  { name: "Zimbabwe", code: "ZW" }
];


export default function FlagGame() {
  const [gameMode, setGameMode] = useState('menu');
  const [currentCountry, setCurrentCountry] = useState(null);
  const [options, setOptions] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const getRandomCountry = () => {
    return countryData[Math.floor(Math.random() * countryData.length)];
  };

  const generateMultipleChoice = () => {
    const correct = getRandomCountry();
    let choices = [correct];

    while (choices.length < 4) {
      const newChoice = getRandomCountry();
      if (!choices.find(c => c.code === newChoice.code)) {
        choices.push(newChoice);
      }
    }

    choices = choices.sort(() => Math.random() - 0.5);
    setCurrentCountry(correct);
    setOptions(choices);
  };

  const handleOptionSelect = (country) => {
    setTotalAttempts(prev => prev + 1);
    if (country.code === currentCountry.code) {
      setScore(prev => prev + 1);
      setMessage('Correct!');
      setTimeout(() => {
        setMessage('');
        generateMultipleChoice();
      }, 2000);
    } else {
      setMessage(`Wrong! The correct answer was ${currentCountry.name}`);
      setTimeout(() => {
        setMessage('');
        generateMultipleChoice();
      }, 5000);
    }
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setUserInput(input);

    if (input.trim() === '') {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const filtered = countryData.filter(country =>
      country.name.toLowerCase().includes(input.toLowerCase())
    ).slice(0, 5); // Limit to 5 suggestions

    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (country) => {
    setUserInput(country.name);
    setShowSuggestions(false);
    checkAnswer(country.name);
  };

  const checkAnswer = (guess) => {
    setTotalAttempts(prev => prev + 1);
    if (guess.toLowerCase() === currentCountry.name.toLowerCase()) {
      setScore(prev => prev + 1);
      setMessage('Correct!');
      setTimeout(() => {
        setMessage('');
        setUserInput('');
        setCurrentCountry(getRandomCountry());
      }, 1500);
    } else {
      setMessage(`Wrong! The correct answer was ${currentCountry.name}`);
      setTimeout(() => {
        setMessage('');
        setUserInput('');
        setCurrentCountry(getRandomCountry());
      }, 5000);
    }
  };

  const handleTypeGuess = (e) => {
    e.preventDefault();
    checkAnswer(userInput);
  };

  useEffect(() => {
    if (gameMode === 'multiple') {
      generateMultipleChoice();
    } else if (gameMode === 'type') {
      setCurrentCountry(getRandomCountry());
    }
  }, [gameMode]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
          <div className="p-6 sm:p-8">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Flag Guessr
              </h1>
              {gameMode !== 'menu' && (
                <div className="flex items-center gap-4">
                  {(gameMode === 'multiple' || gameMode === 'type') && (
                    <div className="px-4 py-2 bg-gray-700 rounded-lg">
                      <span className="text-blue-400 font-bold">{score}</span>
                      <span className="text-gray-400 mx-1">/</span>
                      <span className="text-gray-400">{totalAttempts}</span>
                    </div>
                  )}
                  <button
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-all duration-200 flex items-center gap-2"
                    onClick={() => {
                      setGameMode('menu');
                      setScore(0);
                      setTotalAttempts(0);
                    }}
                  >
                    Menu
                  </button>
                </div>
              )}
            </div>

            {/* Menu Mode */}
            {gameMode === 'menu' && (
              <div className="space-y-4 max-w-md mx-auto">
                <button
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition duration-200 shadow-lg hover:shadow-blue-500/20"
                  onClick={() => setGameMode('multiple')}
                >
                  Multiple Choice
                </button>
                <button
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition duration-200 shadow-lg hover:shadow-purple-500/20"
                  onClick={() => setGameMode('type')}
                >
                  Type Country Name
                </button>
                <button
                  className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-4 px-6 rounded-xl transition duration-200 shadow-lg"
                  onClick={() => setGameMode('list')}
                >
                  View All Flags
                </button>
              </div>
            )}

            {/* List Mode */}
            {gameMode === 'list' && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {countryData.map((country) => (
                  <div key={country.code} className="group">
                    <div className="bg-gray-700 rounded-lg p-3 transition-transform duration-200 group-hover:scale-105">
                      <div className="w-full aspect-[3/2] relative overflow-hidden rounded-md mb-2">
                        <img
                          src={`https://countryflagsapi.netlify.app/flag/${country.code}.svg`}
                          alt={`Flag of ${country.name}`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-sm text-center text-gray-300">{country.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Game Modes (Multiple Choice and Type) */}
            {(gameMode === 'multiple' || gameMode === 'type') && currentCountry && (
              <div className="space-y-6">
                {/* Game Container with Fixed Height */}
                <div className="relative min-h-[400px]">
                  {/* Flag Display */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-full max-w-[480px] aspect-[3/2] relative overflow-hidden rounded-xl shadow-2xl">
                      <img
                        src={`https://countryflagsapi.netlify.app/flag/${currentCountry.code}.svg`}
                        alt="Guess this flag"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Message Display - Absolute Position */}
                  {message && (
                    <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 z-10">
                      <div className={`text-center py-3 px-6 rounded-lg mx-auto max-w-md ${
                        message.includes('Correct')
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                      }`}>
                        <p className="text-lg font-semibold">{message}</p>
                      </div>
                    </div>
                  )}

                  {/* Game Controls */}
                  <div className="relative z-0">
                    {gameMode === 'multiple' && (
                      <div className="grid grid-cols-2 gap-4">
                        {options.map((option) => (
                          <button
                            key={option.code}
                            onClick={() => handleOptionSelect(option)}
                            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 hover:shadow-lg"
                          >
                            {option.name}
                          </button>
                        ))}
                      </div>
                    )}

                    {gameMode === 'type' && (
                      <form onSubmit={handleTypeGuess} className="space-y-4 relative">
                        <div className="relative">
                          <input
                            type="text"
                            value={userInput}
                            onChange={handleInputChange}
                            placeholder="Type country name..."
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                          />
                          {showSuggestions && filteredSuggestions.length > 0 && (
                            <div className="absolute w-full bg-gray-700 mt-1 rounded-lg shadow-lg border border-gray-600 z-20">
                              {filteredSuggestions.map((country) => (
                                <button
                                  key={country.code}
                                  type="button"
                                  onClick={() => handleSuggestionClick(country)}
                                  className="w-full text-left px-4 py-2 hover:bg-gray-600 text-white first:rounded-t-lg last:rounded-b-lg transition-colors duration-150"
                                >
                                  {country.name}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}