function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function delete_by_type(type_id, list_to_delete) {

	switch (type_id) {
		case 'id':
			
			list_to_delete.forEach(element => {

				try {
					var elem = document.getElementById(element); 
					elem.parentNode.removeChild(elem);	
				}
				catch(error) {}
			});
			break;

		case 'selector':

			try {
				list_to_delete.forEach(element => {

					var elem = document.querySelector(element); 
					elem.parentNode.removeChild(elem);	
				});
			}
			catch(error) {}
		
			break;
		case 'classname':

			try {
				list_to_delete.forEach(element => {

					var elem = document.getElementsByClassName(element);
					while (elem.length > 0) elem[0].remove();
				});	
			}
			catch(error) {}
			
			break;
	}
}

function delete_shit() {
	
	list_ids = [
		'timeline_small_column',
		'fbProfileCover',
		'fbDockChatBuddylistNub',
	];

	delete_by_type('id', list_ids);

	list_classes = [ 'commentable_item' ];

	delete_by_type('classname', list_classes);

	list_selector = [ '#u_0_a > div:nth-child(2)' ];

	delete_by_type('selector', list_selector);
}

while(true) {
	await sleep(1000);
	delete_shit();
}
