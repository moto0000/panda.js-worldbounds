game.module(
	'plugins.worldbounds'
)
.body(function() {

game.collideWorldBounds = {

	bounds: {
		top: true,
		right: true,
		bottom: true,
		left: true
	},

	add: function(sprite, body, bounds) {
		this.sprite = sprite;
		this.body   = body;

		var bounds = bounds || {};
		for(var i in bounds) {
			this.bounds[i] = bounds[i];
		}

		game.scene.addObject(this);
	},

	update: function() {
		var width  = Math.max(
				this.sprite.width * (1 - this.sprite.anchor.x),
				this.body.shape.width / 2
			),

			height = Math.max(
				this.sprite.height * (1 - this.sprite.anchor.y),
				this.body.shape.height / 2
			);

		// top
		if(this.body.position.y - height < 0 && this.bounds.top) {
			this.body.position.y -= this.body.position.y - height;
			this.body.velocity.y = 0;
		}

		// right
		if(this.body.position.x + width > game.system.width && this.bounds.right) {
			this.body.position.x += game.system.width - this.body.position.x - width;
			this.body.velocity.x = 0;
		}

		// bottom
		if(this.body.position.y + height > game.system.height && this.bounds.bottom) {
			this.body.position.y += game.system.height - this.body.position.y - height;
			this.body.velocity.y = 0;
		}

		// left
		if(this.body.position.x - width < 0 && this.bounds.left) {
			this.body.position.x -= this.body.position.x - width;
			this.body.velocity.x = 0;
		}


	}

};

});
