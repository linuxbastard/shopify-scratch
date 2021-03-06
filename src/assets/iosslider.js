/*
 * iosSlider - http://iosscripts.com/iosslider/
 * 
 * Touch Enabled, Responsive jQuery Horizontal Content Slider/Carousel/Image Gallery Plugin
 *
 * A jQuery plugin which allows you to integrate a customizable, cross-browser 
 * content slider into your web presence. Designed for use as a content slider, carousel, 
 * scrolling website banner, or image gallery.
 * 
 * Copyright (c) 2013 Marc Whitbread
 * 
 * Version: v1.3.43 (06/17/2014)
 * Minimum requirements: jQuery v1.4+
 *
 * Advanced requirements:
 * 1) jQuery bind() click event override on slide requires jQuery v1.6+
 *
 * Terms of use:
 *
 * 1) iosSlider is licensed under the Creative Commons â€“ Attribution-NonCommercial 3.0 License.
 * 2) You may use iosSlider free for personal or non-profit purposes, without restriction.
 *	  Attribution is not required but always appreciated. For commercial projects, you
 *	  must purchase a license. You may download and play with the script before deciding to
 *	  fully implement it in your project. Making sure you are satisfied, and knowing iosSlider
 *	  is the right script for your project is paramount.
 * 3) You are not permitted to make the resources found on iosscripts.com available for
 *    distribution elsewhere "as is" without prior consent. If you would like to feature
 *    iosSlider on your site, please do not link directly to the resource zip files. Please
 *    link to the appropriate page on iosscripts.com where users can find the download.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 */
 
