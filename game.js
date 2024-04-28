AFRAME.registerComponent("YouWin", {

	init: function (){
		turtleCount = 5;
		this.el.addEventListener('collide', function(e) {
			e.detail.target.el.remove();
			turtleCount = turtleCount - 1;
			turtleNumber = document.getElementById("number")
			turtleNumber.setAttribute('text',{value: String(tutleCount)});
			if(turtleCount == 0){
				turtleEnd = document.getElementById("end")
				turtleEnd.setAttribute('text',{value: 'You Win!!'})
			}
		});
	},
});