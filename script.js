var removeCartItemButtons=document.getElementsByClassName('dangr-btn')
console.log(removeCartItemButtons)
for(var i=0;i<removeCartItemButtons.length;i++){
	var button=removeCartItemButtons[i]
	button.addEventListener('click',function(event){
		var buttonClicked=event.target
		buttonClicked.parentElement.parentElement.remove();
	})
}

