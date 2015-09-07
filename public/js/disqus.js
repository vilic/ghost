var disqus_shortname = disqus_shortname || '';
var disqus_identifier = '';

(function () {
    var $postFooter = $('footer.post-footer');
    
    if (!$postFooter.length) {
        return false;
    }
    
    var $thread = $(document.createElement('div')).prop('id', 'disqus_thread');
    
    $postFooter
        .first()
        .after($thread);
    
    return true;
})() && (function() {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();