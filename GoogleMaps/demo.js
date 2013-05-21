function init() {
    var myArray = $$('.clickSlide');
    var tArray = $$('.bild');
    myArray.each(function(item, index){
                var hoehe = tArray[index].getStyle('height').toInt();
                var breite = tArray[index].getStyle('width').toInt();
                var links = item.getStyle('left').toInt();
                var oben = item.getStyle('top').toInt();
                //alert(links + " x " + oben);
                var x= links+(breite/2);
                var y= (oben + (hoehe/2));
                //alert(x);
                item.setStyles({ 
                            left: x, 
                            top: y
                    });
                tArray[index].setStyles({
                            height: 0, 
                            width: 0,
                            opacity: 0
                    });
                
                item.set('morph', {duration: '500', transition: 'back:out'});
                tArray[index].set('morph', {duration: '500', transition: 'back:out'});
                
                var zahl = item.getStyle('z-index');
                var timeout = zahl*150;
                //Math.round(1 + 2000*(Math.random()));
                window.setTimeout(function() {
                            item.morph({
                                    
                                    left: links, 
                                    top: oben
                                });
                            tArray[index].morph({
                                    opacity: 1, 
                                    height: hoehe, 
                                    width: breite
                                });
                 }, timeout);
    });
}
