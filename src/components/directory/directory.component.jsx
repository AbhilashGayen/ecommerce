import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import { createStructuredSelector } from "reselect";

import "./directory.styles.scss";
import { selectDirectorySelector } from "../../redux/directory/directory.selector";
import { connect } from "react-redux";

const Directory = ({sections}) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySelector
})

export default connect(mapStateToProps)(Directory);
