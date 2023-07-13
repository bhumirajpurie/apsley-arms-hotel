import React from "react";
import styles from "./Admin.module.css";

export default function Adminpanel() {
  return (
    <div className={styles.cointainer}>
      <div className={styles.adminproduct}>
        <form action="" method="post" encType="multipart/form-data">
          <h3>add new products</h3>
          <input
            type="text"
            placeholder="enter your product name"
            name="product_name"
            className={styles.box}
          ></input>
          <input
            type="number"
            placeholder="enter your product product"
            name="product_price"
            className={styles.box}
          ></input>
          <input
            type="file"
            accept="image/png,image/jpg,image/jpeg"
            name="product_image"
            className={styles.box}
          ></input>
          <input
            type="submit"
            className={styles.btn}
            name="add_products"
            value="Add product"
          ></input>
        </form>
      </div>

      <div className={styles.productdisplay}>
        <table className={styles.productdisplaytable}>
          <thead>
            <tr>
              <td>Product image</td>
              <td>Product Name</td>
              <td>Product Price</td>
              <td>Description</td>
              <td colSpan="2">Action</td>
            </tr>
          </thead>

          <tr>
            <td>Product image</td>
            <td>Product Name</td>
            <td>Product Price</td>
            <td>Description</td>
            <td>
              <a className={styles.editbtn}>
                <i className={styles.edit}></i> Edit
              </a>
              <a className={styles.delbtn}>
                <i className={styles.delete}></i> Delete
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
