import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test('should render ExpensesSummary component correctly with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary component correctly with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={21} expensesTotal={332435} />)
  expect(wrapper).toMatchSnapshot()
})
