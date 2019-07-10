var names = ["age",
			 "device",
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
				 "2. Which of these devices do you have? [Check all that apply. Leave unchecked if none]",
				 "3. Do you use public Wi-Fi?",
				 "3-1.If you answered 'Yes' to Question 3, do you use a VPN?",
				 "4. Which kind of smartphone do you have? [Check all that apply. Leave unchecked if none]",
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

var schema = {
        "type": "object",
        "properties": {
            "age": {
                "type": "string",
                "required": true
            },
			"devices": {
				"type": "string"
			},
			"public_wifi": {
				"type": "string"
			},
			"vpn": {
                "type": "string"
            },
			 "smartphone": {
                "type": "string"
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
                "dataSource": choices[1]
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
				"dataSource": choices[4]
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
                        alert(JSON.stringify(this.getValue(), null, "  "));
                    }
                }
            }
        }
    };
$("#form").alpaca({
    "schema": schema,
	"options": options
});