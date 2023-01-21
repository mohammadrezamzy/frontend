$(document).ready(function () {
    let current_pos = 0;
    const poses = [
        "static",
        "relative",
        "absolute",
        "fixed",
        "stick"
    ];
    const pos_btn = $("#position-btn");
    const blur = [
        "right",
        "left",
        "top",
        "bottom"
    ];
    
    function updateCss(opt){
        $(".imgc").css(opt);
    }
    // update position functions
    function updateButtonHtml() {
        pos_btn.html(poses[current_pos]);
    }

    function changeButtonHTML() {
        current_pos = (current_pos + 1) % poses.length;
        updateButtonHtml();
    }

    function updatePosCSS(){
        updateCss({"position": pos_btn.html()});
    }

    function posEventListener(){
        updateButtonHtml();
        pos_btn.click(() => {
            changeButtonHTML();
            updatePosCSS();
        });
    }
    // update BLUR attrs
    function updatePx(id) {
        id = $(`#${id}`);
        const span_px  = id.next();
        const value_px = `${id.val()}px`;
        span_px.html(value_px);
    }

    function addEventListenrFor(id) {
        const id_ = $(`#${id}`);
        const val = `${id_.val()}px`;
        const css = {[id]: val};
        id_.change(() => {
            updateCss(css)
            updatePx(id);
        });
    }

    function addEventListenrBLUR() {
        blur.forEach(id => {
            updatePx(id);
            addEventListenrFor(id);
        });
    }

    function setupPage() {
        posEventListener();
        addEventListenrBLUR();
    }

    setupPage();
});