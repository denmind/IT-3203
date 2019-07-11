var names = ["age",
			 "devices",
			 "public_wifi",
			 "vpn",
			 "smartphone",
			 "voice_assist",
			 "alias",
			 "alias_info",
			 "spam",
			 "spam_open",
			 "share_online",
			 "third_party_apps",
			 "device_sharing"]

var questions = ["1. What is your age?",
				 "2. Which of these devices do you have?",
				 "3. Do you use public Wi-Fi?",
				 "3-1. If you answered 'Yes' to Question 3, do you use a VPN?",
				 "4. Which kind of smartphone do you have?",
				 "5. Do you use voice assistants when using your devices?",
				 "6. Do you use an alias when personal information is required?",
				 "6-1. If you answered 'Yes' to Question 6, which information do you alter?",
				 "7. Have you received any suspicious emails?",
				 "7-1. If you answered 'Yes' to Question 7, have you opened the said email and the link provided?",
				 "8. Are you cautious with what information you share online?",
				 "9. Do you use any biometrics / third party verification when storing your data?",
				 "10. Do you share your devices with anyone?"]

var choices = [["Below 18","18 to 24","25 to 34","35 to 44","44 to 54","Above 55"],
			   ["Smartphone","Laptop","Game Consoles","Tablet","Personal Computer","CCTV","Amazon Alexa","Google Home"],
			   ["Yes","No"],
			   ["Yes","No","No idea"],
			   ["iPhone","Samsung","Oppo","Huawei","Cherry Mobile","Vivo","Lenovo","Asus"],
			   ["Yes","No"],
			   ["Yes","No","It depends"],
			   ["Name","Birthday/Age"],
			   ["Yes","No"],
			   ["Yes","No"],
			   ["Yes","No","It depends"],
			   ["Yes","No"],
			   ["Yes","No","Sometimes"]]
	
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
			  "Device sharing"]

var helpers = "Check all that apply. Leave unchecked if none"

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
				"type": "string"
			},
			"vpn": {
                "type": "string"
            },
			 "smartphone": {
                "type": "array"
            },
			 "voice_assist": {
                "type": "string"
            },
			 "alias": {
                "type": "string"
            },
			 "alias_info": {
                "type": "string"
            },
			 "spam": {
                "type": "string"
            },
			 "spam_open": {
                "type": "string"
            },
			 "share_online": {
                "type": "string"
            },
			 "third_party_apps": {
                "type": "string"
            },
			 "device_sharing": {
                "type": "string"
            }
        }
    };
	
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
				"hideNone": "true",
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
			"smartphone": {
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

var data = [[64,95,23,8,5]]
var legends = [["Below 18","18 to 24","25 to 34","35 to 44","45 to 54"]]
var colors = ["#6699cc", "#fff275", "#ff8c42", "#ff3c38", "#a23e48", "#bfe020", "#bfff20", 
			  "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", 
			  "#AAAAAA"]

var chart_data = [{
		datasets: [{
			label: labels[0],
			data: data[0],
			backgroundColor: colors,
			borderColor : "#000000",
			borderWidth : 2
		}],
		labels: legends[0]
	}];


$("#form").alpaca({
    "schema": schema,
	"options": options
});
function showModal(input){
	var modal_messages = [define_age(input["age"])];
	
	var modal_content = "<div class='title'>Age Group"+
							"<canvas  id='chart_age'></canvas>"+ //Age
						"</div>"; 
	console.log(define_device(input.devices));
	var modal = new tingle.modal({
		footer: true,
		stickyFooter: false,
		closeMethods: ['overlay', 'button', 'escape'],
		closeLabel: "Close",
	});
	
	modal.setContent(modal_content);

	modal.addFooterBtn('Close', 'tingle-btn tingle-btn--primary', function() {
		modal.close();
	});

	modal.open();
	
	//Age
	var canvas_age = document.getElementById('chart_age').getContext('2d');
	
	var myChart = new Chart(canvas_age, {
		type: 'doughnut',
		data: chart_data[0],
		options: {
			responsive: false,
			cutoutPercentage: 40
		}
	});
}

function define_age(age){
	var message;
	
	message = "You belong to the "+ define_age_helper(age) +" percent of the correspondents that has taken the survey";
	
	return message;	
}
function define_age_helper(age){
	
	var value = 1;
	
	if(age < 18)
		value = 33;
	else if(age >= 18 && age <= 24)
		value = 49;
	else if(age >= 25 && age <= 34)
		value = 12;
	else if(age >= 35 && age <= 44)
		value = 4;
	else if(age >= 45)
		value = 2;
	
	return value;
}

function define_device(devices){
	
	var message = "";
	
	if(devices != undefined){
		
		for(let i = 0 ; i < devices.length; i++)
			message += define_device_helper(devices[i].value) + "\n\n";
	}else
		message = "You selected no device. That's okay!";
	return message;
}
function define_device_helper(device){
	var message = "";
	
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
	
	return message;
}