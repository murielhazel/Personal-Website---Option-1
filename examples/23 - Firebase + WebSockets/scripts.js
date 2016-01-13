  // Create a referece to firebase
  var messagesRef = new Firebase('https://hackeryou.firebaseio.com/chat');

  // C.R.E.A.M -  cache your elements
  var messageField = $('#messageInput');
  var nameField = $('#nameInput');
  var messageList = $('.messages');

  // Listen for the form submit
  $('.chat').on('submit',function(e) {


    // stop the form from submitting
    e.preventDefault();

    // 1. When the form is submitted, send the data to firebase
    var message = {
    	name : nameField.val(),
    	text : messageField.val()
    };

    // we will take the message object and send it to the firebase
    messagesRef.push()

    
  	//clear the message input
  	messageField.val('');


  });

  // Add a callback that is triggered for each chat message
  // this is kind of like an Ajax request 
  messagesRef.limitToLast(10).on('child_added', function (snapshot) {
  	var data = snapshot.val();
  	var li = `<li><strong>${data.name}</strong>${data.text}</li>`;
  	messageList.append(li);


  	// scroll to the bottom
  	messageList[0].scrollTop = messageList[0].scrollHeight;

    
    // when data comes in - create elements and append it into the DOM
  });
