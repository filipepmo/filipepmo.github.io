export default {
	bio: {
		about: {
			text: [
				"Hi &#128075;",
				"Currently working at Ubisoft in the globally competitive blockbuster Gaming Industry in a complex, state-of-the-art backend platform with managed game services, analytics and LiveOps for live games with +85M registered players."
			],
		},
		contact: {
			text: [
				"If you would like to get in touch with me, be it for exploring a technology, a business, or to just say hi, feel free to send me an email. My email address is: vinaysomawat40@gmail.com",
			],
		},
	},
	skills_architecture: [
		{
			title: "Styles",
			skillName: "Client-server; microservices; monotithic; reactive; REST; service-oriented",
			color: "1",
			percentage: "90",
		},
		{
			title: "Design",
			skillName: "Trade-off analysis; Architectural Decision Records",
			color: "2",
			percentage: "80",
		},
		{
			title: "Governance",
			skillName: "API First; Standards definition; Governance",
			color: "3",
			percentage: "70",
		},
	],
	skills_practices: [
		{
			title: "Development",
			skillName: "Debugging; Refactoring; Code Reviews; Pair/Mob Programming",
			color: "1",
			percentage: "100",
		},
		{
			title: "Product",
			skillName: "Agile/Scrum; Product Knowledge; Documentation",
			color: "2",
			percentage: "100",
		},
		{
			title: "Performance",
			skillName: "Serverless architectures; experiment often; consider data access patterns",
			color: "3",
			percentage: "80",
		},
		{
			title: "Operational Excellence",
			skillName: "Perform operations as code; Frequent, small and reversible changes;",
			color: "5",
			percentage: "90",
		},
		{
			title: "Incidents",
			skillName: "Refine operations procedures frequently; Anticipate failures; Learn from all operational failures",
			color: "6",
			percentage: "80",
		},
		{
			title: "Reliability",
			skillName: "Automated Testing; Test-Driven Development; Test recovery procedures; Scale horizontally",
			color: "4",
			percentage: "80",
		},
	],
	skills_frontend: [
		{
			title: "Languages",
			skillName: "JavaSript; Typescript",
			color: "1",
			percentage: "60",
		},
		{
			title: "Frameworks/Libraries",
			skillName: "React.js",
			color: "6",
			percentage: "50",
		},
		{
			title: "Design",
			skillName: "HTML; Bootstrap; MaterialUI",
			color: "4",
			percentage: "60",
		},
		{
			title: "Tools",
			skillName: "Postman; Chrome DevTools",
			color: "3",
			percentage: "80",
		},
	],
	skills_backend: [
		{
			title: "Languages",
			skillName: "Java; Spring Framework; Spring Boot",
			color: "1",
			percentage: "90",
		},
		{
			title: "Frameworks/Libraries",
			skillName: "C# and .NET",
			color: "6",
			percentage: "70",
		},
		{
			title: "Special skills",
			skillName: "Golang; Python",
			color: "1",
			percentage: "40",
		},
		{
			title: "Databases (No SQL)",
			skillName: "DynamoDB",
			color: "2",
			percentage: "60",
		},
		{
			title: "Databases (SQL)",
			skillName: "MySQL; Microsoft SQL Server",
			color: "7",
			percentage: "70",
		},
	],
	skills_infra: [
		{
			title: "Infrastructure",
			skillName: "AWS; Ansible; Docker; Packer; Vagrant",
			color: "3",
			percentage: "80",
		},
		{
			title: "OperatingSystems",
			skillName: "Unix; Basic Networking Skills (e.g. SSH tunnels, tcpdump, firewalld)",
			color: "4",
			percentage: "70",
		},
		{
			title: "CI/CD",
			skillName: "CI/CD; GitLab; Jenkins",
			color: "7",
			percentage: "90",
		},
	],
	skills_tools: [
		{
			title: "VCS",
			skillName: "Git; SVN",
			color: "3",
			percentage: "90",
		},
		{
			title: "Observability",
			skillName: "Prometheus; Alert Manager; Grafana; Splunk",
			color: "3",
			percentage: "90",
		},
		{
			title: "Profiling",
			skillName: "Wireshark; k6; Apache JMeter; jvisualvm; dotMemory; dotTrace",
			color: "6",
			percentage: "90",
		},
		{
			title: "Editor",
			skillName: "VS Code; IntelliJ IDEA; IntelliJ Rider",
			color: "6",
			percentage: "100",
		},
	],
	projects: {
		web: [
			{
				projectName: "Rainbow Six Siege's Battle Pass Features",
				image: "images/RainbowSixSiegeLogo.png",
				summary:
					"Backend and frontend features used by Rainbow Six Siege's industry reference Battlepass.",
				preview: "https://www.ubisoft.com/da-dk/game/rainbow-six/siege/credits/year-6",
				techStack: [
					"C#",
					"AWS",
					"Prometheus",
					"Grafana",
				],
			},
			{
				projectName: "Online Services for Ubisoft Game Productions",
				image: "images/Ubisoft_Connect_logo.png",
				summary:
					"Backend and frontend features used by Game Productions (mostly Ubisoft Montreal) including For Honor, Far Cry 6, Watch Dogs: Legion, Immortals Fenyx Rising, Hyper Scape and the Ubisoft Connect PC Client.",
				preview: "https://duesseldorf.ubisoft.com/en/portfolio/",
				techStack: [
					"C#",
					"Java",
					"React.js",
					"AWS",
					"Prometheus",
					"Grafana",
				],
			},
			{
				projectName: "Virtuals Plug'n'Play Demo Website",
				image: "images/v-play.png",
				summary:
					"Demo website for Inspired's Virtuals Plug'n'Play product.",
				preview: "https://vppdemo.inseincvirtuals.com/",
				techStack: [
					"React.js",
					"Google Cloud Platform",
					"Java",
					"WebSockets",
				],
			},
		],
	},
	experience: [
		{
			title: "Online Services Programmer",
			duration: "Feb 2020 - Present",
			subtitle: "Ubisoft Düsseldorf",
			details: [
				"Responsible for implementing and maintaining Ubisoft specific features in the Online Services ecosystem",
				"Led team initiative to make testing pipelines faster which saved 20+ lost days of productivity per year.",
				"Implemented DynamoDB infrastructure solution to improve cost efficiency, achieving 25%+ cost saving.",
				"Developed tool to make multi-burn-rate error budget based alerting consistent within Online Services.",
				"Established bridge between the Data Analytics Team and Game Services and proposed a way to detect anomalies in seasonal data at the development level, improving detection time and providing early warnings.",
				"Developed the team's internal dashboard to ease operation of our Game Services."
			],
			tags: [
				"Software Architecture",
				"AWS",
				"Java",
				"Spring Framework",
				"C#",
				"k6",
				"Prometheus",
				"Golang",
				"React.js",
				"JavaScript",
				"GitLab",
			],
			icon: "gamepad",
		},
		{
			title: "Software Architect",
			duration: "Aug 2018 - Jan 2020",
			subtitle: "Inspired Gaming Group",
			details: [
				"Responsible for the definition and enforcement of development standards and processes.",
				"Designed the Virtuals Plug'n'Play architecture for a complete Virtuals Sports server-based gaming solution.",
				"Led initiatives to fully automate development and integration environments across teams and reduce cycle time by 60% (e.g. auto semantic versioning schemes, virtual hard disk packaging).",
				"Implemented immediate self-service deployments, based on repository naming conventions through ansible playbooks, which replaced a cumbersome process that required several days to complete.",
				"Implementation of an anti-cloning mechanism for Video Game Lottery (VLT) compliance reasons using a cryptographic usb key.",
				"Google Cloud Platform's fully automated deployment of a demo version of one Virtual Sports product."
			],
			tags: [
				"Software Architecture",
				"Apache JMeter",
				"Ansible",
				"Jenkins",
				"Java",
				"Spring Framework",
				"GCP"
			],
			icon: "trophy",
		},
		{
			title: "Development Team Lead",
			duration: "Oct 2017 - Aug 2018",
			subtitle: "Inspired Gaming Group",
			details: [
				"Team Lead for the delivery of a new Virtual Sports product.",
				"Helped the team migrate from manually written deployment plans that could take weeks to fully automated playbooks that took roughly 2h greatly reducing the cycle time.",
				"Led an initiative to integrate Prometheus/Grafana monitoring into the product to improve Observability."
			],
			tags: [
				"Java", 
				"Spring Framework",
				"React.js",
				"JavaScript",
			],
			icon: "trophy",
		},
		{
			title: "Java Developer",
			duration: "Feb 2015 - Oct 2017",
			subtitle: "Inspired Gaming Group",
			details: [
				"Part of a scrum team responsible for developing a new land-based product for the Chinese territory.",
				"Led an initiative to introduce portable development environments with packer & vagrant as a way of deploying & testing changes."
			],
			tags: ["Java", "Spring Framework", "Packer", "Vagrant"],
			icon: "trophy",
		},
		{
			title: "Junior Consultant",
			duration: "Apr 2014 - Feb 2015",
			subtitle: "B. ON Engineering",
			details: [
				"Worked in the Software Security and Telco Industries.",
			],
			tags: ["Java", "Spring Framework", "Unix"],
			icon: "briefcase",
		},
	],
};
