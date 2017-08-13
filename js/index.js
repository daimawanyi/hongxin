var fff = document.getElementsByTagName('li');
var abo = document.getElementsByTagName('a');
var bg1 = document.getElementById('bg1');
var bg = document.getElementsByClassName('first-screen')[0];
var content1 = document.getElementsByClassName('content1')[0];
var content2 = document.getElementsByClassName('content2')[0];
var content3 = document.getElementsByClassName('content3')[0];
var content4 = document.getElementsByClassName('content4')[0];
var header = document.getElementsByClassName('header')[0];
var left = document.getElementById('left');
var right = document.getElementById('right');
var shadow = document.getElementsByClassName('shadow')[0];
var vid = document.getElementsByClassName('vid')[0];
var audio = document.getElementsByTagName('audio')[0];

fff[7].onclick = function () {
    if (audio.paused) {
        audio.play();
        audio.loop;
        fff[7].style.backgroundImage = 'url("img/soundOn.png")'
    } else {
        audio.pause();
        audio.currentTime = 0;
        fff[7].style.backgroundImage = 'url("img/soundOff.png")'

    }
};

fff[0].style.opacity = 1;
fff[0].style.borderBottom = '.02rem solid white';
bg.style.height = window.screen.availHeight + 'px';
vid.style.height = window.screen.availHeight + 'px';
content1.style.top = bg.style.height;
content1.style.display = 'block';
function removeClass(curEle, strClass) {
    var aryClass = strClass.replace(/(^ +)|( +$)/g, '').split(/\s+/g);
    for (var i = 0; i < aryClass.length; i++) {
        //var reg=new RegExp('(^| +)'+aryClass[i]+'( +|$)');
        var reg = new RegExp('\\b' + aryClass[i] + '\\b');
        if (reg.test(curEle.className)) {
            curEle.className = curEle.className.replace(reg, ' ').replace(/(^ +)|( +$)/g, '').replace(/\s+/g, ' ');
        }
    }
}
function offset(curEle) {
    var l = curEle.offsetLeft;
    var t = curEle.offsetTop;
    var par = curEle.offsetParent;
    while (par) {
        if (window.navigator.userAgent.indexOf('MSIE 8.0') === -1) {
            l += par.clientLeft;
            t += par.clientTop;
        }
        l += par.offsetLeft;
        t += par.offsetTop;
        par = par.offsetParent;
    }
    return {left: l, top: t};
}

