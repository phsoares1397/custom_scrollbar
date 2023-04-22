let custom_scrollbar = class {
    constructor(elem, settings) {
        this.elem = elem; this.settings = settings;
    }

    get init(){
        var dummy_div = document.createElement("div"); 
        dummy_div.setAttribute("id", "dummy_scrol"); 
        dummy_div.style.overflow = "scroll"; 
        dummy_div.style.position = "absolute"; dummy_div.style.opacity = "0"; 
        dummy_div.style.top = "100%"; document.body.appendChild(dummy_div); 
        this.scrollBarWidth = dummy_div.offsetWidth - dummy_div.clientWidth;
        document.body.removeChild(dummy_div);

        this.custom_scroll_back = document.createElement("div");
        this.custom_scroll_back.className = "custom_scrol_back";

        this.custom_scrol_thumb = document.createElement("div");
        this.custom_scrol_thumb.clas = "custom_scrol_thumb";

        this.elem.appendChild(this.custom_scroll_back);
        this.elem.appendChild(this.custom_scrol_thumb);
    }
};