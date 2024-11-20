
// List of languages for suggestions
const languages = [
  "Abkhaz", "Acehnese", "Acholi", "Afar", "Afrikaans", "Albanian", "Alur", 
    "Amharic", "Arabic", "Armenian", "Assamese", "Avar", "Awadhi", "Aymara", 
    "Azerbaijani", "Balinese", "Baluchi", "Bambara", "Baoulé", "Bashkir", 
    "Basque", "Batak Karo", "Batak Simalungun", "Batak Toba", "Belarusian", 
    "Bemba", "Bengali", "Betawi", "Bhojpuri", "Bikol", "Bosnian", "Breton", 
    "Bulgarian", "Buryat", "Cantonese", "Catalan", "Cebuano", "Chamorro", 
    "Chechen", "Chichewa", "Chinese (Simplified)", "Chinese (Traditional)", 
    "Chuukese", "Chuvash", "Corsican", "Crimean Tatar (Cyrillic)", 
    "Crimean Tatar (Latin)", "Croatian", "Czech", "Danish", "Dari", "Dhivehi", 
    "Dinka", "Dogri", "Dombe", "Dutch", "Dyula", "Dzongkha", "English", 
    "Esperanto", "Estonian", "Ewe", "Faroese", "Fijian", "Filipino", "Finnish", 
    "Fon", "French", "French (Canada)", "Frisian", "Friulian", "Fulani", 
    "Ga", "Galician", "Georgian", "German", "Greek", "Guarani", "Gujarati", 
    "Haitian Creole", "Hakha Chin", "Hausa", "Hawaiian", "Hebrew", "Hiligaynon", 
    "Hindi", "Hmong", "Hungarian", "Hunsrik", "Iban", "Icelandic", "Igbo", 
    "Ilocano", "Indonesian", "Inuktut (Latin)", "Inuktut (Syllabics)", "Irish", 
    "Italian", "Jamaican Patois", "Japanese", "Javanese", "Jingpo", 
    "Kalaallisut", "Kannada", "Kanuri", "Kapampangan", "Kazakh", "Khasi", 
    "Khmer", "Kiga", "Kikongo", "Kinyarwanda", "Kituba", "Kokborok", "Komi", 
    "Konkani", "Korean", "Krio", "Kurdish (Kurmanji)", "Kurdish (Sorani)", 
    "Kyrgyz", "Lao", "Latgalian", "Latin", "Latvian", "Ligurian", "Limburgish", 
    "Lingala", "Lithuanian", "Lombard", "Luganda", "Luo", "Luxembourgish", 
    "Macedonian", "Madurese", "Maithili", "Makassar", "Malagasy", "Malay", 
    "Malay (Jawi)", "Malayalam", "Maltese", "Mam", "Manx", "Maori", "Marathi", 
    "Marshallese", "Marwadi", "Mauritian Creole", "Meadow Mari", "Meiteilon (Manipuri)", 
    "Minang", "Mizo", "Mongolian", "Myanmar (Burmese)", "Nahuatl (Eastern Huasteca)", 
    "Ndau", "Ndebele (South)", "Nepalbhasa (Newari)", "Nepali", "NKo", 
    "Norwegian (Bokmål)", "Nuer", "Occitan", "Odia (Oriya)", "Oromo", "Ossetian", 
    "Pangasinan", "Papiamento", "Pashto", "Persian", "Polish", "Portuguese (Brazil)", 
    "Portuguese (Portugal)", "Punjabi (Gurmukhi)", "Punjabi (Shahmukhi)", "Quechua", 
    "Qʼeqchiʼ", "Romani", "Romanian", "Rundi", "Russian", "Sami (North)", "Samoan", 
    "Sango", "Sanskrit", "Santali (Latin)", "Santali (Ol Chiki)", "Scots Gaelic", 
    "Sepedi", "Serbian", "Sesotho", "Seychellois Creole", "Shan", "Shona", "Sicilian", 
    "Silesian", "Sindhi", "Sinhala", "Slovak", "Slovenian", "Somali", "Spanish", 
    "Sundanese", "Susu", "Swahili", "Swati", "Swedish", "Tahitian", "Tajik", 
    "Tamazight", "Tamazight (Tifinagh)", "Tamil", "Tatar", "Telugu", "Tetum", 
    "Thai", "Tibetan", "Tigrinya", "Tiv", "Tok Pisin", "Tongan", "Tshiluba", 
    "Tsonga", "Tswana", "Tulu", "Tumbuka", "Turkish", "Turkmen", "Tuvan", "Twi", 
    "Udmurt", "Ukrainian", "Urdu", "Uyghur", "Uzbek", "Venda", "Venetian", 
    "Vietnamese", "Waray", "Welsh", "Wolof", "Xhosa", "Yakut", "Yiddish", "Yoruba", 
    "Yucatec Maya", "Zapotec", "Zulu"
];

const languageInput = document.getElementById("languageInput");
const suggestionList = document.getElementById("suggestionList");
const selectedLanguageBox = document.getElementById("selectedLanguage");
const selectedLanguageText = document.getElementById("selectedLanguage");

// Event listener for input change
languageInput.addEventListener("input", () => {
  const inputValue = languageInput.value.toLowerCase();
  suggestionList.innerHTML = ""; // Clear previous suggestions

  // If the input is empty, do not show suggestions
  if (inputValue === "") return;

  // Filter languages based on input (first letter)
  const filteredLanguages = languages.filter(lang =>
      lang.toLowerCase().startsWith(inputValue)
  );

  // Display filtered suggestions
  filteredLanguages.forEach(language => {
      const suggestionItem = document.createElement("li");
      suggestionItem.textContent = language;
      suggestionItem.addEventListener("click", () => selectLanguage(language));
      suggestionList.appendChild(suggestionItem);
  });
});

// Function to handle language selection
function selectLanguage(language) {
  // Set the selected language text
  selectedLanguageText.textContent = language;

  // Clear input and suggestions
  languageInput.value = "";
  suggestionList.innerHTML = "";
}