function click() {
    var yd2 = parseInt((2900 - window.screen.availHeight) / 300);
    var yd3 = parseInt(((2900 - window.screen.availHeight) / 300) * 2);
    var yd4 = parseInt(((2900 - window.screen.availHeight) / 300) * 3);

    abo[0].onclick = function () {
        abo[1].onclick()
    };
    abo[1].onclick = function () {
        if (fff[2].style.opacity == 1) {
            bg1.className = 'animated slideInLeft'
            setTimeout(function () {
                removeClass(bg1, 'animated slideInLeft');
            }, 1000);
            var a = parseInt(vid.style.left);
            vid.style.left = a + yd2 + 'rem';
        } else if (fff[4].style.opacity == 1) {
            bg1.className = 'animated slideInLeft'
            setTimeout(function () {
                removeClass(bg1, 'animated slideInLeft');
            }, 1000);
            var b = parseInt(vid.style.left);
            vid.style.left = b + yd3 + 'rem';
        } else if (fff[6].style.opacity == 1) {
            bg1.className = 'animated slideInLeft'
            setTimeout(function () {
                removeClass(bg1, 'animated slideInLeft');
            }, 1000);
            var c = parseInt(vid.style.left);
            vid.style.left = c + yd4 + 'rem';
        }

        bg1.src = 'img/bg1.png';
        fff[0].style.opacity = 1;
        fff[0].style.borderBottom = '.02rem solid white';
        fff[2].style.borderBottom = '';
        fff[4].style.borderBottom = '';
        fff[6].style.borderBottom = '';
        if (fff[0].style.opacity == 1) {
            fff[2].style.opacity = .5;
            fff[4].style.opacity = .5;
            fff[6].style.opacity = .5;
        }

        content2.style.display = 'none';
        content3.style.display = 'none';
        content4.style.display = 'none';
        content1.style.display = 'block';
        content1.style.position = 'absolute';
        content1.style.zIndex = 1;
        content1.style.width = '100%';
        content1.style.top = window.screen.availHeight + 'px';
    };
    abo[2].onclick = function () {
        if (fff[0].style.opacity == 1) {
            bg1.className = 'animated slideInRight'
            setTimeout(function () {
                removeClass(bg1, 'animated slideInRight');
            }, 1000);
            if (vid.style.left == '') {
                vid.style.left = '0rem';
            }
            var a = parseInt(vid.style.left);
            vid.style.left = a + -yd2 + 'rem';

        } else if (fff[4].style.opacity == 1) {
            bg1.className = 'animated slideInLeft'
            setTimeout(function () {
                removeClass(bg1, 'animated slideInLeft');
            }, 1000);

            var b = parseInt(vid.style.left);
            vid.style.left = b + yd2 + 'rem';
        } else if (fff[6].style.opacity == 1) {
            bg1.className = 'animated slideInLeft'
            setTimeout(function () {
                removeClass(bg1, 'animated slideInLeft');
            }, 1000);

            var c = parseInt(vid.style.left);
            vid.style.left = c + yd3 + 'rem';
        }
        bg1.src = 'img/bg2.png';
        fff[2].style.opacity = 1;
        fff[2].style.borderBottom = '.02rem solid white';
        fff[0].style.borderBottom = '';
        fff[4].style.borderBottom = '';
        fff[6].style.borderBottom = '';
        if (fff[2].style.opacity == 1) {
            fff[0].style.opacity = .5;
            fff[4].style.opacity = .5;
            fff[6].style.opacity = .5;
        }

        content1.style.display = 'none';
        content3.style.display = 'none';
        content4.style.display = 'none';
        content2.style.display = 'block';
        content2.style.position = 'absolute';
        content2.style.zIndex = 1;
        content2.style.width = '100%';
        content2.style.top = window.screen.availHeight + 'px';


    };
    abo[3].onclick = function () {
        if (fff[0].style.opacity == 1) {
            bg1.className = 'animated slideInRight'
            setTimeout(function () {
                removeClass(bg1, 'animated slideInRight');
            }, 1000);

            if (vid.style.left == '') {
                vid.style.left = '0rem';
            }
            var a = parseInt(vid.style.left);
            vid.style.left = a + -yd3 + 'rem';
        } else if (fff[2].style.opacity == 1) {
            bg1.className = 'animated slideInRight'
            setTimeout(function () {
                removeClass(bg1, 'animated slideInRight');
            }, 1000);

            var b = parseInt(vid.style.left);
            vid.style.left = b + -yd2 + 'rem';
        } else if (fff[6].style.opacity == 1) {
            bg1.className = 'animated slideInLeft'
            setTimeout(function () {
                removeClass(bg1, 'animated slideInLeft');
            }, 1000);

            var c = parseInt(vid.style.left);
            vid.style.left = c + yd2 + 'rem';
        }
        bg1.src = 'img/bg3.png';
        fff[4].style.opacity = 1;
        fff[4].style.borderBottom = '.02rem solid white';
        fff[2].style.borderBottom = '';
        fff[0].style.borderBottom = '';
        fff[6].style.borderBottom = '';
        if (fff[4].style.opacity == 1) {
            fff[0].style.opacity = .5;
            fff[2].style.opacity = .5;
            fff[6].style.opacity = .5;
        }

        content1.style.display = 'none';
        content2.style.display = 'none';
        content4.style.display = 'none';
        content3.style.display = 'block';
        content3.style.position = 'absolute';
        content3.style.zIndex = 1;
        content3.style.width = '100%';
        content3.style.top = window.screen.availHeight + 'px';


    };
    abo[4].onclick = function () {
        if (fff[0].style.opacity == 1) {
            bg1.className = 'animated slideInRight'
            setTimeout(function () {
                removeClass(bg1, 'animated slideInRight');
            }, 1000);
            if (vid.style.left == '') {
                vid.style.left = '0rem';
            }
            var a = parseInt(vid.style.left);
            vid.style.left = a + -yd4 + 'rem';
        } else if (fff[2].style.opacity == 1) {
            bg1.className = 'animated slideInRight'
            setTimeout(function () {
                removeClass(bg1, 'animated slideInRight');
            }, 1000);

            var b = parseInt(vid.style.left);
            vid.style.left = b + -yd3 + 'rem';
        } else if (fff[4].style.opacity == 1) {
            bg1.className = 'animated slideInRight'
            setTimeout(function () {
                removeClass(bg1, 'animated slideInRight');
            }, 1000);

            var c = parseInt(vid.style.left);
            vid.style.left = c + -yd2 + 'rem';
        }
        bg1.src = 'img/bg4.png';
        fff[6].style.opacity = 1;
        fff[6].style.borderBottom = '.02rem solid white';
        fff[2].style.borderBottom = '';
        fff[4].style.borderBottom = '';
        fff[0].style.borderBottom = '';
        if (fff[6].style.opacity == 1) {
            fff[0].style.opacity = .5;
            fff[2].style.opacity = .5;
            fff[4].style.opacity = .5;
        }

        content1.style.display = 'none';
        content2.style.display = 'none';
        content3.style.display = 'none';
        content4.style.display = 'block';
        content4.style.position = 'absolute';
        content4.style.zIndex = 1;
        content4.style.width = '100%';
        content4.style.top = window.screen.availHeight + 'px';
    };


    var nu1 = -1, nu2 = 0;
    right.onclick = function () {
        var yd = parseInt((2900 - window.screen.availHeight) / 300);
        if (vid.style.left == '') {
            var vsl = '0rem';
            var vslp = parseFloat(vsl);
            vslp += -yd;
            vid.style.left = vslp + 'rem';
        } else {
            var a = vid.style.left;
            var vslpa = parseInt(a);
            vslpa += -yd;
            vid.style.left = vslpa + 'rem';
        }

        if (fff[0].style.opacity == 1) {
            bg1.className = 'animated slideInRight';
            setTimeout(function () {
                removeClass(bg1, 'animated slideInRight');
            }, 1000);

        } else if (fff[2].style.opacity == 1) {
            bg1.className = 'animated slideInRight';
            setTimeout(function () {
                removeClass(bg1, 'animated slideInRight');
            }, 1000);

        } else if (fff[4].style.opacity == 1) {
            bg1.className = 'animated slideInRight';
            setTimeout(function () {
                removeClass(bg1, 'animated slideInRight');
            }, 1000);
        } else if (fff[6].style.opacity == 1) {
            bg1.className = 'animated slideInRight';
            setTimeout(function () {
                removeClass(bg1, 'animated slideInRight');
            }, 1000);

            if (parseInt(vid.style.left) < 0) {
                nu1 = nu1 + 2;
                nu2 = nu2 + 2;
                vid.innerHTML += '<img src="img/gb.jpg" style="left:' + (29 * nu1) + 'rem' + ';"/><img src="img/bg.jpeg" alt="" style="left:' + (29 * nu2) + 'rem' + ';"/>'
            }

        }


        if (content1.style.display == 'block') {
            bg1.src = 'img/bg2.png';
            fff[2].style.opacity = 1;
            fff[2].style.borderBottom = '.02rem solid white';
            fff[0].style.borderBottom = '';
            fff[4].style.borderBottom = '';
            fff[6].style.borderBottom = '';
            if (fff[2].style.opacity == 1) {
                fff[0].style.opacity = .5;
                fff[4].style.opacity = .5;
                fff[6].style.opacity = .5;
            }

            content1.style.display = 'none';
            content3.style.display = 'none';
            content4.style.display = 'none';
            content2.style.display = 'block';
            content2.style.position = 'absolute';
            content2.style.zIndex = 1;
            content2.style.width = '100%';
            content2.style.top = window.screen.availHeight + 'px';
            scroll(0, 0)
        } else if (content2.style.display == 'block') {
            tmp = 2
            bg1.src = 'img/bg3.png';
            fff[4].style.opacity = 1;
            fff[4].style.borderBottom = '.02rem solid white';
            fff[2].style.borderBottom = '';
            fff[0].style.borderBottom = '';
            fff[6].style.borderBottom = '';
            if (fff[4].style.opacity == 1) {
                fff[0].style.opacity = .5;
                fff[2].style.opacity = .5;
                fff[6].style.opacity = .5;
            }


            content1.style.display = 'none';
            content2.style.display = 'none';
            content4.style.display = 'none';
            content3.style.display = 'block';
            content3.style.position = 'absolute';
            content3.style.zIndex = 1;
            content3.style.width = '100%';
            content3.style.top = window.screen.availHeight + 'px';
            scroll(0, 0)

        } else if (content3.style.display == 'block') {
            tmp = 3
            bg1.src = 'img/bg4.png';
            fff[6].style.opacity = 1;
            fff[6].style.borderBottom = '.02rem solid white';
            fff[2].style.borderBottom = '';
            fff[4].style.borderBottom = '';
            fff[0].style.borderBottom = '';
            if (fff[6].style.opacity == 1) {
                fff[0].style.opacity = .5;
                fff[2].style.opacity = .5;
                fff[4].style.opacity = .5;
            }

            content1.style.display = 'none';
            content2.style.display = 'none';
            content3.style.display = 'none';
            content4.style.display = 'block';
            content4.style.position = 'absolute';
            content4.style.zIndex = 1;
            content4.style.width = '100%';
            content4.style.top = window.screen.availHeight + 'px';
            scroll(0, 0)

        } else if (content4.style.display == 'block') {
            tmp = 4
            bg1.src = 'img/bg1.png'
            fff[0].style.opacity = 1;
            fff[0].style.borderBottom = '.02rem solid white';
            fff[2].style.borderBottom = '';
            fff[4].style.borderBottom = '';
            fff[6].style.borderBottom = '';
            if (fff[0].style.opacity == 1) {
                fff[2].style.opacity = .5;
                fff[4].style.opacity = .5;
                fff[6].style.opacity = .5;
            }


            content2.style.display = 'none';
            content3.style.display = 'none';
            content4.style.display = 'none';
            content1.style.display = 'block';
            content1.style.position = 'absolute';
            content1.style.zIndex = 1;
            content1.style.width = '100%';
            content1.style.top = window.screen.availHeight + 'px';
            scroll(0, 0)

        }
        ;
    };
    var n1 = -1, n2 = 0;
    left.onclick = function () {
        var yd = parseInt(2900 / 300);
        if (vid.style.left == '') {
            var vsl = '0rem';
            var vslp = parseFloat(vsl);
            vslp += yd;
            vid.style.left = vslp + 'rem';
        } else {
            var a = vid.style.left;
            var vslpa = parseInt(a);
            vslpa += yd;
            vid.style.left = vslpa + 'rem';
        }
        if (fff[0].style.opacity == 1) {
            bg1.className = 'animated slideInLeft'
            setTimeout(function () {
                removeClass(bg1, 'animated slideInLeft');
            }, 1000);
            if (parseInt(vid.style.left) > 0) {
                n1 = n1 + 2;
                n2 = n2 + 2;
                vid.innerHTML += '<img src="img/gb.jpg" style="left:' + (-29 * n1) + 'rem' + ';"/><img src="img/bg.jpeg" alt="" style="left:' + (-29 * n2) + 'rem' + ';"/>'
            }

        } else if (fff[2].style.opacity == 1) {
            bg1.className = 'animated slideInLeft'
            setTimeout(function () {
                removeClass(bg1, 'animated slideInLeft');
            }, 1000);
        } else if (fff[4].style.opacity == 1) {
            bg1.className = 'animated slideInLeft'
            setTimeout(function () {
                removeClass(bg1, 'animated slideInLeft');
            }, 1000);
        } else if (fff[6].style.opacity == 1) {
            bg1.className = 'animated slideInLeft'
            setTimeout(function () {
                removeClass(bg1, 'animated slideInLeft');
            }, 1000);
        }


        if (content1.style.display == 'block') {
            tmp = 1

            bg1.src = 'img/bg4.png';
            fff[6].style.opacity = 1;
            fff[6].style.borderBottom = '.02rem solid white';
            fff[2].style.borderBottom = '';
            fff[4].style.borderBottom = '';
            fff[0].style.borderBottom = '';
            if (fff[6].style.opacity == 1) {
                fff[0].style.opacity = .5;
                fff[2].style.opacity = .5;
                fff[4].style.opacity = .5;
            }


            content1.style.display = 'none';
            content2.style.display = 'none';
            content3.style.display = 'none';
            content4.style.display = 'block';
            content4.style.position = 'absolute';
            content4.style.zIndex = 1;
            content4.style.width = '100%';
            content4.style.top = window.screen.availHeight + 'px';
            scroll(0, 0)


        } else if (content2.style.display == 'block') {
            tmp = 2
            bg1.src = 'img/bg1.png'
            fff[0].style.opacity = 1;
            fff[0].style.borderBottom = '.02rem solid white';
            fff[2].style.borderBottom = '';
            fff[4].style.borderBottom = '';
            fff[6].style.borderBottom = '';
            if (fff[0].style.opacity == 1) {
                fff[2].style.opacity = .5;
                fff[4].style.opacity = .5;
                fff[6].style.opacity = .5;
            }


            content2.style.display = 'none';
            content3.style.display = 'none';
            content4.style.display = 'none';
            content1.style.display = 'block';
            content1.style.position = 'absolute';
            content1.style.zIndex = 1;
            content1.style.width = '100%';
            content1.style.top = window.screen.availHeight + 'px';
            scroll(0, 0)


        } else if (content3.style.display == 'block') {
            tmp = 3
            bg1.src = 'img/bg2.png';
            fff[2].style.opacity = 1;
            fff[2].style.borderBottom = '.02rem solid white';
            fff[0].style.borderBottom = '';
            fff[4].style.borderBottom = '';
            fff[6].style.borderBottom = '';
            if (fff[2].style.opacity == 1) {
                fff[0].style.opacity = .5;
                fff[4].style.opacity = .5;
                fff[6].style.opacity = .5;
            }


            content1.style.display = 'none';
            content3.style.display = 'none';
            content4.style.display = 'none';
            content2.style.display = 'block';
            content2.style.position = 'absolute';
            content2.style.zIndex = 1;
            content2.style.width = '100%';
            content2.style.top = window.screen.availHeight + 'px';
            scroll(0, 0)

        } else if (content4.style.display == 'block') {
            tmp = 4
            bg1.src = 'img/bg3.png';
            fff[4].style.opacity = 1;
            fff[4].style.borderBottom = '.02rem solid white';
            fff[2].style.borderBottom = '';
            fff[0].style.borderBottom = '';
            fff[6].style.borderBottom = '';
            if (fff[4].style.opacity == 1) {
                fff[0].style.opacity = .5;
                fff[2].style.opacity = .5;
                fff[6].style.opacity = .5;
            }


            content1.style.display = 'none';
            content2.style.display = 'none';
            content4.style.display = 'none';
            content3.style.display = 'block';
            content3.style.position = 'absolute';
            content3.style.zIndex = 1;
            content3.style.width = '100%';
            content3.style.top = window.screen.availHeight + 'px';
            scroll(0, 0)

        }
    };


}
click();


