var utility = (function() {

	/**
	 * @memberOf utility This method checks for a valid number
	 * 
	 * @param {?number|?string}
	 *            number the input number to check
	 * 
	 * @return {boolean} true if is valid, false otherwise
	 */
	var isNumber = function(number) {
		return (number != null && number !== '' && !isNaN(Number(number)));
	};

	/**
	 * @memberOf utility This method checks for a valid string. Valid means that
	 *           it's a string and has a length greater than 0.
	 * 
	 * @param {?string}
	 *            string the input string to check
	 * 
	 * @return {boolean} true if is valid, false otherwise
	 */
	var isNotEmpty = function(string) {
		return (string != null && typeof string === 'string' && string.length > 0);
	};

	/**
	 * @memberOf utility This method checks a string to see if it's null or has
	 *           no length
	 * 
	 * @param {?string}
	 *            string the input string to check
	 * 
	 * @return {boolean} true if is empty, false otherwise
	 */
	var isEmpty = function(string) {
		return (string == null || (typeof string === 'string' && string.length === 0));
	};

	/**
	 * @memberOf utility This method checks a value to see if it is of type
	 *           string and not null, regardless of length.
	 * 
	 * @param {?}
	 *            value the input data to check
	 * 
	 * @return {boolean} true if string, false otherwise
	 */
	var isString = function(value) {
		return (value != null && typeof value === 'string');
	};

	/**
	 * @memberOf utility This method checks for a valid object. Valid means that
	 *           it is not null and is an object
	 * 
	 * @param {Object}
	 *            object Object the input object to check
	 * 
	 * @return {boolean} true if is valid, false otherwise
	 */
	var isObject = function(object) {
		return (object != null && typeof object === 'object');
	};

	/**
	 * @memberOf utility This method checks for a function. Valid means that it
	 *           is not null and is a function
	 * 
	 * @param {(function(...[?]):
	 *            ?|null)} func Function the input function to check
	 * 
	 * @return {boolean} true if is valid, false otherwise
	 */
	var isFunction = function(func) {
		return (func != null && typeof func === 'function');
	};

	/**
	 * @memberOf utility This method checks for a boolean. Valid means that it
	 *           is a boolean
	 * 
	 * @param {?boolean}
	 *            bool Boolean the input boolean to check
	 * 
	 * @return {boolean} true if is valid, false otherwise
	 */
	var isBoolean = function(bool) {
		return (bool != null && typeof bool === 'boolean');
	};

	/**
	 * @memberOf utility This method checks for a selector. Valid means that the
	 *           selector is not null and has a length (jQuery selector objects
	 *           have a length)
	 * 
	 * @param {Object}
	 *            selector Object the selector input to check
	 * 
	 * @return {boolean} true if is valid, false otherwise
	 */
	var isSelector = function(selector) {
		return (isObject(selector) && selector.length > 0 && typeof selector.is === 'function');
	};

	var object = {
		isNumber : isNumber,
		isEmpty : isEmpty,
		isNotEmpty : isNotEmpty,
		isString : isString,
		isObject : isObject,
		isFunction : isFunction,
		isBoolean : isBoolean,
		isSelector : isSelector
	};

	return object;
})();