(function(b){var ma=0,X=0,ga=0,T=0,Ca="ontouchstart"in window||0<navigator.msMaxTouchPoints,Da="onorientationchange"in window,ca=!1,da=!1,Y=!1,na=!1,ia=!1,ea="pointer",ta="pointer",ja=[],N=[],ua=[],R=[],B=[],aa=[],y=[],n=[],t=[],oa=[],fa=[],f={showScrollbar:function(e,c){e.scrollbarHide&&b("."+c).css({opacity:e.scrollbarOpacity,filter:"alpha(opacity:"+100*e.scrollbarOpacity+")"})},hideScrollbar:function(b,c,a,v,g,d,n,t,y,B){if(b.scrollbar&&b.scrollbarHide)for(var w=a;w<a+25;w++)c[c.length]=f.hideScrollbarIntervalTimer(10* w,v[a],(a+24-w)/24,g,d,n,t,y,B,b)},hideScrollbarInterval:function(e,c,a,v,g,d,n,y,B){T=-1*e/t[y]*(g-d-n-v);f.setSliderOffset("."+a,T);b("."+a).css({opacity:B.scrollbarOpacity*c,filter:"alpha(opacity:"+B.scrollbarOpacity*c*100+")"})},slowScrollHorizontalInterval:function(e,c,a,v,g,d,I,O,J,K,w,x,A,r,u,m,D,k,l){if(l.infiniteSlider){if(a<=-1*t[m]||a<=-1*oa[m]){var q=b(e).width();if(a<=-1*oa[m]){var s=-1*w[0];b(c).each(function(a){f.setSliderOffset(b(c)[a],s+D);a<x.length&&(x[a]=-1*s);s+=u[a]});a+=-1* x[0];n[m]=-1*x[0]+D;t[m]=n[m]+q-d;y[m]=0}for(;a<=-1*t[m];){var h=0,C=f.getSliderOffset(b(c[0]),"x");b(c).each(function(a){f.getSliderOffset(this,"x")<C&&(C=f.getSliderOffset(this,"x"),h=a)});A=n[m]+q;f.setSliderOffset(b(c)[h],A);n[m]=-1*x[1]+D;t[m]=n[m]+q-d;x.splice(0,1);x.splice(x.length,0,-1*A+D);y[m]++}}if(a>=-1*n[m]||0<=a){q=b(e).width();if(0<a)for(s=-1*w[0],b(c).each(function(a){f.setSliderOffset(b(c)[a],s+D);a<x.length&&(x[a]=-1*s);s+=u[a]}),a-=-1*x[0],n[m]=-1*x[0]+D,t[m]=n[m]+q-d,y[m]=r;0< -1*x[0]-q+D;){var z=0,L=f.getSliderOffset(b(c[0]),"x");b(c).each(function(a){f.getSliderOffset(this,"x")>L&&(L=f.getSliderOffset(this,"x"),z=a)});A=n[m]-u[z];f.setSliderOffset(b(c)[z],A);x.splice(0,0,-1*A+D);x.splice(x.length-1,1);n[m]=-1*x[0]+D;t[m]=n[m]+q-d;y[m]--;B[m]++}for(;a>-1*n[m];)z=0,L=f.getSliderOffset(b(c[0]),"x"),b(c).each(function(a){f.getSliderOffset(this,"x")>L&&(L=f.getSliderOffset(this,"x"),z=a)}),A=n[m]-u[z],f.setSliderOffset(b(c)[z],A),x.splice(0,0,-1*A+D),x.splice(x.length-1,1), n[m]=-1*x[0]+D,t[m]=n[m]+q-d,y[m]--}}w=!1;d=f.calcActiveOffset(l,a,x,d,y[m],r,K,m);A=(d+y[m]+r)%r;l.infiniteSlider?A!=aa[m]&&(w=!0):d!=B[m]&&(w=!0);if(w&&(r=new f.args("change",l,e,b(e).children(":eq("+A+")"),A,k),b(e).parent().data("args",r),""!=l.onSlideChange))l.onSlideChange(r);B[m]=d;aa[m]=A;a=Math.floor(a);if(m!=b(e).parent().data("args").data.sliderNumber)return!0;f.setSliderOffset(e,a);l.scrollbar&&(T=Math.floor((-1*a-n[m]+D)/(t[m]-n[m]+D)*(I-O-g)),e=g-J,a>=-1*n[m]+D?(e=g-J- -1*T,f.setSliderOffset(b("."+ v),0)):(a<=-1*t[m]+1&&(e=I-O-J-T),f.setSliderOffset(b("."+v),T)),b("."+v).css({width:e+"px"}))},slowScrollHorizontal:function(e,c,a,v,g,d,I,O,J,K,w,x,A,r,u,m,D,k,l,q,s){var h=f.getSliderOffset(e,"x");d=[];var C=0,z=25/1024*O;frictionCoefficient=s.frictionCoefficient;elasticFrictionCoefficient=s.elasticFrictionCoefficient;snapFrictionCoefficient=s.snapFrictionCoefficient;g>s.snapVelocityThreshold&&s.snapToChildren&&!l?C=1:g<-1*s.snapVelocityThreshold&&s.snapToChildren&&!l&&(C=-1);g<-1*z?g=-1*z:g>z&& (g=z);b(e)[0]!==b(k)[0]&&(C*=-1,g*=-2);k=y[u];if(s.infiniteSlider)var L=n[u],p=t[u];l=[];for(var z=[],G=0;G<A.length;G++)l[G]=A[G],G<c.length&&(z[G]=f.getSliderOffset(b(c[G]),"x"));for(;1<g||-1>g;){g*=frictionCoefficient;h+=g;(h>-1*n[u]||h<-1*t[u])&&!s.infiniteSlider&&(g*=elasticFrictionCoefficient,h+=g);if(s.infiniteSlider){if(h<=-1*p){for(var p=b(e).width(),N=0,P=z[0],G=0;G<z.length;G++)z[G]<P&&(P=z[G],N=G);G=L+p;z[N]=G;L=-1*l[1]+q;p=L+p-O;l.splice(0,1);l.splice(l.length,0,-1*G+q);k++}if(h>=-1* L){p=b(e).width();N=0;P=z[0];for(G=0;G<z.length;G++)z[G]>P&&(P=z[G],N=G);G=L-r[N];z[N]=G;l.splice(0,0,-1*G+q);l.splice(l.length-1,1);L=-1*l[0]+q;p=L+p-O;k--}}d[d.length]=h}z=!1;g=f.calcActiveOffset(s,h,l,O,k,D,B[u],u);L=(g+k+D)%D;s.snapToChildren&&(s.infiniteSlider?L!=aa[u]&&(z=!0):g!=B[u]&&(z=!0),0>C&&!z?(g++,g>=A.length&&!s.infiniteSlider&&(g=A.length-1)):0<C&&!z&&(g--,0>g&&!s.infiniteSlider&&(g=0)));if(s.snapToChildren||(h>-1*n[u]||h<-1*t[u])&&!s.infiniteSlider){(h>-1*n[u]||h<-1*t[u])&&!s.infiniteSlider? d.splice(0,d.length):(d.splice(.1*d.length,d.length),h=0<d.length?d[d.length-1]:h);for(;h<l[g]-.5||h>l[g]+.5;)h=(h-l[g])*snapFrictionCoefficient+l[g],d[d.length]=h;d[d.length]=l[g]}C=1;0!=d.length%2&&(C=0);for(h=0;h<a.length;h++)clearTimeout(a[h]);k=(g+k+D)%D;L=0;for(h=C;h<d.length;h+=2)if(h==C||1<Math.abs(d[h]-L)||h>=d.length-2)L=d[h],a[a.length]=f.slowScrollHorizontalIntervalTimer(10*h,e,c,d[h],v,I,O,J,K,w,g,x,A,m,D,r,u,q,k,s);L=(g+y[u]+D)%D;""!=s.onSlideComplete&&1<d.length&&(a[a.length]=f.onSlideCompleteTimer(10* (h+1),s,e,b(e).children(":eq("+L+")"),k,u));a[a.length]=f.updateBackfaceVisibilityTimer(10*(h+1),c,u,D,s);R[u]=a;f.hideScrollbar(s,a,h,d,v,I,O,K,w,u)},onSlideComplete:function(e,c,a,v,g){a=new f.args("complete",e,b(c),a,v,v);b(c).parent().data("args",a);if(""!=e.onSlideComplete)e.onSlideComplete(a)},getSliderOffset:function(e,c){var a=0;c="x"==c?4:5;if(!ca||da||Y)a=parseInt(b(e).css("left"),10);else{for(var a=["-webkit-transform","-moz-transform","transform"],f,g=0;g<a.length;g++)if(void 0!=b(e).css(a[g])&& 0<b(e).css(a[g]).length){f=b(e).css(a[g]).split(",");break}a=void 0==f[c]?0:parseInt(f[c],10)}return a},setSliderOffset:function(e,c){c=parseInt(c,10);!ca||da||Y?b(e).css({left:c+"px"}):b(e).css({msTransform:"matrix(1,0,0,1,"+c+",0)",webkitTransform:"matrix(1,0,0,1,"+c+",0)",MozTransform:"matrix(1,0,0,1,"+c+",0)",transform:"matrix(1,0,0,1,"+c+",0)"})},setBrowserInfo:function(){null!=navigator.userAgent.match("WebKit")?(ea="-webkit-grab",ta="-webkit-grabbing"):null!=navigator.userAgent.match("Gecko")? (ia=!0,ea="move",ta="-moz-grabbing"):null!=navigator.userAgent.match("MSIE 7")?na=da=!0:null!=navigator.userAgent.match("MSIE 8")?na=Y=!0:null!=navigator.userAgent.match("MSIE 9")&&(na=!0)},has3DTransform:function(){var e=!1,c=b("<div />").css({msTransform:"matrix(1,1,1,1,1,1)",webkitTransform:"matrix(1,1,1,1,1,1)",MozTransform:"matrix(1,1,1,1,1,1)",transform:"matrix(1,1,1,1,1,1)"});""==c.attr("style")?e=!1:ia&&21<=parseInt(navigator.userAgent.split("/")[3],10)?e=!1:void 0!=c.attr("style")&&(e=!0); return e},getSlideNumber:function(b,c,a){return(b-y[c]+a)%a},calcActiveOffset:function(b,c,a,f,g,d,n,t){g=!1;b=[];var y;c>a[0]&&(y=0);c<a[a.length-1]&&(y=d-1);for(d=0;d<a.length;d++)a[d]<=c&&a[d]>c-f&&(g||a[d]==c||(b[b.length]=a[d-1]),b[b.length]=a[d],g=!0);0==b.length&&(b[0]=a[a.length-1]);for(d=g=0;d<b.length;d++)n=Math.abs(c-b[d]),n<f&&(g=b[d],f=n);for(d=0;d<a.length;d++)g==a[d]&&(y=d);return y},changeSlide:function(e,c,a,v,g,d,n,t,J,K,w,x,A,r,u,m,D,k){f.autoSlidePause(r);for(var l=0;l<v.length;l++)clearTimeout(v[l]); var q=Math.ceil(k.autoSlideTransTimer/10)+1,s=f.getSliderOffset(c,"x"),h=x[e],h=h-s,C=e-(B[r]+y[r]+m)%m;if(k.infiniteSlider){e=(e-y[r]+2*m)%m;l=!1;0==e&&2==m&&(e=m,x[e]=x[e-1]-b(a).eq(0).outerWidth(!0),l=!0);var h=x[e],h=h-s,z=[x[e]-b(c).width(),x[e]+b(c).width()];l&&x.splice(x.length-1,1);for(l=0;l<z.length;l++)Math.abs(z[l]-s)<Math.abs(h)&&(h=z[l]-s)}0>h&&-1==C?h+=b(c).width():0<h&&1==C&&(h-=b(c).width());C=[];f.showScrollbar(k,g);for(l=0;l<=q;l++)z=l,z/=q,z--,z=s+h*(Math.pow(z,5)+1),C[C.length]= z;q=(e+y[r]+m)%m;for(l=s=0;l<C.length;l++){if(0==l||1<Math.abs(C[l]-s)||l>=C.length-2)s=C[l],v[l]=f.slowScrollHorizontalIntervalTimer(10*(l+1),c,a,C[l],g,d,n,t,J,K,e,w,x,u,m,A,r,D,q,k);0==l&&""!=k.onSlideStart&&(h=(B[r]+y[r]+m)%m,k.onSlideStart(new f.args("start",k,c,b(c).children(":eq("+h+")"),h,e)))}s=!1;k.infiniteSlider?q!=aa[r]&&(s=!0):e!=B[r]&&(s=!0);s&&""!=k.onSlideComplete&&(v[v.length]=f.onSlideCompleteTimer(10*(l+1),k,c,b(c).children(":eq("+q+")"),q,r));R[r]=v;f.hideScrollbar(k,v,l,C,g,d, n,J,K,r);f.autoSlide(c,a,v,g,d,n,t,J,K,w,x,A,r,u,m,D,k)},changeOffset:function(e,c,a,v,g,d,I,O,J,K,w,x,A,r,u,m,D,k){f.autoSlidePause(r);for(var l=0;l<v.length;l++)clearTimeout(v[l]);k.infiniteSlider||(e=e>-1*n[r]+D?-1*n[r]+D:e,e=e<-1*t[r]?-1*t[r]:e);var q=Math.ceil(k.autoSlideTransTimer/10)+1,s=f.getSliderOffset(c,"x"),l=(f.calcActiveOffset(k,e,x,I,y,m,B[r],r)+y[r]+m)%m,h=x.slice();if(k.snapToChildren&&!k.infiniteSlider)e=x[l];else if(k.infiniteSlider&&k.snapToChildren){for(;e>=h[0];)h.splice(0,0, h[m-1]+b(c).width()),h.splice(m,1);for(;e<=h[m-1];)h.splice(m,0,h[0]-b(c).width()),h.splice(0,1);l=f.calcActiveOffset(k,e,h,I,y,m,B[r],r);e=h[l]}var C=e-s;e=[];var z;f.showScrollbar(k,g);for(h=0;h<=q;h++)z=h,z/=q,z--,z=s+C*(Math.pow(z,5)+1),e[e.length]=z;q=(l+y[r]+m)%m;for(h=s=0;h<e.length;h++){if(0==h||1<Math.abs(e[h]-s)||h>=e.length-2)s=e[h],v[h]=f.slowScrollHorizontalIntervalTimer(10*(h+1),c,a,e[h],g,d,I,O,J,K,l,w,x,u,m,A,r,D,q,k);0==h&&""!=k.onSlideStart&&(q=(B[r]+y[r]+m)%m,k.onSlideStart(new f.args("start", k,c,b(c).children(":eq("+q+")"),q,l)))}s=!1;k.infiniteSlider?q!=aa[r]&&(s=!0):l!=B[r]&&(s=!0);s&&""!=k.onSlideComplete&&(v[v.length]=f.onSlideCompleteTimer(10*(h+1),k,c,b(c).children(":eq("+q+")"),q,r));R[r]=v;f.hideScrollbar(k,v,h,e,g,d,I,J,K,r);f.autoSlide(c,a,v,g,d,I,O,J,K,w,x,A,r,u,m,D,k)},autoSlide:function(b,c,a,v,g,d,n,t,J,K,w,x,A,r,u,m,D){if(!N[A].autoSlide)return!1;f.autoSlidePause(A);ja[A]=setTimeout(function(){!D.infiniteSlider&&B[A]>w.length-1&&(B[A]-=u);f.changeSlide(B[A]+y[A]+1,b,c, a,v,g,d,n,t,J,K,w,x,A,r,u,m,D);f.autoSlide(b,c,a,v,g,d,n,t,J,K,w,x,A,r,u,m,D)},D.autoSlideTimer+D.autoSlideTransTimer)},autoSlidePause:function(b){clearTimeout(ja[b])},isUnselectable:function(e,c){return""!=c.unselectableSelector&&1==b(e).closest(c.unselectableSelector).length?!0:!1},slowScrollHorizontalIntervalTimer:function(b,c,a,v,g,d,n,t,y,B,w,x,A,r,u,m,D,k,l,q){return setTimeout(function(){f.slowScrollHorizontalInterval(c,a,v,g,d,n,t,y,B,w,x,A,r,u,m,D,k,l,q)},b)},onSlideCompleteTimer:function(b, c,a,v,g,d){return setTimeout(function(){f.onSlideComplete(c,a,v,g,d)},b)},hideScrollbarIntervalTimer:function(b,c,a,v,g,d,n,t,y,B){return setTimeout(function(){f.hideScrollbarInterval(c,a,v,g,d,n,t,y,B)},b)},updateBackfaceVisibilityTimer:function(b,c,a,v,g){return setTimeout(function(){f.updateBackfaceVisibility(c,a,v,g)},b)},updateBackfaceVisibility:function(e,c,a,v){c=(B[c]+y[c]+a)%a;for(var g=[],d=0;d<2*v.hardwareAccelBuffer;d++){var n=f.mod(c+d-v.hardwareAccelBuffer,a);if("visible"==b(e).eq(n).css("-webkit-backface-visibility")){g[g.length]= n;var t=f.mod(n+2*v.hardwareAccelBuffer,a),J=f.mod(n-2*v.hardwareAccelBuffer,a);b(e).eq(n).css("-webkit-backface-visibility","hidden");-1==g.indexOf(J)&&b(e).eq(J).css("-webkit-backface-visibility","");-1==g.indexOf(t)&&b(e).eq(t).css("-webkit-backface-visibility","")}}},mod:function(b,c){var a=b%c;return 0>a?a+c:a},args:function(e,c,a,v,g,d){this.prevSlideNumber=void 0==b(a).parent().data("args")?void 0:b(a).parent().data("args").prevSlideNumber;this.prevSlideObject=void 0==b(a).parent().data("args")? void 0:b(a).parent().data("args").prevSlideObject;this.targetSlideNumber=d+1;this.targetSlideObject=b(a).children(":eq("+d+")");this.slideChanged=!1;"load"==e?this.targetSlideObject=this.targetSlideNumber=void 0:"start"==e?this.targetSlideObject=this.targetSlideNumber=void 0:"change"==e?(this.slideChanged=!0,this.prevSlideNumber=void 0==b(a).parent().data("args")?c.startAtSlide:b(a).parent().data("args").currentSlideNumber,this.prevSlideObject=b(a).children(":eq("+this.prevSlideNumber+")")):"complete"== e&&(this.slideChanged=b(a).parent().data("args").slideChanged);this.settings=c;this.data=b(a).parent().data("iosslider");this.sliderObject=a;this.sliderContainerObject=b(a).parent();this.currentSlideObject=v;this.currentSlideNumber=g+1;this.currentSliderOffset=-1*f.getSliderOffset(a,"x")},preventDrag:function(b){b.preventDefault()},preventClick:function(b){b.stopImmediatePropagation();return!1},enableClick:function(){return!0}};f.setBrowserInfo();var $={init:function(e,c){ca=f.has3DTransform();var a= b.extend(!0,{elasticPullResistance:.6,frictionCoefficient:.92,elasticFrictionCoefficient:.6,snapFrictionCoefficient:.92,snapToChildren:!1,snapSlideCenter:!1,startAtSlide:1,scrollbar:!1,scrollbarDrag:!1,scrollbarHide:!0,scrollbarPaging:!1,scrollbarLocation:"top",scrollbarContainer:"",scrollbarOpacity:.4,scrollbarHeight:"4px",scrollbarBorder:"0",scrollbarMargin:"5px",scrollbarBackground:"#000",scrollbarBorderRadius:"100px",scrollbarShadow:"0 0 0 #000",scrollbarElasticPullResistance:.9,desktopClickDrag:!1, keyboardControls:!1,tabToAdvance:!1,responsiveSlideContainer:!0,responsiveSlides:!0,navSlideSelector:"",navPrevSelector:"",navNextSelector:"",autoSlideToggleSelector:"",autoSlide:!1,autoSlideTimer:5E3,autoSlideTransTimer:750,autoSlideHoverPause:!0,infiniteSlider:!1,snapVelocityThreshold:5,slideStartVelocityThreshold:0,horizontalSlideLockThreshold:5,verticalSlideLockThreshold:3,hardwareAccelBuffer:5,stageCSS:{position:"relative",top:"0",left:"0",overflow:"hidden",zIndex:1},unselectableSelector:"", onSliderLoaded:"",onSliderUpdate:"",onSliderResize:"",onSlideStart:"",onSlideChange:"",onSlideComplete:""},e);void 0==c&&(c=this);return b(c).each(function(c){function e(){f.autoSlidePause(d);va=b(F).find("a");za=b(F).find("[onclick]");pa=b(F).find("*");b(l).css("width","");b(l).css("height","");b(F).css("width","");E=b(F).children().not("script").get();ha=[];M=[];a.responsiveSlides&&b(E).css("width","");t[d]=0;p=[];m=b(l).parent().width();q=b(l).outerWidth(!0);a.responsiveSlideContainer&&(q=b(l).outerWidth(!0)> m?m:b(l).width());b(l).css({position:a.stageCSS.position,top:a.stageCSS.top,left:a.stageCSS.left,overflow:a.stageCSS.overflow,zIndex:a.stageCSS.zIndex,webkitPerspective:1E3,webkitBackfaceVisibility:"hidden",msTouchAction:"pan-y",width:q});b(a.unselectableSelector).css({cursor:"default"});for(var c=0;c<E.length;c++){ha[c]=b(E[c]).width();M[c]=b(E[c]).outerWidth(!0);var v=M[c];a.responsiveSlides&&(M[c]>q?(v=q+-1*(M[c]-ha[c]),ha[c]=v,M[c]=q):v=ha[c],b(E[c]).css({width:v}));b(E[c]).css({overflow:"hidden", position:"absolute"});p[c]=-1*t[d];t[d]=t[d]+v+(M[c]-ha[c])}a.snapSlideCenter&&(k=.5*(q-M[0]),a.responsiveSlides&&M[0]>q&&(k=0));oa[d]=2*t[d];for(c=0;c<E.length;c++)f.setSliderOffset(b(E[c]),-1*p[c]+t[d]+k),p[c]-=t[d];if(!a.infiniteSlider&&!a.snapSlideCenter){for(c=0;c<p.length&&!(p[c]<=-1*(2*t[d]-q));c++)ja=c;p.splice(ja+1,p.length);p[p.length]=-1*(2*t[d]-q)}for(c=0;c<p.length;c++)G[c]=p[c];L&&(N[d].startAtSlide=N[d].startAtSlide>p.length?p.length:N[d].startAtSlide,a.infiniteSlider?(N[d].startAtSlide= (N[d].startAtSlide-1+H)%H,B[d]=N[d].startAtSlide):(N[d].startAtSlide=0>N[d].startAtSlide-1?p.length-1:N[d].startAtSlide,B[d]=N[d].startAtSlide-1),aa[d]=B[d]);n[d]=t[d]+k;b(F).css({position:"relative",cursor:ea,webkitPerspective:"0",webkitBackfaceVisibility:"hidden",width:t[d]+"px"});U=t[d];t[d]=2*t[d]-q+2*k;(V=U+k<q||0==q?!0:!1)&&b(F).css({cursor:"default"});D=b(l).parent().outerHeight(!0);s=b(l).height();a.responsiveSlideContainer&&(s=s>D?D:s);b(l).css({height:s});f.setSliderOffset(F,p[B[d]]);if(a.infiniteSlider&& !V){c=f.getSliderOffset(b(F),"x");for(v=(y[d]+H)%H*-1;0>v;){var g=0,z=f.getSliderOffset(b(E[0]),"x");b(E).each(function(a){f.getSliderOffset(this,"x")<z&&(z=f.getSliderOffset(this,"x"),g=a)});var J=n[d]+U;f.setSliderOffset(b(E)[g],J);n[d]=-1*p[1]+k;t[d]=n[d]+U-q;p.splice(0,1);p.splice(p.length,0,-1*J+k);v++}for(;0<-1*p[0]-U+k&&a.snapSlideCenter&&L;){var O=0,P=f.getSliderOffset(b(E[0]),"x");b(E).each(function(a){f.getSliderOffset(this,"x")>P&&(P=f.getSliderOffset(this,"x"),O=a)});J=n[d]-M[O];f.setSliderOffset(b(E)[O], J);p.splice(0,0,-1*J+k);p.splice(p.length-1,1);n[d]=-1*p[0]+k;t[d]=n[d]+U-q;y[d]--;B[d]++}for(;c<=-1*t[d];)g=0,z=f.getSliderOffset(b(E[0]),"x"),b(E).each(function(a){f.getSliderOffset(this,"x")<z&&(z=f.getSliderOffset(this,"x"),g=a)}),J=n[d]+U,f.setSliderOffset(b(E)[g],J),n[d]=-1*p[1]+k,t[d]=n[d]+U-q,p.splice(0,1),p.splice(p.length,0,-1*J+k),y[d]++,B[d]--}f.setSliderOffset(F,p[B[d]]);f.updateBackfaceVisibility(E,d,H,a);a.desktopClickDrag||b(F).css({cursor:"default"});a.scrollbar&&(b("."+K).css({margin:a.scrollbarMargin, overflow:"hidden",display:"none"}),b("."+K+" ."+w).css({border:a.scrollbarBorder}),h=parseInt(b("."+K).css("marginLeft"))+parseInt(b("."+K).css("marginRight")),C=parseInt(b("."+K+" ."+w).css("borderLeftWidth"),10)+parseInt(b("."+K+" ."+w).css("borderRightWidth"),10),r=""!=a.scrollbarContainer?b(a.scrollbarContainer).width():q,u=q/U*(r-h),a.scrollbarHide||(ca=a.scrollbarOpacity),b("."+K).css({position:"absolute",left:0,width:r-h+"px",margin:a.scrollbarMargin}),"top"==a.scrollbarLocation?b("."+K).css("top", "0"):b("."+K).css("bottom","0"),b("."+K+" ."+w).css({borderRadius:a.scrollbarBorderRadius,background:a.scrollbarBackground,height:a.scrollbarHeight,width:u-C+"px",minWidth:a.scrollbarHeight,border:a.scrollbarBorder,webkitPerspective:1E3,webkitBackfaceVisibility:"hidden",position:"relative",opacity:ca,filter:"alpha(opacity:"+100*ca+")",boxShadow:a.scrollbarShadow}),f.setSliderOffset(b("."+K+" ."+w),Math.floor((-1*p[B[d]]-n[d]+k)/(t[d]-n[d]+k)*(r-h-u))),b("."+K).css({display:"block"}),x=b("."+K+" ."+ w),A=b("."+K));a.scrollbarDrag&&!V&&b("."+K+" ."+w).css({cursor:ea});a.infiniteSlider&&(S=(t[d]+q)/3);""!=a.navSlideSelector&&b(a.navSlideSelector).each(function(c){b(this).css({cursor:"pointer"});b(this).unbind(Q).bind(Q,function(e){"touchstart"==e.type?b(this).unbind("click.iosSliderEvent"):b(this).unbind("touchstart.iosSliderEvent");Q=e.type+".iosSliderEvent";f.changeSlide(c,F,E,I,w,u,q,r,h,C,G,p,M,d,S,H,k,a)})});""!=a.navPrevSelector&&(b(a.navPrevSelector).css({cursor:"pointer"}),b(a.navPrevSelector).unbind(Q).bind(Q, function(c){"touchstart"==c.type?b(this).unbind("click.iosSliderEvent"):b(this).unbind("touchstart.iosSliderEvent");Q=c.type+".iosSliderEvent";c=(B[d]+y[d]+H)%H;(0<c||a.infiniteSlider)&&f.changeSlide(c-1,F,E,I,w,u,q,r,h,C,G,p,M,d,S,H,k,a)}));""!=a.navNextSelector&&(b(a.navNextSelector).css({cursor:"pointer"}),b(a.navNextSelector).unbind(Q).bind(Q,function(c){"touchstart"==c.type?b(this).unbind("click.iosSliderEvent"):b(this).unbind("touchstart.iosSliderEvent");Q=c.type+".iosSliderEvent";c=(B[d]+y[d]+ H)%H;(c<p.length-1||a.infiniteSlider)&&f.changeSlide(c+1,F,E,I,w,u,q,r,h,C,G,p,M,d,S,H,k,a)}));a.autoSlide&&!V&&""!=a.autoSlideToggleSelector&&(b(a.autoSlideToggleSelector).css({cursor:"pointer"}),b(a.autoSlideToggleSelector).unbind(Q).bind(Q,function(c){"touchstart"==c.type?b(this).unbind("click.iosSliderEvent"):b(this).unbind("touchstart.iosSliderEvent");Q=c.type+".iosSliderEvent";ka?(f.autoSlide(F,E,I,w,u,q,r,h,C,G,p,M,d,S,H,k,a),ka=!1,b(a.autoSlideToggleSelector).removeClass("on")):(f.autoSlidePause(d), ka=!0,b(a.autoSlideToggleSelector).addClass("on"))}));f.autoSlide(F,E,I,w,u,q,r,h,C,G,p,M,d,S,H,k,a);b(l).bind("mouseleave.iosSliderEvent",function(){if(ka)return!0;f.autoSlide(F,E,I,w,u,q,r,h,C,G,p,M,d,S,H,k,a)});b(l).bind("touchend.iosSliderEvent",function(){if(ka)return!0;f.autoSlide(F,E,I,w,u,q,r,h,C,G,p,M,d,S,H,k,a)});a.autoSlideHoverPause&&b(l).bind("mouseenter.iosSliderEvent",function(){f.autoSlidePause(d)});b(l).data("iosslider",{obj:Aa,settings:a,scrollerNode:F,slideNodes:E,numberOfSlides:H, centeredSlideOffset:k,sliderNumber:d,originalOffsets:G,childrenOffsets:p,sliderMax:t[d],scrollbarClass:w,scrollbarWidth:u,scrollbarStageWidth:r,stageWidth:q,scrollMargin:h,scrollBorder:C,infiniteSliderOffset:y[d],infiniteSliderWidth:S,slideNodeOuterWidths:M,shortContent:V});L=!1;return!0}ma++;var d=ma,I=[];N[d]=b.extend({},a);n[d]=0;t[d]=0;var O=[0,0],J=[0,0],K="scrollbarBlock"+ma,w="scrollbar"+ma,x,A,r,u,m,D,k=0,l=b(this),q,s,h,C,z,L=!0;c=-1;var p,G=[],ca=0,P=0,ia=0,F=b(this).children(":first-child"), E,ha,M,H=b(F).children().not("script").length,W=!1,ja=0,wa=!1,qa=void 0,S;y[d]=0;var V=!1,ka=!1;ua[d]=!1;var Z,ra=!1,la=!1,Q="touchstart.iosSliderEvent click.iosSliderEvent",U,va,za,pa;fa[d]=!1;R[d]=[];a.scrollbarDrag&&(a.scrollbar=!0,a.scrollbarHide=!1);var Aa=b(this);if(void 0!=Aa.data("iosslider"))return!0;14.2<=parseInt(b().jquery.split(".").join(""),10)?b(this).delegate("img","dragstart.iosSliderEvent",function(a){a.preventDefault()}):b(this).find("img").bind("dragstart.iosSliderEvent",function(a){a.preventDefault()}); a.infiniteSlider&&(a.scrollbar=!1);a.infiniteSlider&&1==H&&(a.infiniteSlider=!1);a.scrollbar&&(""!=a.scrollbarContainer?b(a.scrollbarContainer).append("<div class = '"+K+"'><div class = '"+w+"'></div></div>"):b(F).parent().append("<div class = '"+K+"'><div class = '"+w+"'></div></div>"));if(!e())return!0;b(this).find("a").bind("mousedown",f.preventDrag);b(this).find("[onclick]").bind("click",f.preventDrag).each(function(){b(this).data("onclick",this.onclick)});c=f.calcActiveOffset(a,f.getSliderOffset(b(F), "x"),p,q,y[d],H,void 0,d);c=(c+y[d]+H)%H;c=new f.args("load",a,F,b(F).children(":eq("+c+")"),c,c);b(l).data("args",c);if(""!=a.onSliderLoaded)a.onSliderLoaded(c);a.scrollbarPaging&&a.scrollbar&&!V&&(b(A).css("cursor","pointer"),b(A).bind("click.iosSliderEvent",function(a){this==a.target&&(a.pageX>b(x).offset().left?$.nextPage(l):$.prevPage(l))}));if(N[d].responsiveSlides||N[d].responsiveSlideContainer)c=Da?"orientationchange":"resize",b(window).bind(c+".iosSliderEvent-"+d,function(){if(!e())return!0; var c=b(l).data("args");if(""!=a.onSliderResize)a.onSliderResize(c)});!a.keyboardControls&&!a.tabToAdvance||V||b(document).bind("keydown.iosSliderEvent",function(b){da||Y||(b=b.originalEvent);if("INPUT"==b.target.nodeName||fa[d])return!0;if(37==b.keyCode&&a.keyboardControls)b.preventDefault(),b=(B[d]+y[d]+H)%H,(0<b||a.infiniteSlider)&&f.changeSlide(b-1,F,E,I,w,u,q,r,h,C,G,p,M,d,S,H,k,a);else if(39==b.keyCode&&a.keyboardControls||9==b.keyCode&&a.tabToAdvance)b.preventDefault(),b=(B[d]+y[d]+H)%H,(b< p.length-1||a.infiniteSlider)&&f.changeSlide(b+1,F,E,I,w,u,q,r,h,C,G,p,M,d,S,H,k,a)});if(Ca||a.desktopClickDrag){var ba=!1,xa=!1;c=b(F);var sa=b(F),ya=!1;a.scrollbarDrag&&(c=c.add(x),sa=sa.add(A));b(c).bind("mousedown.iosSliderEvent touchstart.iosSliderEvent",function(c){b(window).one("scroll.iosSliderEvent",function(a){ba=!1});if(ba)return!0;ba=!0;xa=!1;"touchstart"==c.type?b(sa).unbind("mousedown.iosSliderEvent"):b(sa).unbind("touchstart.iosSliderEvent");if(fa[d]||V||(ya=f.isUnselectable(c.target, a)))return W=ba=!1,!0;Z=b(this)[0]===b(x)[0]?x:F;da||Y||(c=c.originalEvent);f.autoSlidePause(d);pa.unbind(".disableClick");if("touchstart"==c.type)eventX=c.touches[0].pageX,eventY=c.touches[0].pageY;else{if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges();else if(document.selection)if(Y)try{document.selection.empty()}catch(e){}else document.selection.empty();eventX=c.pageX;eventY=c.pageY;wa= !0;qa=F;b(this).css({cursor:ta})}O=[0,0];J=[0,0];X=0;W=!1;for(c=0;c<I.length;c++)clearTimeout(I[c]);c=f.getSliderOffset(F,"x");c>-1*n[d]+k+U?(c=-1*n[d]+k+U,f.setSliderOffset(b("."+w),c),b("."+w).css({width:u-C+"px"})):c<-1*t[d]&&(c=-1*t[d],f.setSliderOffset(b("."+w),r-h-u),b("."+w).css({width:u-C+"px"}));c=b(this)[0]===b(x)[0]?n[d]:0;P=-1*(f.getSliderOffset(this,"x")-eventX-c);f.getSliderOffset(this,"y");O[1]=eventX;J[1]=eventY;la=!1});b(document).bind("touchmove.iosSliderEvent mousemove.iosSliderEvent", function(c){da||Y||(c=c.originalEvent);if(fa[d]||V||ya||!ba)return!0;var e=0;if("touchmove"==c.type)eventX=c.touches[0].pageX,eventY=c.touches[0].pageY;else{if(window.getSelection)window.getSelection().empty||window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges();else if(document.selection)if(Y)try{document.selection.empty()}catch(v){}else document.selection.empty();eventX=c.pageX;eventY=c.pageY;if(!wa||!na&&("undefined"!=typeof c.webkitMovementX||"undefined"!=typeof c.webkitMovementY)&& 0===c.webkitMovementY&&0===c.webkitMovementX)return!0}O[0]=O[1];O[1]=eventX;X=(O[1]-O[0])/2;J[0]=J[1];J[1]=eventY;ga=(J[1]-J[0])/2;if(!W){var g=(B[d]+y[d]+H)%H,g=new f.args("start",a,F,b(F).children(":eq("+g+")"),g,void 0);b(l).data("args",g);if(""!=a.onSlideStart)a.onSlideStart(g)}(ga>a.verticalSlideLockThreshold||ga<-1*a.verticalSlideLockThreshold)&&"touchmove"==c.type&&!W&&(ra=!0);(X>a.horizontalSlideLockThreshold||X<-1*a.horizontalSlideLockThreshold)&&"touchmove"==c.type&&c.preventDefault();if(X> a.slideStartVelocityThreshold||X<-1*a.slideStartVelocityThreshold)W=!0;if(W&&!ra){var g=f.getSliderOffset(F,"x"),m=b(Z)[0]===b(x)[0]?n[d]:k,s=b(Z)[0]===b(x)[0]?(n[d]-t[d]-k)/(r-h-u):1,A=b(Z)[0]===b(x)[0]?a.scrollbarElasticPullResistance:a.elasticPullResistance,D=a.snapSlideCenter&&b(Z)[0]===b(x)[0]?0:k,K=a.snapSlideCenter&&b(Z)[0]===b(x)[0]?k:0;"touchmove"==c.type&&(ia!=c.touches.length&&(P=-1*g+eventX),ia=c.touches.length);if(a.infiniteSlider){if(g<=-1*t[d]){var I=b(F).width();if(g<=-1*oa[d]){var L= -1*G[0];b(E).each(function(a){f.setSliderOffset(b(E)[a],L+k);a<p.length&&(p[a]=-1*L);L+=M[a]});P-=-1*p[0];n[d]=-1*p[0]+k;t[d]=n[d]+I-q;y[d]=0}else{var N=0,S=f.getSliderOffset(b(E[0]),"x");b(E).each(function(a){f.getSliderOffset(this,"x")<S&&(S=f.getSliderOffset(this,"x"),N=a)});A=n[d]+I;f.setSliderOffset(b(E)[N],A);n[d]=-1*p[1]+k;t[d]=n[d]+I-q;p.splice(0,1);p.splice(p.length,0,-1*A+k);y[d]++}}if(g>=-1*n[d]||0<=g)if(I=b(F).width(),0<=g)for(L=-1*G[0],b(E).each(function(a){f.setSliderOffset(b(E)[a], L+k);a<p.length&&(p[a]=-1*L);L+=M[a]}),P+=-1*p[0],n[d]=-1*p[0]+k,t[d]=n[d]+I-q,y[d]=H;0<-1*p[0]-I+k;){var Q=0,R=f.getSliderOffset(b(E[0]),"x");b(E).each(function(a){f.getSliderOffset(this,"x")>R&&(R=f.getSliderOffset(this,"x"),Q=a)});A=n[d]-M[Q];f.setSliderOffset(b(E)[Q],A);p.splice(0,0,-1*A+k);p.splice(p.length-1,1);n[d]=-1*p[0]+k;t[d]=n[d]+I-q;y[d]--;B[d]++}else Q=0,R=f.getSliderOffset(b(E[0]),"x"),b(E).each(function(a){f.getSliderOffset(this,"x")>R&&(R=f.getSliderOffset(this,"x"),Q=a)}),A=n[d]- M[Q],f.setSliderOffset(b(E)[Q],A),p.splice(0,0,-1*A+k),p.splice(p.length-1,1),n[d]=-1*p[0]+k,t[d]=n[d]+I-q,y[d]--}else I=b(F).width(),g>-1*n[d]+k&&(e=(n[d]+-1*(P-m-eventX+D)*s-m)*A*-1/s),g<-1*t[d]&&(e=(t[d]+K+-1*(P-m-eventX)*s-m)*A*-1/s);f.setSliderOffset(F,-1*(P-m-eventX-e)*s-m+K);a.scrollbar&&(f.showScrollbar(a,w),T=Math.floor((P-eventX-e-n[d]+D)/(t[d]-n[d]+k)*(r-h-u)*s),g=u,0>=T?(g=u-C- -1*T,f.setSliderOffset(b("."+w),0),b("."+w).css({width:g+"px"})):T>=r-h-C-u?(g=r-h-C-T,f.setSliderOffset(b("."+ w),T),b("."+w).css({width:g+"px"})):f.setSliderOffset(b("."+w),T));"touchmove"==c.type&&(z=c.touches[0].pageX);c=!1;e=f.calcActiveOffset(a,-1*(P-eventX-e),p,q,y[d],H,void 0,d);g=(e+y[d]+H)%H;a.infiniteSlider?g!=aa[d]&&(c=!0):e!=B[d]&&(c=!0);if(c){B[d]=e;aa[d]=g;la=!0;g=new f.args("change",a,F,b(F).children(":eq("+g+")"),g,g);b(l).data("args",g);if(""!=a.onSlideChange)a.onSlideChange(g);f.updateBackfaceVisibility(E,d,H,a)}}});var Ba=b(window);if(Y||da)Ba=b(document);b(c).bind("touchcancel.iosSliderEvent touchend.iosSliderEvent", function(b){b=b.originalEvent;if(xa)return!1;xa=!0;if(fa[d]||V||ya)return!0;if(0!=b.touches.length)for(var c=0;c<b.touches.length;c++)b.touches[c].pageX==z&&f.slowScrollHorizontal(F,E,I,w,X,ga,u,q,r,h,C,G,p,M,d,S,H,Z,la,k,a);else f.slowScrollHorizontal(F,E,I,w,X,ga,u,q,r,h,C,G,p,M,d,S,H,Z,la,k,a);ba=ra=!1;return!0});b(Ba).bind("mouseup.iosSliderEvent-"+d,function(c){W?va.unbind("click.disableClick").bind("click.disableClick",f.preventClick):va.unbind("click.disableClick").bind("click.disableClick", f.enableClick);za.each(function(){this.onclick=function(a){if(W)return!1;b(this).data("onclick")&&b(this).data("onclick").call(this,a||window.event)};this.onclick=b(this).data("onclick")});1.8<=parseFloat(b().jquery)?pa.each(function(){var a=b._data(this,"events");if(void 0!=a&&void 0!=a.click&&"iosSliderEvent"!=a.click[0].namespace){if(!W)return!1;b(this).one("click.disableClick",f.preventClick);var a=b._data(this,"events").click,c=a.pop();a.splice(0,0,c)}}):1.6<=parseFloat(b().jquery)&&pa.each(function(){var a= b(this).data("events");if(void 0!=a&&void 0!=a.click&&"iosSliderEvent"!=a.click[0].namespace){if(!W)return!1;b(this).one("click.disableClick",f.preventClick);var a=b(this).data("events").click,c=a.pop();a.splice(0,0,c)}});if(!ua[d]){if(V)return!0;a.desktopClickDrag&&b(F).css({cursor:ea});a.scrollbarDrag&&b(x).css({cursor:ea});wa=!1;if(void 0==qa)return!0;f.slowScrollHorizontal(qa,E,I,w,X,ga,u,q,r,h,C,G,p,M,d,S,H,Z,la,k,a);qa=void 0}ba=ra=!1})}})},destroy:function(e,c){void 0==c&&(c=this);return b(c).each(function(){var a= b(this),c=a.data("iosslider");if(void 0==c)return!1;void 0==e&&(e=!0);f.autoSlidePause(c.sliderNumber);ua[c.sliderNumber]=!0;b(window).unbind(".iosSliderEvent-"+c.sliderNumber);b(document).unbind(".iosSliderEvent-"+c.sliderNumber);b(document).unbind("keydown.iosSliderEvent");b(this).unbind(".iosSliderEvent");b(this).children(":first-child").unbind(".iosSliderEvent");b(this).children(":first-child").children().unbind(".iosSliderEvent");b(c.settings.scrollbarBlockNode).unbind(".iosSliderEvent");e&& (b(this).attr("style",""),b(this).children(":first-child").attr("style",""),b(this).children(":first-child").children().attr("style",""),b(c.settings.navSlideSelector).attr("style",""),b(c.settings.navPrevSelector).attr("style",""),b(c.settings.navNextSelector).attr("style",""),b(c.settings.autoSlideToggleSelector).attr("style",""),b(c.settings.unselectableSelector).attr("style",""));c.settings.scrollbar&&b(".scrollbarBlock"+c.sliderNumber).remove();for(var c=R[c.sliderNumber],g=0;g<c.length;g++)clearTimeout(c[g]); a.removeData("iosslider");a.removeData("args")})},update:function(e){void 0==e&&(e=this);return b(e).each(function(){var c=b(this),a=c.data("iosslider");if(void 0==a)return!1;a.settings.startAtSlide=c.data("args").currentSlideNumber;$.destroy(!1,this);1!=a.numberOfSlides&&a.settings.infiniteSlider&&(a.settings.startAtSlide=(B[a.sliderNumber]+1+y[a.sliderNumber]+a.numberOfSlides)%a.numberOfSlides);$.init(a.settings,this);c=new f.args("update",a.settings,a.scrollerNode,b(a.scrollerNode).children(":eq("+ (a.settings.startAtSlide-1)+")"),a.settings.startAtSlide-1,a.settings.startAtSlide-1);b(a.stageNode).data("args",c);if(""!=a.settings.onSliderUpdate)a.settings.onSliderUpdate(c)})},addSlide:function(e,c){return this.each(function(){var a=b(this),f=a.data("iosslider");if(void 0==f)return!1;0==b(f.scrollerNode).children().length?(b(f.scrollerNode).append(e),a.data("args").currentSlideNumber=1):f.settings.infiniteSlider?(1==c?b(f.scrollerNode).children(":eq(0)").before(e):b(f.scrollerNode).children(":eq("+ (c-2)+")").after(e),-1>y[f.sliderNumber]&&B[f.sliderNumber]--,a.data("args").currentSlideNumber>=c&&B[f.sliderNumber]++):(c<=f.numberOfSlides?b(f.scrollerNode).children(":eq("+(c-1)+")").before(e):b(f.scrollerNode).children(":eq("+(c-2)+")").after(e),a.data("args").currentSlideNumber>=c&&a.data("args").currentSlideNumber++);a.data("iosslider").numberOfSlides++;$.update(this)})},removeSlide:function(e){return this.each(function(){var c=b(this),a=c.data("iosslider");if(void 0==a)return!1;b(a.scrollerNode).children(":eq("+ (e-1)+")").remove();B[a.sliderNumber]>e-1&&B[a.sliderNumber]--;c.data("iosslider").numberOfSlides--;$.update(this)})},goToSlide:function(e,c,a){void 0==a&&(a=this);return b(a).each(function(){var a=b(this).data("iosslider");if(void 0==a||a.shortContent)return!1;e=e>a.childrenOffsets.length?a.childrenOffsets.length-1:e-1;void 0!=c&&(a.settings.autoSlideTransTimer=c);f.changeSlide(e,b(a.scrollerNode),b(a.slideNodes),R[a.sliderNumber],a.scrollbarClass,a.scrollbarWidth,a.stageWidth,a.scrollbarStageWidth, a.scrollMargin,a.scrollBorder,a.originalOffsets,a.childrenOffsets,a.slideNodeOuterWidths,a.sliderNumber,a.infiniteSliderWidth,a.numberOfSlides,a.centeredSlideOffset,a.settings)})},prevSlide:function(e){return this.each(function(){var c=b(this).data("iosslider");if(void 0==c||c.shortContent)return!1;var a=(B[c.sliderNumber]+y[c.sliderNumber]+c.numberOfSlides)%c.numberOfSlides;void 0!=e&&(c.settings.autoSlideTransTimer=e);(0<a||c.settings.infiniteSlider)&&f.changeSlide(a-1,b(c.scrollerNode),b(c.slideNodes), R[c.sliderNumber],c.scrollbarClass,c.scrollbarWidth,c.stageWidth,c.scrollbarStageWidth,c.scrollMargin,c.scrollBorder,c.originalOffsets,c.childrenOffsets,c.slideNodeOuterWidths,c.sliderNumber,c.infiniteSliderWidth,c.numberOfSlides,c.centeredSlideOffset,c.settings);B[c.sliderNumber]=a})},nextSlide:function(e){return this.each(function(){var c=b(this).data("iosslider");if(void 0==c||c.shortContent)return!1;var a=(B[c.sliderNumber]+y[c.sliderNumber]+c.numberOfSlides)%c.numberOfSlides;void 0!=e&&(c.settings.autoSlideTransTimer= e);(a<c.childrenOffsets.length-1||c.settings.infiniteSlider)&&f.changeSlide(a+1,b(c.scrollerNode),b(c.slideNodes),R[c.sliderNumber],c.scrollbarClass,c.scrollbarWidth,c.stageWidth,c.scrollbarStageWidth,c.scrollMargin,c.scrollBorder,c.originalOffsets,c.childrenOffsets,c.slideNodeOuterWidths,c.sliderNumber,c.infiniteSliderWidth,c.numberOfSlides,c.centeredSlideOffset,c.settings);B[c.sliderNumber]=a})},prevPage:function(e,c){void 0==c&&(c=this);return b(c).each(function(){var a=b(this).data("iosslider"); if(void 0==a)return!1;var c=f.getSliderOffset(a.scrollerNode,"x")+a.stageWidth;void 0!=e&&(a.settings.autoSlideTransTimer=e);f.changeOffset(c,b(a.scrollerNode),b(a.slideNodes),R[a.sliderNumber],a.scrollbarClass,a.scrollbarWidth,a.stageWidth,a.scrollbarStageWidth,a.scrollMargin,a.scrollBorder,a.originalOffsets,a.childrenOffsets,a.slideNodeOuterWidths,a.sliderNumber,a.infiniteSliderWidth,a.numberOfSlides,a.centeredSlideOffset,a.settings)})},nextPage:function(e,c){void 0==c&&(c=this);return b(c).each(function(){var a= b(this).data("iosslider");if(void 0==a)return!1;var c=f.getSliderOffset(a.scrollerNode,"x")-a.stageWidth;void 0!=e&&(a.settings.autoSlideTransTimer=e);f.changeOffset(c,b(a.scrollerNode),b(a.slideNodes),R[a.sliderNumber],a.scrollbarClass,a.scrollbarWidth,a.stageWidth,a.scrollbarStageWidth,a.scrollMargin,a.scrollBorder,a.originalOffsets,a.childrenOffsets,a.slideNodeOuterWidths,a.sliderNumber,a.infiniteSliderWidth,a.numberOfSlides,a.centeredSlideOffset,a.settings)})},lock:function(){return this.each(function(){var e= b(this).data("iosslider");if(void 0==e||e.shortContent)return!1;b(e.scrollerNode).css({cursor:"default"});fa[e.sliderNumber]=!0})},unlock:function(){return this.each(function(){var e=b(this).data("iosslider");if(void 0==e||e.shortContent)return!1;b(e.scrollerNode).css({cursor:ea});fa[e.sliderNumber]=!1})},getData:function(){return this.each(function(){var e=b(this).data("iosslider");return void 0==e||e.shortContent?!1:e})},autoSlidePause:function(){return this.each(function(){var e=b(this).data("iosslider"); if(void 0==e||e.shortContent)return!1;N[e.sliderNumber].autoSlide=!1;f.autoSlidePause(e.sliderNumber);return e})},autoSlidePlay:function(){return this.each(function(){var e=b(this).data("iosslider");if(void 0==e||e.shortContent)return!1;N[e.sliderNumber].autoSlide=!0;f.autoSlide(b(e.scrollerNode),b(e.slideNodes),R[e.sliderNumber],e.scrollbarClass,e.scrollbarWidth,e.stageWidth,e.scrollbarStageWidth,e.scrollMargin,e.scrollBorder,e.originalOffsets,e.childrenOffsets,e.slideNodeOuterWidths,e.sliderNumber, e.infiniteSliderWidth,e.numberOfSlides,e.centeredSlideOffset,e.settings);return e})}};b.fn.iosSlider=function(e){if($[e])return $[e].apply(this,Array.prototype.slice.call(arguments,1));if("object"!==typeof e&&e)b.error("invalid method call!");else return $.init.apply(this,arguments)}})(jQuery);