function changeContent() {
    content2.style.display = 'none';
    content3.style.display = 'none';
    content4.style.display = 'none';

    window.onscroll = function () {
        var s = document.body.scrollTop || document.documentElement.scrollTop
        var c = document.body.clientHeight || document.documentElement.clientHeight
        var cs = c + s;
        if (s >= bg.clientHeight) {
            if (fff[0].style.opacity == 1) {
                shadow.style.background = '#172536';
            } else if (fff[2].style.opacity == 1) {
                shadow.style.background = '#4d807b';
            } else if (fff[4].style.opacity == 1) {
                shadow.style.background = '#b15351';
            } else if (fff[6].style.opacity == 1) {
                shadow.style.background = '#704781';
            }
            if (shadow.className == 'shadow fade2' || shadow.className == 'shadow') {
                shadow.style.opacity = 0;
                shadow.className = 'shadow fade1';
            }
        } else {
            if (shadow.className == 'shadow fade1') {
                shadow.style.opacity = 1;
                shadow.className = 'shadow fade2'
            }
        }
        /*if (s >= bg.clientHeight) {
         if(fff[0].style.opacity == 1){
         shadow.style.background='#172536';
         }else if(fff[2].style.opacity == 1){
         shadow.style.background='#4d807b';
         }else if(fff[4].style.opacity == 1){
         shadow.style.background='#b15351';
         }else if(fff[6].style.opacity == 1){
         shadow.style.background='#704781';
         }
         shadow.style.transition='all 1.5s linear';
         shadow.style.opacity=1
         } else {
         shadow.style.transition='all 1.5s linear';
         shadow.style.opacity='0';
         }*/
        var part11 = document.getElementsByClassName('part3')[0];
        if (offset(part11).top <= cs) {
            if (part11.className == 'part3')
                part11.className += ' ' + 'animated' + ' ' + 'fadeInLeft';
            part11.style.animationDuration = '2s';
            part11.style.animationDelay = '.3s';
            var part11_1 = document.getElementsByClassName('part4')[0];
            part11_1.style.opacity = '0';
            if (offset(part11_1).top <= cs) {
                part11_1.style.opacity = '1'
            }

        }
        var cjx = document.getElementsByClassName('cjx')[0];
        if (offset(cjx).top <= cs) {
            if (cjx.className == 'cjx')
                cjx.className += ' ' + 'animated' + ' ' + 'fadeInRight';
            cjx.style.animationDuration = '2s';
            cjx.style.animationDelay = '.3s';

        }
        var cjx1 = document.getElementsByClassName('cjx1')[0];
        if (offset(cjx1).top <= cs) {
            if (cjx1.className == 'cjx1')
                cjx1.className += ' ' + 'fade1';

        }
        var zrh = document.getElementsByClassName('zrh')[0];
        if (offset(zrh).top <= cs) {
            if (zrh.className == 'zrh')
                zrh.className += ' ' + 'animated' + ' ' + 'fadeInLeft';
            zrh.style.animationDuration = '2s';
            zrh.style.animationDelay = '.3s';

        }
        var zrh1 = document.getElementsByClassName('zrh1')[0];
        if (offset(zrh1).top <= cs) {
            if (zrh1.className == 'zrh1')
                zrh1.className += ' ' + 'fade1';

        }
        var wd = document.getElementsByClassName('wd')[0];
        if (offset(wd).top <= cs) {
            if (wd.className == 'wd')
                wd.className += ' ' + 'animated' + ' ' + 'fadeInRight';
            wd.style.animationDuration = '2s';
            wd.style.animationDelay = '.3s';

        }
        var wq = document.getElementsByClassName('wq')[0];
        if (offset(wq).top <= cs) {
            if (wq.className == 'wq')
                wq.className += ' ' + 'animated' + ' ' + 'fadeInLeft';
            wq.style.animationDuration = '2s';
            wq.style.animationDelay = '.3s';

        }
        var lja = document.getElementsByClassName('lja')[0];
        if (offset(lja).top <= cs) {
            if (lja.className == 'lja')
                lja.className += ' ' + 'animated' + ' ' + 'fadeInRight';
            lja.style.animationDuration = '2s';
            lja.style.animationDelay = '.3s';

        }
        var dhl = document.getElementsByClassName('dhl')[0];
        if (offset(dhl).top <= cs) {
            if (dhl.className == 'dhl')
                dhl.className += ' ' + 'dash';
        }
        var d20121 = document.getElementsByClassName('d20121')[0];
        if (offset(d20121).top <= cs) {
            if (d20121.className == 'd20121')
                d20121.className += ' ' + 'fade10';
        }
        var d20122 = document.getElementsByClassName('d20122')[0];
        if (offset(d20122).top <= cs) {
            if (d20122.className == 'd20122')
                d20122.className += ' ' + 'fade04';
        }
        var d20123 = document.getElementsByClassName('d20123')[0];
        if (offset(d20123).top <= cs) {
            if (d20123.className == 'd20123')
                d20123.className += ' ' + 'fade07';
        }
        var d20131 = document.getElementsByClassName('d20131')[0];
        if (offset(d20131).top <= cs) {
            if (d20131.className == 'd20131')
                d20131.className += ' ' + 'fade07';
        }
        var d20132 = document.getElementsByClassName('d20132')[0];
        if (offset(d20132).top <= cs) {
            if (d20132.className == 'd20132')
                d20132.className += ' ' + 'fade04';
        }
        var d20133 = document.getElementsByClassName('d20133')[0];
        if (offset(d20133).top <= cs) {
            if (d20133.className == 'd20133')
                d20133.className += ' ' + 'fade10';
        }
        var d20141 = document.getElementsByClassName('d20141')[0];
        if (offset(d20141).top <= cs) {
            if (d20141.className == 'd20141')
                d20141.className += ' ' + 'fade10';
        }
        var d20142 = document.getElementsByClassName('d20142')[0];
        if (offset(d20142).top <= cs) {
            if (d20142.className == 'd20142')
                d20142.className += ' ' + 'fade04';
        }
        var d20143 = document.getElementsByClassName('d20143')[0];
        if (offset(d20143).top <= cs) {
            if (d20143.className == 'd20143')
                d20143.className += ' ' + 'fade07';
        }
        var d20151 = document.getElementsByClassName('d20151')[0];
        if (offset(d20151).top <= cs) {
            if (d20151.className == 'd20151')
                d20151.className += ' ' + 'fade10';
        }
        var d20152 = document.getElementsByClassName('d20152')[0];
        if (offset(d20152).top <= cs) {
            if (d20152.className == 'd20152')
                d20152.className += ' ' + 'fade04';
        }
        var d20153 = document.getElementsByClassName('d20153')[0];
        if (offset(d20153).top <= cs) {
            if (d20153.className == 'd20153')
                d20153.className += ' ' + 'fade07';
        }
        var d20161 = document.getElementsByClassName('d20161')[0];
        if (offset(d20161).top <= cs) {
            if (d20161.className == 'd20161')
                d20161.className += ' ' + 'fade07';
        }
        var d20162 = document.getElementsByClassName('d20162')[0];
        if (offset(d20162).top <= cs) {
            if (d20162.className == 'd20162')
                d20162.className += ' ' + 'fade04';
        }
        var d20163 = document.getElementsByClassName('d20163')[0];
        if (offset(d20163).top <= cs) {
            if (d20163.className == 'd20163')
                d20163.className += ' ' + 'fade10';
        }

        var part12 = document.getElementsByClassName('part5')[0];
        if (offset(part12).top <= cs) {
            if (part12.className == 'part5')
                part12.className += ' ' + 'animated' + ' ' + 'fadeInUp'
        }
        var part13 = document.getElementsByClassName('part6')[0];
        if (offset(part13).top <= cs) {
            if (part13.className == 'part6')
                part13.className += ' ' + 'fade'
        }
        var part14 = document.getElementsByClassName('part7')[0];
        if (offset(part14).top <= cs) {
            if (part14.className == 'part7')
                part14.className += ' ' + 'fade'
        }
        var part15 = document.getElementsByClassName('part8')[0];
        if (offset(part15).top <= cs) {
            if (part15.className == 'part8')
                part15.className += ' ' + 'fade'
        }
        var part16 = document.getElementsByClassName('part9')[0];
        if (offset(part16).top <= cs) {
            if (part16.className == 'part9')
                part16.className += ' ' + 'fade'
        }
        var part17 = document.getElementsByClassName('part10')[0];
        if (offset(part17).top <= cs) {
            if (part17.className == 'part10')
                part17.className += ' ' + 'fade'
        }
        var part21 = document.getElementsByClassName('part3')[1];
        if (offset(part21).top <= cs && offset(part21).top != 0) {
            if (part21.className == 'part3')
                part21.className += ' ' + 'animated' + ' ' + 'fadeInUp';
        }
        var part22 = document.getElementsByClassName('part4')[1];
        if (offset(part22).top <= cs && offset(part22).top != 0) {
            if (part22.className == 'part4')
                part22.className += ' ' + 'animated' + ' ' + 'fadeInUp';
        }
        var part23 = document.getElementsByClassName('part5')[1];
        if (offset(part23).top <= cs && offset(part23).top != 0) {
            if (part23.className == 'part5')
                part23.className += ' ' + 'animated' + ' ' + 'fadeInUp';
        }
        var part24 = document.getElementsByClassName('part6')[1];
        if (offset(part24).top <= cs && offset(part24).top != 0) {
            if (part24.className == 'part6')
                part24.className += ' ' + 'animated' + ' ' + 'fadeInUp';
        }
        var part25 = document.getElementsByClassName('part7')[1];
        if (offset(part25).top <= cs && offset(part25).top != 0) {
            if (part25.className == 'part7')
                part25.className += ' ' + 'animated' + ' ' + 'fadeInUp';
        }
        var part26 = document.getElementsByClassName('part8')[1];
        if (offset(part26).top <= cs && offset(part26).top != 0) {
            if (part26.className == 'part8')
                part26.className += ' ' + 'animated' + ' ' + 'fadeInUp';
        }
        var part27 = document.getElementsByClassName('part10')[1];
        if (offset(part27).top <= cs && offset(part27).top != 0) {
            if (part27.className == 'part10')
                part27.className += ' ' + 'animated' + ' ' + 'fadeInLeft';
        }
        var part28 = document.getElementsByClassName('part11')[1];
        if (offset(part28).top <= cs && offset(part28).top != 0) {
            if (part28.className == 'part11')
                part28.className += ' ' + 'animated' + ' ' + 'fadeInRight';
        }
        var part29 = document.getElementsByClassName('part12')[1];
        if (offset(part29).top <= cs && offset(part29).top != 0) {
            if (part29.className == 'part12')
                part29.className += ' ' + 'animated' + ' ' + 'fadeInLeft';
        }
        var part310 = document.getElementsByClassName('part13')[0];
        if (offset(part310).top <= cs && offset(part310).top != 0) {
            if (part310.className == 'part13')
                part310.className += ' ' + 'animated' + ' ' + 'fadeInRight';
        }
        var part311 = document.getElementsByClassName('part15')[0];
        if (offset(part311).top <= cs && offset(part311).top != 0) {
            if (part311.className == 'part15')
                part311.className += ' ' + 'animated' + ' ' + 'fadeInRight';
        }
        var part312 = document.getElementsByClassName('part16')[0];
        if (offset(part312).top <= cs && offset(part312).top != 0) {
            if (part312.className == 'part16')
                part312.className += ' ' + 'animated' + ' ' + 'fadeInLeft';
        }
        var part313 = document.getElementsByClassName('part17')[0];
        if (offset(part313).top <= cs && offset(part313).top != 0) {
            if (part313.className == 'part17')
                part313.className += ' ' + 'animated' + ' ' + 'fadeInRight';
        }
        var part314 = document.getElementsByClassName('part19')[0];
        if (offset(part314).top <= cs && offset(part314).top != 0) {
            if (part314.className == 'part19')
                part314.className += ' ' + 'animated' + ' ' + 'fadeInLeft';
        }
        var part315 = document.getElementsByClassName('part20')[0];
        if (offset(part315).top <= cs && offset(part315).top != 0) {
            if (part315.className == 'part20')
                part315.className += ' ' + 'animated' + ' ' + 'fadeInRight';
        }
        var part316 = document.getElementsByClassName('part21')[0];
        if (offset(part316).top <= cs && offset(part316).top != 0) {
            if (part316.className == 'part21')
                part316.className += ' ' + 'animated' + ' ' + 'fadeInLeft';
        }
        var part317 = document.getElementsByClassName('part22')[0];
        if (offset(part317).top <= cs && offset(part317).top != 0) {
            if (part317.className == 'part22')
                part317.className += ' ' + 'animated' + ' ' + 'fadeInRight';
        }
        var part318 = document.getElementsByClassName('part24')[0];
        if (offset(part318).top <= cs && offset(part318).top != 0) {
            if (part318.className == 'part24')
                part318.className += ' ' + 'animated' + ' ' + 'fadeInRight';
        }
        var part319 = document.getElementsByClassName('part25')[0];
        if (offset(part319).top <= cs && offset(part319).top != 0) {
            if (part319.className == 'part25')
                part319.className += ' ' + 'animated' + ' ' + 'fadeInLeft';
        }
        var part320 = document.getElementsByClassName('part26')[0];
        if (offset(part320).top <= cs && offset(part320).top != 0) {
            if (part320.className == 'part26')
                part320.className += ' ' + 'fade'
        }
        var part321 = document.getElementsByClassName('part27')[0];
        if (offset(part321).top <= cs && offset(part321).top != 0) {
            if (part321.className == 'part27')
                part321.className += ' ' + 'fade'
        }
        var part322 = document.getElementsByClassName('part28')[0];
        if (offset(part322).top <= cs && offset(part322).top != 0) {
            if (part322.className == 'part28')
                part322.className += ' ' + 'fade'
        }
        var part323 = document.getElementsByClassName('part29')[0];
        if (offset(part323).top <= cs && offset(part323).top != 0) {
            if (part323.className == 'part29')
                part323.className += ' ' + 'fade'
        }
        var part324 = document.getElementsByClassName('part30')[0];
        if (offset(part324).top <= cs && offset(part324).top != 0) {
            if (part324.className == 'part30')
                part324.className += ' ' + 'fade'
        }
        var part325 = document.getElementsByClassName('part31')[0];
        if (offset(part325).top <= cs && offset(part325).top != 0) {
            if (part325.className == 'part31')
                part325.className += ' ' + 'fade'
        }
        var part326 = document.getElementsByClassName('part32')[0];
        if (offset(part326).top <= cs && offset(part326).top != 0) {
            if (part326.className == 'part32')
                part326.className += ' ' + 'fade'
        }
        var applicationSystemBash = document.getElementsByClassName('applicationSystemBash')[0];
        if (offset(applicationSystemBash).top <= cs && offset(applicationSystemBash).top != 0) {
            if (applicationSystemBash.className == 'applicationSystemBash')
                applicationSystemBash.className += ' ' + 'dash2';
        }
        var applicationSystem11 = document.getElementsByClassName('applicationSystem11')[0];
        if (offset(applicationSystem11).top <= cs && offset(applicationSystem11).top != 0) {
            if (applicationSystem11.className == 'applicationSystem11')
                applicationSystem11.className += ' ' + 'fade04';
        }
        var applicationSystem12 = document.getElementsByClassName('applicationSystem12')[0];
        if (offset(applicationSystem12).top <= cs && offset(applicationSystem12).top != 0) {
            if (applicationSystem12.className == 'applicationSystem12')
                applicationSystem12.className += ' ' + 'fade10';
        }
        var applicationSystem21 = document.getElementsByClassName('applicationSystem21')[0];
        if (offset(applicationSystem21).top <= cs && offset(applicationSystem21).top != 0) {
            if (applicationSystem21.className == 'applicationSystem21')
                applicationSystem21.className += ' ' + 'fade04';
        }
        var applicationSystem22 = document.getElementsByClassName('applicationSystem22')[0];
        if (offset(applicationSystem22).top <= cs && offset(applicationSystem22).top != 0) {
            if (applicationSystem22.className == 'applicationSystem22')
                applicationSystem22.className += ' ' + 'fade10';
        }
        var applicationSystem31 = document.getElementsByClassName('applicationSystem31')[0];
        if (offset(applicationSystem31).top <= cs && offset(applicationSystem31).top != 0) {
            if (applicationSystem31.className == 'applicationSystem31')
                applicationSystem31.className += ' ' + 'fade04';
        }
        var applicationSystem32 = document.getElementsByClassName('applicationSystem32')[0];
        if (offset(applicationSystem32).top <= cs && offset(applicationSystem32).top != 0) {
            if (applicationSystem32.className == 'applicationSystem32')
                applicationSystem32.className += ' ' + 'fade10';
        }
        var applicationSystem41 = document.getElementsByClassName('applicationSystem41')[0];
        if (offset(applicationSystem41).top <= cs && offset(applicationSystem41).top != 0) {
            if (applicationSystem41.className == 'applicationSystem41')
                applicationSystem41.className += ' ' + 'fade04';
        }
        var applicationSystem42 = document.getElementsByClassName('applicationSystem42')[0];
        if (offset(applicationSystem42).top <= cs && offset(applicationSystem42).top != 0) {
            if (applicationSystem42.className == 'applicationSystem42')
                applicationSystem42.className += ' ' + 'fade10';
        }
        var applicationSystem51 = document.getElementsByClassName('applicationSystem51')[0];
        if (offset(applicationSystem51).top <= cs && offset(applicationSystem51).top != 0) {
            if (applicationSystem51.className == 'applicationSystem51')
                applicationSystem51.className += ' ' + 'fade04';
        }
        var applicationSystem52 = document.getElementsByClassName('applicationSystem52')[0];
        if (offset(applicationSystem52).top <= cs && offset(applicationSystem52).top != 0) {
            if (applicationSystem52.className == 'applicationSystem52')
                applicationSystem52.className += ' ' + 'fade10';
        }
        var applicationSystem61 = document.getElementsByClassName('applicationSystem61')[0];
        if (offset(applicationSystem61).top <= cs && offset(applicationSystem61).top != 0) {
            if (applicationSystem61.className == 'applicationSystem61')
                applicationSystem61.className += ' ' + 'fade04';
        }
        var applicationSystem62 = document.getElementsByClassName('applicationSystem62')[0];
        if (offset(applicationSystem62).top <= cs && offset(applicationSystem62).top != 0) {
            if (applicationSystem62.className == 'applicationSystem62')
                applicationSystem62.className += ' ' + 'fade10';
        }
        var applicationSystem71 = document.getElementsByClassName('applicationSystem71')[0];
        if (offset(applicationSystem71).top <= cs && offset(applicationSystem71).top != 0) {
            if (applicationSystem71.className == 'applicationSystem71')
                applicationSystem71.className += ' ' + 'fade04';
        }
        var applicationSystem72 = document.getElementsByClassName('applicationSystem72')[0];
        if (offset(applicationSystem72).top <= cs && offset(applicationSystem72).top != 0) {
            if (applicationSystem72.className == 'applicationSystem72')
                applicationSystem72.className += ' ' + 'fade10';
        }
        var achievementBorder = document.getElementsByClassName('achievementBorder')[0];
        if (offset(achievementBorder).top <= cs && offset(achievementBorder).top != 0) {
            if (achievementBorder.className == 'achievementBorder')
                achievementBorder.className += ' ' + 'fade';
        }
        var achievementR1 = document.getElementsByClassName('achievementR1')[0];
        var achievementR2 = document.getElementsByClassName('achievementR2')[0];
        if (offset(achievementR1).top <= cs && offset(achievementR1).top != 0) {
            if (achievementR1.className == 'achievementR1') {
                achievementR1.className += ' ' + 'fade';
                achievementR2.className += ' ' + 'fade';
            }
        }
        var achievementM1 = document.getElementsByClassName('achievementM1')[0];
        var achievementM2 = document.getElementsByClassName('achievementM2')[0];
        if (offset(achievementM1).top <= cs && offset(achievementM1).top != 0) {
            if (achievementM1.className == 'achievementM1') {
                achievementM1.className += ' ' + 'biger';
                achievementM2.className += ' ' + 'biger';
            }

        }

        var achievementBg = document.getElementsByClassName('achievementBg')[0];
        if (offset(achievementBg).top <= cs && offset(achievementBg).top != 0) {
            if (achievementBg.className == 'achievementBg')
                achievementBg.className += ' ' + 'fade';
        }
        var achievementR3 = document.getElementsByClassName('achievementR3')[0];
        var achievementR4 = document.getElementsByClassName('achievementR4')[0];
        if (offset(achievementR3).top <= cs && offset(achievementR3).top != 0) {
            if (achievementR3.className == 'achievementR3') {
                achievementR3.className += ' ' + 'fade';
                achievementR4.className += ' ' + 'fade';
            }
        }
        var achievementM3 = document.getElementsByClassName('achievementM3')[0];
        var achievementM4 = document.getElementsByClassName('achievementM4')[0];
        if (offset(achievementM3).top <= cs && offset(achievementM3).top != 0) {
            if (achievementM3.className == 'achievementM3') {
                achievementM3.className += ' ' + 'biger';
                achievementM4.className += ' ' + 'biger';
            }

        }

        var part41 = document.getElementsByClassName('part3')[3];
        if (offset(part41).top <= cs && offset(part41).top != 0) {
            if (part41.className == 'part3')
                part41.className += ' ' + 'animated' + ' ' + 'fadeInUp';
            var part41_1 = document.getElementsByClassName('part4')[3];
            part41_1.style.opacity = '0';
            if (offset(part41_1).top <= cs) {
                part41_1.style.opacity = '1'
            }
        }


        var part42 = document.getElementsByClassName('part5')[2];
        if (offset(part42).top <= cs && offset(part42).top != 0) {
            if (part42.className == 'part5')
                part42.className += ' ' + 'animated' + ' ' + 'fadeInUp';
            var part42_1 = document.getElementsByClassName('part6')[2];
            part42_1.style.opacity = '0';
            if (offset(part42_1).top <= cs) {
                part42_1.style.opacity = '1'
            }
        }

        var part43 = document.getElementsByClassName('part7')[2];
        if (offset(part43).top <= cs && offset(part43).top != 0) {
            if (part43.className == 'part7')
                part43.className += ' ' + 'animated' + ' ' + 'fadeInUp';
            var part43_1 = document.getElementsByClassName('part8')[2];
            part43_1.style.opacity = '0';
            if (offset(part43_1).top <= cs) {
                part43_1.style.opacity = '1'
            }
        }

        var part44 = document.getElementsByClassName('part9')[2];
        if (offset(part44).top <= cs && offset(part44).top != 0) {
            if (part44.className == 'part9')
                part44.className += ' ' + 'animated' + ' ' + 'fadeInUp';
            var part44_1 = document.getElementsByClassName('part10')[2];
            part44_1.style.opacity = '0';
            if (offset(part44_1).top <= cs) {
                part44_1.style.opacity = '1'
            }
        }

        var part45 = document.getElementsByClassName('part11')[2];
        if (offset(part45).top <= cs && offset(part45).top != 0) {
            if (part45.className == 'part11')
                part45.className += ' ' + 'animated' + ' ' + 'fadeInLeft';
        }
        var part46 = document.getElementsByClassName('part12')[2];
        if (offset(part46).top <= cs && offset(part46).top != 0) {
            if (part46.className == 'part12')
                part46.className += ' ' + 'animated' + ' ' + 'fadeInRight';
        }
        var part47 = document.getElementsByClassName('part13')[1];
        if (offset(part47).top <= cs && offset(part47).top != 0) {
            if (part47.className == 'part13')
                part47.className += ' ' + 'animated' + ' ' + 'fadeInLeft';
        }
        var part48 = document.getElementsByClassName('part14')[1];
        if (offset(part48).top <= cs && offset(part48).top != 0) {
            if (part48.className == 'part14')
                part48.className += ' ' + 'animated' + ' ' + 'fadeInRight';
        }

    }


}
changeContent();


var mx = 0;
bg.addEventListener('touchstart', function (e) {
    mx = e.touches[0].pageX;
})
bg.addEventListener('touchmove', function (e) {
    moveX = e.touches[0].pageX - mx;
})
bg.addEventListener('touchend', function (e) {
    try {
        if (moveX > 100) {
            left.onclick()
        } else if (moveX < -100) {
            right.onclick()


        }
    } catch (err) {
        console.log('请滑动')
    }

})


