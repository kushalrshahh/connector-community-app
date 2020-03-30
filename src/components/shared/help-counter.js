import React from "react"

//Stylesheets
import "../../styles/components/shared/help-counter.scss"

export default ({counts}) => {
  const CountElements = counts.map((count, index) => {
    let augmentClass = "", classString = "";
    switch (index) {
      case 0:
        augmentClass = "right"
        break;
      case 2:
        augmentClass = "left"
        break;
      default:
        break;
    }
    classString = "col-12 col-sm-4 " + augmentClass;
    
    return (
      <div className={classString} key={index}>
        <figure className="counter">
          <span>{count.count}</span>
          <figcaption>{count.caption}</figcaption>
        </figure>
      </div>
    );
  });

  return(
    <section className="help-counter">
      <div className="content row no-gutters">
        {CountElements}
      </div>
    </section>
  )
}