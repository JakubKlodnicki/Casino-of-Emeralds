/*
 * cooldown-dev.js
 * @author Keyboard Fire <http://keyboardfire.com>
 * @license MIT
 */

function Cooldown(options) {
	if (!options) options = {};
	
	if (!options.padding) options.padding = 0;
	if (!options.buttons) options.buttons = $();
	options.buttons = $(options.buttons); // verify that buttons is a jQuery element
	
	for (x in options) {
		// call functions specified in constructor, if possible (ex. autoSetupAll: true)
		if (typeof this[x] === 'function') this[x](options[x]);
		else {
			// proceed normally
			this[x] = options[x];
		}
	}
	
	this.initialize();
}
Cooldown.prototype.initialize = function() {
	this.setupButtons();
	if (this.toAutoSetupAllInInitialize) this._autoSetupAll();
	
	return this;
};
Cooldown.prototype.setupButtons = function() {
	this.buttons.css({
		padding: this.padding + 'px',
		position: 'relative'
	}).append($('<div>')
		.text('\u00A0')
		.addClass('_tiny_button_cooldown_progress-bar')
		.css({
			fontSize: '1px',
			position: 'absolute',
			top: '0px',
			left: '0px',
			width: '0px',
			height: '0px'
		}));
		
	return this;
};
Cooldown.prototype.autoSetup = function($el, options) {
	var cooldown = this;
	$($el).click(function() {
		cooldown.cooldown($el, options);
	});
	
	return this;
};
Cooldown.prototype.autoSetupAll = function(toAutoSetupAllInInitialize) {
	this.toAutoSetupAllInInitialize = toAutoSetupAllInInitialize;
	
	return this;
};
Cooldown.prototype._autoSetupAll = function() {
	var cooldown = this;
	this.buttons.each(function() {
		cooldown.autoSetup(this);
	});
};
Cooldown.prototype.cooldown = function($el, options) {
	// basic validation
	if (!options) options = {};
	$el = $($el);
	// is there already a cooldown happening?
	if ($el.is('[disabled]')) return;
	
	// look everywhere we can to find a cooldown amount, and error out if there is none
	var cooldownAmount = options.length || $el.attr('data-cooldown') || this.length;
	if (!cooldownAmount) throw new Error('Error: cooldown: cannot find a cooldown length');
	
	// convert to number and handle decimals
	cooldownAmount += '';
	cooldownAmount = cooldownAmount.indexOf('.') > -1 ? parseFloat(cooldownAmount) : parseInt(cooldownAmount);
	
	// look everywhere for color and opacity, default to #000 0.5 if not found
	var color = options.color || $el.attr('data-cooldown-color') || this.color || '#000';
	var opacity = parseFloat(options.opacity || $el.attr('data-cooldown-opacity') || this.opacity || 0.5);
	
	// now, to add the cooldown!
	$el.attr('disabled', 'disabled');
	$('._tiny_button_cooldown_progress-bar', $el).css({
		backgroundColor: color,
		opacity: opacity,
		height: ($el.height() + this.padding*2) + 'px',
		width: ($el.width() + this.padding*2) + 'px'
	}).animate({
		width: 0
	}, {
		duration: cooldownAmount * 1000,
		easing: 'linear',
		complete: function() {
			$el.removeAttr('disabled');
			if (options.callback) options.callback($el);
		}
	});
	
	return this;
};