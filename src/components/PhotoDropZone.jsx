import React from "react";
import PropTypes from "prop-types";

import Dropzone from "react-dropzone";

import { withStyles } from "@material-ui/core";

import { addPhoto } from "../services/S3Client";

const styles = theme => ({
  dropzone: {
    display: "flex",
    justifyContent: "center"
  }
});

class PhotoDropZone extends React.Component {
  state = {
    files: []
  };

  onDrop = files => {
    this.setState({ files });
    if (files && files.lenght === 0) {
      return;
    }

    Promise.all(files.map(file => addPhoto(file))).then(data =>
      console.log(`files uploaded: ${JSON.stringify(data, null, 2)}`)
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <section>
        <div className={classes.dropzone}>
          <Dropzone onDrop={this.onDrop}>
            <p>
              Try dropping some files here, or click to select files to upload.
            </p>
          </Dropzone>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {this.state.files.map(f => (
              <li key={f.name}>
                {f.name}
                - {f.size}
                bytes
              </li>
            ))}
          </ul>
        </aside>
      </section>
    );
  }
}

PhotoDropZone.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PhotoDropZone);
