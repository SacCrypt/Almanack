import React from "react";
import styles from "../css/profile.module.css";

const Profile = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.profileBox}>
          <div className={styles.photoContainer}>
            <div>
              <div className={styles.photo}></div>
            </div>
            <div className={styles.linksContainer}>
              <a className={styles.twitter}></a>
              <a className={styles.linkedin}></a>
              <a className={styles.github}> </a>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.upperinfo}>
              <p className={styles.name}> Krushna Ratnaprakhi </p>
              <p className={styles.occupation}> Venture Partner </p>
              <p className={styles.location}> Pune, Maharashtra, India </p>
            </div>
            <hr></hr>

            <div className={styles.bio}>
              <p> Bio </p>
              <p className={styles.rightbio}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit rerum minima corporis hic numquam quibusdam sunt
                blanditiis delectus aut iure.
              </p>
            </div>
          </div>{" "}
        </div>
        <div className={styles.portfolio}>
          <h2> Portfolio </h2>
          <table>
            <tr>
              <th className={styles.firstHead}> Sr No. </th>
              <th> Company name</th>
              <th className={styles.lastHead}> Company website </th>
            </tr>
            {[...Array(5)].map((x, i) => {
              return (
                <tr>
                  <td>{i}</td>
                  <td> Company {i}</td>
                  <td>
                    <a href="/#">Link {i} </a>
                  </td>
                </tr>
              );
            })}
          </table>
          <button type="submit"> Submit Pitch </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
