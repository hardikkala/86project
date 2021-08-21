var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {
        block_image_odject.scaleToWidth(700);
        block_image_odject.scaleToheight(510);
        block_image_odject.set({
            top:0,
            left:0
        });
        canvas.add(block_image_odject);
    })
	
}

function playSound(){
	x.play
}
