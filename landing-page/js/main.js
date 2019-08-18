document.getElementById('cta').addEventListener('click', function() {
    TweenMax.to('.panel', 1.5, { scaleY: 1, height: '100vh', ease: Circ.easeOut });
    TweenMax.to('#electron', 1, { opacity: 1, y: 0 , delay: 1, ease: Back.easeOut.config(1.7)});
    TweenMax.to('p', 1, { opacity: 1, y: 10, delay: 1.4 });
    TweenMax.to('.box', 3, { opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, 0.3) });
})