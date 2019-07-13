var helpers = "Check all that apply. Leave unchecked if none"

//Question's names [DONE]
var names = ["age",
			 "devices",
			 "public_wifi",
			 "vpn",
			 "smartphones",
			 "voice_assist",
			 "alias",
			 "alias_info",
			 "spam",
			 "spam_open",
			 "share_online",
			 "third_party_apps",
			 "device_sharing"]
//Questions [DONE]
var questions = ["1. What is your age?",
				 "2. Which of these devices do you have?",
				 "3. Do you use public Wi-Fi?",
				 "3-1. If you answered 'Yes' to Question 3, do you use a VPN?",
				 "4. Which kind of smartphone do you have?",
				 "5. Do you use voice assistants when using your devices?",
				 "6. Do you use an alias when personal information is required?",
				 "6-1. If you answered 'Yes' or 'It depends' to Question 6, which information do you alter?",
				 "7. Have you received any suspicious emails?",
				 "7-1. If you answered 'Yes' to Question 7, have you opened the said email and the link provided?",
				 "8. Are you cautious with what information you share online?",
				 "9. Do you use any biometrics / third party verification when storing your data?",
				 "10. Do you share your devices with anyone?"]
//Question's choices [DONE]
var choices = [["Below 18","18 to 24","25 to 34","35 to 44","44 to 54"],//0
/*1*/		   ["Smartphone","Laptop","Game Consoles","Tablet","Personal Computer","CCTV","Amazon Alexa","Google Home"],
			   ["Yes","No"], //2
			   ["Yes","No","No idea"],//3
			   ["iPhone","Samsung","Oppo","Huawei","Cherry Mobile","Vivo","Lenovo","Asus"],//4
			   ["Yes","No"],//5
			   ["Yes","No","It depends"],//6
			   ["Name","Birthday/Age"],//7
			   ["Yes","No"],//8
			   ["Yes","No"],//9
			   ["Yes","No","It depends"],//10
			   ["Yes","No"],//11
			   ["Yes","No","Sometimes"]]//12
//Question's headers & feedback's titles [DONE]
var labels = ["Age group",
			  "Device ownership",
			  "Public Wi-Fi",
			  "VPN Service",
			  "Smartphone manufacturer",
			  "Voice assistants",
			  "Alias",
			  "Alias alter",
			  "Spam emails",
			  "Opening spam emails",
			  "Caution in information sharing",
			  "Third party verification",
			  "Device sharing"];

//Form properties [DONE]
var schema = {
        "type": "object",
        "properties": {
            "age": {
                "type": "string",
                "required": true,
				"minimum" : 1,
				"maximum" : 100
            },
			"devices": {
				"type": "array"
			},
			"public_wifi": {
				"type": "string",
                "required": true
			},
			"vpn": {
                "type": "string"
            },
			"smartphones": {
                "type": "array"
            },
			 "voice_assist": {
				"type": "string",
				"required" : true
            },
			 "alias": {
                "type": "string",
				"required" : true
            },
			 "alias_info": {
                "type": "string"
            },
			 "spam": {
                "type": "string",
				"required" : true
            },
			 "spam_open": {
                "type": "string"
            },
			 "share_online": {
                "type": "string",
				"required" : true
            },
			 "third_party_apps": {
                "type": "string",
				"required" : true
            },
			 "device_sharing": {
                "type": "string",
				"required" : true
            }
        }
    };
