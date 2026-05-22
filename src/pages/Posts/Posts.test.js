import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Posts from './Posts';
import { getPosts } from '../../store/thunks/postsThunk.js';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

jest.mock('../../store/thunks/postsThunk.js', () => ({
    getPosts: jest.fn(),
}));

function renderPosts() {
    return render(
        <MemoryRouter>
            <Posts />
        </MemoryRouter>
    );
}

describe('Posts component', () => {
    const dispatchMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();

        useDispatch.mockReturnValue(dispatchMock);

        getPosts.mockReturnValue({
            type: 'posts/getPosts',
        });
    });

    test('dispatches getPosts when component renders', () => {
        useSelector.mockReturnValue({
            items: [],
            loading: false,
            error: null,
        });

        renderPosts();

        expect(getPosts).toHaveBeenCalledTimes(1);

        expect(dispatchMock).toHaveBeenCalledWith({
            type: 'posts/getPosts',
        });
    });

    test('shows loading message when loading is true', () => {
        useSelector.mockReturnValue({
            items: [],
            loading: true,
            error: null,
        });

        renderPosts();

        expect(screen.getByText('Posts loading...')).toBeInTheDocument();
    });

    test('shows error message when error exists', () => {
        useSelector.mockReturnValue({
            items: [],
            loading: false,
            error: 'Failed to load posts',
        });

        renderPosts();

        expect(screen.getByText('Error: Failed to load posts')).toBeInTheDocument();
    });

    test('renders posts list when posts exist', () => {
        useSelector.mockReturnValue({
            items: [
                {
                    id: 1,
                    title: 'First post',
                    body: 'First post body',
                },
                {
                    id: 2,
                    title: 'Second post',
                    body: 'Second post body',
                },
            ],
            loading: false,
            error: null,
        });

        renderPosts();

        expect(screen.getByRole('heading', { name: 'Posts' })).toBeInTheDocument();

        expect(screen.getByText('First post')).toBeInTheDocument();
        expect(screen.getByText('First post body')).toBeInTheDocument();

        expect(screen.getByText('Second post')).toBeInTheDocument();
        expect(screen.getByText('Second post body')).toBeInTheDocument();
    });

    test('renders correct links for every post', () => {
        useSelector.mockReturnValue({
            items: [
                {
                    id: 1,
                    title: 'First post',
                    body: 'First post body',
                },
                {
                    id: 2,
                    title: 'Second post',
                    body: 'Second post body',
                },
            ],
            loading: false,
            error: null,
        });

        renderPosts();

        const links = screen.getAllByRole('link', { name: 'View details' });

        expect(links[0]).toHaveAttribute('href', '/posts/1');
        expect(links[1]).toHaveAttribute('href', '/posts/2');
    });
});