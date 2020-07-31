import React    from 'react';

import ReactDOM from 'react-dom';

class SubscribeBonus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false }
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <>
        <a onClick={() => this.toggle()}>Bonus conditions</a>
        {
          this.state.isOpen && ReactDOM.createPortal(
            <div style={styles.overlay}>
              <div style={styles.body}>
                We'll post you a book with author signature if you'll donate more than 50$ 
                <button onClick={() => this.toggle()}>Close</button>
              </div>
            </div>,
            document.getElementById('modal-root')
          )
        }
      </ >
    )
  }
}

export default SubscribeBonus;

const styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0 , 0, 0.55)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    backgroundColor: '#fff',
    padding: '10px'
  }
}