import React from "react";

import "./center.css"
function HeaderPic() {
  return (
    <div>
      <div className="center-image">
        <img src="https://theorganicmaids.com/wp-content/uploads/2023/08/maid-with-cloth-and-spray-bottle-in-hand-1.jpg" alt="Center" style={{marginTop:"-120px"}} />
      </div>
      <div className="right-image">
        <img
          src="https://www.zeytin.pk/ext_iframe/envato/lucha/assets/images/slider/shape-img2.svg"
          alt="Right"
        />
      </div>
      <div className="left-image">
        <img
          src="https://www.zeytin.pk/ext_iframe/envato/lucha/assets/images/slider/shape-img2.svg"
          alt="Left"
        />
      </div>
    </div>
  );
}

export default HeaderPic;
