(function(){

			var button = PUBNUB.$('button');
			var pubnub = PUBNUB.init({
			publish_key   : 'pub-c-6dbe7bfd-6408-430a-add4-85cdfe856b47',
			subscribe_key : 'sub-c-2a73818c-d2d3-11e3-9244-02ee2ddab7fe',
			uuid : 'Bana1110'
		})
		
		var pubnub = PUBNUB.init({
			publish_key   : 'pub-c-6dbe7bfd-6408-430a-add4-85cdfe856b47',
			subscribe_key : 'sub-c-2a73818c-d2d3-11e3-9244-02ee2ddab7fe',
			uuid : 'TheBeast'
		})
		
		pubnub.here_now({
   			channel : 'button-click',
 			callback: function(message) {
      console.log('message', message);
   },
   			state: true
 		});
 		
 		pubnub.where_now({
   		uuid : 'TheBeast',
   		callback : function(m){console.log(JSON.stringify(m))},
   		error : function(m){console.log(JSON.stringify(m))}
  });
  
// Sending messages to all the clients

			pubnub.bind('click',button,function(){
				pubnub.publish({
					channel : 'button-click',
					message : $('#adminMessage').val()
					});
			});

// printing the server messages on its own page

			pubnub.subscribe({
			channel : 'button-click',
			message : received_button_click,
			state: {
    			full: 'Bhavana Srinivas',
   				mission : ' To make a killer app',
   				Vision: 'To work with PubNub',
		 		}	
			});
			
			pubnub.subscribe({
			channel : 'button-click',
			message : received_button_click,
			state: {
    			full: 'The Monster',
   				mission : ' To make life miserable',
   				Vision: 'Live',
		 		}	
			});



// action when message received from the server
			function received_button_click(message)
			{
				$('#chat').append("<div class =bubbledLeft><b>" + message + "</b></div> ");
	
			}

// subscribe to the clients channel to receive his messages

			pubnub.subscribe({
			channel : 'button-reply',
			message : received_button_click_client
			});


	
// Printing the clients message

		function received_button_click_client(message)
		{
			$('#chat').append("<b><div class = bubbledRight>" + message + "</b></div> ");
		}

})();
