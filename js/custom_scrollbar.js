let custom_scrollbar = class {
    constructor(elem, settings) {
        this.elem = elem; this.settings = settings;
        this.height = elem.offsetHeight;
        this.margin = elem.clientHeight - elem.offsetHeight;
    }

    get init(){
        var elem_init = this.elem;
        var margin = this.margin;
        var div = document.createElement("div");
        div.style.display = "none";
        elem_init.appendChild(div);

        elem_init.classList.add("cs_scroll");
        
        var custom_scroll_back = document.createElement("div");
        custom_scroll_back.className = "custom_scroll_back";
        custom_scroll_back.style.height = this.height + "px";

        var custom_scrol_thumb = document.createElement("div");
        custom_scrol_thumb.className = "custom_scrol_thumb";

        custom_scroll_back.style.display = "none";
        custom_scrol_thumb.style.display = "none";
        elem_init.appendChild(custom_scroll_back);
        elem_init.appendChild(custom_scrol_thumb);

        if(this.settings.auto == true){
            var check = setInterval(auto_size, 100);
            function auto_size(){
                if(elem_init.scrollHeight > (elem_init.clientHeight + margin)){
                    custom_scroll_back.style.display = "block";
                    custom_scrol_thumb.style.display = "block";
                    elem_init.style.paddingRight = custom_scroll_back.clientWidth + "px";
                }else{
                    custom_scroll_back.style.display = "none";
                    custom_scrol_thumb.style.display = "none";
                    elem_init.style.paddingRight = "";
                }
            }
        }else{
            custom_scroll_back.style.display = "block";
            custom_scrol_thumb.style.display = "block";
            elem_init.style.paddingRight = custom_scroll_back.clientWidth + "px";
        }

        elem_init.removeChild(div);
    }
};