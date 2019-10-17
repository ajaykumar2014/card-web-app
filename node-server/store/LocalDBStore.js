var LocalDBStore = (function () {

	'use strict';
	var dbStore = {};
	dbStore.elements = [];

	dbStore.save = function (val) {
		
		return this.elements.push(val);
	};


	dbStore.fetchAll = function () {
		return this.elements;
		
  };
  
	return dbStore;

})();


module.exports = LocalDBStore;
  