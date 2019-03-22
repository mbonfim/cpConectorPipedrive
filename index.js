var Pipedrive = require('pipedrive');
var pipedrive = new Pipedrive.Client('9e4f9130c24576fa3eba2e72a1c4702ea0a8593a', { strictMode: true });

pipedrive.Deals.getAll({}, function(err, deals) {
    if (err) throw err;
    console.log('teste')
	for (var i = 0; i < deals.length; i++) {
		console.log(deals[i].title + ' (worth ' + deals[i].value + ' ' + deals[i].currency + ')');
	}
});

pipedrive.Activities.getAll({}, function(err, deals){
    if (err) throw err;
    console.log('teste2')
	for (var i = 0; i < deals.length; i++) {
		console.log(deals[i])
	}

})