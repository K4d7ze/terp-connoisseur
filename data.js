import json

# Testdatenbank mit echten, validierten Einträgen zu 2 Fast Buds Strains

test_strains = [
    {
        "product": "Fast Buds - Lemon Cherry Cookies Auto",
        "strain": "Lemon Cherry Cookies",
        "terpene": [
            {"name": "Limonene", "boiling": 176, "flavor": "zitronig, süß", "effect": "euphorisierend, stimmungsaufhellend"},
            {"name": "Caryophyllene", "boiling": 119, "flavor": "würzig, pfeffrig", "effect": "entspannend, entzündungshemmend"},
            {"name": "Linalool", "boiling": 198, "flavor": "blumig", "effect": "beruhigend, angstlösend"}
        ]
    },
    {
        "product": "Fast Buds - Amnesia Haze Auto",
        "strain": "Amnesia Haze",
        "terpene": [
            {"name": "Terpinolene", "boiling": 186, "flavor": "kräuterig, blumig", "effect": "energetisierend, kreativitätsfördernd"},
            {"name": "Myrcene", "boiling": 166, "flavor": "erdig, moschusartig", "effect": "entspannend, sedierend"},
            {"name": "Pinene", "boiling": 156, "flavor": "kieferartig", "effect": "fokussierend, bronchienerweiternd"}
        ]
    }
]

# Umwandeln in JS-kompatibles Format
test_data_js = "window.strainData = " + json.dumps(test_strains, ensure_ascii=False, indent=2) + ";"

# Speichern
test_file_path = "/mnt/data/data_test_fastbuds.js"
with open(test_file_path, "w", encoding="utf-8") as f:
    f.write(test_data_js)

test_file_path
