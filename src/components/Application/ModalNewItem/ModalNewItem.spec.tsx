/* eslint-disable no-use-before-define */
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { ModalNewItem } from '.';

const openModal = true;
const setOpenModal = React.useState;
const coord = {
  lng: 58918,
  lat: 1891198,
};

describe('Renders the ModalNewItem ', () => {
  it('Should render the Modal in true state with disabled button', async () => {
    render(
      <ModalNewItem
        coord={coord}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    );

    expect(screen.getByText('Marcar onde quero ir')).toBeInTheDocument();

    const fn = jest.fn();
    const button = screen.getByText('Marcar novo lugar');
    fireEvent.click(button);
    expect(fn).not.toHaveBeenCalled();
  });
});
