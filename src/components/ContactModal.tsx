import React from 'react';
import { Box, Modal, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sales@smart-betheone.com');
    alert('이메일이 클립보드에 복사되었습니다.');
  };

  const handleCopyCall = () => {
    navigator.clipboard.writeText('010-6567-2785');
    alert('전화번호가 클립보드에 복사되었습니다.');
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="contact-modal"
      aria-describedby="contact-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'stretch',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: {xs: '80%', lg: '30%'}, // 모달 크기를 키웁니다.
          height: "20%",
          bgcolor: 'background.paper',
          borderRadius: '12px',
          boxShadow: 24,
          px: 6,
          py: 3,
          textAlign: 'center',
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: 'gray',
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <Button
            href="tel:010-6567-2785"
            onClick={handleCopyCall}
            startIcon={<PhoneIcon />}
            endIcon={<ContentCopyIcon />}
            sx={{
              mb: 2,
              color: 'black',
              width: '100%', // 버튼의 너비를 100%로 맞춥니다.
              justifyContent: 'space-between', // 아이콘과 텍스트 간의 공간을 동일하게 설정
            }}
          >
            010-6567-2785
          </Button>
          <Button
            onClick={handleCopyEmail}
            startIcon={<EmailIcon />}
            endIcon={<ContentCopyIcon />}
            sx={{
              color: 'black',
              width: '100%', // 버튼의 너비를 100%로 맞춥니다.
              justifyContent: 'space-between', // 아이콘과 텍스트 간의 공간을 동일하게 설정
            }}
          >
            sales@smart-betheone.com
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ContactModal;
