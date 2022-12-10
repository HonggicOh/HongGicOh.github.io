export default {
	bio: {
		about: {
			text: [
				"Hi &#128075;",
				"I’m currently looking for a computer science job in Australia. I graduate in Master of Computing at ANU and I did my undergraduate study in Mathematics and business administration at Kyonggi University in Korea.",
				"I'm a person who has an interest in data and electric car and curious about future technology. I have 3 years working experience in semiconductor and display manufacturing machine field as a Technical Sales and Quality Assurance manager.",
				"Lastly, I love to play billiards, computer games, and watch a movie or sports games with beer.",
			],
		},
		contact: {
			text: [
				"If you would like to get in touch with me, feel free to send me an email at cjswoghdwlr@gmail.com",
			],
		},
	},
	skills: [
		{
			title: "Languages",
			skillName: "Python",
			color: "1",
			percentage: "80",
		},
		{
			title: "Backend",
			skillName: "SQL",
			color: "6",
			percentage: "80",
		},
		{
			title: "Backend",
			skillName: "Java",
			color: "5",
			percentage: "70",
		},
		{
			title: "Version Control",
			skillName: "GitHub, Trello",
			color: "7",
			percentage: "70",
		},
		{
			title: "Analysis",
			skillName: "R, Visualisation",
			color: "3",
			percentage: "70",
		},
	],
	projects: {
		web: [
			{
				projectName: "Agri modelling",
				image: "images/agri.png",
				summary:
					"Collected data and manipulated data for prediction algorithm. Role : Data collection, Data wrangling, Data mining",
				preview: "http://13.211.157.235:5000/home/",
				techStack: ["Excel", "Python", "R", "Web search"],
			},
			{
				projectName: "Team Kosy",
				image: "images/kosy.png",
				summary:
					"Found out the correlation between the number of electric car and power station. Role : Data collection, Data wrangling, Data mining, Team management ",
				preview: "https://teamkosy.pythonanywhere.com/",
				techStack: ["Excel", "Python", "R"],
			},

		],
		software: [
			{
				projectName: "AZUL",
				image: "images/AZUL.png",
				summary:
					"Implemented board game Azul based on OOP. Enable player to play a game with computer or another player.Role: Front-end(full), Back-end(partial)"
				preview:
					"https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
				techStack: ["Java", "JavaFx"],
			},
		],
		android: [
			{
				projectName: "Route42",
				image: "images/route.jpg",
				summary:
					"Social Network Service app with route tracking service. Role : Search implementation, Grammar, UI Testing",
				preview: "https://github.com/HonggicOh/Route42",
				techStack: ["AndroidStudio", "Espresso"],
			}
		],
		Other projects & Assignments: [
			{
				projectName: "SNS energy keyword analysis(Ongoing)",
				image: "images/a.png",
				summary:
					"Collect and analyse Australian's idea about eco-friendly energy on Tweeter.",
				preview: "will update soon",
				techStack: ["Python"],
			},
			{
				projectName: "Questionnaire Analysis",
				image: "images/QA.png",
				summary:
					"Analysing Australians' response about life, COVID-19, vaccine, mental health, employment, income, behaviour from Life in Australia Wave41 August 2020.",
				preview:
					"will update soon",
				techStack: ["Python", "R"],
			},
		],
	},
	experience: [
		{
			title: "DooHoINS Co., Ltd",
			duration: "Jan 2018 - Dec 2019",
			subtitle: "Quality Assurance Manager",
			details: [
				"Assessed materials and products for conformance with quality control requirements and production specifications",
				"Published monthly Non-Conformance Reports(NCR) to provide statistical data about issues and solutions."
				"Established Standard Operating Procedure (SOP)"
				"Client Audit preparation"
			],
			tags: [
				"SOP",
				"NCR",
				"Schedule management",
				"Analysis",
				"Client response"
			],
			icon: "heartbeat",
		},
		{
			title: "DooHoINS Co., Ltd",
			duration: "Jan 2016 - Dec 2018",
			subtitle: "Senior staff",
			details: [
                "Conducted comparative analysis of products (material type, size, predicted work hour, work type and price) to finalise proper quotes for clients."
				"Presented sales report for business development planning, and analysis for product trends.",
				"Managed inventory data to adjust, evaluate and forecast demand.",
				"Ensured successful product delivery by coordinating with the manufacturing, delivery team and clients."
			],
			tags: [
				"CAD"
				"Quote",
				"Inventory management",
				"Sales report",
				"Price analysis",
				"Client support",
			],
			icon: "qroup",
		},
	],
	education: [
		{
			title: "Master of computing",
			duration: "",
			subtitle: "Australian National University, Canberra",
			details: [
				"Data Science specialisation.",
				"GPA of 5.56 out of 7.0",
				"Received over 80% marks for most coding assignments.",
			],
			tags: [
				"Data Mining",
				"Data wrangling",
				"Relational Database",
				"Document analysis",
				"Software construction",
				"Structured programming",
				"Artificial Intelligence"
			],
			icon: "graduation-cap",
		},
		{
			title: "Mathematics (Bachelor of Science in Science)",
			duration: "",
			subtitle: "Kyonggi University, Suwon, Republic of Korea",
			details: [
				"GPA of 3.6 out of 4.5",
				"Double major in Business Administration",
			],
			tags: ["Analytics", "Cryptography", "Algebra"],
			icon: "book",
		},
	],
	footer: [
		{
			label: "Dev Profiles",
			data: [
				{
					text: "GitHub",
					link: "https://github.com/HonggicOh",
				}

			],
		},
		{
			label: "Resources",
			data: [
				{
					text: "Enable Dark/Light Mode",
					func: "enableDarkMode()",
				},
				{
					text: "Print this page",
					func: "window.print()",
				},
			],
		},
		{
			label: "Social Profiles",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/honggic-oh-46b909242/",
				},
				{
					text: "Facebook",
					link: "https://www.facebook.com/profile.php?id=100004629722861",
				}
			],
		}
	],
};
