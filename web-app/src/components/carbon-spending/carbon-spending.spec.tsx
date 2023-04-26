/* eslint-disable testing-library/no-wait-for-multiple-assertions */

import React from 'react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import * as toastify from 'react-toastify';
import CarbonSpending, { CREATE_SPENDING } from './CarbonSpending';
import { CreateSpendingMutation } from '../../gql/graphql';

jest.mock('react-toastify');

const renderCreateSpending = (
  mocks: MockedResponse<CreateSpendingMutation>[] = []
) => {
  return render(
    <MockedProvider mocks={mocks}>
      <div data-testid="wrapper">
        <CarbonSpending />
      </div>
    </MockedProvider>,
    { wrapper: BrowserRouter }
  );
};

// const originalDate = '02/05/2022';
// const parts = originalDate.split('/');
// const formattedDate = `${parts[2]}-${parts[0]}-${parts[1]}`;

const fillFormAndSubmit = () => {
  fireEvent.change(screen.getByTestId('libelle'), {
    target: { value: 'Test voyage' },
  });
  fireEvent.change(screen.getByTestId('datePicker'), {
    target: { value: '05/02/2022' },
  });
  // fireEvent.change(screen.getByRole('textbox', { name: 'Unit' }), {
  //   target: { value: 10 },
  // });
  // fireEvent.change(screen.getByRole('textbox', { name: 'Catégories' }), {
  //   target: { value: 'Avion' },
  // });
  fireEvent.submit(screen.getByRole('form'));
};

describe('CreateSpending', () => {
  it('renders correctly', () => {
    renderCreateSpending();
    expect(screen.getByTestId('wrapper')).toMatchInlineSnapshot(`
<div
  data-testid="wrapper"
>
  <form
    class="flex flex-col items-center"
  >
    <div
      class="flex flex-col w-3/4 mt-[30px]"
    >
      <div
        class="flex flex-col text-[#609f39] mb-5 "
      >
        <label
          class="font-medium text-[18px]"
        >
          Libéllé
          <input
            class="bg-[#c3e9ac] rounded border-transparent mt-1"
            data-testid="libelle"
            name="name"
            required=""
            type="text"
            value=""
          />
           
        </label>
      </div>
      <div
        class="flex flex-col text-[#609f39]"
      >
        <label
          class="font-medium text-[18px]"
        >
          Date
          <input
            class="bg-[#c3e9ac] rounded border-transparent mt-1"
            data-testid="datePicker"
            name="date"
            required=""
            type="date"
            value=""
          />
        </label>
      </div>
    </div>
    <div
      class="w-9/12 flex flex-col mt-[30px]"
    >
      <h3
        class="flex flex-col text-[#609f39] mb-3 font-medium text-[18px]"
      >
        Catégories
      </h3>
      <div
        class="flex flex-row justify-center gap-[10px]"
      >
        <div
          data-testid="Categories"
        >
          <button
            class="bg-[#c3e9ac] rounded p-0 w-[51px] h-[51px] cursor-pointer flex justify-center items-center border-transparent hover:bg-[#609f39]"
            value="0"
          >
            <svg
              class="icon"
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 16v-2l-8.5-5V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1 4 1v-1.5L13.5 19v-5.5L22 16z"
              />
              <path
                d="M0 0h24v24H0V0z"
                fill="none"
              />
            </svg>
          </button>
        </div>
        <div
          data-testid="Categories"
        >
          <button
            class="bg-[#c3e9ac] rounded p-0 w-[51px] h-[51px] cursor-pointer flex justify-center items-center border-transparent hover:bg-[#609f39]"
            value="0"
          >
            <svg
              class="icon"
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M959 413.4L935.3 372a8 8 0 0 0-10.9-2.9l-50.7 29.6-78.3-216.2a63.9 63.9 0 0 0-60.9-44.4H301.2c-34.7 0-65.5 22.4-76.2 55.5l-74.6 205.2-50.8-29.6a8 8 0 0 0-10.9 2.9L65 413.4c-2.2 3.8-.9 8.6 2.9 10.8l60.4 35.2-14.5 40c-1.2 3.2-1.8 6.6-1.8 10v348.2c0 15.7 11.8 28.4 26.3 28.4h67.6c12.3 0 23-9.3 25.6-22.3l7.7-37.7h545.6l7.7 37.7c2.7 13 13.3 22.3 25.6 22.3h67.6c14.5 0 26.3-12.7 26.3-28.4V509.4c0-3.4-.6-6.8-1.8-10l-14.5-40 60.3-35.2a8 8 0 0 0 3-10.8zM264 621c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm388 75c0 4.4-3.6 8-8 8H380c-4.4 0-8-3.6-8-8v-84c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v36h168v-36c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v84zm108-75c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zM220 418l72.7-199.9.5-1.3.4-1.3c1.1-3.3 4.1-5.5 7.6-5.5h427.6l75.4 208H220z"
              />
            </svg>
          </button>
        </div>
        <div
          data-testid="Categories"
        >
          <button
            class="bg-[#c3e9ac] rounded p-0 w-[51px] h-[51px] cursor-pointer flex justify-center items-center border-transparent hover:bg-[#609f39]"
            value="0"
          >
            <svg
              class="icon"
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0h24v24H0z"
                fill="none"
              />
              <path
                d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zM4 14v2h2c0-1.11-.89-2-2-2zm0-3v1.43c1.97 0 3.57 1.6 3.57 3.57H9c0-2.76-2.24-5-5-5zm0-3v1.45c3.61 0 6.55 2.93 6.55 6.55H12c0-4.42-3.59-8-8-8z"
              />
            </svg>
          </button>
        </div>
        <div
          data-testid="Categories"
        >
          <button
            class="bg-[#c3e9ac] rounded p-0 w-[51px] h-[51px] cursor-pointer flex justify-center items-center border-transparent hover:bg-[#609f39]"
            value="0"
          >
            <svg
              class="icon"
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0h24v24H0V0z"
                fill="none"
              />
              <path
                d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
              />
            </svg>
          </button>
        </div>
        <div
          data-testid="Categories"
        >
          <button
            class="bg-[#c3e9ac] rounded p-0 w-[51px] h-[51px] cursor-pointer flex justify-center items-center border-transparent hover:bg-[#609f39]"
            value="0"
          >
            <svg
              class="icon"
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M80 352c0 19.198 13.864 24.531 26.667 36.271v38.396c0 11.729 9.599 21.334 21.333 21.334h21.333c11.734 0 21.334-9.604 21.334-21.334v-21.333h170.666v21.333c0 11.729 9.604 21.334 21.334 21.334H384c11.729 0 21.333-9.604 21.333-21.334v-38.396C418.136 376.531 432 370.136 432 352V148.334C432 73.667 349.864 64 256 64S80 73.667 80 148.334V352zm80 15.989c-18.136 0-32-13.864-32-32 0-18.135 13.864-32 32-32s32 13.865 32 32c0 18.136-13.864 32-32 32zm192 0c-18.136 0-32-13.864-32-32 0-18.135 13.864-32 32-32s32 13.865 32 32c0 18.136-13.864 32-32 32zm32-122.656H128V138.667h256v106.666z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <button
      class="mt-[30px] text-white self-center w-3/4 h-12 bg-[#484b8a] rounded font-semibold text-[20px] leading-[24px]"
      data-testid="submitForm"
    >
      Ajouter ma dépense
    </button>
  </form>
</div>
`);
  });
});

