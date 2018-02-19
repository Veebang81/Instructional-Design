var x = document.getElementById('errordiv');

	if(x.style.display != 'none'){
		x.style.display = 'none';
	}

function myFunction(){
	var inputs = ["course","desc","pqf","PCPC","conde","sub","ACPO","ELO","ALO","Assessment","Requirements","Financial","Participants","Charge","viability","PrintedName","Position","Agency"];
						
	inputs.forEach(function(item){
		var myinput = document.getElementById(item);
		if(myinput.value == ''){
			x.style.display = 'block';
			x.innerHTML = 'Sorry, '+ item + ' Field Cannot be left Empty';
			myinput.focus();
		}
		else
			if(myinput.value != ''){
				if(item == 'sub' || item == 'ACPO' || item == 'Financial' || item == 'Participants' || item == 'Charge'){
					if(isNaN(myinput.value)){
						x.style.display = 'block';
						x.innerHTML = 'Sorry, '+ item + ' Field Should be in numeric Form';
						myinput.focus();
					}
				}
				else
					if(!isNaN(myinput.value)){
						x.style.display = 'block';
						x.innerHTML = 'Sorry, '+ item + ' Field Cannot be in numeric Form';
						myinput.focus();
					}

		}
	});

	var optional = ['SubSecond','ACPOSecond','ELOSecond','ALOSecond','AssessmentSecond','RequirementsSecond','SubThird','ACPOThird','ELOThird','ALOThird','AssessmentThird','RequirementsThird'];

	optional.forEach(function(item){
		var opt = document.getElementById(item);

		if(opt.value !='' && !isNaN(opt.value)){
			x.style.display = 'block';
			x.innerHTML = 'Sorry, '+ item + ' Field Cannot be in numeric Form';
			opt.focus();
		}

	});

	if(isNaN(document.getElementById('course').value) && isNaN(document.getElementById('desc').value)  && isNaN(document.getElementById('pqf').value) && isNaN(document.getElementById('PCPC').value) && isNaN(document.getElementById('conde').value) && !isNaN(document.getElementById('sub').value)  && !isNaN(document.getElementById('ACPO').value) && isNaN(document.getElementById('ELO').value) && isNaN(document.getElementById('ALO').value) && isNaN(document.getElementById('Assessment').value) && isNaN(document.getElementById('Requirements').value) && !isNaN(document.getElementById('Financial').value) && !isNaN(document.getElementById('Participants').value) && !isNaN(document.getElementById('Charge').value) && isNaN(document.getElementById('viability').value) && isNaN(document.getElementById('PrintedName').value) && isNaN(document.getElementById('Position').value) && isNaN(document.getElementById('Agency').value)){
		x.style.display = 'none';
		document.getElementById('print').style.display = 'none';
		window.print();
	}


}

