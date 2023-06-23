import { useState } from 'react';
import { TRANSPORTS_PARAMS } from './utils';
import { gql, useMutation } from '@apollo/client';
import {
  CreateSpendingMutation,
  CreateSpendingMutationVariables,
} from '../../gql/graphql';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getErrorMessage from '../../utils';
import CarbonValue from './slider';

const CREATE_SPENDING = gql`
  mutation CreateSpending(
    $title: String!
    $date: DateTime!
    $unit: Float!
    $weight: Float!
    $categoryName: String!
  ) {
    createSpending(
      title: $title
      date: $date
      unit: $unit
      weight: $weight
      categoryName: $categoryName
    ) {
      title
      date
      unit
      weight
      category {
        categoryName
      }
    }
  }
`;

function CarbonSpending() {
  const [selectedIcon, setSelectedIcon] = useState<number>(0);
  const [unit, setUnit] = useState<number>(0);
  const [date, setDate] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [categoryName, setCategoryName] = useState<string>('');

  const [createSpending] = useMutation<
    CreateSpendingMutation,
    CreateSpendingMutationVariables
  >(CREATE_SPENDING);

  const handleSelectCategory = (id: number, category: string) => {
    setSelectedIcon(id);
    setCategoryName(category);
    setUnit(0);
  };

  const submit = async () => {
    try {
      await createSpending({
        variables: {
          title,
          date: new Date(date),
          unit,
          weight,
          categoryName,
        },
      });
      toast.success(`Votre dépense "${title}" a été créé avec succès.`);
      setTitle('');
      setDate('');
      setUnit(0);
      setSelectedIcon(0);
      setCategoryName('');
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  const weightCalculation =
    selectedIcon === 1
      ? unit * 0.3
      : selectedIcon === 2
      ? unit * 0.1482
      : selectedIcon === 3
      ? unit * 0.014
      : selectedIcon === 4
      ? unit * 0.05
      : selectedIcon === 5
      ? unit * 0.185
      : 0;

  const weight = parseInt(weightCalculation.toFixed(0));

  return (
    <>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await submit();
        }}
        className="flex flex-col items-center"
      >
        <div className="flex flex-col w-3/4 mt-[30px]">
          <label>
            <div className="flex flex-col text-[#609f39] mb-5 ">
              <label className="font-medium text-[18px]">Libéllé</label>
              <input
                className="bg-[#c3e9ac] rounded border-transparent mt-1"
                type="text"
                name="name"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                required
              />
            </div>
            <div className="flex flex-col text-[#609f39]">
              <label className="font-medium text-[18px]">Date</label>
              <input
                className="bg-[#c3e9ac] rounded border-transparent mt-1"
                type="date"
                name="date"
                value={date}
                onChange={(event) => {
                  setDate(event.target.value);
                }}
                required
              />
            </div>
          </label>
        </div>
        <div className="w-9/12 flex flex-col mt-[30px]">
          <h3 className="flex flex-col text-[#609f39] mb-3 font-medium text-[18px]">
            Catégories:
          </h3>
          <div className="flex flex-row justify-center gap-[10px]">
            {TRANSPORTS_PARAMS.map((el) => {
              return (
                <div>
                  <button
                    className="bg-[#c3e9ac] rounded p-0 w-[51px] h-[51px] cursor-pointer flex justify-center items-center border-transparent hover:bg-[#609f39]"
                    onClick={(event) => {
                      event.preventDefault();
                      if (selectedIcon === el.id) {
                        setSelectedIcon(0);
                      } else {
                        handleSelectCategory(el.id, el.category);
                      }
                    }}
                    key={el.id}
                    value={selectedIcon}
                  >
                    {el.icon}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        {selectedIcon !== 0 ? (
          <div className="flex flex-col w-9/12 mt-[30px]">
            {TRANSPORTS_PARAMS.filter((item) => item.id === selectedIcon).map(
              (el) => {
                return (
                  <CarbonValue
                    value={unit}
                    setValue={setUnit}
                    min={el.min}
                    max={el.max}
                    result={weight}
                    idicon={selectedIcon}
                  />
                );
              }
            )}
          </div>
        ) : (
          ''
        )}

        <button className="mt-[30px] text-white self-center w-3/4 h-12 bg-[#484b8a] rounded font-semibold text-[20px] leading-[24px]">
          Ajouter ma dépense
        </button>
      </form>
    </>
  );
}

export default CarbonSpending;
