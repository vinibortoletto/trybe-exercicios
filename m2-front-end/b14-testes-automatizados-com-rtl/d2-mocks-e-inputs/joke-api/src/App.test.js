import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

afterEach(() => jest.clearAllMocks());

const JOKE_MOCK = {
  id: '7h3oGtrOfxc',
  joke: 'Whiteboards ... are remarkable.',
  status: 200,
}

const NEW_JOKE_MOCK = {
  id: 'xXSv492wPmb',
  joke: 'What is red and smells like blue paint? Red paint!',
  status: 200,
}


it ('1. fetches a joke', async () => {
  global.fetch = jest.fn(
    () => Promise.resolve({ json: () => Promise.resolve(JOKE_MOCK) })
  )

  render(<App />)
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.')
  expect(renderedJoke).toBeInTheDocument()
  expect(global.fetch).toBeCalledTimes(1)
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
})

it('2. fetches a new joke', async () => {
  global.fetch = jest.fn()
    .mockResolvedValueOnce({json: () => Promise.resolve(JOKE_MOCK)})
    .mockResolvedValueOnce({json: () => Promise.resolve(NEW_JOKE_MOCK)})
  ;

  render(<App />);
  
  const jokeElement = await screen.findByText(JOKE_MOCK.joke);
  expect(jokeElement).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);

  const addButton = screen.getByRole('button', { name: 'New joke'});
  expect(addButton).toBeInTheDocument();
  userEvent.click(addButton);
  
  const newJokeElement = await screen.findByText(NEW_JOKE_MOCK.joke);
  expect(newJokeElement).toBeInTheDocument();
  expect(screen.queryByText(JOKE_MOCK.joke)).not.toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(2);
});