//Form options [DONE]
var options = {
        "fields": {
            "age": {
				"name": names[0],
                "type": "number",
                "label": questions[0]
            },
			"devices": {
				"name": names[1],
				"type": "checkbox",
				"label": questions[1],
				"multiple": "true",
                "dataSource": choices[1],
				"helper" : helpers
			},
			"public_wifi": {
				"name": names[2],
				"type": "radio",
				"hideNone": true,
				"emptySelectFirst" : false,
				"label": questions[2],
				"dataSource": choices[2]
			},
			"vpn": {
				"name": names[3],
				"type": "radio",
				"hideNone": "true",
                "label": questions[3],
				"dataSource": choices[3]
            },
			"smartphones": {
				"name": names[4],
                "type": "checkbox",
                "label": questions[4],
				"multiple": "true",
				"dataSource": choices[4],
				"helper" : helpers
			},
			"voice_assist": {
				"name": names[5],
				"type": "radio",
				"hideNone": "true",
                "label": questions[5],
				"dataSource": choices[5]
			},
			"alias": {
				"name": names[6],
				"type": "radio",
				"hideNone": "true",
                "label": questions[6],
				"dataSource": choices[6]
			},
			"alias_info": {
				"name": names[7],
				"type": "radio",
				"hideNone": "true",
                "label": questions[7],
				"dataSource": choices[7]
			},
			"spam": {
				"name": names[8],
				"type": "radio",
				"hideNone": "true",
                "label": questions[8],
				"dataSource": choices[8]
			},
			"spam_open": {
				"name": names[9],
				"type": "radio",
				"hideNone": "true",
                "label": questions[9],
				"dataSource": choices[9]
			},
			"share_online": {
				"name": names[10],
				"type": "radio",
				"hideNone": "true",
                "label": questions[10],
				"dataSource": choices[10]
			},
			"third_party_apps": {
				"name": names[11],
				"type": "radio",
				"hideNone": "true",
                "label": questions[11],
				"dataSource": choices[11]
			},
			"device_sharing": {
				"name": names[12],
				"type": "radio",
				"hideNone": "true",
                "label": questions[12],
				"dataSource": choices[12]
			}
        },
        "form": {
            "buttons": {
                "submit": {
                    "value": "Submit the Form",
					"click": function() {
						var data = JSON.parse(JSON.stringify(this.getValue()));
						
						console.log(data);
						showModal(data);
                    }
                }
            }
        }
    };

//Feedback chart's data [DONE]
var chart_rawdata = 
[
	[64,95,23,8,5], //0
	[165,157,92,83,66,29,15,15], //1
	[64,101], //2
	[15,50,1], //3
	[80,64,5,26,2,5,3,5], //4
	[92,107], //5
	[23,52,125], //6
	[69,31], //7
	[62,126], //8
	[81,19], //9
	[168,30,2], //10
	[81,114], //11
	[10,108,77] //12
]
//Feedback chart's colors  [UPDATE?]
var chart_colors = 
[
	"#fb8b24", "#00a1e4", "#ffc107", "#393e41", "#d3d0cb",
	"#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"
]
//Feedback chart's properties [DONE?]
var chart_data = 
[
	//0
	{
		datasets: [{
			label: labels[0],
			data: chart_rawdata[0],
			backgroundColor: chart_colors,
			borderColor : "#000000",
			borderWidth : 2
		}],
		labels: choices[0]
	},
	//1
	{
		datasets: [{
			label: labels[1],
			data: chart_rawdata[1],
			backgroundColor: chart_colors,
			borderColor : "#000000",
			borderWidth : 2
		}],
		labels: choices[1]
	},
	//2
	{
		datasets: [{
			label: labels[2],
			data: chart_rawdata[2],
			backgroundColor: chart_colors,
			borderColor : "#000000",
			borderWidth : 2
		}],
		labels: choices[2]
	},
	//3
	{
		datasets: [{
			label: labels[3],
			data: chart_rawdata[3],
			backgroundColor: chart_colors,
			borderColor : "#000000",
			borderWidth : 2
		}],
		labels: choices[3]
	},
	//4
	{
		datasets: [{
			label: labels[4],
			data: chart_rawdata[4],
			backgroundColor: chart_colors,
			borderColor : "#000000",
			borderWidth : 2
		}],
		labels: choices[4]
	},
	//5
	{
		datasets: [{
			label: labels[5],
			data: chart_rawdata[5],
			backgroundColor: chart_colors,
			borderColor : "#000000",
			borderWidth : 2
		}],
		labels: choices[5]
	},
	//6
	{
		datasets: [{
			label: labels[6],
			data: chart_rawdata[6],
			backgroundColor: chart_colors,
			borderColor : "#000000",
			borderWidth : 2
		}],
		labels: choices[6]
	},
	//7
	{
		datasets: [{
			label: labels[7],
			data: chart_rawdata[7],
			backgroundColor: chart_colors,
			borderColor : "#000000",
			borderWidth : 2
		}],
		labels: choices[7]
	},
	//8
	{
		datasets: [{
			label: labels[8],
			data: chart_rawdata[8],
			backgroundColor: chart_colors,
			borderColor : "#000000",
			borderWidth : 2
		}],
		labels: choices[8]
	},
	//9
	{
		datasets: [{
			label: labels[9],
			data: chart_rawdata[9],
			backgroundColor: chart_colors,
			borderColor : "#000000",
			borderWidth : 2
		}],
		labels: choices[9]
	},
	//10
	{
		datasets: [{
			label: labels[10],
			data: chart_rawdata[10],
			backgroundColor: chart_colors,
			borderColor : "#000000",
			borderWidth : 2
		}],
		labels: choices[10]
	},
	//11
	{
		datasets: [{
			label: labels[11],
			data: chart_rawdata[11],
			backgroundColor: chart_colors,
			borderColor : "#000000",
			borderWidth : 2
		}],
		labels: choices[11]
	},
	//12
	{
		datasets: [{
			label: labels[12],
			data: chart_rawdata[12],
			backgroundColor: chart_colors,
			borderColor : "#000000",
			borderWidth : 2
		}],
		labels: choices[12]
	}		
];

