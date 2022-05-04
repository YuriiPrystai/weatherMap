export const modalStyle: Record<string, string | number> = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transform: 'translate(-50%, -50%)',
  minWidth: 400,
  maxWidth: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,
  textAlign: 'center',
};

export const closeButtonStyle: Record<string, string | number>  = {
  position: 'absolute',
  right: 5,
  top: 5,
}