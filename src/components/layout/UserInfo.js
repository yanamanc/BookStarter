import React from "react"

import AuthContext from "~/src/AuthContext"

class UserInfo extends React.Component {
  render () {

    return (
      <AuthContext.Consumer>
      {
        children => (
          <div style={styles.userInfo}>
            <div><img src={children.AvatarUrl} alt="" style={styles.img} /></div>
            <div>{children.FirstName} {children.LastName}</div>
          </div>
        )
      }
    </AuthContext.Consumer>
    )
  }
}

export default UserInfo;

const styles = {
  userInfo: {
    marginLeft: "auto",
    display: "flex",
    alignItems: 'center'
  },
  img: {
    height: "50px",
    borderRadius: "100%",
    margin: "10px 10px"
  },
}