//Main() [WORKING]
$("#form").alpaca({
    "schema": schema,
	"options": options
});

//Main - Form process [WORKING]
function showModal(input){
	var modal_messages = 
	[
		define_age(input.age),define_device(input.devices),define_public_wifi(input.public_wifi),
		define_vpn(input.vpn),define_smartphone(input.smartphones),define_voice_assist(input.voice_assist),
		define_alias(input.alias),define_alias_info(input.alias_info),define_spam(input.spam),define_spam_open(input.spam_open),
		define_share_online(input.share_online),define_third_party_apps(input.third_party_apps),define_device_sharing(input.device_sharing)
	];
	
	var modal_content = 
	"<h1 class='display-1'>Your results!</h1>"+
	"<div class='title'>"+
		"<span class='span-header'>1.) "+labels[0]+"</span>"+
		"<h4 class='display-4'>"+modal_messages[0]+"</h4>"+
		"<canvas  id='chart_"+names[0]+"'></canvas><br/>"+
	"</div>"+
	"<br/><div class='title'>"+
		"<span class='span-header'>2.) "+labels[1]+"</span>"+
		"<h4 class='display-4'>"+modal_messages[1]+"</h4>"+
		"<canvas  id='chart_"+names[1]+"'></canvas><br/>"+
	"</div>"+
	"<br/><div class='title'>"+
		"<span class='span-header'>3.) "+labels[2]+"</span>"+
		"<h4 class='display-4'>"+modal_messages[2]+"</h4>"+
		"<canvas  id='chart_"+names[2]+"'></canvas><br/>"+
	"</div>"+
	"<br/><div class='title'>"+
		"<span class='span-header'>4.) "+labels[3]+"</span>"+
		"<h4 class='display-4'>"+modal_messages[3]+"</h4>"+
		"<canvas  id='chart_"+names[3]+"'></canvas><br/>"+
	"</div>"+
	"<br/><div class='title'>"+
		"<span class='span-header'>5.) "+labels[4]+"</span>"+
		"<h4 class='display-4'>"+modal_messages[4]+"</h4>"+
		"<canvas  id='chart_"+names[4]+"'></canvas><br/>"+
	"</div>"+
	"<br/><div class='title'>"+
		"<span class='span-header'>6.) "+labels[5]+"</span>"+
		"<h4 class='display-4'>"+modal_messages[5]+"</h4>"+
		"<canvas  id='chart_"+names[5]+"'></canvas><br/>"+
	"</div>"+
	"<br/><div class='title'>"+
		"<span class='span-header'>7.) "+labels[6]+"</span>"+
		"<h4 class='display-4'>"+modal_messages[6]+"</h4>"+
		"<canvas  id='chart_"+names[6]+"'></canvas><br/>"+
	"</div>"+
	"<br/><div class='title'>"+
		"<span class='span-header'>8.) "+labels[7]+"</span>"+
		"<h4 class='display-4'>"+modal_messages[7]+"</h4>"+
		"<canvas  id='chart_"+names[7]+"'></canvas><br/>"+
	"</div>"+
	"<br/><div class='title'>"+
		"<span class='span-header'>9.) "+labels[8]+"</span>"+
		"<h4 class='display-4'>"+modal_messages[8]+"</h4>"+
		"<canvas  id='chart_"+names[8]+"'></canvas><br/>"+
	"</div>"+
	"<br/><div class='title'>"+
		"<span class='span-header'>10.) "+labels[9]+"</span>"+
		"<h4 class='display-4'>"+modal_messages[9]+"</h4>"+
		"<canvas  id='chart_"+names[9]+"'></canvas><br/>"+
	"</div>"+
	"<br/><div class='title'>"+
		"<span class='span-header'>11.) "+labels[10]+"</span>"+
		"<h4 class='display-4'>"+modal_messages[10]+"</h4>"+
		"<canvas  id='chart_"+names[10]+"'></canvas><br/>"+
	"</div>"+
	"<br/><div class='title'>"+
		"<span class='span-header'>12.) "+labels[11]+"</span>"+
		"<h4 class='display-4'>"+modal_messages[11]+"</h4>"+
		"<canvas  id='chart_"+names[11]+"'></canvas><br/>"+
	"</div>"+
	"<br/><div class='title'>"+
		"<span class='span-header'>13.) "+labels[12]+"</span>"+
		"<h4 class='display-4'>"+modal_messages[12]+"</h4>"+
		"<canvas  id='chart_"+names[12]+"'></canvas><br/>"+
	"</div>"+
	"<div class='footer-copyright text-center py-3'>© 2019 Copyright"+
	"</div>"

	var modal = new tingle.modal({
		footer: true,
		stickyFooter: false,
		closeMethods: ['overlay', 'button', 'escape'],
		closeLabel: "Close",
	});
	
	modal.setContent(modal_content);

	modal.addFooterBtn('Okay!', 'tingle-btn tingle-btn--primary', function() {
		modal.close();
	});

	modal.open();

	showCharts();
}
//Main - Display all charts [WORKING]
function showCharts(){

/*0*/	let canvas_age = document.getElementById('chart_age').getContext('2d'),
/*1*/		canvas_devices = document.getElementById('chart_devices').getContext('2d'),
/*2*/		canvas_public_wifi = document.getElementById('chart_public_wifi').getContext('2d'),
/*3*/		canvas_vpn = document.getElementById('chart_vpn').getContext('2d'),
/*4*/		canvas_smartphones = document.getElementById('chart_smartphones').getContext('2d'),
/*5*/		canvas_voice_assist = document.getElementById('chart_voice_assist').getContext('2d'),
/*6*/		canvas_alias = document.getElementById('chart_alias').getContext('2d'),
/*7*/		canvas_alias_info = document.getElementById('chart_alias_info').getContext('2d'),
/*8*/		canvas_spam = document.getElementById('chart_spam').getContext('2d'),
/*9*/		canvas_spam_open = document.getElementById('chart_spam_open').getContext('2d'),
/*10*/		canvas_share_online = document.getElementById('chart_share_online').getContext('2d'),
/*11*/		canvas_third_party_apps = document.getElementById('chart_third_party_apps').getContext('2d'),
/*12*/		canvas_device_sharing = document.getElementById('chart_device_sharing').getContext('2d');

let myChart_third_party_apps = new Chart(canvas_third_party_apps,{
	type: 'doughnut',
	data: chart_data[11],
	options: {
		responsive: false,
		cutoutPercentage: 35
	}
});
let myChart_device_sharing = new Chart(canvas_device_sharing,{
	type: 'doughnut',
	data: chart_data[12],
	options: {
		responsive: false,
		cutoutPercentage: 35
	}
});
let myChart_share_online = new Chart(canvas_share_online,{
	type: 'doughnut',
	data: chart_data[10],
	options: {
		responsive: false,
		cutoutPercentage: 35
	}
});
let myChart_spam_open = new Chart(canvas_spam_open,{
	type: 'doughnut',
	data: chart_data[9],
	options: {
		responsive: false,
		cutoutPercentage: 35
	}
});
let myChart_spam = new Chart(canvas_spam,{
	type: 'doughnut',
	data: chart_data[8],
	options: {
		responsive: false,
		cutoutPercentage: 35
	}
});
	let myChart_alias_info = new Chart(canvas_alias_info,{
		type: 'doughnut',
		data: chart_data[7],
		options: {
			responsive: false,
			cutoutPercentage: 35
		}
	});
	
	let myChart_alias = new Chart(canvas_alias,{
		type: 'doughnut',
		data: chart_data[6],
		options: {
			responsive: false,
			cutoutPercentage: 35
		}
	});
	let myChart_voice_assist = new Chart(canvas_voice_assist,{
		type: 'doughnut',
		data: chart_data[5],
		options: {
			responsive: false,
			cutoutPercentage: 35
		}
	});
	let myChart_vpn = new Chart(canvas_vpn,{
		type: 'doughnut',
		data: chart_data[3],
		options: {
			responsive: false,
			cutoutPercentage: 35
		}
	});
	let myChart_smartphones = new Chart(canvas_smartphones,{
		type: 'doughnut',
		data: chart_data[4],
		options: {
			responsive: false,
			cutoutPercentage: 35
		}
	});		
	let myChart_age = new Chart(canvas_age, {
		type: 'doughnut',
		data: chart_data[0],
		options: {
			responsive: false,
			cutoutPercentage: 35
		}
	});
	let myChart_devices = new Chart(canvas_devices, {
		type: 'bar',
		data: chart_data[1],
		options: {
			responsive: false
		}
	});
	let myChart_public_wifi = new Chart(canvas_public_wifi,{
		type: 'doughnut',
		data: chart_data[2],
		options: {
			responsive: false,
			cutoutPercentage: 35
		}
	});
}
//Testing - Check if feedback message displays properly [DONE]
function testMessage(messages){
	let final = "",
		content = messages.length;

	if(content > 0){
		for(let i = 0 ; i < content ; i++)
			final += messages[i];
	}else if(content == 0)
		final = "No message received.";

	return final;
}

