import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ConversionForm from './ConversionForm';

describe('ConversionForm', () => {

  it ('renders form Component', () => {
    render(<ConversionForm />);
    const header = screen.getByText('Number Converter');
    expect(header).toBeInTheDocument();
  });

  describe('Arabic - Roman mode', () => {
    it ('renders form Component', () => {
      render(<ConversionForm />);
      const header = screen.getByText('Please enter Arabic number format');
      expect(header).toBeInTheDocument();
    });

    it ('performs conversion', () => {
      const utils = render(<ConversionForm />);
      const numberInput = utils.getByLabelText('number-input');
      const resultInput = utils.getByLabelText('result-input');

      fireEvent.change(numberInput, { target: { value: '1999' } })

      expect(resultInput.value).toBe('MCMXCIX');
    });
  });

  describe('Roman - Arabic mode', () => {

    it('renders form Component', async () => {
      const screen = render(<ConversionForm />);
      const changeModeButton = screen.getByLabelText('change-mode-button');

      fireEvent.click(changeModeButton);

      const header = screen.getByText('Please enter Roman number format');
      expect(header).toBeInTheDocument();
    });

    it('performs conversion', () => {
      const utils = render(<ConversionForm />);
      const numberInput = utils.getByLabelText('number-input');
      const resultInput = utils.getByLabelText('result-input');
      const changeModeButton = utils.getByLabelText('change-mode-button');

      fireEvent.click(changeModeButton);
      fireEvent.change(numberInput, { target: { value: 'MCMXCIX' } })

      expect(resultInput.value).toBe('1999');
    });

  })

})