(function ($) {

    'use strict';

    var dw, dh, rw, rh, lx, ly;

    var defaults = {

        // The text to display within the notice box while loading the zoom image.
        loadingNotice: 'Loading image',

        // The text to display within the notice box if an error occurs loading the zoom image.
        errorNotice: 'The image could not be loaded',

        // The time (in milliseconds) to display the error notice.
        errorDuration: 2500,

        // Prevent clicks on the zoom image link.
        preventClicks: true,

        // Callback function to execute when the flyout is displayed.
        onShow: undefined,

        // Callback function to execute when the flyout is removed.
        onHide: undefined

    };

    /**
     * EasyZoom
     * @constructor
     * @param {Object} target
     * @param {Object} options
     */
    function EasyZoom(target, options) {
        this.$target = $(target);
        this.opts = $.extend({}, defaults, options);

        if (this.isOpen === undefined) {
            this._init();
        }

        return this;
    }

    /**
     * Init
     * @private
     */
    EasyZoom.prototype._init = function() {
        var self = this;

        this.$link   = this.$target.find('a');
        this.$image  = this.$target.find('img');

        this.$flyout = $('<div class="easyzoom-flyout" />');
        this.$notice = $('<div class="easyzoom-notice" />');

        this.$target
            .on('mouseenter.easyzoom touchstart.easyzoom', function(e) {
                self.isMouseOver = true;

                if (!e.originalEvent.touches || e.originalEvent.touches.length === 1) {
                    e.preventDefault();
                    self.show(e, true);
                }
            })
            .on('mousemove.easyzoom touchmove.easyzoom', function(e) {
                if (self.isOpen) {
                    e.preventDefault();
                    self._move(e);
                }
            })
            .on('mouseleave.easyzoom touchend.easyzoom', function() {
                self.isMouseOver = false;

                if (self.isOpen) {
                    self.hide();
                }
            });

        if (this.opts.preventClicks) {
            this.$target.on('click.easyzoom', 'a', function(e) {
                e.preventDefault();
            });
        }
    };

    /**
     * Show
     * @param {MouseEvent|TouchEvent} e
     * @param {Boolean} testMouseOver
     */
    EasyZoom.prototype.show = function(e, testMouseOver) {
        var w1, h1, w2, h2;
        var self = this;

        if (! this.isReady) {
            this._load(this.$link.attr('href'), function() {
                if (self.isMouseOver || !testMouseOver) {
                    self.show(e);
                }
            });

            return;
        }

        this.$target.append(this.$flyout);

        w1 = this.$target.width();
        h1 = this.$target.height();

        w2 = this.$flyout.width();
        h2 = this.$flyout.height();

        dw = this.$zoom.width() - w2;
        dh = this.$zoom.height() - h2;

        rw = dw / w1;
        rh = dh / h1;

        this.isOpen = true;

        if (this.opts.onShow) {
            this.opts.onShow.call(this);
        }

        if (e) {
            this._move(e);
        }
    };

    /**
     * Load
     * @private
     * @param {String} href
     * @param {Function} callback
     */
    EasyZoom.prototype._load = function(href, callback) {
        var zoom = new Image();

        this.$target.addClass('is-loading').append(this.$notice.text(this.opts.loadingNotice));

        this.$zoom = $(zoom);

        zoom.onerror = $.proxy(function() {
            var self = this;

            this.$notice.text(this.opts.errorNotice);
            this.$target.removeClass('is-loading').addClass('is-error');

            this.detachNotice = setTimeout(function() {
                self.$notice.detach();
                self.detachNotice = null;
            }, this.opts.errorDuration);
        }, this);

        zoom.onload = $.proxy(function() {

            // IE may fire a load event even on error so check the image has dimensions
            if (!zoom.width) {
                return;
            }

            this.isReady = true;

            this.$notice.detach();
            this.$flyout.html(this.$zoom);
            this.$target.removeClass('is-loading').addClass('is-ready');

            callback();
        }, this);

        zoom.style.position = 'absolute';
        zoom.src = href;
    };

    /**
     * Move
     * @private
     * @param {Event} e
     */
    EasyZoom.prototype._move = function(e) {

        if (e.type.indexOf('touch') === 0) {
            var touchlist = e.touches || e.originalEvent.touches;
            lx = touchlist[0].pageX;
            ly = touchlist[0].pageY;
        }
        else {
            lx = e.pageX || lx;
            ly = e.pageY || ly;
        }

        var offset  = this.$target.offset();
        var pt = ly - offset.top;
        var pl = lx - offset.left;
        var xt = Math.ceil(pt * rh);
        var xl = Math.ceil(pl * rw);

        // Close if outside
        if (xl < 0 || xt < 0 || xl > dw || xt > dh) {
            this.hide();
        }
        else {
            this.$zoom.css({
                top:  '' + (xt * -1) + 'px',
                left: '' + (xl * -1) + 'px'
            });
        }

    };

    /**
     * Hide
     */
    EasyZoom.prototype.hide = function() {
        if (this.isOpen) {
            this.$flyout.detach();
            this.isOpen = false;

            if (this.opts.onHide) {
                this.opts.onHide.call(this);
            }
        }
    };

    /**
     * Swap
     * @param {String} standardSrc
     * @param {String} zoomHref
     * @param {String|Array} srcsetStringOrArray (Optional)
     */
    EasyZoom.prototype.swap = function(standardSrc, zoomHref, srcsetStringOrArray) {
        this.hide();
        this.isReady = false;

        if (this.detachNotice) {
            clearTimeout(this.detachNotice);
        }

        if (this.$notice.parent().length) {
            this.$notice.detach();
        }

        if ($.isArray(srcsetStringOrArray)) {
            srcsetStringOrArray = srcsetStringOrArray.join();
        }

        this.$target.removeClass('is-loading is-ready is-error');
        this.$image.attr({
            src: standardSrc,
            srcset: srcsetStringOrArray
        });
        this.$link.attr('href', zoomHref);
    };

    /**
     * Teardown
     */
    EasyZoom.prototype.teardown = function() {
        this.hide();

        this.$target.removeClass('is-loading is-ready is-error').off('.easyzoom');

        if (this.detachNotice) {
            clearTimeout(this.detachNotice);
        }

        delete this.$link;
        delete this.$zoom;
        delete this.$image;
        delete this.$notice;
        delete this.$flyout;

        delete this.isOpen;
        delete this.isReady;
    };

    // jQuery plugin wrapper
    $.fn.easyZoom = function(options) {
        return this.each(function() {
            var api = $.data(this, 'easyZoom');

            if (!api) {
                $.data(this, 'easyZoom', new EasyZoom(this, options));
            }
            else if (api.isOpen === undefined) {
                api._init();
            }
        });
    };

    // AMD and CommonJS module compatibility
    if (typeof define === 'function' && define.amd){
        define(function() {
            return EasyZoom;
        });
    }
    else if (typeof module !== 'undefined' && module.exports) {
        module.exports = EasyZoom;
    }

})(jQuery);



