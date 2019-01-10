function airtory_funtion(){

	document.body.innerHTML = "<div id='airtory_contentContainer'>"+document.body.innerHTML+"<div>";	

	var bgvideo = document.createElement('video');
	bgvideo.setAttribute('src','assets/images/pepsi.mp4');
	bgvideo.autoplay = true;
	bgvideo.loop = true;
	bgvideo.volume = 0;
	bgvideo.setAttribute('id','airtory_vid_bg');

	var transparentImg = document.createElement('div');
	transparentImg.setAttribute('id','transparentImg');
	transparentImg.style.backgroundImage = "url('assets/images/Video-4.png')";	
	transparentImg.style.backgroundPosition = "top center";
	transparentImg.style.backgroundSize = "1800px auto";

	var videodiv = document.createElement('div');
	videodiv.setAttribute('id','airtory_vidDiv');
	videodiv.style.zIndex = '2';

	var playImg = document.createElement('img');
	playImg.setAttribute('src','assets/images/play.png');
	playImg.setAttribute('id','airtory_playimage');

	var pauseImg = document.createElement('img');
	pauseImg.setAttribute('src','assets/images/pause.png');
	pauseImg.setAttribute('id','airtory_pauseimage');	

	var video = document.createElement('video');
	video.setAttribute('src','assets/images/pepsi.mp4');
	video.autoplay = true;
	video.loop = true;
	video.volume = 0;
	video.setAttribute('id','airtory_vid');

	videodiv.appendChild(playImg);
	videodiv.appendChild(pauseImg);
	videodiv.appendChild(video);

	pauseImg.addEventListener('click',function(){
		pauseImg.style.display = 'none';
		playImg.style.display = 'inline';
		video.pause();
		bgvideo.pause();
	});

	playImg.addEventListener('click',function(){
		playImg.style.display = 'none';
		pauseImg.style.display = 'inline';
		video.play();
		bgvideo.play();
	});		

	document.getElementById('airtory_contentContainer').appendChild(videodiv);
	document.getElementById('airtory_contentContainer').appendChild(bgvideo);
	document.getElementById('airtory_contentContainer').appendChild(transparentImg);

	// document.body.style.backgroundColor = "#e9e9e9";
	// document.body.style.backgroundImage = "url('assets/images/Video-4.png')";
	// document.body.style.backgroundPosition = "top";
	// document.body.style.backgroundAttachment = "fixed";
	// document.body.style.backgroundRepeat = "no-repeat";

	window.addEventListener('click', function(event){ 
		if(event.target == document.body){
			window.open('https://www.pepsi.com/en-us/','_blank');
		}
	});

	window.addEventListener('mouseover', function(event){ 
		if(event.target == document.getElementById('airtory_contentContainer')){
			// console.log('none happened');
			video.volume = 0.1;
		}
		else if(event.target == document.getElementById('airtory_vid') || event.target == document.getElementById('airtory_playimage') || event.target == document.getElementById('airtory_pauseimage')){
			video.volume = 0.5;
		}
		else if(event.target != document.getElementById('airtory_vid') || event.target == document.getElementById('airtory_contentContainer')){
			video.volume = 0;
		}		
	});	

	window.addEventListener('visibilitychange',function(){
		video.volume = 0;
	});

}	

window.onload = airtory_funtion();