//Question 'interpreter' [DONE]
function define_age(age){
	let message = define_answer(age);

	message += "You belong to the "+ define_age_helper(age) +" of the correspondents that has taken the survey<br/><br/>";
	
	return message;	
}
function define_age_helper(age){
	let value;

	if(age < 18)
		value = "33 percent (ages below 18)";
	else if(age >= 18 && age <= 24)
		value = "49 percent (ages between 18 and 24)";
	else if(age >= 25 && age <= 34)
		value = "12 percent (ages between 25 and 34)";
	else if(age >= 35 && age <= 44)
		value = "4 percent (ages between 35 and 44)";
	else if(age >= 45)
		value = "2 percent (ages above 45)";
	
	return value;
}
function define_device(devices){
	let message = define_answer(devices),
		number_of_devices = devices.length;
	
	if(number_of_devices > 0){
		for(let i = 0 ; i < number_of_devices; i++)
			message += define_device_helper(devices[i].value);
	}else if(number_of_devices == 0)
		message = "<b>You did not select any device. That's okay!</b>";

	return message;
}
function define_device_helper(device){
	let message;
	
	switch(device){
		case "Amazon Alexa": message = 
		"Amazon employs thousands of people around the world to listen to voice recordings captured in Echo users’ homes and offices" ; break; 
		
		case "CCTV": message = 
		"The advantage of CCTV systems is that a company’s property can be watched over constantly. But it becomes a more complex issue when installed cameras watch employees, students, or customers. And as ‘personal data’, the responsibilities of data controllers in managing it are made a little more intricate." ; 
		break; 
		
		case "Game Consoles": message = "Take the Xbox One Kinect 2.0 feature. It records your voice and takes note of your face and body details. And since it’s “always on,” you know that your information is already saved and stored. Pair that with the PlayStation 4 scanning your living room for gameplay—data of you and your living room are fed into the virtual realm." ; 
		break; 
		
		case "Google Home": message = "Google Home can be unintentionally triggered and record conversations. Many people leave Google Home unmuted whilst it is not being used, however, they shouldn’t." ; 
		break; 
		
		case "Laptop": message = "Laptops offer a great convenience due to their portability. This portability, however, makes them a prime target for thieves. These thieves not only target portable computers for the value of the device itself, but also for the restricted data they might contain." ; 
		break; 
		
		case "Personal Computer": message = "There are new viruses and security threats that emerge every day!  Hackers and scammers are becoming more sophisticated than ever in masking their threats so that people will unknowingly click them and become a victim." ; 
		break; 
		
		case "Smartphone": message = "Unlike many of our computers, our smartphones are ALWAYS with us and many of us rarely turn them off. However, consumers need to be aware of the kind of information that can be collected by various entities from your smartphone." ; 
		break; 
		
		case "Tablet": message = "If you want to bring your own Android or iOS tablet to work, you should consider a couple of factors before taking the plunge. First, in some respects you lose ownership of your device once you commit to using it at work and keeping potentially sensitive data on it. Corporate intellectual property or client data is extremely valuable to your employer, and as such you lose certain freedoms regarding any device that contains that information. Mishandle that information, and you might lose your job" ; break;
	}
	
	message += "<br/><br/>";

	return message;
}
function define_public_wifi(public_wifi){
	let messages = ["The principal disadvantages to using public wifi are, respectively, passive and active. Passively, your traffic can be sniffed or intercepted by other parties on or near the network. Actively, you become vulnerable to ' Man in the Middle' attacks, which allow an attacker to intersplice themself between you and a web page you are visiting","Public Wi-Fi is a great opportunity for governments to connect entire cities: smart cities deploying free Wi-Fi are largely increasing and as a result, can effectively empower their communities with better services"],
		message = define_answer(public_wifi);

	if(public_wifi == "Yes")
		message += messages[0];
	else if(public_wifi == "No")
		message += messages[1];
	
	message += "<br/><br/>";

	return message;
}
function define_vpn(vpn){
	let messages = ["VPN hides your IP address and encrypts your online traffic, it essentially makes sure your digital footprints can’t be tracked on the Internet","Depending on various factors of the VPN server, your Internet connection speeds might take a hit when you using the service.","A VPN secures the private network, using encryption and other security mechanisms to ensure that only authorized users can access the network and that the data cannot be intercepted. This type of network is designed to provides a secure, encrypted tunnel in which to transmit the data between the remote user and the company network."],
		message = define_answer(vpn);

	if(vpn != undefined){
		if(vpn == "No")
			message += messages[0];
		else if(vpn == "Yes")
			message += messages[1];
		else if(vpn == "No idea")
			message += messages[2];
		message += "<br/><br/>";
	}else
		message = "<b>Not using public Wi-Fi is no big deal!</b>";

	return message;
}
function define_smartphone(smartphones){
	let message = define_answer(smartphones),
		phones = smartphones.length;
	
	if(phones > 0){
		for(let i = 0 ; i < smartphones.length; i++)
			message += define_smartphone_helper(smartphones[i].value);
	}else if(phones == 0)
		message = "<b>Owning a smartphone is not a necessity. That's okay!</b>";

	message += "<br/><br/>";
	
	return message;
}
function define_smartphone_helper(smartphone){
	let message;

	switch(smartphone){
		case "iPhone": message = "There’s a security setting in iOS that will erase everything on your iPhone, resetting it back to a blank, factory-state slate if you tap in the wrong passcode 10 times." ; break;
		case "Samsung": message = "If a device is lost or stolen, a sophisticated attack can extract data from it as long as the device is still running, even if the device is locked. Samsung created Sensitive Data Protection to address this specific issue" ; break;
		case "Oppo": message = "Oppo is the first company to officially comment after the government asked all handset makers that sell phones in India to share the security protocols they follow to secure mobile phones" ; break;
		case "Huawei": message = "Huawei claims to be a willing participant in the world of information security. On its website, Huawei said that it “… is willing to work with all governments, customers and partners through various channels to jointly cope with cyber-security threats and challenges from cyber-security.”" ; break;
		case "Cherry Mobile": message = "Cherry Mobile practice all necessary measures to secure any personal information you give to them because your privacy is important to them." ; break;
		case "Vivo": message = "VivoSecurity is a leading pioneer in cyber risk quantification based on data science. Its products and services help organizations achieve, maintain, and demonstrate optimal information security and governance, risk, and compliance (GRC) programs." ; break;
		case "Lenovo": message = "Security threats are ever evolving but Lenovo provides a suite of cutting edge solutions to guard your data infrastructure against damage or exposure" ; break;
		case "Asus": message = "Taiwan-based technology giant ASUS is advising concerned customers to run a newly-created diagnostic tool on their Windows computers after hackers pushed out malware to what some security researchers have estimated to be as many as one million PCs using ASUS’s own Live Update software tool" ; break;
	}

	message += "<br/><br/>";

	return message;
}
function define_voice_assist(voice_assist){
	let messages = ["Reports suggest that there will be somewhere in the region of 24 billion IoT connected devices around the globe by 2020 – that’s about four devices each for every person on the planet. The concern is that all the wearable gadgets, smart consumer appliances, intelligent vehicles and connected infrastructure will cause localized pools of interference, and a continuous struggle for bandwidth.","For those with mobility restrictions or the visually impaired, speech recognition has always been a big help, extending the accessibility of computer-based technologies to a much wider audience"],
		message = define_answer(voice_assist);

	if(voice_assist == "Yes")
		message += messages[0];
	else if(voice_assist == "No")
		message += messages[1];

	message += "<br/><br/>";

	return message;
}
function define_alias(alias){
	let messages = ["Reports suggest that there will be somewhere in the region of 24 billion IoT connected devices around the globe by 2020 – that’s about four devices each for every person on the planet. The concern is that all the wearable gadgets, smart consumer appliances, intelligent vehicles and connected infrastructure will cause localized pools of interference, and a continuous struggle for It can be awkward to either reveal your real name if you do happen to meet an internet buddy offline, or if someone that knows you accidentally lets your real name slip out in a comment.","Using an alias allows for a greater amount of separation between your personal and online life"],
		message = define_answer(alias);

	if(alias == "Yes" || alias == "It depends")
		message += messages[0];
	else if(alias == "No")
		message += messages[1];

	message += "<br/><br/>";

	return message;
}
function define_alias_info(alias_info){
	let messages = ["The biggest thing I can think of is both an advantage and a disadvantage: everything you put online under your real name will follow you. This is good when you are posting good, constructive things. It's bad when you post a picture of you from that night or when you say something offensive or just plain stupid","Some online services send you birthdate greetings like Google. So next time, every other human being forgets Google is there to greet you!"],
		message = define_answer(alias_info);

	if(alias_info != undefined){
		if(alias_info == "Name" )
			message += messages[0];
		else if(alias_info == "Birthdate/Age")
			message += messages[1];
		message += "<br/><br/>";
	}else
		message = "<b>Using your real information is helpful for some researchers!</b>";

	return message;
}
function define_spam(spam){
	let messages = ["Consider using spam blocking software or try to switch to a more secure mail system that automatically blocks spam mail","Not receiving spam mail is healthy sign of a secure mail system. Keep it up!"],
		message = define_answer(spam);

	if(spam == "Yes" )
		message += messages[0];
	else if(spam == "No")
		message += messages[1];

	message += "<br/><br/>";

	return message;
}
function define_spam_open(spam_open){
	let messages = ["Opening suspicious emails is a good and effective way in catching unwanted programs and applications in your computer. Be more careful next time","Not opening suspicious emails is a good and effective way to protect your device from malicious and unwanted intent. Stay safe"],
		message = define_answer(spam_open);

	if(spam_open != undefined){
		if(spam_open == "Yes" )
			message = messages[0];
		else if(spam_open == "No")
			message = messages[1];
		message += "<br/><br/>";
	}else
		message = "<b>Ignoring spam email is another good way of protecting your device and its security!</b>";

	return message;
}
function define_share_online(share_online){
	let messages = ["Being careful in information sharing online is great and healthy way to keep your personal data safe and secure.","Sharing information online might decouple the stability of the connection between your personal, private life and online persona. Just make sure to be cautious in any given situation and in the answers you give out!"],
		message = define_answer(share_online);

	if(share_online == "Yes" || share_online == "It depends")
		message += messages[0];
	else if(share_online == "No")
		message += messages[1];

	message += "<br/><br/>";

	return message;
}
function define_third_party_apps(third_party_apps){
	let messages = ["Using third party verification applications is a solid and secure method to incude another gateway or layer of security to your personal account.","Relying on the basic username/password verification system may be convenient, but in higher levels of needed security, another layer of security is essential."],
		message = define_answer(third_party_apps);

	if(third_party_apps == "Yes")
		message += messages[0];
	else if(third_party_apps == "No")
		message += messages[1];

	message += "<br/><br/>";

	return message;
}
function define_device_sharing(device_sharing){
	let messages = ["Sharing your device with another person is great since, for example, if the other person needs to use your device for his/her essentialities your the person that is lending a hand and helping is always welcome. However, just make sure that when you share your device take extra precaution to log out of your accounts in any given system to make sure no accident will occur","Not sharing your device may be the most private and secure thing to do but if the situation exists wherein the person who needed to borrow such device needs the device for valid and sensible reasons consider lending them a hand and your device since helping is always welcome"],
		message = define_answer(device_sharing);

	if(device_sharing == "Yes" || device_sharing == "Sometimes")
		message += messages[0];
	else if(device_sharing == "No")
		message += messages[1];

	message += "<br/><br/>";

	return message;
}
function define_answer(answer){
	if(answer != undefined){
		let message = "<b>You answered ",
			concat_message = "'";

		if(Array.isArray(answer)){
			if(answer.length > 0){
				concat_message += ""+answer[0].value+"";

				for(let i = 1 ; i < answer.length ; i++)
					concat_message += ", "+answer[i].value+"";
			}
		}else
			concat_message += answer;

		message += concat_message + "'</b><br/><br/>";

		return message;
	}
}