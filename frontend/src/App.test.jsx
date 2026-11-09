import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import App from './App.jsx';

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe('App', () => {
  it('shows the API and PostgreSQL status', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ status: 'UP', database: 'UP' }),
    }));

    render(<App />);

    expect(await screen.findByText('API UP · PostgreSQL UP')).toBeInTheDocument();
  });
});
