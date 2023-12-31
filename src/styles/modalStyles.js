export const customStyles = {
  overlay: {
    backgroundColor: 'rgba(220, 253, 253, 0.9)',
    zIndex: 1300,
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: '1200',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '100%',
    width: '320px',
    height: '340px',
    border: 'none',
    borderRadius: '16px',
    backgroundColor: '#ffffff',
    color: '#545454',
    textShadow: '1px 4px 6px #b1b4bf, 1px -2px 2px #fff',
  },
};

export const customStylesInsideModal = {
  overlay: {
    backgroundColor: 'rgba(220, 253, 253, 0.9)',
    zIndex: 1301,
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: '1201',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    maxWidth: '100%',
    width: '320px',
    height: '360px',
    border: '16px',
    borderRadius: 'none',
    backgroundColor: '#ebecf0',
    color: '#545454',
    textShadow: '1px 4px 6px #b1b4bf, 1px -2px 2px #fff',
  },
};
