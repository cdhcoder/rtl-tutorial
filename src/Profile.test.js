import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';

describe('<Profile />', () => {
    it('matches snapshot', () => {
        const utils = render(<Profile username="cdhcoder" name="cdh" />);
        expect(utils.container).toMatchSnapshot();
    });

    it('shows the props correctly', () => {
        const utils = render(<Profile username="cdhcoder" name="cdh" />);
        utils.getByText('cdhcoder'); // cdhcoder라는 text를 가진 element 확인
        utils.getByText('(cdh)');
    });
});