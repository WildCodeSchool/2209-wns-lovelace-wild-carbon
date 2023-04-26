/// <reference types="@types/jest" />;

import Spending from './Spending.entity';
import Category from '../Category/Category.entity';

describe('Spending', () => {
  describe('get a full spending', () => {
    it('returns a full spending with date, unit and weigh in brackets', async () => {
      const dateExemple = new Date('2022-06-12');
      const category = new Category('Covoiturage');
      const spending = new Spending(
        'Voyage Paris - Amsterdam',
        dateExemple,
        1000,
        200,
        category
      );

      expect(spending.getDisplaySpending()).toEqual(
        '[12/06/2022 - 200km - 1000kg/CO2] Voyage Paris - Amsterdam - Covoiturage'
      );
    });
  });
});
