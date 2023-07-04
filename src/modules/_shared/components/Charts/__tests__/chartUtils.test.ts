import { getMonth, getMonthFromDate } from '../chartUtils';
const lineData = {
      "2022-07-31": 1,
      "2022-08-01": 3,
      "2022-08-02": 3,
  };

describe('getMonth', () => {
	test('should return month shortcode from date input', () => {
		const monthShortCode = getMonth(new Date());
		expect(monthShortCode).toBe('Jul');
	});

    test('should return `undefined` when no input is passed', () => {
		const monthShortCode = getMonth();
		expect(monthShortCode).toBe(undefined);
	});

    test('should return empty when a random number is passed', () => {
		const monthShortCode = getMonth(99);
		expect(monthShortCode).toBe('');
	});
});

describe('getMonthFromDate', () => {
	test('should return string array with date and month shortcode from date input', () => {
		const monthShortCode = getMonthFromDate(lineData);
		expect(monthShortCode).toStrictEqual([
            "31 Jul",
            "1 Aug",
            "2 Aug",
          ]);
	});

    test('should return empty array when no input is passed;', () => {
		const monthShortCode = getMonthFromDate();
		expect(monthShortCode).toStrictEqual([]);
        expect(monthShortCode).toHaveLength(0);
        expect(monthShortCode).toBeTruthy
	});

    test('should return empty when a random number is passed', () => {
		const monthShortCode = getMonthFromDate(99);
        expect(monthShortCode).toStrictEqual([]);
        expect(monthShortCode).toHaveLength(0);
        expect(monthShortCode).toBeTruthy
	});
});