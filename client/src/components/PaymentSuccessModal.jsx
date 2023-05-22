import { Modal, ModalOverlay, ModalContent, ModalFooter, ModalBody, Button, Alert, AlertDescription, AlertTitle, AlertIcon, Wrap, useToast } from '@chakra-ui/react'

import { Link as ReactLink, useNavigate } from 'react-router-dom'
import { logout } from '../redux/actions/userActions'
import { useDispatch } from 'react-redux'

const PaymentSuccessModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const logoutHandler = () => {
    dispatch(logout());
    toast({ description: 'You have been logged out.', status: 'success', isClosable: true });
    navigate('/products');
  }

  return (
    <div>PaymentSuccessModal</div>
  )
}

export default PaymentSuccessModal