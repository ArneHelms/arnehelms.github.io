const translations = {

	de: {
		header_text: "Unsere Hochzeit",

		welcome_title: "Schön, dass ihr da seid!",
		welcome_text: "Wir freuen uns sehr, diesen besonderen Tag mit euch zu feiern. Hier findet ihr alle wichtigen Informationen rund um unsere Hochzeit.",

		details_title: "Der große Tag",
		date_label: "Datum:",
		location_label: "Ort:",
		start_label: "Beginn:",
		details_text: "Wir freuen uns darauf, gemeinsam mit euch zu feiern, zu essen, zu lachen und viele schöne Erinnerungen zu sammeln.",

		schedule_title: "Tagesablauf",
		schedule_1: "XX:XX Uhr – Trauung",
		schedule_2: "XX:XX Uhr – Empfang",
		schedule_3: "XX:XX Uhr – Essen & Feier",
		schedule_4: "XX:XX Uhr – Party",

		route_title: "Anfahrt",
		route_text: "Hier findet ihr Informationen zur Anreise und den Standort unserer Hochzeitslocation.",
		address_label: "Adresse:",

		overnight_title: "Übernachtung",
		overnight_text: "Für Gäste, die von weiter weg anreisen, haben wir hier Übernachtungsmöglichkeiten in der Nähe gesammelt.",

		contact_title: "Fragen & Kontakt",
		contact_text: "Ihr habt Fragen zur Hochzeit, zur Anfahrt oder zur Unterkunft? Meldet euch gerne bei uns."
	},


	en: {
		header_text: "Our Wedding",

		welcome_title: "Welcome!",
		welcome_text: "We are very happy to celebrate this special day with you. Here you will find all important information about our wedding.",

		details_title: "The Big Day",
		date_label: "Date:",
		location_label: "Location:",
		start_label: "Start:",
		details_text: "We are looking forward to celebrating together with you, enjoying good food, laughter and creating wonderful memories.",

		schedule_title: "Schedule",
		schedule_1: "XX:XX – Ceremony",
		schedule_2: "XX:XX – Reception",
		schedule_3: "XX:XX – Dinner & Celebration",
		schedule_4: "XX:XX – Party",

		route_title: "Getting There",
		route_text: "Here you will find information about how to get to our wedding location.",
		address_label: "Address:",

		overnight_title: "Accommodation",
		overnight_text: "For guests travelling from further away, we have collected some accommodation options nearby.",

		contact_title: "Questions & Contact",
		contact_text: "Do you have questions about the wedding, directions or accommodation? Feel free to contact us."
	},


	tr: {
		header_text: "Düğünümüz",

		welcome_title: "Hoş geldiniz!",
		welcome_text: "Bu özel günü sizlerle kutlayacağımız için çok mutluyuz. Düğünümüzle ilgili tüm önemli bilgileri burada bulabilirsiniz.",

		details_title: "Büyük Gün",
		date_label: "Tarih:",
		location_label: "Yer:",
		start_label: "Başlangıç:",
		details_text: "Bu güzel günü sizlerle birlikte kutlamayı, güzel yemekler yemeyi, gülmeyi ve unutulmaz anılar biriktirmeyi sabırsızlıkla bekliyoruz.",

		schedule_title: "Program",
		schedule_1: "XX:XX – Nikah töreni",
		schedule_2: "XX:XX – Karşılama",
		schedule_3: "XX:XX – Yemek ve kutlama",
		schedule_4: "XX:XX – Parti",

		route_title: "Ulaşım",
		route_text: "Düğün mekanımıza nasıl ulaşabileceğinizle ilgili bilgileri burada bulabilirsiniz.",
		address_label: "Adres:",

		overnight_title: "Konaklama",
		overnight_text: "Uzaklardan gelecek misafirlerimiz için yakın çevredeki konaklama seçeneklerini burada topladık.",

		contact_title: "Sorular & İletişim",
		contact_text: "Düğün, ulaşım veya konaklama hakkında sorularınız varsa bize ulaşabilirsiniz."
	}

};


function changeLanguage(language) {

	document.querySelectorAll("[data-i18n]").forEach(element => {

		const key = element.dataset.i18n;

		if (translations[language][key]) {
			element.innerHTML = translations[language][key];
		}

	});

	localStorage.setItem("language", language);
}


window.onload = () => {

	const savedLanguage = localStorage.getItem("language") || "de";

	changeLanguage(savedLanguage);

};