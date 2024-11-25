import React from "react";
import styles from "./VisualizeColorIframe.module.css";
import PageHeader from "../page-header/PageHeader";

const VisualizeColorIframe = () => {
  return (
    <>
      <PageHeader
        title="Virtual Paint Project"
        description="Upload your home photo or explore our paintable images to visualize your project. Bring your ideas to life with our virtual painting tool!"
        breadcrumb="Virtual Paint Project Page"
      />
      <div className={styles.iframeContainer}>
        <div className={styles.iframeWrapper}>
          <iframe
            src="https://www.visualizecolor.com/dulux#/"
            id="example-id"
            height="950"
            width="1200"
            show_part_of_iframe="true"
            show_part_of_iframe_x="1"
            show_part_of_iframe_y="-1"
            show_part_of_iframe_width="1199"
            show_part_of_iframe_height="950"
            title="Visualize Color"
          />
        </div>
      </div>
    </>
  );
};

export default VisualizeColorIframe;
