import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { contactMessagesApi } from '../services/api';
import { useContactMessages } from './useData';

export function useContactForm() {
  const queryClient = useQueryClient();
  const { data: comments } = useContactMessages();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    try {
      await contactMessagesApi.create({
        sender_name: name,
        sender_email: email,
        message: message,
      });
      setName('');
      setEmail('');
      setMessage('');
      setStatus('Pesan terkirim, terima kasih!');
      await queryClient.invalidateQueries({ queryKey: ['contactMessages'] });
    } catch (err) {
      setStatus('Gagal mengirim: ' + err.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    comments,
    name, setName,
    email, setEmail,
    message, setMessage,
    status,
    loading,
    handleSubmit,
  };
}