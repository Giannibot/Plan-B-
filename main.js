
// Function to handle the touchstart event
function handleTouchStart(event) {
    event.preventDefault(); // Add this line if the event handler needs to prevent the default behavior
    // Your touchstart event handling code here
  }
  
  // Function to handle the touchmove event
  function handleTouchMove(event) {
    event.preventDefault(); // Add this line if the event handler needs to prevent the default behavior
    // Your touchmove event handling code here
  }
  
  // Add the event listeners with the 'passive' option set to true
  document.addEventListener('touchstart', handleTouchStart, { passive: true });
  document.addEventListener('touchmove', handleTouchMove, { passive: true });
  

    function updateNavbarBackground() {
        const navbar = document.getElementById("navcol");
        const scrollY = window.scrollY;

        if (scrollY > 0) {
            navbar.classList.add("transparent-bg");
        } else {
            navbar.classList.remove("transparent-bg");
        }
    }

    // Listen for scroll events and update the navbar background
    window.addEventListener("scroll", updateNavbarBackground);


    <script type="text/javascript">
        (function(w, d, s, i) {
            var script = d.createElement(s);
            script.async = true;
            script.src = "//widget.simplybook.it/v2/widget/widget.js";
            script.onload = function() {
                new SimplybookWidget({"widget_type":"button","url":"https:\/\/planbbarber.simplybook.it","theme":"concise","theme_settings":{"timeline_hide_unavailable":"1","hide_past_days":"0","timeline_show_end_time":"0","timeline_modern_display":"as_table","light_font_color":"#000000","sb_secondary_base":"#5c4b5c","sb_base_color":"#dbdbdb","display_item_mode":"block","booking_nav_bg_color":"#ffffff","sb_review_image":"","dark_font_color":"#050405","btn_color_1":"#000000","sb_company_label_color":"#fafafa","hide_img_mode":"0","show_sidebar":"1","sb_busy":"#cc7474","sb_available":"#98e6bb"},"timeline":"modern","datepicker":"top_calendar","is_rtl":false,"app_config":{"clear_session":0,"allow_switch_to_ada":0,"predefined":[]},"button_title":"Book now","button_background_color":"#000000","button_text_color":"#ffffff","button_position":"bottom","button_position_offset":"50%","container_id":"sbw_riqhkj"});
            };
            d.head.appendChild(script);
        })(window, document, 'script', 'sbw_riqhkj');
    </script>




    
