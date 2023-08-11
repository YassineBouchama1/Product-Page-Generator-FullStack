import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FormBuy from './FormBuy';

// Mock the useNotifaction and OrdersApi modules
jest.mock('@/hooks/useNotifaction', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('@/lib/OrdersApi', () => ({
  __esModule: true,
  default: {
    create: jest.fn(),
  },
}));

describe('FormBuy component', () => {
  it('renders form inputs', () => {
    render(<FormBuy />);
    expect(screen.getByPlaceholderText('الاسم الكامل')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('رقم الهاتف')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('العنوان والمدينة')).toBeInTheDocument();
  });

  it('displays notification when form fields are not valid', () => {
    const notifyMock = require('@/hooks/useNotifaction').default;
    render(<FormBuy />);
    
    const submitButton = screen.getByText('Buy Now');
    fireEvent.click(submitButton);

    expect(notifyMock).toHaveBeenCalledWith('name is Required', 'success');
  });

  it('calls OrdersApi.create and displays success notification on valid form submission', async () => {
    const notifyMock = require('@/hooks/useNotifaction').default;
    const createMock = require('@/lib/OrdersApi').default.create;
    createMock.mockResolvedValueOnce('some success response');
    render(<FormBuy />);

    const nameInput = screen.getByPlaceholderText('الاسم الكامل');
    const phoneInput = screen.getByPlaceholderText('رقم الهاتف');
    const addressInput = screen.getByPlaceholderText('العنوان والمدينة');
    const submitButton = screen.getByText('Buy Now');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(addressInput, { target: { value: 'Some Address' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(createMock).toHaveBeenCalledWith({
        cartItems: [
          { productID: '64d6679edce9763910a16de7', quantity: 3, price: 323 },
        ],
        shippingAddress: {
          name: 'John Doe',
          phone: '1234567890',
          address: 'Some Address',
        },
        totalOrderPrice: 5474,
        user: '64d666aedce9763910a16da9',
      });
      expect(notifyMock).toHaveBeenCalledWith('adon', 'success');
    });
  });
});