jQuery(document).ready(function($){
		
		jQuery( document.body ).on( 'updated_cart_totals', function() { 
			if($('.plus').length == 0) 
				$( 'div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)' ).addClass( 'buttons_added' ).append( '<input type="button" value="+" class="plus" />' ).prepend( '<input type="button" value="-" class="minus" />' );
		});

		// Quantity buttons
		if($('.plus').length == 0) {
			$( 'div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)' ).addClass( 'buttons_added' ).append( '<input type="button" value="+" class="plus" />' ).prepend( '<input type="button" value="-" class="minus" />' );

			$( document ).on( 'click', '.plus, .minus', function() {

				// Get values
				var $qty		= $( this ).closest( '.quantity' ).find( '.qty' ),
					currentVal	= parseFloat( $qty.val() ),
					max			= parseFloat( $qty.attr( 'max' ) ),
					min			= parseFloat( $qty.attr( 'min' ) ),
					step		= $qty.attr( 'step' );

				// Format values
				if ( ! currentVal || currentVal === '' || currentVal === 'NaN' ) currentVal = 0;
				if ( max === '' || max === 'NaN' ) max = '';
				if ( min === '' || min === 'NaN' ) min = 0;
				if ( step === 'any' || step === '' || step === undefined || parseFloat( step ) === 'NaN' ) step = 1;

				// Change the value
				if ( $( this ).is( '.plus' ) ) {

					if ( max && ( max == currentVal || currentVal > max ) ) {
						$qty.val( max );
					} else {
						$qty.val( currentVal + parseFloat( step ) );
					}

				} else {

					if ( min && ( min == currentVal || currentVal < min ) ) {
						$qty.val( min );
					} else if ( currentVal > 0 ) {
						$qty.val( currentVal - parseFloat( step ) );
					}

				}

				// Trigger change event
				$qty.trigger( 'change' );

			});
		}


		//init easyZoom	
		if(!$('body').hasClass('mobile')){
			var $easyzoom = $(".easyzoom").easyZoom({
				preventClicks: true,
				loadingNotice: ' ',
				errorNotice: ' '
			});
			
			if($('.easyzoom').length > 0) {
				var easyzoom_api = $easyzoom.data('easyZoom');
				
				$("table.variations").on('change', 'select', function() {
					easyzoom_api.teardown();
					easyzoom_api._init();
				});
			}
		}

		//init isoSlider			
		imagesLoaded($('.product-slider'),function(instance){
			
			$('.iosSlider.product-slider').iosSlider({
		        snapToChildren: true,
		        desktopClickDrag: true,
		        elasticPullResistance: 0.6,
		        snapFrictionCoefficient: 0.8,
		        infiniteSlider: true,
		        navPrevSelector: $('.product-slider .prev_slide'),
   				navNextSelector: $('.product-slider .next_slide'),
		        navSlideSelector: '.product-thumbs .thumb',
		        onSlideChange: iosSliderChange,
		        onSliderLoaded: iosSliderResize,
		        onSliderResize: iosSliderResize
		    });
	

		     $('.iosSlider.product-thumbs').iosSlider({
		          desktopClickDrag: true,
		          snapToChildren: true,
		          navPrevSelector: $('.product-thumbs .prev_slide'),
				  navNextSelector: $('.product-thumbs .next_slide')
		     });

		    $('.iosSlider').css('opacity','1');
		});
		
	     var slideNum = $('.iosSlider.product-thumbs').find('.thumb').length;


	     function iosSliderResize(obj){ 
	        setTimeout(function() {

		        var slideHeight = $(obj.currentSlideObject).find('img').first().outerHeight();

			    $(obj.sliderContainerObject).css('min-height',slideHeight);
				$(obj.currentSlideObject).css('height',slideHeight);
				$(obj.sliderContainerObject).css('height','auto');

	        }, 30);
	     }

	     function iosSliderChange(obj) {
	     	
	         $('.product-thumbs .thumb').removeClass('active');
	         $('.product-thumbs .thumb:eq(' + (obj.currentSlideNumber - 1) + ')').addClass('active');
	        
	         if(slideNum > 4){
	         	$('.product-thumbs').iosSlider('goToSlide', obj.currentSlideNumber);
	         }
	    }

	    if($('.slider').length > 0) { 
	    	
		    $startingImage = ($('.slide div a:first > img').length > 0) ? $('.slide div a:first > img').attr('src') : '';
		    $startingImageLink = ($('.slide div a:first').length > 0) ? $('.slide div a:first').attr('href') : '';
		    $startingImageThumb = ($('.slider > .thumb:first .thumb-inner img').length > 0) ? $('.slider > .thumb:first .thumb-inner img').attr('src') : $startingImage;

		     $('select[name*="attribute_"]').blur(function(){

	        	var $that = $(this);
			    var attr_data = $('.variations_form').data('product_variations');

			    if($that.val().length > 0) {
				    //give woo time to update img
			     	setTimeout(function(){

			     		$(attr_data).each(function(i, el){
					    	if(el.image_src == $('.slide div a:first > img').attr('src')){
					    			
					    		 if(el.image_link){
					    		 	$('.slide div a:first').attr('href',el.image_link);
					    		 	$('.slide div a:first > img').attr('src',el.image_src);
					    		 	$('.slider > .thumb:first .thumb-inner img').attr('src',el.image_src).removeAttr('srcset');

					    		 	$('.product-slider').iosSlider('goToSlide', '1');
					    		  }
					    	}
						});		

			     	},30);
			 	} else {
			 		$('.slide div a:first').attr('href',$startingImageLink);
	    		 	$('.slide div a:first > img').attr('src',$startingImage);
	    		 	$('.slider > .thumb:first .thumb-inner img').attr('src',$startingImageThumb).removeAttr('srcset');
			 	}
				 
			 });
			  
			 
			 ///misc
			 if($('.iosSlider.product-thumbs .slider').find('.thumb').length < 5 ) $('.product-thumbs .slider_controls').remove();
			
		}
});