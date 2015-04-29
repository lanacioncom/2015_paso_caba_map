define(['text!templates/credits.html',
    'text!templates/overlay.html',
    'text!templates/popup.html',
    'text!templates/cartocss.css',
    'text!templates/feature_click.sql'], 
    function(credits, overlay, popup, cartocss, feature_click_sql) {
        return {
            credits: credits,
            overlay: overlay,
            popup: popup,
            cartocss: cartocss,
            feature_click_sql: feature_click_sql
        }
});