import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookmarkItem {
  id: number;
  user: string;
  tags: string;
  webformatURL: string;
}

interface BookmarkState {
  items: BookmarkItem[];
}

const initialState: BookmarkState = {
  items: [],
};

const bookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    addBookmark: (state, action: PayloadAction<BookmarkItem>) => {
      state.items.push(action.payload);
    },
    removeBookmark: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
