var disqus_shortname = disqus_shortname || '';
var disqus_identifier = '';

(function () {
    var postFooter = document.getElementsByClassName('post-footer')[0];
    
    if (!postFooter) {
        return false;
    }
    
    var thread = document.createElement('div');
    thread.id = 'disqus_thread';
    
    postFooter.parentNode.insertBefore(thread, postFooter.nextSibling);
    
    return true;
})() && (function() {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();