function setPharmacyItems(){
	const newitems = {
		"anti_stress":{
			"type":"anti stress",
			"name":"Anti-Stress",
			"price":1500,
		},
		"controling":{
			"type":"controling",
			"name":"Controling",
			"price":3000,
		}
	}

	Object.assign(setup.pharmacyItems, newitems)
}
DefineMacroS("setPharmacyItems", setPharmacyItems)
