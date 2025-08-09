import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../src/components/Dashboard';

jest.mock('../src/api/api');

describe('Dashboard', () => {
    it('renders dashboard title', () => {
        render(<Dashboard />);
        expect(screen.getByText('GTT Dashboard')).toBeInTheDocument();
    });
});