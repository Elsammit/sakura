const maxNum = 3;
const width_padding = 60;

(function(d,b,w){
    var q = d.createElement('div')
    q.id = "sakura"
    b.appendChild(q);

    var h = w.innerHeight;
    var u = d.documentElement.scrollTop || b.scrollTop;
    var z = 100;
    var top = new Array();
    var left = new Array();
    var yura = new Array();
    var speed = new Array();
    var group = new Array();
    var count = new Array();

    d.addEventListener('scroll',function(){u = d.documentElement.scrollTop || b.scrollTop;},false);

    // 花びら生成.
    for(var i=0;i<maxNum;i++){
		var m = d.createElement('div');
		m.id = 'hanabira'+i;
		top[i] = Math.random()*-1000+u;
		left[i] = Math.random()*w.innerWidth - width_padding;

        var clss = 'hana type'+(Math.floor(Math.random()*6)+1);
		m.setAttribute('class',clss);
		m.setAttribute('style','z-index:'+(z+i)+';top:'+top[i]+'px;left:'+left[i]+'px;');
		q.appendChild(m); 
		yura[i] = Math.random()*40+5; 
		speed[i] = Math.random()*5+2; 
		group[i] = d.getElementById('hanabira'+i);
		count[i] = 0;

	}

	// 花びらを繰り返し動かす部分
	setInterval(function(){
		for(var i=0;i<maxNum;i++){
			if(top[i]<u+h-40){
				if(yura[i]>=count[i]){
					left[i] = left[i]+0.5+Math.random()*0.5;
				}else{
					left[i] = left[i]-0.5-Math.random()*0.5;
				}
				if((yura[i]*2)<=count[i]){
					count[i] = 0;
				}
			}else{
				top[i] = u-40;
				left[i] = Math.random()*w.innerWidth - width_padding;
			}
			top[i] = top[i]+speed[i];
			group[i].style.top = top[i]+'px';
			group[i].style.left = left[i]+'px';
			count[i]++;
		}
	},45);

})(window.document,window.document.body,window);