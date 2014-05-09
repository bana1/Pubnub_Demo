(function () {
            var button = PUBNUB.$('buttonClient');
            var image = PUBNUB.$('image');
            var pubnub = PUBNUB.init({
                publish_key: 'pub-c-6dbe7bfd-6408-430a-add4-85cdfe856b47',
                subscribe_key: 'sub-c-2a73818c-d2d3-11e3-9244-02ee2ddab7fe'
            });

            // sending a reply to the server
            pubnub.bind('click', button, function () {
                pubnub.publish({
                    channel: 'button-reply',
                    message: $('#clientText').val()
                });
            });

            pubnub.subscribe({
                channel: 'button-reply',
                message: client_button_click
            });

            // Printing my own message in my page
            function client_button_click(message) {
                $('#chat').append("<div class='bubbledRight'>" + message + "</div>");
            }

            // receiving the messages from the server
            pubnub.subscribe({
                channel: 'button-click',
                message: server_button_click
            });

            // action when message received from the server
            function server_button_click(message) {
                $('#chat').append("<div class='bubbledLeft'>" + message + "</div>");
            }
            
        	
        })();
