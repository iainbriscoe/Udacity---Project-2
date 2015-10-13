var bio = {

	"name" : "Iain Briscoe",
	"role" : "Web Developer",
	"contacts" : { 
		"mobile" : "519-998-1142",
		"email" : "iainbriscoe@me.com",
		"twitter" : "@iainbriscoe",
		"github" : "iainbriscoe",
		"location" : "Kitchener"
	},
	"welcomeMessage" : "Reinforce Your Passion", 
	"skills" : ["HTML", "CSS", "Javascript", "JQuery"], 
	"biopic" : "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAN-AAAAJDY2NDE0NzI0LThiYmEtNGE3NC1hNTZlLWQ1MjEzMmYzMjUzYg.jpg",
	display : function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name); 
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role); 
		$("#header").append(formattedName, formattedRole);


		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email); 
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github); 
		var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedlocation);
		$("#footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedlocation); 

		var formattedImage = HTMLbioPic.replace("%data%", bio.biopic); 
		$("#header").append(formattedImage);

		var formattedWelcomeText = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeText); 

		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);


			var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]); 
			$("#header").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]); 
			$("#header").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]); 
			$("#header").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]); 
			$("#header").append(formattedSkill);
		};
	}
};

var education = { 
	"schools" : [
		{
			"name" : "Wilfrid Laurier University",
			"location" : "Waterloo, Ontario",
			"degree" : "Bachelor of Science",
			"major" : ["Computer Science"],
			"dates" : " In Progress ",
			"url" : "www.wlu.ca"		
		},
		{
			"name" : "Conestoga College",
			"location" : "Kitchener, Ontario",
			"degree" : "Diploma",
			"major" : ["Computer Programmer"],
			"dates" : "2015",
			"url" : "www.conestogac.on.ca"		
		}	
	], 
	"OnlineClasses" : [
		{
			"title" : "Front-End NanoDegree",
			"school" : "Udacity",
			"dates" : " In Progress ",
			"url" : "www.Udacity.com"
		}
	],
	display : function() {
		$("#education").append(HTMLschoolStart); 
		for (school in education.schools) {
			
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name); 
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree); 
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates); 
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location); 
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

			$(".education-entry").append(formattedName, formattedDegree, formattedDates, formattedLocation, formattedMajor);
		};

		if(education.OnlineClasses.length > 0) {
			$(".education-entry").append(HTMLonlineClasses);
			for(classes in education.OnlineClasses) {
				var formattedTitle = HTMLonlineTitle.replace("%data%", education.OnlineClasses[classes].title);
				var formattedSchool = HTMLonlineSchool.replace("%data%", education.OnlineClasses[classes].school); 
				var formattedDates = HTMLonlineDates.replace("%data%", education.OnlineClasses[classes].dates); 
				var formattedURL = HTMLonlineURL.replace("%data%", education.OnlineClasses[classes].url);
				$(".education-entry:last").append(formattedTitle, formattedSchool, formattedDates, formattedURL);
			};
		};

	}
};

var work = { 
	"jobs" : [
		{
			"employer" : "Apple",
			"title" : "Genius Admin", 
			"location" : "Waterloo, Ontario",
			"dates" : "April 2015 - October 2015", 
			"description" : "It was my responsility to keep track of service part inventory, ensure repairs are happening on time and properly, while keeping customer informated and up to date on the repair progress."
		},
		{
			"employer" : "Apple",
			"title" : "Specialist", 
			"location" : "Waterloo, Ontario",
			"dates" : "April 2011 - April 2015", 
			"description" : "As a Specialist working for Apple Retail it was my responsibility to help customers identify the correct solution that was appropriate for them, help them get set up, and assist them throughout the life time of the product."
		}
	], 
	display : function() {
		for(job in work.jobs) {

			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer); 
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title); 
			var formatedEmployerAndTitle = formattedEmployer + formattedTitle;

			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location); 
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates); 
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description); 


			$(".work-entry:last").append(formatedEmployerAndTitle, formattedLocation, formattedDates, formattedDescription);	
		};
	}
};

var projects = { 
	"projects" : [
		{
			"title" : "Portfolio Website",
			"dates" : "October 2015",
			"description" : "This is a portfolio page that utilizes bootstrap",
			"image" : ["http://i.imgur.com/NpGdP8Y.png","http://i.imgur.com/5df3LMD.png"]
		},
		{
			"title" : "Resume",
			"dates" : "October 2015",
			"description" : "This is a Resume built using HTML, CSS, Javascript and JQuery",
			"image" : ["http://i.imgur.com/upvmqBb.png"]
		}
	],
	display : function() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates); 
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description); 
			$(".project-entry:last").append(formattedTitle, formattedDate, formattedDescription);
			for(image in projects.projects[project].image) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image[image]);
				$(".project-entry:last").append(formattedImage);
			}
			
		};
	}
}; 

function locations() {
    var locationsArray = []; 
    locationsArray.push(bio.contacts.location); 
    for (school in education.schools) {
    	locationsArray.push(education.schools[school].location); 
    }
    for (job in work.jobs) {
    	locationsArray.push(work.jobs[job].location);
    }
    return locationsArray;
}; 



bio.display(); 
education.display();
work.display();
projects.display();



$("#mapDiv").append(googleMap);