describe('when form submitted with fields filled-in', () => {
  const mockCreateSpendingSuccess: MockedResponse<CreateSpendingMutation> = {
    request: {
      query: CREATE_SPENDING,
      variables: {
        title: 'Test Spending',
        date: new Date(),
        unit: 10,
        weight: 3,
        categoryName: 'Avion',
      },
    },
    result: {
      data: {
        createSpending: {
          title: 'Test Spending',
          date: new Date(),
          unit: 10,
          weight: 3,
          category: {
            categoryName: 'Avion',
          },
        },
      },
    },
  };

  describe('when server responds with success', () => {
    it('shows toast with success message', async () => {
      renderCreateSpending([mockCreateSpendingSuccess]);
      fillFormAndSubmit();

      await waitFor(() => {
        expect(toastify.toast.success).toHaveBeenCalledTimes(1);
      });
      expect(toastify.toast.success).toHaveBeenCalledWith(
        'Dépense créé avec succès.'
      );
    });
  });
});

describe('when server responds with error', () => {
  const ERROR_MESSAGE = 'ERROR_MESSAGE';
  const mockCreateSpendingError: MockedResponse<CreateSpendingMutation> = {
    request: {
      query: CREATE_SPENDING,
      variables: {
        title: 'Test Spending',
        date: new Date(),
        unit: 10,
        weight: 3,
        categoryName: 'Avion',
      },
    },
    error: new Error(ERROR_MESSAGE),
  };

  it('shows toast with error message', async () => {
    renderCreateSpending([mockCreateSpendingError]);
    fillFormAndSubmit();

    await waitFor(() => {
      expect(toastify.toast.error).toHaveBeenCalledTimes(1);
    });
    expect(toastify.toast.error).toHaveBeenCalledWith(ERROR_MESSAGE);
  });
});
